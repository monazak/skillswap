import { Outlet, Link, useLocation } from 'react-router';
import { Home, Compass, MessageCircle, Bell, Settings, Coins } from 'lucide-react';
import {Avatar} from '../components/ui/Avatar';
import {Badge} from '../components/ui/Badge';
import ThemeToggle from '../components/ui/ThemeToggle';

export default function AppLayout() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/app', icon: Home },
    { name: 'Explore', href: '/app/explore', icon: Compass },
    { name: 'Chat', href: '/app/chat', icon: MessageCircle },
    { name: 'Notifications', href: '/app/notifications', icon: Bell },
    { name: 'Settings', href: '/app/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/app') {
      return location.pathname === '/app';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] flex flex-col md:flex-row">
      <aside className="hidden md:flex w-64 bg-[var(--bg-primary)] border-r border-[var(--border-primary)] fixed h-screen flex-col">
        <div className="p-6 border-b border-[var(--border-primary)] flex items-center justify-between">
          <Link to="/app" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent">
              SkillSwap
            </span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="p-4 border-b border-[var(--border-primary)]">
          <Link to="/app/profile/me">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors">
              <Avatar src="" alt="Sarah Johnson" size="md" online />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate text-[var(--text-primary)]">Sarah Johnson</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Coins className="w-4 h-4 text-[var(--yellow-500)]" />
                  <span className="text-sm text-[var(--text-secondary)]">12 Credits</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      active
                        ? 'bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)]'
                        : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <header className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border-primary)] p-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <Link to="/app" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent">
              SkillSwap
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Coins className="w-4 h-4 text-[var(--yellow-500)]" />
            <span className="text-sm font-medium text-[var(--text-primary)]">12</span>
          </div>
        </div>
      </header>

      <main className="flex-1 md:ml-64 p-4 md:p-8 pb-20 md:pb-8">
        <Outlet />
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--bg-primary)] border-t border-[var(--border-primary)] z-40">
        <ul className="flex justify-around">
          {navigation.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <li key={item.name} className="flex-1">
                <Link
                  to={item.href}
                  className={`flex flex-col items-center gap-1 py-3 transition-colors ${
                    active ? 'text-[var(--brand-purple-700)]' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
