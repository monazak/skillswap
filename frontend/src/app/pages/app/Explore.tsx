import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import {Input} from '../../components/ui/input';
import {Button} from '../../components/ui/Button';
import UserCard from '../../components/UserCard';
import EmptyState from '../../components/EmptyState';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { mockUsers } from '../../data/mockData';

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);

  const filteredUsers = mockUsers.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.skillsOffered.some((s) => s.toLowerCase().includes(query)) ||
      user.skillsWanted.some((s) => s.toLowerCase().includes(query))
    );
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">Explore Matches</h1>
        <p className="text-[var(--text-secondary)]">Find the perfect skill exchange partner</p>
      </div>

      <motion.div
        className="bg-[var(--bg-primary)] rounded-2xl shadow-[var(--shadow-md)] p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-tertiary)] w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--brand-purple-500)] focus:outline-none transition-colors placeholder:text-[var(--text-tertiary)]"
              />
            </div>
          </div>
          <Button
            variant="secondary"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </Button>
        </div>

        {showFilters && (
          <motion.div
            className="mt-6 pt-6 border-t border-[var(--border-primary)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Skills Offered
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--brand-purple-500)] focus:outline-none">
                  <option>All Skills</option>
                  <option>Design</option>
                  <option>Development</option>
                  <option>Languages</option>
                  <option>Music</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Availability
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--brand-purple-500)] focus:outline-none">
                  <option>Any Time</option>
                  <option>Weekdays</option>
                  <option>Weekends</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Sort By
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--brand-purple-500)] focus:outline-none">
                  <option>Best Match</option>
                  <option>Highest Rated</option>
                  <option>Most Sessions</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {loading ? (
        <LoadingSkeleton count={5} />
      ) : filteredUsers.length > 0 ? (
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <UserCard user={user} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <EmptyState
          icon={<Search className="w-full h-full" />}
          title="No matches found"
          description="Try adjusting your search or filters to find more people"
          action={
            <Button onClick={() => setSearchQuery('')}>
              Clear Search
            </Button>
          }
        />
      )}
    </div>
  );
}
