import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Challenge } from "@/lib/types";

interface MissionSectionProps {
  challenge: Challenge;
}

export function MissionSection({ challenge }: MissionSectionProps) {
  return (
    <section
      aria-labelledby="mission-heading"
      className="rounded-lg border border-border bg-bg-surface px-5 py-5"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Mission
      </p>

      <h1
        id="mission-heading"
        className="mt-2 text-xl font-bold leading-snug tracking-tight text-text-primary"
      >
        {challenge.title}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge variant="default">{challenge.difficulty}</Badge>
        <span className="text-xs text-text-muted" aria-hidden="true">
          ·
        </span>
        <span className="text-xs text-text-secondary">
          ~{challenge.estimatedTime}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {challenge.description}
      </p>

      <div className="mt-5">
        <h2 className="text-sm font-semibold text-text-primary">
          What to build
        </h2>
        <ul className="mt-3 space-y-2" aria-label="Requirements checklist">
          {challenge.requirements.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <Check
                className="h-3.5 w-3.5 shrink-0 text-success"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-text-muted">
          You don&apos;t need to build everything perfectly. Ship a working
          version first.
        </p>
      </div>
    </section>
  );
}
