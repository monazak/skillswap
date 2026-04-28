export default function LoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-[var(--bg-primary)] rounded-2xl shadow-[var(--shadow-md)] p-6 animate-pulse">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-[var(--bg-secondary)] rounded-full" />
            <div className="flex-1">
              <div className="h-5 bg-[var(--bg-secondary)] rounded w-1/3 mb-2" />
              <div className="h-4 bg-[var(--bg-secondary)] rounded w-1/4 mb-4" />
              <div className="h-4 bg-[var(--bg-secondary)] rounded w-full mb-2" />
              <div className="h-4 bg-[var(--bg-secondary)] rounded w-2/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
