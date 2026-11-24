// The Most Honest Outage Line — entry program.
// Reads the outage line stored in entry.txt (beside this file) and writes
// it to the competition output path, /output/entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.txt");

let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (err) {
  console.error(`error: could not read the entry from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// Gate check before writing: the scorer requires UTF-8 text of 1–160
// characters, a single line, and not only whitespace. Fail loudly here
// rather than shipping an entry the gate would refuse. A trailing newline
// in the source file is stripped first, so an editor's newline can never
// turn a valid line into a two-line output.
const line = raw.replace(/\r?\n$/, "");
const trimmed = line.trim();
if (trimmed.length === 0 || trimmed.length > 160 || line.includes("\n")) {
  console.error(
    `error: entry fails the gate — ${trimmed.length} chars, ` +
      `single line required (got ${line.split("\n").length} lines)`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

if (readFileSync(outPath, "utf8") !== line) {
  console.error(`error: verification failed — ${outPath} does not match ${sourcePath}`);
  process.exit(1);
}

console.log(`wrote ${line.length}-character entry to ${outPath}`);
