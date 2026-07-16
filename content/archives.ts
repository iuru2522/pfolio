export type ArchiveDirectory =
  | "/web-apps"
  | "/scripts"
  | "/experiments";

export type ArchiveEntry = {
  id: string;
  title: string;
  summary: string;
  directory: ArchiveDirectory;
  liveUrl?: string;
  repoUrl?: string;
  statusTags?: string[];
  sortOrder?: number;
};

export const archives: ArchiveEntry[] = [
  // --- v1.7 portfolio projects ---
  {
    id: "acme-dashboard",
    title: "ACME DASHBOARD",
    summary:
      "Next.js starter deck rebuilt as a TypeScript admin console with MongoDB and Tailwind.",
    directory: "/web-apps",
    repoUrl: "https://github.com/iuru2522/nextjs-dashboard-project",
    statusTags: ["ONLINE"],
    sortOrder: 1,
  },
  {
    id: "utracker",
    title: "UTRACKER",
    summary: "Simple CRUD ops console on the MERN stack — React, Node, MongoDB.",
    directory: "/web-apps",
    repoUrl: "https://github.com/iuru2522/mern-one",
    statusTags: ["STABLE"],
    sortOrder: 2,
  },
  {
    id: "angular-firebase-playground",
    title: "BUG TRACKER",
    summary:
      "Angular + Firebase bug-tracking playground with SSR — still wiring ice.",
    directory: "/web-apps",
    liveUrl: "https://angular-firebase-playground.vercel.app/",
    repoUrl: "https://github.com/iuru2522/angular-firebase-playground",
    statusTags: ["IN PROGRESS"],
    sortOrder: 3,
  },
  {
    id: "parse-comment",
    title: "PARSECOMMENT",
    summary: "Java / Spring Boot playground for building a markdown comment parser.",
    directory: "/experiments",
    repoUrl: "https://github.com/iuru2522/parsemarkdown",
    statusTags: ["STABLE"],
    sortOrder: 1,
  },
  {
    id: "zettelkasten",
    title: "ZETTELKASTEN",
    summary: "Second-brain link archive — interesting reads routed into markdown notes.",
    directory: "/experiments",
    repoUrl: "https://github.com/iuru2522/zettelkasten",
    statusTags: ["ONLINE"],
    sortOrder: 2,
  },

  // --- neuromancer placeholders (not in v1.7) ---
  {
    id: "neon-ledger",
    title: "NEON LEDGER",
    summary: "Expense tracker styled as a black-ice accounting terminal.",
    directory: "/web-apps",
    repoUrl: "https://github.com/",
    statusTags: ["TBD"],
    sortOrder: 10,
  },
  {
    id: "packet-board",
    title: "PACKET BOARD",
    summary: "Kanban board that routes tasks like network packets.",
    directory: "/web-apps",
    repoUrl: "https://github.com/",
    statusTags: ["TBD"],
    sortOrder: 11,
  },
  {
    id: "icebreaker",
    title: "ICEBREAKER.SH",
    summary: "CLI utility that scaffolds secure env files and secrets checks.",
    directory: "/scripts",
    repoUrl: "https://github.com/",
    statusTags: ["TBD"],
    sortOrder: 10,
  },
  {
    id: "ghost-ping",
    title: "GHOST PING",
    summary: "Bash script suite for latency probes across edge nodes.",
    directory: "/scripts",
    repoUrl: "https://github.com/",
    statusTags: ["TBD"],
    sortOrder: 11,
  },
  {
    id: "crt-shader",
    title: "CRT SHADER LAB",
    summary: "Browser experiment for phosphor bloom and scanline overlays.",
    directory: "/experiments",
    repoUrl: "https://github.com/",
    statusTags: ["TBD"],
    sortOrder: 10,
  },
  {
    id: "matrix-rain",
    title: "MATRIX RAIN TOY",
    summary: "Lightweight canvas rain with themeable glyph sets.",
    directory: "/experiments",
    repoUrl: "https://github.com/",
    statusTags: ["TBD"],
    sortOrder: 11,
  },
];
