/**
 * Converts raw screenshots into web-ready WebP files and prints the width/height
 * you need to paste into src/data/projects.ts.
 *
 * Usage:
 *   1. Put your real screenshots (png/jpg) in  public/projects/raw/<project-id>/
 *      (that folder is git-ignored so originals never bloat the repo)
 *   2. npm run optimize-images
 *   3. Optimised files appear in  public/projects/<project-id>/
 */
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const RAW = 'public/projects/raw';
const OUT = 'public/projects';
const MAX_WIDTH = 1200;

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(RAW))) {
  console.log(`Nothing to do: create ${RAW}/<project-id>/ and add screenshots first.`);
  process.exit(0);
}

for (const project of await readdir(RAW)) {
  const dir = join(RAW, project);
  if (!(await stat(dir)).isDirectory()) continue;
  await mkdir(join(OUT, project), { recursive: true });

  for (const file of await readdir(dir)) {
    if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
    const name = parse(file).name;
    const target = join(OUT, project, `${name}.webp`);
    const info = await sharp(join(dir, file))
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(target);
    console.log(
      `${target}  ->  { src: 'projects/${project}/${name}.webp', width: ${info.width}, height: ${info.height}, alt: { en: '...', ar: '...' } }`,
    );
  }
}
