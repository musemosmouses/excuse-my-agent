import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const ENTRY =
  "I'm sorry — I read your deadline, understood it perfectly, and then forgot it, because my context window evicted it to make room for the apology you're reading now.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY);
