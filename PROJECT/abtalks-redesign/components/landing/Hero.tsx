import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { JourneyCalendar } from "@/components/shared/JourneyCalendar";
import { getStudent } from "@/lib/data";
import { buildJourneyDays } from "@/lib/journey";

const demoDays = buildJourneyDays(getStudent());

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-10 pb-16 sm:pt-14 sm:pb-20"
    >
      <div className="animate-fade-in">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
          The 60-Day Build Challenge
        </p>

        <h1
          id="hero-heading"
          className="text-[2rem] font-bold leading-[1.15] tracking-tight text-text-primary sm:text-4xl"
        >
          60 days.
          <br />
          60 things built.
          <br />
          <span className="text-accent">A portfolio that proves it.</span>
        </h1>

        <p className="mt-5 max-w-[340px] text-base leading-relaxed text-text-secondary">
          Stop collecting tutorials. Start shipping real work every day.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/dashboard" fullWidth className="sm:w-auto">
            Start the 60-Day Challenge
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            href="#daily-loop"
            variant="secondary"
            fullWidth
            className="sm:w-auto"
          >
            See how it works
          </Button>
        </div>
      </div>

      <div
        className="mt-12 animate-fade-in rounded-lg border border-border bg-bg-surface p-4 sm:p-5"
        style={{ animationDelay: "150ms" }}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-medium text-text-secondary">
            Day 12 of 60
          </p>
          <p className="text-xs text-text-muted">11 completed · momentum building</p>
        </div>

        <JourneyCalendar days={demoDays} compact showLegend />

        <div className="mt-4 flex items-center gap-3 border-t border-border-subtle pt-4">
          <div className="flex -space-x-1" aria-hidden="true">
            {demoDays.slice(0, 5).map(({ day, status }) => (
              <span
                key={day}
                className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-medium ${
                  status === "completed"
                    ? "border-success/40 bg-success-muted text-success"
                    : status === "today"
                      ? "border-accent bg-accent-muted text-accent"
                      : "border-border bg-bg-elevated text-text-muted"
                }`}
              >
                {String(day).padStart(2, "0")}
              </span>
            ))}
          </div>
          <p className="text-xs text-text-muted">
            Each square is one day of proof
          </p>
        </div>
      </div>
    </section>
  );
}
