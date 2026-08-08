import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Student } from "@/lib/types";

interface FirstDayBannerProps {
  student: Student;
}

export function FirstDayBanner({ student }: FirstDayBannerProps) {
  return (
    <section
      aria-labelledby="first-day-banner-heading"
      className="rounded-lg border border-success/30 bg-success-muted px-4 py-4"
    >
      <div className="flex gap-3">
        <Sprout
          className="mt-0.5 h-5 w-5 shrink-0 text-success"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <h2
            id="first-day-banner-heading"
            className="text-sm font-semibold text-text-primary"
          >
            Your streak starts today.
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Everyone starts at Day 1.
          </p>
          <Button
            href={`/day/${student.currentDay}`}
            size="sm"
            className="mt-3"
          >
            Start your first build
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
