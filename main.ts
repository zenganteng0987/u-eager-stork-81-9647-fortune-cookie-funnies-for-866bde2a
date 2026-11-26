import { mkdirSync, writeFileSync } from "node:fs";

// One-line fortune cookie message for a software engineer.
// Chosen line: the fixed bug returns like an ex who denies ever
// meeting you — fresh, lands on first read, funniest word last.
const fortune =
  "The bug you fixed last week will return today, wearing a new error message and pretending it never met you.";

mkdirSync("/output", { recursive: true });

// Fail loudly instead of shipping a gate-invalid entry: the gate
// requires UTF-8 text of 1 to 120 characters, a single line.
if (fortune.length < 1 || fortune.length > 120 || fortune.includes("\n")) {
  throw new Error(`fortune is ${fortune.length} chars, outside the 1-120 gate`);
}

writeFileSync("/output/entry.txt", fortune, "utf8");
