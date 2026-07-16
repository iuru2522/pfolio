import type { ReactNode } from "react";
import { DeckNav } from "@/components/deck/DeckNav";
import { ConsoleLogger } from "@/components/console/ConsoleLogger";

type DeckShellProps = {
  children: ReactNode;
};

export function DeckShell({ children }: DeckShellProps) {
  return (
    <div className="deck-grid-bg deck-scanlines relative min-h-screen">
      <DeckNav />
      <main className="mx-auto w-full max-w-6xl px-3 pb-28 pt-4 sm:px-4 sm:pb-24">
        {children}
      </main>
      <ConsoleLogger />
    </div>
  );
}
