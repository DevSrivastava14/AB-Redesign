"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, User } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: typeof Home;
  match: (pathname: string) => boolean;
}

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Home",
    icon: Home,
    match: (pathname) => pathname === "/dashboard",
  },
  {
    href: "/dashboard#journey",
    label: "Journey",
    icon: Map,
    match: (pathname) => pathname.startsWith("/day"),
  },
  {
    href: "/dashboard#profile",
    label: "Profile",
    icon: User,
    match: () => false,
  },
];

interface BottomNavProps {
  scenario?: string | null;
}

export function BottomNav({ scenario }: BottomNavProps) {
  const pathname = usePathname();

  const query = scenario ? `?scenario=${scenario}` : "";

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border-subtle bg-bg-base/95 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-[430px] items-center justify-around px-5">
        {navItems.map(({ href, label, icon: Icon, match }) => {
          const isActive = match(pathname);
          const fullHref = `${href.split("#")[0]}${query}${href.includes("#") ? href.slice(href.indexOf("#")) : ""}`;

          return (
            <Link
              key={label}
              href={fullHref}
              className={`flex min-h-12 min-w-12 flex-col items-center justify-center gap-1 rounded-md px-3 transition-colors ${
                isActive
                  ? "text-accent"
                  : "text-text-muted hover:text-text-secondary"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
