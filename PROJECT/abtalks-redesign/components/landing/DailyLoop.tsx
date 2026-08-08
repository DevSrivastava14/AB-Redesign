import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "BUILD",
    description: "Complete today's challenge and ship something real.",
  },
  {
    number: "02",
    title: "PROVE",
    description:
      "Push your work to GitHub and share your progress on LinkedIn.",
  },
  {
    number: "03",
    title: "GROW",
    description:
      "Build a public record of consistency that compounds over 60 days.",
  },
];

export function DailyLoop() {
  return (
    <section
      id="daily-loop"
      aria-labelledby="daily-loop-heading"
      className="scroll-mt-16 border-t border-border-subtle py-16 sm:py-20"
    >
      <h2
        id="daily-loop-heading"
        className="text-2xl font-bold leading-snug tracking-tight text-text-primary sm:text-3xl"
      >
        Every day, three things happen.
      </h2>

      <div className="mt-10 space-y-0">
        {steps.map((step, index) => (
          <article key={step.number} className="relative">
            <div className="flex gap-5 py-6">
              <span
                className="font-mono text-sm font-medium text-accent"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold tracking-wide text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div
                className="ml-6 border-l border-border pl-5 pb-2"
                aria-hidden="true"
              />
            )}
          </article>
        ))}
      </div>

      <div
        className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-md border border-border bg-bg-surface px-4 py-3 text-sm font-semibold tracking-wide text-text-secondary"
        aria-label="Daily loop flow: Build, then Prove, then Grow"
      >
        <span className="text-accent">BUILD</span>
        <ArrowRight className="h-4 w-4 text-text-muted" aria-hidden="true" />
        <span className="text-text-primary">PROVE</span>
        <ArrowRight className="h-4 w-4 text-text-muted" aria-hidden="true" />
        <span className="text-success">GROW</span>
      </div>
    </section>
  );
}
