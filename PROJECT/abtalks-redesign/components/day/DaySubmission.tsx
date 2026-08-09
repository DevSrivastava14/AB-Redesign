"use client";

import { useState } from "react";
import { ArrowRight, Check, Flame, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  getGitHubCommitError,
  getGitHubRepoError,
  getLinkedInPostError,
  isValidGitHubCommitUrl,
  isValidGitHubRepoUrl,
  isValidLinkedInPostUrl,
} from "@/lib/validation";

interface ProofFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  isValid: boolean;
}

function ProofField({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  isValid,
}: ProofFieldProps) {
  const borderClass = error
    ? "border-error focus-visible:outline-error"
    : isValid
      ? "border-success focus-visible:outline-success"
      : "border-border focus-visible:outline-accent";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-text-secondary"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="url"
          inputMode="url"
          autoComplete="url"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`min-h-12 w-full rounded-md border bg-bg-elevated px-4 pr-10 text-sm text-text-primary placeholder:text-text-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${borderClass}`}
        />
        {isValid && (
          <Check
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-success animate-check-pop"
            aria-hidden="true"
          />
        )}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-xs text-error"
        >
          {error}
        </p>
      )}
    </div>
  );
}

type SubmitState = "idle" | "submitting" | "complete";

interface DaySubmissionProps {
  day: number;
  streak: number;
  scenario?: string | null;
}

export function DaySubmission({ day, streak, scenario }: DaySubmissionProps) {
  const [githubRepo, setGithubRepo] = useState("");
  const [githubCommit, setGithubCommit] = useState("");
  const [linkedinPost, setLinkedinPost] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const repoError = getGitHubRepoError(githubRepo);
  const commitError = getGitHubCommitError(githubCommit);
  const linkedinError = getLinkedInPostError(linkedinPost);

  const repoValid = isValidGitHubRepoUrl(githubRepo);
  const commitValid = isValidGitHubCommitUrl(githubCommit);
  const linkedinValid = isValidLinkedInPostUrl(linkedinPost);
  const allValid = repoValid && commitValid && linkedinValid;

  const dashboardHref = scenario ? `/dashboard?scenario=${scenario}` : "/dashboard";

  function handleSubmit() {
    if (!allValid || submitState !== "idle") return;

    setSubmitState("submitting");

    window.setTimeout(() => {
      setSubmitState("complete");
    }, 1200);
  }

  if (submitState === "complete") {
    return (
      <section
        aria-labelledby="success-heading"
        className="rounded-lg border border-success/30 bg-success-muted px-5 py-6 text-center animate-fade-in"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/20">
          <Check
            className="h-6 w-6 text-success animate-check-pop"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </div>

        <h2
          id="success-heading"
          className="mt-4 text-lg font-bold uppercase tracking-wide text-success"
        >
          ✓ Day {day} Complete
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          You just added another proof point to your 60-day journey.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-sm border border-accent/30 bg-accent-muted px-3 py-1.5">
          <Flame className="h-4 w-4 text-accent" aria-hidden="true" />
          <span className="text-sm font-semibold text-accent">
            {streak + 1} day streak
          </span>
        </div>

        <Button href={dashboardHref} fullWidth className="mt-6">
          Back to dashboard
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="proof-heading"
      className="rounded-lg border border-border bg-bg-surface px-5 py-5"
    >
      <h2
        id="proof-heading"
        className="text-sm font-semibold text-text-primary"
      >
        Prove your work
      </h2>
      <p className="mt-1 text-xs text-text-secondary">
        Complete both submissions to finish Day {day}.
      </p>

      <div className="mt-5 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            01 · GitHub
          </p>
          <div className="mt-3 space-y-4">
            <ProofField
              id="github-repo"
              label="Repository URL"
              placeholder="github.com/username/project"
              value={githubRepo}
              onChange={setGithubRepo}
              error={repoError}
              isValid={repoValid}
            />
            <ProofField
              id="github-commit"
              label="Commit URL"
              placeholder="github.com/.../commit/..."
              value={githubCommit}
              onChange={setGithubCommit}
              error={commitError}
              isValid={commitValid}
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            02 · LinkedIn
          </p>
          <div className="mt-3">
            <ProofField
              id="linkedin-post"
              label="Post URL"
              placeholder="linkedin.com/posts/..."
              value={linkedinPost}
              onChange={setLinkedinPost}
              error={linkedinError}
              isValid={linkedinValid}
            />
            <p className="mt-2 text-xs leading-relaxed text-text-muted">
              Your post should show what you built and what you learned.
            </p>
          </div>
        </div>
      </div>

      <Button
        type="button"
        fullWidth
        className="mt-6"
        disabled={!allValid || submitState === "submitting"}
        onClick={handleSubmit}
      >
        {submitState === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          <>
            Submit Day {day}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </section>
  );
}
