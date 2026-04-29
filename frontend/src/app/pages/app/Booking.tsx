import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Calendar, Clock, Coins, Check } from 'lucide-react';
import {Avatar} from '../../components/ui/Avatar';
import {Button} from '../../components/ui/Button';
import {Card} from '../../components/ui/Card';
import SkillTag from '../../components/ui/SkillTag';
import { mockUsers } from '../../data/mockData';

export default function Booking() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = mockUsers.find((u) => u.id === userId) || mockUsers[0];

  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const availableDates = [
    '2026-04-25',
    '2026-04-26',
    '2026-04-27',
    '2026-04-28',
    '2026-04-29',
  ];

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00',
  ];

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      navigate('/app');
    }, 2000);
  };

  if (confirmed) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center py-12">
          <div className="w-20 h-20 rounded-full bg-[var(--green-100)] flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-[var(--green-600)]" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Session Booked!</h2>
          <p className="text-[var(--text-secondary)] mb-6">
            Your session with {user.name} has been confirmed. You'll receive a reminder before the session starts.
          </p>
          <Button onClick={() => navigate('/app')}>
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">Book a Session</h1>
        <p className="text-[var(--text-secondary)]">Schedule your skill exchange with {user.name}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Select a Skill</h2>
            <div className="flex flex-wrap gap-2">
              {user.skillsOffered.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                    selectedSkill === skill
                      ? 'bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)] border-[var(--brand-purple-500)]'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border-primary)] hover:border-[var(--border-secondary)]'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Choose a Date</h2>
            <div className="grid grid-cols-5 gap-2">
              {availableDates.map((date) => {
                const dateObj = new Date(date);
                const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                const dayNum = dateObj.getDate();
                return (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedDate === date
                        ? 'bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)] border-[var(--brand-purple-500)]'
                        : 'bg-[var(--bg-primary)] border-[var(--border-primary)] hover:border-[var(--border-secondary)]'
                    }`}
                  >
                    <div className={`text-xs ${selectedDate === date ? '' : 'text-[var(--text-secondary)]'}`}>{dayName}</div>
                    <div className={`text-lg font-semibold ${selectedDate === date ? '' : 'text-[var(--text-primary)]'}`}>{dayNum}</div>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Choose a Time</h2>
            <div className="grid grid-cols-4 gap-2">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                    selectedTime === time
                      ? 'bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)] border-[var(--brand-purple-500)]'
                      : 'bg-[var(--bg-primary)] border-[var(--border-primary)] hover:border-[var(--border-secondary)] text-[var(--text-primary)]'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Session Duration</h2>
            <div className="flex gap-3">
              {[1, 2, 3].map((hours) => (
                <button
                  key={hours}
                  onClick={() => setDuration(hours)}
                  className={`flex-1 px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                    duration === hours
                      ? 'bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)] border-[var(--brand-purple-500)]'
                      : 'bg-[var(--bg-primary)] border-[var(--border-primary)] hover:border-[var(--border-secondary)] text-[var(--text-primary)]'
                  }`}
                >
                  {hours} hour{hours > 1 ? 's' : ''}
                </button>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="sticky top-8">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--border-primary)]">
              <Avatar src={user.avatar} alt={user.name} size="md" />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">{user.name}</p>
                <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--yellow-500)]">★</span>
                  <span>{user.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Date</p>
                  <p className="font-medium text-[var(--text-primary)]">
                    {selectedDate
                      ? new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
                      : 'Not selected'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Time</p>
                  <p className="font-medium text-[var(--text-primary)]">{selectedTime || 'Not selected'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--yellow-100)] text-[var(--yellow-600)] flex items-center justify-center">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Cost</p>
                  <p className="font-medium text-[var(--text-primary)]">{duration} TimeCredit{duration > 1 ? 's' : ''}</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] rounded-xl p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-[var(--text-secondary)]">Your Balance</span>
                <span className="font-semibold text-[var(--text-primary)]">12 Credits</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[var(--text-secondary)]">After Booking</span>
                <span className="font-semibold text-[var(--text-primary)]">{12 - duration} Credits</span>
              </div>
            </div>

            <Button
              fullWidth
              disabled={!selectedSkill || !selectedDate || !selectedTime}
              onClick={handleConfirm}
            >
              Confirm Booking
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
