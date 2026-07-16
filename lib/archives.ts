import type { ArchiveDirectory, ArchiveEntry } from "@/content/archives";

export type ArchiveFilter = "all" | ArchiveDirectory;

export function filterArchives(
  entries: readonly ArchiveEntry[],
  filter: ArchiveFilter,
): ArchiveEntry[] {
  if (filter === "all") return [...entries];
  return entries.filter((entry) => entry.directory === filter);
}

export function listArchiveDirectories(
  entries: readonly ArchiveEntry[],
): ArchiveDirectory[] {
  return Array.from(new Set(entries.map((entry) => entry.directory))).sort();
}

export function sortArchives(entries: readonly ArchiveEntry[]): ArchiveEntry[] {
  return [...entries].sort((a, b) => {
    const order = (a.sortOrder ?? 0) - (b.sortOrder ?? 0);
    if (order !== 0) return order;
    return a.title.localeCompare(b.title);
  });
}
