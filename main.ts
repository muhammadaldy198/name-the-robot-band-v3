import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const pick =
  "The Escalators, hit 'Up, Then Down Again': we held one note all the way up, and 47 fans rode us straight back down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, pick, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${pick.length} chars)`);
