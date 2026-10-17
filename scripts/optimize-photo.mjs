/**
 * Turns your real portrait into a web-ready WebP (4:5, 800x1000) and prints the
 * object to paste into src/data/site.ts as `profilePhoto`.
 *
 * Usage:
 *   1. Put ONE photo (jpg/png/webp) in  public/profile/raw/   (git-ignored)
 *   2. npm run optimize-photo
 */
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const RAW = 'public/profile/raw';
const OUT = 'public/profile/photo.webp';

try {
  await stat(RAW);
} catch {
  console.log(`Create ${RAW}/ and put your photo in it first.`);
  process.exit(0);
}

const file = (await readdir(RAW)).find((f) => /\.(png|jpe?g|webp)$/i.test(f));
if (!file) {
  console.log(`No image found in ${RAW}/`);
  process.exit(0);
}

await mkdir('public/profile', { recursive: true });
const info = await sharp(join(RAW, file))
  .rotate()
  .resize({ width: 800, height: 1000, fit: 'cover', position: sharp.strategy.attention })
  .webp({ quality: 82 })
  .toFile(OUT);

console.log(`Saved ${OUT} (${Math.round(info.size / 1024)} KB). Check the crop, then paste into src/data/site.ts:`);
console.log(`export const profilePhoto = { src: 'profile/photo.webp', width: ${info.width}, height: ${info.height} };`);
