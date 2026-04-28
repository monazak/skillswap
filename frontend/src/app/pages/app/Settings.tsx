import { useState } from 'react';
import { User, Bell, Lock, CreditCard, LogOut } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Avatar from '../../components/ui/Avatar';
import SkillTag from '../../components/ui/SkillTag';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Lock },
    { id: 'billing', name: 'Billing', icon: CreditCard },
  ];

  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    bio: 'Passionate web designer with 5 years of experience. Love teaching and learning new skills!',
    skillsOffered: ['Web Design', 'UI/UX', 'Figma'],
    skillsWanted: ['Photography', 'Spanish', 'Cooking'],
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">Settings</h1>
        <p className="text-[var(--text-secondary)]">Manage your account and preferences</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left ${
                      activeTab === tab.id
                        ? 'bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)]'
                        : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                );
              })}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--red-600)] hover:bg-[var(--error-bg)] transition-colors text-left">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Log Out</span>
              </button>
            </nav>
          </Card>
        </div>

        <div className="md:col-span-3">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <Card>
                <h2 className="text-xl font-bold mb-6 text-[var(--text-primary)]">Profile Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                      Profile Photo
                    </label>
                    <div className="flex items-center gap-4">
                      <Avatar src="" alt={profileData.name} size="xl" />
                      <div>
                        <Button variant="secondary" size="sm">
                          Change Photo
                        </Button>
                        <p className="text-sm text-[var(--text-tertiary)] mt-2">
                          JPG, PNG or GIF. Max size 2MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <Input
                    label="Full Name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  />

                  <Input
                    label="Email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Bio
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--brand-purple-500)] focus:outline-none transition-colors resize-none"
                      rows={4}
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Skills I Offer</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {profileData.skillsOffered.map((skill) => (
                    <SkillTag key={skill} skill={skill} variant="offer" />
                  ))}
                </div>
                <Button variant="secondary" size="sm">
                  Edit Skills
                </Button>
              </Card>

              <Card>
                <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Skills I Want</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {profileData.skillsWanted.map((skill) => (
                    <SkillTag key={skill} skill={skill} variant="want" />
                  ))}
                </div>
                <Button variant="secondary" size="sm">
                  Edit Skills
                </Button>
              </Card>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <Card>
              <h2 className="text-xl font-bold mb-6 text-[var(--text-primary)]">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  { id: 'matches', label: 'New Matches', description: 'Get notified when we find a good match' },
                  { id: 'sessions', label: 'Session Reminders', description: 'Reminders before your sessions start' },
                  { id: 'reviews', label: 'Reviews', description: 'When someone leaves you a review' },
                  { id: 'messages', label: 'Messages', description: 'New messages from other users' },
                  { id: 'credits', label: 'Credit Updates', description: 'When you earn or spend credits' },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-[var(--border-primary)] last:border-0">
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">{item.label}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-[var(--bg-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--brand-purple-200)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[var(--border-secondary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--brand-purple-600)]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card>
              <h2 className="text-xl font-bold mb-6 text-[var(--text-primary)]">Security Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4 text-[var(--text-primary)]">Change Password</h3>
                  <div className="space-y-4">
                    <Input label="Current Password" type="password" />
                    <Input label="New Password" type="password" />
                    <Input label="Confirm New Password" type="password" />
                  </div>
                  <Button className="mt-4">Update Password</Button>
                </div>

                <div className="pt-6 border-t border-[var(--border-primary)]">
                  <h3 className="font-semibold mb-2 text-[var(--text-primary)]">Two-Factor Authentication</h3>
                  <p className="text-[var(--text-secondary)] mb-4">Add an extra layer of security to your account</p>
                  <Button variant="secondary">Enable 2FA</Button>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'billing' && (
            <Card>
              <h2 className="text-xl font-bold mb-6 text-[var(--text-primary)]">TimeCredits</h2>
              <div className="bg-[var(--bg-secondary)] rounded-2xl p-8 mb-6 border-2 border-[var(--border-primary)]">
                <div className="text-center">
                  <p className="text-[var(--text-secondary)] mb-2">Current Balance</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent mb-4">
                    12
                  </p>
                  <p className="text-[var(--text-secondary)]">TimeCredits</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-[var(--text-primary)]">Recent Activity</h3>
                {[
                  { type: 'earned', skill: 'Web Design Session', credits: '+2', date: '2 days ago' },
                  { type: 'spent', skill: 'Spanish Lesson', credits: '-1', date: '3 days ago' },
                  { type: 'earned', skill: 'UI/UX Session', credits: '+1', date: '1 week ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-[var(--border-primary)]">
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">{activity.skill}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{activity.date}</p>
                    </div>
                    <span className={`font-semibold ${activity.type === 'earned' ? 'text-[var(--green-600)]' : 'text-[var(--red-600)]'}`}>
                      {activity.credits}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
