import { ArrowRight, Camera, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getTracks } from "@/lib/data";
import type { Scenario, Student } from "@/lib/types";

interface ProfileSectionProps {
  student: Student;
  scenario: Scenario;
}

const inputClassName =
  "min-h-12 w-full rounded-md border border-border bg-bg-elevated px-4 text-sm text-text-primary placeholder:text-text-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ProfileSection({ student, scenario }: ProfileSectionProps) {
  const isProminent = !student.profileComplete || scenario === "empty-profile";
  const tracks = getTracks();

  if (student.profileComplete && student.profileCompletionPercentage >= 100) {
    return null;
  }

  if (isProminent) {
    return (
      <section
        id="profile"
        aria-labelledby="profile-heading"
        className="scroll-mt-6 rounded-lg border border-accent/30 bg-accent-muted px-5 py-5"
      >
        <h2
          id="profile-heading"
          className="text-base font-semibold text-text-primary"
        >
          Make your journey yours.
        </h2>
        <p className="mt-1 text-sm text-text-secondary">
          Add a few details so your 60-day progress has a face.
        </p>

        <form className="mt-5 space-y-4" aria-label="Profile details">
          <div>
            <label
              htmlFor="profile-name"
              className="mb-1.5 block text-xs font-medium text-text-secondary"
            >
              Name
            </label>
            <input
              id="profile-name"
              type="text"
              defaultValue={student.name}
              placeholder="Your name"
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="profile-college"
              className="mb-1.5 block text-xs font-medium text-text-secondary"
            >
              College
            </label>
            <input
              id="profile-college"
              type="text"
              defaultValue={student.college}
              placeholder="Your college"
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="profile-track"
              className="mb-1.5 block text-xs font-medium text-text-secondary"
            >
              Track
            </label>
            <select
              id="profile-track"
              defaultValue={student.track || ""}
              className={inputClassName}
            >
              <option value="" disabled>
                Choose a track
              </option>
              {tracks.map((track) => (
                <option key={track.id} value={track.name}>
                  {track.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className="mb-1.5 block text-xs font-medium text-text-secondary">
              Profile photo
            </span>
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-dashed border-border bg-bg-elevated px-4 text-sm text-text-secondary transition-colors hover:border-accent/40 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Camera className="h-4 w-4 shrink-0" aria-hidden="true" />
              Add a photo
            </button>
          </div>
        </form>

        <Button type="button" fullWidth className="mt-5">
          Complete profile
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </section>
    );
  }

  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="scroll-mt-6 rounded-lg border border-border bg-bg-surface px-4 py-4"
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-elevated border border-border"
          aria-hidden="true"
        >
          <User className="h-4 w-4 text-text-muted" />
        </div>

        <div className="min-w-0 flex-1">
          <h2
            id="profile-heading"
            className="text-sm font-semibold text-text-primary"
          >
            Your profile is {student.profileCompletionPercentage}% complete
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Add your college and profile details.
          </p>

          <ProgressBar
            value={student.profileCompletionPercentage}
            max={100}
            animated={false}
            className="mt-3"
            aria-label={`Profile ${student.profileCompletionPercentage}% complete`}
          />

          <Button type="button" variant="secondary" size="sm" className="mt-4">
            Complete profile
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
