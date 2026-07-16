import { describe, expect, it } from "vitest";
import { archives } from "@/content/archives";
import {
  filterArchives,
  listArchiveDirectories,
  sortArchives,
} from "@/lib/archives";

describe("archive filters", () => {
  it("returns all entries for all filter", () => {
    expect(filterArchives(archives, "all")).toHaveLength(archives.length);
  });

  it("filters by directory", () => {
    const webApps = filterArchives(archives, "/web-apps");
    expect(webApps.length).toBeGreaterThan(0);
    expect(webApps.every((entry) => entry.directory === "/web-apps")).toBe(true);
  });

  it("lists unique sorted directories", () => {
    const dirs = listArchiveDirectories(archives);
    expect(dirs).toContain("/web-apps");
    expect(dirs).toContain("/scripts");
    expect([...dirs].sort()).toEqual(dirs);
  });

  it("sorts by sortOrder then title", () => {
    const sorted = sortArchives(archives);
    expect(sorted[0]?.sortOrder).toBeLessThanOrEqual(sorted[1]?.sortOrder ?? 0);
  });
});
