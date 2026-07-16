"use client";

import { useMemo, useState } from "react";
import { archives, type ArchiveDirectory } from "@/content/archives";
import {
  filterArchives,
  listArchiveDirectories,
  sortArchives,
  type ArchiveFilter,
} from "@/lib/archives";
import { TerminalPanel } from "@/components/ui/TerminalPanel";
import { TerminalButton } from "@/components/ui/TerminalButton";
import { GlitchLink } from "@/components/ui/GlitchLink";

function filterLabel(filter: ArchiveFilter): string {
  return filter === "all" ? "cd /" : `cd ${filter}`;
}

export function ArchivesSection() {
  const [filter, setFilter] = useState<ArchiveFilter>("all");
  const directories = useMemo(
    () => listArchiveDirectories(archives),
    [],
  );

  const visible = useMemo(
    () => sortArchives(filterArchives(archives, filter)),
    [filter],
  );

  return (
    <section
      id="archives"
      data-section="archives"
      className="deck-section"
      aria-labelledby="archives-heading"
    >
      <h2 id="archives-heading" className="deck-heading">
        /ARCHIVES
      </h2>

      <TerminalPanel title="FILESYSTEM // PROJECT REPOS">
        <div className="mb-4 flex flex-col gap-2">
          <p className="text-xs tracking-[0.12em] text-[var(--deck-accent)] uppercase">
            DIRECTORY FILTER
          </p>
          <div
            className="flex flex-wrap gap-2"
            data-archive-filter
            role="group"
            aria-label="Archive directory filter"
          >
            <TerminalButton
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "!bg-[var(--deck-fg)] !text-[var(--deck-invert-fg)]" : ""}
            >
              {filterLabel("all")}
            </TerminalButton>
            {directories.map((directory) => (
              <TerminalButton
                key={directory}
                aria-pressed={filter === directory}
                onClick={() => setFilter(directory as ArchiveDirectory)}
                className={
                  filter === directory
                    ? "!bg-[var(--deck-fg)] !text-[var(--deck-invert-fg)]"
                    : ""
                }
              >
                {filterLabel(directory)}
              </TerminalButton>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="space-y-3 border border-[var(--deck-warn)] p-4 text-sm">
            <p>NO FILES IN DIRECTORY</p>
            <TerminalButton onClick={() => setFilter("all")}>
              cd /
            </TerminalButton>
          </div>
        ) : (
          <ul className="space-y-3">
            {visible.map((entry) => (
              <li
                key={entry.id}
                data-archive-id={entry.id}
                className="border border-[var(--deck-border)] p-3"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base tracking-[0.06em]">{entry.title}</h3>
                  <span className="text-xs text-[var(--deck-accent)]">
                    {entry.directory}
                  </span>
                </div>
                <p className="mt-2 text-sm opacity-90">{entry.summary}</p>
                {entry.statusTags?.length ? (
                  <p className="mt-2 text-xs tracking-[0.1em] text-[var(--deck-amber)]">
                    {entry.statusTags.join(" // ")}
                  </p>
                ) : null}
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                  {entry.liveUrl ? (
                    <GlitchLink href={entry.liveUrl} target="_blank" rel="noreferrer">
                      [LIVE]
                    </GlitchLink>
                  ) : null}
                  {entry.repoUrl ? (
                    <GlitchLink href={entry.repoUrl} target="_blank" rel="noreferrer">
                      [REPO]
                    </GlitchLink>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </TerminalPanel>
    </section>
  );
}
