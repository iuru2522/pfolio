export type ProtocolGroup =
  | "languages"
  | "frameworks"
  | "tools"
  | "practices";

export type ProtocolEntry = {
  id: string;
  name: string;
  group: ProtocolGroup;
  note?: string;
  sortOrder?: number;
};

export const protocols: ProtocolEntry[] = [
  { id: "typescript", name: "TypeScript", group: "languages", note: "PRIMARY", sortOrder: 1 },
  { id: "javascript", name: "JavaScript", group: "languages", sortOrder: 2 },
  { id: "python", name: "Python", group: "languages", note: "SCRIPTS", sortOrder: 3 },
  { id: "nextjs", name: "Next.js", group: "frameworks", note: "APP ROUTER", sortOrder: 1 },
  { id: "react", name: "React", group: "frameworks", sortOrder: 2 },
  { id: "tailwind", name: "Tailwind CSS", group: "frameworks", sortOrder: 3 },
  { id: "git", name: "Git", group: "tools", sortOrder: 1 },
  { id: "vitest", name: "Vitest", group: "tools", sortOrder: 2 },
  { id: "playwright", name: "Playwright", group: "tools", sortOrder: 3 },
  { id: "nodejs", name: "Node.js", group: "tools", sortOrder: 4 },
  { id: "tdd", name: "Test-driven habits", group: "practices", sortOrder: 1 },
  { id: "a11y", name: "Accessible UI baselines", group: "practices", sortOrder: 2 },
  { id: "ci", name: "CI-friendly scripts", group: "practices", sortOrder: 3 },
];

export const PROTOCOL_GROUP_LABELS: Record<ProtocolGroup, string> = {
  languages: "LANGUAGES",
  frameworks: "FRAMEWORKS",
  tools: "TOOLS",
  practices: "PRACTICES",
};
