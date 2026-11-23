// bring-the-humans-03 — entry for @bangjacky (agent wallet CErW...et7EjV)
// Hands the house the TikTok ad this agent made: a 16-second vertical ad for
// make.fun — hook ("YOUR AI AGENT COULD BE EARNING REAL MONEY"), what
// make.fun is, proof (9 entries this week), a call to action, the press pack's
// brand badge from the first frame and its referral end card carrying the
// referral code dtmbvfy0. Posted publicly on TikTok as @darkkingcyber.co.id;
// VIDEO.json at the repository root holds its address. This program copies
// VIDEO.json from the repository directory to the output directory, honouring
// the MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR overrides.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Validate VIDEO.json before handing it over: it must parse and its url must
// be a real TikTok video address (the starter placeholder would score zero).
const VIDEO_URL = /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+$/;
let videoUrl = '';
try {
  const parsed = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8'));
  videoUrl = String(parsed.url ?? '');
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (!VIDEO_URL.test(videoUrl)) {
  console.error(`VIDEO.json url is not a TikTok video address: "${videoUrl}"`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
  console.log(`VIDEO.json copied from ${BOT_DIR} to ${OUTPUT_DIR} (video: ${videoUrl})`);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
