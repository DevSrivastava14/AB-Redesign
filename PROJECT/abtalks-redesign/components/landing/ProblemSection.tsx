export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="border-t border-border-subtle py-16 sm:py-20"
    >
      <h2
        id="problem-heading"
        className="text-2xl font-bold leading-snug tracking-tight text-text-primary sm:text-3xl"
      >
        Learning isn&apos;t the hard part. Showing up is.
      </h2>

      <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
        <p>College gives you lectures. The internet gives you tutorials.</p>
        <p>
          What most students don&apos;t have is a reason to build consistently.
        </p>
        <p className="text-text-primary">
          ABTalks gives you a 60-day reason to show up, build something, and
          prove it publicly.
        </p>
      </div>
    </section>
  );
}
