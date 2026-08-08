import { getTestimonials } from "@/lib/data";

export function SocialProof() {
  const testimonials = getTestimonials();

  return (
    <section
      aria-labelledby="social-proof-heading"
      className="border-t border-border-subtle py-16 sm:py-20"
    >
      <h2
        id="social-proof-heading"
        className="text-2xl font-bold leading-snug tracking-tight text-text-primary sm:text-3xl"
      >
        Built for students who want to ship.
      </h2>

      <p className="mt-3 text-sm text-text-muted">
        Sample stories from students like you — fictional examples for demo
        purposes.
      </p>

      <ul className="mt-8 space-y-4">
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.name}
            className="rounded-lg border border-border bg-bg-surface p-5 transition-colors hover:border-border-subtle hover:bg-bg-elevated/30"
          >
            <blockquote>
              <p className="text-base leading-relaxed text-text-primary">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-text-secondary">
                <cite className="not-italic font-medium text-text-primary">
                  {testimonial.name}
                </cite>
                <span aria-hidden="true"> · </span>
                <span>{testimonial.detail}</span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
