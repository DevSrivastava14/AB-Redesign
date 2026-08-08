import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="border-t border-border-subtle py-16 sm:py-24"
    >
      <div className="rounded-lg border border-accent/30 bg-accent-muted px-6 py-10 text-center sm:px-8 sm:py-12">
        <h2
          id="final-cta-heading"
          className="text-2xl font-bold leading-snug tracking-tight text-text-primary sm:text-3xl"
        >
          Your Day 1 starts with one decision.
        </h2>

        <p className="mx-auto mt-4 max-w-[300px] text-base leading-relaxed text-text-secondary">
          You don&apos;t need to be ready for Day 60.
          <br />
          You only need to show up for Day 1.
        </p>

        <div className="mt-8">
          <Button href="/dashboard" fullWidth className="sm:mx-auto sm:w-auto">
            Start Day 1
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
