export function ProgressBar({ percent, label }: { percent: number; label?: string }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label ?? `Postęp: ${percent}%`}
      className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800"
    >
      <div
        className="h-full rounded-full bg-amber-500 transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
