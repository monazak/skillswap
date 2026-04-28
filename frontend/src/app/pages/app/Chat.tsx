import { useState } from 'react';
import { Send, Video, Calendar } from 'lucide-react';
import Avatar from '../../components/ui/Avatar';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import EmptyState from '../../components/EmptyState';
import { mockChats } from '../../data/mockData';

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: '1',
      from: 'them',
      text: 'Hey! Looking forward to our guitar session tomorrow!',
      timestamp: '2:30 PM',
    },
    {
      id: '2',
      from: 'me',
      text: "Me too! I've been practicing what you taught me last time.",
      timestamp: '2:32 PM',
    },
    {
      id: '3',
      from: 'them',
      text: 'That\'s great! We\'ll build on that and learn some new chords.',
      timestamp: '2:35 PM',
    },
    {
      id: '4',
      from: 'me',
      text: 'Perfect! Should I prepare anything specific?',
      timestamp: '2:40 PM',
    },
    {
      id: '5',
      from: 'them',
      text: 'Just make sure your guitar is tuned. See you tomorrow at 2 PM!',
      timestamp: '2:42 PM',
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-200px)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Messages</h1>
      </div>

      <div className="grid grid-cols-12 gap-6 h-full">
        <div className="col-span-4">
          <Card className="h-full overflow-y-auto">
            <h2 className="font-semibold mb-4 px-2 text-[var(--text-primary)]">Conversations</h2>
            <div className="space-y-2">
              {mockChats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`w-full p-3 rounded-xl transition-colors text-left ${
                    selectedChat?.id === chat.id
                      ? 'bg-[var(--brand-purple-100)]'
                      : 'hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="relative">
                      <Avatar src={chat.user.avatar} alt={chat.user.name} size="md" />
                      {chat.unread > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--brand-purple-600)] text-white text-xs rounded-full flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold truncate text-[var(--text-primary)]">{chat.user.name}</p>
                        <span className="text-xs text-[var(--text-tertiary)]">{chat.timestamp}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] truncate">{chat.lastMessage}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-span-8">
          {selectedChat ? (
            <Card className="h-full flex flex-col">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-primary)]">
                <div className="flex items-center gap-3">
                  <Avatar src={selectedChat.user.avatar} alt={selectedChat.user.name} size="md" online />
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">{selectedChat.user.name}</p>
                    <p className="text-sm text-[var(--text-secondary)]">Online</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    Video Call
                  </Button>
                  <Button variant="secondary" size="sm" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Schedule
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto py-6 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                        msg.from === 'me'
                          ? 'bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] text-white'
                          : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border-2 border-[var(--border-primary)]'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.from === 'me' ? 'text-purple-100' : 'text-[var(--text-tertiary)]'
                        }`}
                      >
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border-primary)]">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--brand-purple-500)] focus:outline-none transition-colors"
                  />
                  <Button onClick={handleSend} className="px-6">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <EmptyState
                icon={<Send className="w-full h-full" />}
                title="No conversation selected"
                description="Choose a conversation from the left to start messaging"
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
