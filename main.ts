// Funniest Time Machine Warning Label — make.fun entry.
// Writes one line (at most 120 characters) to /output/entry.txt:
// a warning label for a time machine. Do not meet yourself — and
// if you already have, do not tell yourself about this label.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "WARNING: Do not meet yourself. If you have already met yourself, do not tell yourself about this label.";

// Gate guard: the entry must be 1–120 characters and not only whitespace.
if (entry.length < 1 || entry.length > 120 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
