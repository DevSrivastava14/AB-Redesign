import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-base/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[430px] items-center justify-between px-5">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-text-primary"
        >
          ABTalks
        </Link>

        <nav
          className="flex items-center gap-2 sm:gap-3"
          aria-label="Landing navigation"
        >
          <a
            href="#daily-loop"
            className="min-h-10 inline-flex items-center px-2 text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md"
          >
            How it works
          </a>
          <Button href="/dashboard" size="sm" variant="primary">
            Start challenge
          </Button>
        </nav>
      </div>
    </header>
  );
}
