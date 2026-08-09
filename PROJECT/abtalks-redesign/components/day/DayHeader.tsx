import Link from "next/link";
import { ArrowLeft, Flame } from "lucide-react";

interface DayHeaderProps {
  day: number;
  streak: number;
  scenario?: string | null;
}

export function DayHeader({ day, streak, scenario }: DayHeaderProps) {
  const query = scenario ? `?scenario=${scenario}` : "";

  return (
    <header className="space-y-4">
      <Link
        href={`/dashboard${query}`}
        className="inline-flex min-h-10 items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
        Back to dashboard
      </Link>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
          Day {day} of 60
        </p>

        <div
          className="flex items-center gap-1.5 rounded-sm border border-accent/30 bg-accent-muted px-2.5 py-1"
          aria-label={`${streak} day streak`}
        >
          <Flame className="h-4 w-4 text-accent" aria-hidden="true" />
          <span className="text-sm font-semibold text-accent">{streak}</span>
        </div>
      </div>
    </header>
  );
}
