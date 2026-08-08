import { ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MissedDayBanner() {
  return (
    <section
      aria-labelledby="missed-day-banner-heading"
      className="rounded-lg border border-warning/30 bg-warning-muted px-4 py-4"
    >
      <div className="flex gap-3">
        <AlertCircle
          className="mt-0.5 h-5 w-5 shrink-0 text-warning"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <h2
            id="missed-day-banner-heading"
            className="text-sm font-semibold text-text-primary"
          >
            You missed yesterday.
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            That&apos;s okay. Your challenge isn&apos;t over.
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Today&apos;s build is waiting for you.
          </p>
          <Button href="#today-build" variant="secondary" size="sm" className="mt-3">
            Resume challenge
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
