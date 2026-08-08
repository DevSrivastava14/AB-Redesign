import { Briefcase, Flame, Rocket, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AchievementsSectionProps {
  achievements: string[];
}

function getAchievementIcon(name: string): LucideIcon {
  const lower = name.toLowerCase();
  if (lower.includes("streak")) return Flame;
  if (lower.includes("project")) return Rocket;
  if (lower.includes("builder")) return Briefcase;
  return Trophy;
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section aria-labelledby="achievements-heading">
      <h2
        id="achievements-heading"
        className="text-base font-semibold text-text-primary"
      >
        Recent wins
      </h2>

      {achievements.length === 0 ? (
        <div className="mt-4 rounded-lg border border-border bg-bg-surface px-4 py-5 text-center">
          <p className="text-sm font-medium text-text-primary">
            Your first achievement is waiting.
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Complete Day 1 to unlock it.
          </p>
        </div>
      ) : (
        <ul className="mt-4 space-y-2">
          {achievements.map((achievement) => {
            const Icon = getAchievementIcon(achievement);

            return (
              <li
                key={achievement}
                className="flex items-center gap-3 rounded-md border border-border bg-bg-surface px-4 py-3"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-sm text-text-primary">{achievement}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
