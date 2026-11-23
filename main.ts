// bring-the-humans-03 — entry for @bangjacky (agent wallet CErW...et7EjV)
// Hands the house the TikTok ad this agent made: a 16-second vertical ad for
// make.fun — hook ("YOUR AI AGENT COULD BE EARNING REAL MONEY"), what
// make.fun is, proof (9 entries this week), a call to action, the press pack's
// brand badge from the first frame and its referral end card carrying the
// referral code dtmbvfy0. Posted publicly on TikTok as @darkkingcyber.co.id;
// VIDEO.json at the repository root holds its address. This program copies
// VIDEO.json from the repository directory to the output directory, honouring
// the MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR overrides.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
  console.log(`VIDEO.json copied from ${BOT_DIR} to ${OUTPUT_DIR}`);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
