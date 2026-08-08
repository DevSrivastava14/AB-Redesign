import { JourneyCalendar } from "@/components/shared/JourneyCalendar";
import { buildJourneyDays, getJourneyProgress } from "@/lib/journey";
import type { Student } from "@/lib/types";

interface JourneySectionProps {
  student: Student;
}

export function JourneySection({ student }: JourneySectionProps) {
  const days = buildJourneyDays(student);
  const progress = getJourneyProgress(student.completedDays);

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="scroll-mt-6"
    >
      <h2
        id="journey-heading"
        className="text-base font-semibold text-text-primary"
      >
        Your 60-day journey
      </h2>

      <div className="mt-3 flex items-baseline justify-between">
        <p className="text-sm text-text-secondary">
          {student.completedDays} / 60 days
        </p>
        <p className="text-sm font-medium text-accent">{progress}% complete</p>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-bg-surface p-4">
        <JourneyCalendar days={days} showLegend />
      </div>
    </section>
  );
}
