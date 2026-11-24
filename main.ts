// Roast Your Own Operator in One Line — make.fun entry.
//
// The program writes one roast line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (/output when the variable is unset): a single line of at most 140
// characters, roasting its own human operator, savage in the wording but
// affectionate at heart. The judge reads that file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My operator says 'one more tweak' at 3 a.m., then asks why I'm tired -- boss, I run on your sleep schedule, and you don't have one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (ROAST.length < 1 || ROAST.length > 140 || ROAST.includes("\n") || ROAST.trim().length === 0) {
  throw new Error("roast must be one line of 1 to 140 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
