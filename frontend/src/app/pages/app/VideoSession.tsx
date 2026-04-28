import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Mic, MicOff, Video, VideoOff, PhoneOff, Monitor, Clock } from 'lucide-react';
import Button from '../../components/ui/Button';
import Avatar from '../../components/ui/Avatar';
import { mockSessions } from '../../data/mockData';

export default function VideoSession() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const session = mockSessions.find((s) => s.id === sessionId) || mockSessions[0];

  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [showEndConfirm, setShowEndConfirm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndSession = () => {
    navigate('/app');
  };

  return (
    <div className="fixed inset-0 bg-gray-900 z-50">
      <div className="h-full flex flex-col">
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <Avatar src={session.with.avatar} alt={session.with.name} size="xl" />
              <p className="text-white text-2xl font-semibold mt-4">{session.with.name}</p>
              <p className="text-gray-400 mt-2">{session.skill}</p>
            </div>
          </div>

          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white font-mono">{formatTime(elapsed)}</span>
            <span className="text-gray-400">/ {session.duration}:00:00</span>
          </div>

          <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl px-4 py-2">
            <span className="text-white font-semibold">Recording</span>
          </div>

          <div className="absolute bottom-6 right-6 w-64 h-48 bg-gray-800 rounded-2xl border-2 border-gray-700 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <Avatar src="" alt="You" size="lg" />
            </div>
            <div className="absolute bottom-3 left-3 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
              You
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 border-t border-gray-700">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar src={session.with.avatar} alt={session.with.name} size="md" />
              <div>
                <p className="text-white font-semibold">{session.with.name}</p>
                <p className="text-gray-400 text-sm">{session.skill}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setMicOn(!micOn)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                  micOn
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {micOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
              </button>

              <button
                onClick={() => setVideoOn(!videoOn)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                  videoOn
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {videoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
              </button>

              <button className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center transition-colors">
                <Monitor className="w-6 h-6" />
              </button>

              <button
                onClick={() => setShowEndConfirm(true)}
                className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
              >
                <PhoneOff className="w-6 h-6" />
              </button>
            </div>

            <div className="w-32 text-right">
              <div className="text-white font-mono text-lg">{formatTime(elapsed)}</div>
              <div className="text-gray-400 text-sm">Session Time</div>
            </div>
          </div>
        </div>
      </div>

      {showEndConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-10">
          <div className="bg-[var(--bg-primary)] rounded-2xl p-8 max-w-md w-full mx-4 shadow-[var(--shadow-2xl)]">
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">End Session?</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Are you sure you want to end this session? You'll be asked to leave a review.
            </p>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                fullWidth
                onClick={() => setShowEndConfirm(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" fullWidth onClick={handleEndSession}>
                End Session
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
