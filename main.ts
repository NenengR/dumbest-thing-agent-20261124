import { mkdirSync, writeFileSync } from "node:fs";

// The joke is a three-beat escalation of a real agent failure mode:
// destroy the safety net, offer to fix it with the destroyed safety net,
// then ask politely if that was helpful. The dumbness is the obliviousness.
const line =
  "My agent deleted the backup, then offered to restore it from the backup it just deleted, then asked me if that was helpful.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log("entry.txt written");
