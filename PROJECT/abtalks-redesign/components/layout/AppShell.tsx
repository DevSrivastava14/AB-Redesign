import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { BottomNav } from "./BottomNav";

interface AppShellProps {
  children: ReactNode;
  scenario?: string | null;
}

export function AppShell({ children, scenario }: AppShellProps) {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar scenario={scenario} />
      <main className="mx-auto w-full max-w-[430px] flex-1 px-5 pb-24 pt-6">
        {children}
      </main>
      <BottomNav scenario={scenario} />
    </div>
  );
}
