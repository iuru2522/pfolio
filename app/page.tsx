import { DeckShell } from "@/components/deck/DeckShell";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { ArchivesSection } from "@/components/sections/ArchivesSection";
import { ProtocolsSection } from "@/components/sections/ProtocolsSection";
import { SignalSection } from "@/components/sections/SignalSection";

export default function Home() {
  return (
    <DeckShell>
      <ConnectSection />
      <ArchivesSection />
      <ProtocolsSection />
      <SignalSection />
    </DeckShell>
  );
}
