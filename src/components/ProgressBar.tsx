export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
      <div
        className="h-full rounded-full bg-amber-500 transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
