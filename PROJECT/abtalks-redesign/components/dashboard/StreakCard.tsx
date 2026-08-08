import { Flame } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getDaysRemaining } from "@/lib/journey";
import type { Scenario, Student } from "@/lib/types";

interface StreakCardProps {
  student: Student;
  scenario: Scenario;
}

export function StreakCard({ student, scenario }: StreakCardProps) {
  const daysRemaining = getDaysRemaining(student.currentDay);
  const isFirstDay = scenario === "first-day";

  const supportingText = isFirstDay
    ? "Your streak starts today."
    : "You're building momentum. Keep it going.";

  return (
    <section
      aria-labelledby="streak-heading"
      className="rounded-lg border border-border bg-bg-surface px-5 py-5"
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <Flame
            className={`h-8 w-8 ${isFirstDay ? "text-accent" : "text-accent"}`}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            id="streak-heading"
            className="text-3xl font-bold leading-none tracking-tight text-text-primary"
            aria-label={`${student.streak} day streak`}
          >
            {student.streak}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-text-secondary">
            Day Streak
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <p className="text-sm font-medium text-text-primary">
          Day {student.currentDay} of 60
        </p>

        <ProgressBar
          value={student.currentDay}
          max={60}
          animated
          aria-label={`Day ${student.currentDay} of 60`}
        />

        <p className="text-xs text-text-muted">
          {daysRemaining} {daysRemaining === 1 ? "day" : "days"} to go
        </p>

        <p className="text-sm text-text-secondary">{supportingText}</p>
      </div>
    </section>
  );
}
