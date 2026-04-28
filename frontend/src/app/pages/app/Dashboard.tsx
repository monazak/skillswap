import { Link } from 'react-router';
import { Calendar, Clock, TrendingUp, Sparkles } from 'lucide-react';
import {Card} from '../../components/ui/Card';
import {Button} from '../../components/ui/Button';
import {Badge} from '../../components/ui/Badge';
import {Avatar} from '../../components/ui/Avatar';
import UserCard from '../../components/UserCard';
import { mockUsers, mockSessions } from '../../data/mockData';

export default function Dashboard() {
  const upcomingSessions = mockSessions.filter((s) => s.status === 'upcoming');
  const recommendations = mockUsers.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">Welcome back, Sarah!</h1>
        <p className="text-[var(--text-secondary)]">Here's what's happening with your skill exchanges</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-purple-100)] to-[var(--brand-purple-200)] text-[var(--brand-purple-700)] flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-[var(--text-secondary)]">Total Sessions</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">24</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue-100)] to-[var(--brand-blue-200)] text-[var(--brand-blue-700)] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-[var(--text-secondary)]">Hours Taught</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">16h</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--yellow-100)] to-[var(--yellow-100)] text-[var(--yellow-600)] flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-[var(--text-secondary)]">Hours Learned</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">8h</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Upcoming Sessions</h2>
            <Link to="/app/explore">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <Card key={session.id} hover>
                <div className="flex gap-4">
                  <Avatar src={session.with.avatar} alt={session.with.name} size="lg" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-[var(--text-primary)]">{session.skill}</h3>
                        <p className="text-[var(--text-secondary)]">with {session.with.name}</p>
                      </div>
                      <Badge variant="gradient" size="sm">
                        {session.duration}h
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{session.time}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Link to={`/app/session/${session.id}`}>
                        <Button size="sm">Join Session</Button>
                      </Link>
                      <Link to={`/app/chat/${session.id}`}>
                        <Button size="sm" variant="secondary">
                          Message
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {upcomingSessions.length === 0 && (
              <Card>
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-[var(--text-tertiary)] mx-auto mb-3" />
                  <p className="text-[var(--text-secondary)] mb-4">No upcoming sessions</p>
                  <Link to="/app/explore">
                    <Button>Find Matches</Button>
                  </Link>
                </div>
              </Card>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[var(--brand-purple-600)]" />
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Recommended Matches</h2>
          </div>

          <div className="space-y-4">
            {recommendations.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          <Link to="/app/explore">
            <Button variant="secondary" fullWidth className="mt-4">
              Explore All Matches
            </Button>
          </Link>
        </div>
      </div>

      <Card className="mt-8 bg-[var(--bg-secondary)] border-2 border-[var(--border-primary)]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] text-white flex items-center justify-center">
            💡
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1 text-[var(--text-primary)]">Complete your profile</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Add more skills and improve your bio to get better matches
            </p>
          </div>
          <Link to="/app/settings">
            <Button variant="secondary">Edit Profile</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
