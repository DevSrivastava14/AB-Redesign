import { ExternalLink } from "lucide-react";

const resources = [
  {
    label: "GitHub API Docs",
    href: "https://docs.github.com/en/rest",
  },
  {
    label: "Example project",
    href: "https://github.com/octocat/Hello-World",
  },
  {
    label: "Submission guidelines",
    href: "https://github.com/readme/guides",
  },
];

export function ResourcesSection() {
  return (
    <section
      aria-labelledby="resources-heading"
      className="rounded-lg border border-border bg-bg-surface px-5 py-5"
    >
      <h2
        id="resources-heading"
        className="text-sm font-semibold text-text-primary"
      >
        Useful resources
      </h2>

      <ul className="mt-3 space-y-2">
        {resources.map((resource) => (
          <li key={resource.label}>
            <a
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-10 items-center justify-between gap-3 rounded-md px-1 text-sm text-text-secondary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>{resource.label}</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
