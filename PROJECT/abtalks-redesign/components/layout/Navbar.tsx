import Link from "next/link";
import { User } from "lucide-react";
import { getStudent } from "@/lib/data";

interface NavbarProps {
  scenario?: string | null;
}

export function Navbar({ scenario }: NavbarProps) {
  const student = getStudent(
    scenario === "first-day" ||
      scenario === "missed" ||
      scenario === "empty-profile"
      ? scenario
      : "default",
  );

  const initials = student.name
    ? student.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : null;

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-base/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[430px] items-center justify-between px-5">
        <Link
          href="/dashboard"
          className="text-base font-semibold tracking-tight text-text-primary"
        >
          ABTalks
        </Link>

        <Link
          href="/dashboard"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-elevated border border-border text-text-secondary transition-colors hover:bg-bg-hover hover:text-text-primary"
          aria-label="Profile"
        >
          {initials ? (
            <span className="text-xs font-medium text-accent">{initials}</span>
          ) : (
            <User className="h-4 w-4" aria-hidden="true" />
          )}
        </Link>
      </div>
    </header>
  );
}
