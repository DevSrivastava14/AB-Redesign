import {
  ArrowRight,
  BarChart3,
  Brain,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { getTracks } from "@/lib/data";

const trackIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "ai-ml": Brain,
  "app-development": Smartphone,
  data: BarChart3,
};

export function TracksSection() {
  const tracks = getTracks();

  return (
    <section
      aria-labelledby="tracks-heading"
      className="border-t border-border-subtle py-16 sm:py-20"
    >
      <h2
        id="tracks-heading"
        className="text-2xl font-bold leading-snug tracking-tight text-text-primary sm:text-3xl"
      >
        Choose what you want to build.
      </h2>

      <ul className="mt-8 divide-y divide-border-subtle border-y border-border-subtle">
        {tracks.map((track) => {
          const Icon = trackIcons[track.id] ?? Globe;

          return (
            <li key={track.id}>
              <div className="group flex items-start gap-4 py-5 transition-colors hover:bg-bg-surface/50 sm:px-3 sm:-mx-3 sm:rounded-md">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-bg-elevated text-accent"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    {track.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {track.description}
                  </p>
                </div>

                <ArrowRight
                  className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
