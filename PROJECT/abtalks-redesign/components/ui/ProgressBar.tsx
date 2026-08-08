interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showLabel?: boolean;
  animated?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showLabel = false,
  animated = true,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={className}>
      {(label || showLabel) && (
        <div className="mb-2 flex items-center justify-between text-xs text-text-secondary">
          {label && <span>{label}</span>}
          {showLabel && <span>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-bg-elevated"
        role="progressbar"
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label ?? "Progress"}
      >
        <div
          className={`h-full rounded-full bg-accent ${animated ? "animate-progress-fill" : ""}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
