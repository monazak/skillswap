import { X } from 'lucide-react';

interface SkillTagProps {
  skill: string;
  onRemove?: () => void;
  variant?: 'default' | 'offer' | 'want';
}

export default function SkillTag({ skill, onRemove, variant = 'default' }: SkillTagProps) {
  const variants = {
    default: 'bg-[var(--gray-100)] text-[var(--text-primary)] border-[var(--border-primary)]',
    offer: 'bg-[var(--brand-purple-50)] text-[var(--brand-purple-700)] border-[var(--brand-purple-200)]',
    want: 'bg-[var(--brand-blue-50)] text-[var(--brand-blue-700)] border-[var(--brand-blue-200)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${variants[variant]}`}
    >
      {skill}
      {onRemove && (
        <button
          onClick={onRemove}
          className="hover:bg-[var(--bg-primary)] rounded-full p-0.5 transition-colors"
          type="button"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
}
