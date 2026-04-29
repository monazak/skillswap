import { Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/Card';
import ThemeToggle from '../../components/ui/ThemeToggle';

import { useAuth } from '../../hooks/useAuth';

export default function Login() {
  const navigate = useNavigate();

  const { login, isAuthenticated, loading, error } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔁 Auto redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await login({
      email,
      password,
    });

    if (success) {
      navigate('/app');
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
            Welcome Back
          </h1>
          <p className="text-[var(--text-secondary)]">
            Log in to continue your learning journey
          </p>
        </div>

        {/* Form */}
        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Error */}
            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-[var(--text-secondary)]">
                  Remember me
                </span>
              </label>

              <a
                href="#"
                className="text-[var(--brand-purple-600)] hover:text-[var(--brand-purple-700)]"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border-primary)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[var(--bg-primary)] text-[var(--text-tertiary)]">
                  Or continue with
                </span>
              </div>
            </div>

            {/* OAuth buttons (still UI only) */}
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
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-[var(--brand-purple-600)] hover:text-[var(--brand-purple-700)] font-medium"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}