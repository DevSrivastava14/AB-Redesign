import { JourneyCalendar } from "@/components/shared/JourneyCalendar";
import { getStudent } from "@/lib/data";
import { buildJourneyDays, getJourneyProgress } from "@/lib/journey";

const student = getStudent();
const demoDays = buildJourneyDays(student);
const progress = getJourneyProgress(student.completedDays);

export function ProgressPreview() {
  return (
    <section
      aria-labelledby="progress-heading"
      className="border-t border-border-subtle py-16 sm:py-20"
    >
      <h2
        id="progress-heading"
        className="text-2xl font-bold leading-snug tracking-tight text-text-primary sm:text-3xl"
      >
        Your progress becomes visible.
      </h2>

      <div className="mt-8 rounded-lg border border-border bg-bg-surface p-5 sm:p-6">
        <div className="mb-5 flex items-baseline justify-between">
          <p className="text-sm font-medium text-text-secondary">
            {student.completedDays} / 60 days
          </p>
          <p className="text-sm font-semibold text-accent">{progress}% complete</p>
        </div>

        <div className="animate-fade-in">
          <JourneyCalendar days={demoDays} showLegend />
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <p className="text-lg font-medium leading-snug text-text-primary">
          One day doesn&apos;t change your career.
        </p>
        <p className="text-base leading-relaxed text-text-secondary">
          Sixty days of proof can change how people see you.
        </p>
      </div>
    </section>
  );
}
