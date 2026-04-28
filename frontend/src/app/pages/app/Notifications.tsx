import { Bell, Sparkles, Calendar, Star, Coins } from 'lucide-react';
import { motion } from 'motion/react';
import {Button} from '../../components/ui/Button';
import EmptyState from '../../components/EmptyState';
import { mockNotifications } from '../../data/mockData';

export default function Notifications() {
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'match':
        return <Sparkles className="w-5 h-5" />;
      case 'session':
        return <Calendar className="w-5 h-5" />;
      case 'review':
        return <Star className="w-5 h-5" />;
      case 'credit':
        return <Coins className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'match':
        return 'bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)]';
      case 'session':
        return 'bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)]';
      case 'review':
        return 'bg-[var(--yellow-100)] text-[var(--yellow-600)]';
      case 'credit':
        return 'bg-[var(--green-100)] text-[var(--green-600)]';
      default:
        return 'bg-[var(--gray-100)] text-[var(--text-primary)]';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">Notifications</h1>
          <p className="text-[var(--text-secondary)]">
            {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
          </p>
        </div>
        {mockNotifications.length > 0 && (
          <Button variant="ghost">Mark all as read</Button>
        )}
      </motion.div>

      {mockNotifications.length > 0 ? (
        <div className="space-y-3">
          {mockNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`bg-[var(--bg-primary)] rounded-2xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] p-6 cursor-pointer transition-shadow ${
                !notification.read ? 'border-2 border-[var(--notification-unread-border)] !bg-[var(--notification-unread-bg)]' : ''
              }`}
            >
              <div className="flex gap-4">
                <motion.div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColor(notification.type)}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {getIcon(notification.type)}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-[var(--text-primary)]">{notification.title}</h3>
                    {!notification.read && (
                      <motion.span
                        className="w-2 h-2 bg-[var(--brand-purple-600)] rounded-full flex-shrink-0 mt-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <p className="text-[var(--text-secondary)] mb-2">{notification.message}</p>
                  <p className="text-sm text-[var(--text-tertiary)]">{notification.timestamp}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Bell className="w-full h-full" />}
          title="No notifications yet"
          description="We'll notify you when you get matches, session bookings, and reviews"
        />
      )}
    </div>
  );
}
