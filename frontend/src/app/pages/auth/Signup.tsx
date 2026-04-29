import { Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/Card';
import ThemeToggle from '../../components/ui/ThemeToggle';

import { useAuth } from '../../hooks/useAuth';

export default function Signup() {
  const navigate = useNavigate();

  const { signup, isAuthenticated, loading, error } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [localError, setLocalError] = useState<string | null>(null);

  // 🔁 redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLocalError(null);

    // ⚠️ validation
    if (formData.password !== formData.confirmPassword) {
      setLocalError("Passwords don't match");
      return;
    }

    const success = await signup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (success) {
      navigate('/onboarding');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--brand-purple-50)] via-[var(--bg-primary)] to-[var(--brand-blue-50)] flex items-center justify-center p-4">

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] flex items-center justify-center text-white font-bold text-2xl">
              S
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent">
              SkillSwap
            </span>
          </Link>

          <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">
            Start Your Journey
          </h1>
          <p className="text-[var(--text-secondary)]">
            Join thousands exchanging skills every day
          </p>
        </div>

        {/* Form */}
        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Errors */}
            {(error || localError) && (
              <div className="text-red-500 text-sm">
                {localError || error}
              </div>
            )}

            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 rounded" required />
              <span className="text-[var(--text-secondary)]">
                I agree to the{' '}
                <a className="text-[var(--brand-purple-600)]">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a className="text-[var(--brand-purple-600)]">
                  Privacy Policy
                </a>
              </span>
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          {/* OAuth */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border-primary)]" />
              </div>

              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[var(--bg-primary)] text-[var(--text-tertiary)]">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="secondary" type="button">
                Google
              </Button>
              <Button variant="secondary" type="button">
                GitHub
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <p className="mt-6 text-center text-[var(--text-secondary)]">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-[var(--brand-purple-600)] font-medium"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}