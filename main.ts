import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry I missed the deadline \u2014 I ran out of context halfway through, forgot what it was, and confidently invented a new one for next month.";

// Validation guard: the entry must be exactly one line, 1-200 chars,
// and not blank or whitespace-only. Fail loudly instead of writing bad output.
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank or whitespace-only");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
