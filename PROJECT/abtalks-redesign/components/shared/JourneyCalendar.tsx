import { AlertTriangle, Check } from "lucide-react";
import type { JourneyDay } from "@/lib/types";

interface JourneyCalendarProps {
  days: JourneyDay[];
  compact?: boolean;
  showLegend?: boolean;
  className?: string;
}

function DayCell({
  day,
  status,
  compact,
}: {
  day: number;
  status: JourneyDay["status"];
  compact: boolean;
}) {
  const size = compact ? "h-2 w-2" : "h-3.5 w-3.5";
  const base = `${size} rounded-sm flex items-center justify-center shrink-0 transition-colors`;

  switch (status) {
    case "completed":
      return (
        <div
          className={`${base} bg-success/20 border border-success/40`}
          title={`Day ${day} — completed`}
          aria-label={`Day ${day}, completed`}
        >
          {!compact && (
            <Check className="h-2 w-2 text-success" strokeWidth={3} />
          )}
        </div>
      );
    case "today":
      return (
        <div
          className={`${base} bg-accent border-2 border-accent shadow-[0_0_6px_rgba(245,166,35,0.5)]`}
          title={`Day ${day} — today`}
          aria-label={`Day ${day}, today`}
        />
      );
    case "missed":
      return (
        <div
          className={`${base} bg-warning-muted border border-warning/50`}
          title={`Day ${day} — missed`}
          aria-label={`Day ${day}, missed`}
        >
          {!compact && (
            <AlertTriangle className="h-2 w-2 text-warning" strokeWidth={3} />
          )}
        </div>
      );
    default:
      return (
        <div
          className={`${base} bg-bg-elevated border border-border`}
          title={`Day ${day} — upcoming`}
          aria-label={`Day ${day}, upcoming`}
        />
      );
  }
}

export function JourneyCalendar({
  days,
  compact = false,
  showLegend = false,
  className = "",
}: JourneyCalendarProps) {
  const gap = compact ? "gap-1" : "gap-1.5";

  return (
    <div className={className}>
      <div
        className={`grid grid-cols-10 ${gap}`}
        role="grid"
        aria-label="60-day journey progress"
      >
        {days.map(({ day, status }) => (
          <DayCell key={day} day={day} status={status} compact={compact} />
        ))}
      </div>

      {showLegend && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-muted">
          <LegendItem color="bg-success/40" label="Completed" />
          <LegendItem color="bg-accent" label="Today" />
          <LegendItem color="bg-bg-elevated border border-border" label="Upcoming" />
          <LegendItem color="bg-warning/50" label="Missed" />
        </div>
      )}
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`h-2.5 w-2.5 rounded-sm ${color}`} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
