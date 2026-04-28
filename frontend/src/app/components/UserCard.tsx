import { Link } from 'react-router';
import { motion } from 'motion/react';
import Avatar from './ui/Avatar';
import Badge from './ui/Badge';
import SkillTag from './ui/SkillTag';

interface UserCardProps {
  user: {
    id: string;
    name: string;
    avatar?: string;
    bio: string;
    skillsOffered: string[];
    skillsWanted: string[];
    rating: number;
    matchPercentage?: number;
  };
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link to={`/app/profile/${user.id}`}>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.2 }}
        className="bg-[var(--bg-primary)] rounded-2xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] p-6 cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <Avatar src={user.avatar} alt={user.name} size="lg" />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg text-[var(--text-primary)]">{user.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[var(--yellow-500)]">★</span>
                  <span className="text-sm text-[var(--text-secondary)]">{user.rating.toFixed(1)}</span>
                </div>
              </div>
              {user.matchPercentage && (
                <Badge variant="gradient" size="sm">
                  {user.matchPercentage}% Match
                </Badge>
              )}
            </div>
            <p className="text-[var(--text-secondary)] text-sm mb-3 line-clamp-2">{user.bio}</p>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-[var(--text-tertiary)] mb-1">Offers:</p>
                <div className="flex flex-wrap gap-1">
                  {user.skillsOffered.slice(0, 3).map((skill) => (
                    <SkillTag key={skill} skill={skill} variant="offer" />
                  ))}
                  {user.skillsOffered.length > 3 && (
                    <span className="text-xs text-[var(--text-tertiary)]">+{user.skillsOffered.length - 3} more</span>
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs text-[var(--text-tertiary)] mb-1">Wants:</p>
                <div className="flex flex-wrap gap-1">
                  {user.skillsWanted.slice(0, 3).map((skill) => (
                    <SkillTag key={skill} skill={skill} variant="want" />
                  ))}
                  {user.skillsWanted.length > 3 && (
                    <span className="text-xs text-[var(--text-tertiary)]">+{user.skillsWanted.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
