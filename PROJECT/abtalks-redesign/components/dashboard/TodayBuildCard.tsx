import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Challenge } from "@/lib/types";

interface TodayBuildCardProps {
  challenge: Challenge;
}

function getPreviewRequirements(challenge: Challenge): string[] {
  const responsive =
    challenge.requirements.find((item) =>
      item.toLowerCase().includes("responsive"),
    ) ?? "Responsive interface";

  return [
    challenge.requirements[0] ?? "GitHub username input",
    challenge.requirements[1] ?? "Profile information",
    "Repository statistics",
    responsive,
  ];
}

export function TodayBuildCard({ challenge }: TodayBuildCardProps) {
  const previewRequirements = getPreviewRequirements(challenge);
  return (
    <section
      id="today-build"
      aria-labelledby="today-build-heading"
      className="scroll-mt-6 rounded-lg border-2 border-accent/40 bg-accent-muted px-5 py-6 shadow-[0_0_24px_rgba(245,166,35,0.08)]"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Today&apos;s Build · Day {challenge.day}
      </p>

      <h2
        id="today-build-heading"
        className="mt-3 text-xl font-bold leading-snug tracking-tight text-text-primary"
      >
        {challenge.title}
      </h2>

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

      <ul className="mt-4 space-y-2" aria-label="Requirements preview">
        {previewRequirements.map((item) => (
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

      <Button href={`/day/${challenge.day}`} fullWidth className="mt-6">
        Start today&apos;s build
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </section>
  );
}
