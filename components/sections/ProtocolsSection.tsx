import {
  PROTOCOL_GROUP_LABELS,
  protocols,
  type ProtocolGroup,
} from "@/content/protocols";
import { TerminalPanel } from "@/components/ui/TerminalPanel";

const GROUP_ORDER: ProtocolGroup[] = [
  "languages",
  "frameworks",
  "tools",
  "practices",
];

export function ProtocolsSection() {
  return (
    <section
      id="protocols"
      data-section="protocols"
      className="deck-section"
      aria-labelledby="protocols-heading"
    >
      <h2 id="protocols-heading" className="deck-heading">
        /PROTOCOLS
      </h2>

      <TerminalPanel title="> RUN SKILLS">
        <div className="space-y-6">
          {GROUP_ORDER.map((group) => {
            const entries = protocols
              .filter((entry) => entry.group === group)
              .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

            if (entries.length === 0) return null;

            return (
              <div key={group} data-protocol-group={group}>
                <h3 className="mb-2 text-xs tracking-[0.14em] text-[var(--deck-accent)] uppercase">
                  {`> ${PROTOCOL_GROUP_LABELS[group]}`}
                </h3>
                <ul className="divide-y divide-[var(--deck-muted)] border border-[var(--deck-border)]">
                  {entries.map((entry) => (
                    <li
                      key={entry.id}
                      className="flex flex-wrap items-baseline justify-between gap-2 px-3 py-2 text-sm"
                    >
                      <span>{entry.name}</span>
                      {entry.note ? (
                        <span className="text-xs tracking-[0.1em] text-[var(--deck-amber)]">
                          {entry.note}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </TerminalPanel>
    </section>
  );
}
