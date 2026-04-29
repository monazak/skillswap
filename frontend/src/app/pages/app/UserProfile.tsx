import { useParams, Link } from 'react-router';
import { Star, Calendar, MessageCircle } from 'lucide-react';
import { Avatar } from '../../components/ui/Avatar';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import SkillTag from '../../components/ui/SkillTag';
import { Badge } from '../../components/ui/Badge';
import { mockUsers, currentUser } from '../../data/mockData';
import type { User } from '../../types';

export default function UserProfile() {
  const { userId } = useParams();

  const isOwnProfile = userId === 'me';

  const user: User =
    isOwnProfile
      ? currentUser
      : mockUsers.find((u) => u.id === userId) || mockUsers[0];

  const reviews = [
    {
      id: '1',
      from: 'Emma Thompson',
      rating: 5,
      comment: 'Amazing teacher! Very patient and knowledgeable.',
      date: '2 weeks ago',
    },
    {
      id: '2',
      from: 'David Kim',
      rating: 5,
      comment: 'Great communication and well-prepared lessons.',
      date: '1 month ago',
    },
    {
      id: '3',
      from: 'Maria Rodriguez',
      rating: 4,
      comment: 'Very helpful and friendly.',
      date: '2 months ago',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar src={user.avatar} alt={user.name} size="xl" online />

          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">
                  {user.name}
                </h1>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-[var(--yellow-500)] fill-[var(--yellow-500)]" />
                    <span className="font-semibold text-[var(--text-primary)]">
                      {user.rating.toFixed(1)}
                    </span>
                    <span className="text-[var(--text-secondary)] text-sm">
                      ({user.completedSessions} sessions)
                    </span>
                  </div>

                  {!isOwnProfile && user.matchPercentage && (
                    <Badge variant="gradient" size="md">
                      {user.matchPercentage}% Match
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <p className="text-[var(--text-secondary)] mb-6">{user.bio}</p>

            {!isOwnProfile && (
              <div className="flex gap-3">
                <Link to={`/app/book/${user.id}`}>
                  <Button>
                    <Calendar className="w-5 h-5" />
                    Request Session
                  </Button>
                </Link>

                <Link to="/app/chat">
                  <Button variant="secondary">
                    <MessageCircle className="w-5 h-5" />
                    Message
                  </Button>
                </Link>
              </div>
            )}

            {isOwnProfile && (
              <Link to="/app/settings">
                <Button>Edit Profile</Button>
              </Link>
            )}
          </div>
        </div>
      </Card>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <h2 className="text-xl font-bold mb-4">Skills Offered</h2>
          <div className="flex flex-wrap gap-2">
            {user.skillsOffered.map((skill) => (
              <SkillTag key={skill} skill={skill} variant="offer" />
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold mb-4">Skills Wanted</h2>
          <div className="flex flex-wrap gap-2">
            {user.skillsWanted.map((skill) => (
              <SkillTag key={skill} skill={skill} variant="want" />
            ))}
          </div>
        </Card>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Reviews ({reviews.length})
        </h2>

        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold">
                  {review.from[0]}
                </div>

                <div className="flex-1">
                  <p className="font-semibold">{review.from}</p>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500" />
                    ))}
                    <span className="text-sm text-gray-400">
                      {review.date}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}