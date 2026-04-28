import { Outlet, Link } from 'react-router';
import Button from '../components/ui/Button';
import ThemeToggle from '../components/ui/ThemeToggle';

export default function MarketingLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-secondary)]">
      <header className="bg-[var(--bg-primary)] shadow-[var(--shadow-sm)] sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent">
              SkillSwap
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--brand-purple-600)] transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-[var(--text-secondary)] hover:text-[var(--brand-purple-600)] transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-primary)] mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] flex items-center justify-center text-white font-bold">
                  S
                </div>
                <span className="font-bold text-lg text-[var(--text-primary)]">SkillSwap</span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm">
                Trade time, not money. Learn anything from anyone.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Product</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li>
                  <Link to="/how-it-works" className="hover:text-[var(--brand-purple-600)] transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[var(--brand-purple-600)] transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Company</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li>
                  <a href="#" className="hover:text-[var(--brand-purple-600)] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--brand-purple-600)] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Legal</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li>
                  <a href="#" className="hover:text-[var(--brand-purple-600)] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--brand-purple-600)] transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-primary)] mt-8 pt-8 text-center text-sm text-[var(--text-secondary)]">
            © 2026 SkillSwap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
