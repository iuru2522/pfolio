export type ConsoleLogLevel = "info" | "warn" | "sys";

export type ConsoleLogLine = {
  id: string;
  text: string;
  level?: ConsoleLogLevel;
};

export const consoleLogs: ConsoleLogLine[] = [
  { id: "1", text: "PINGing sub-orbital servers...", level: "sys" },
  { id: "2", text: "Bypassing corporate ICE...", level: "warn" },
  { id: "3", text: "Deck firmware checksum OK", level: "info" },
  { id: "4", text: "Uplink handshake // latency 12ms", level: "sys" },
  { id: "5", text: "Scanning Chiba City grid sectors...", level: "info" },
  { id: "6", text: "Ghost process quarantined", level: "warn" },
  { id: "7", text: "Matrix overlay sync complete", level: "sys" },
  { id: "8", text: "Awaiting operator input_", level: "info" },
];
