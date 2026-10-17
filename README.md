# Mohamed Mosaad — Portfolio

Bilingual (English / Arabic, with full RTL) portfolio for a Flutter developer and video editor.
React + TypeScript + Vite. No backend, no tracking, deploys to GitHub Pages.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev          # http://localhost:5173/mohamed-mosaad-portfolio/
npm run typecheck    # TypeScript only
npm run build        # type-check + production build into dist/
npm run preview      # serve the production build locally
```

## Project structure

```
src/
  data/            <- everything you edit to change content
    site.ts          contact links, name, Drive folder
    projects.ts      Flutter projects (add / edit here)
    videos.ts        video gallery + showreel (add / edit here)
    skills.ts        skill groups
    editing.ts       editing software and services
  i18n/
    en.ts, ar.ts     all UI text (TypeScript enforces both have the same keys)
    LanguageProvider language state, persistence (localStorage), <html lang/dir> sync
  components/      reusable pieces (Header, ProjectRow, VideoCard, ...)
  sections/        one file per page section
  styles.css       design tokens + all styles (CSS logical properties for RTL)
public/            favicon, og-image, project screenshots, small videos
scripts/optimize-images.mjs
.github/workflows/deploy.yml
```

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `mohamed-mosaad-portfolio`.
2. Push this project to the `main` branch:
   ```bash
   git remote add origin https://github.com/mm1665390-beep/<repo-name>.git
   git push -u origin main
   ```
3. In the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`. It reads the
   repository name and builds with the right base path automatically (`/<repo-name>/`).
   Your site appears at `https://mm1665390-beep.github.io/<repo-name>/`.

Notes:
- If you name the repo `mm1665390-beep.github.io`, the workflow switches the base path to `/` by itself.
- For a custom domain, set the `VITE_BASE` environment variable to `/` in the workflow's
  "Work out the base path" step and `VITE_SITE_URL` to your domain.
- For local builds with a different repo name: `VITE_BASE=/my-repo/ npm run build`.

## Adding a Flutter project

Open `src/data/projects.ts` and append an object to the `projects` array. Give it an `id`,
`name`, `repo`, `kind` (`'solo'` or `'team'`), bilingual `description`, and a `stack` list
that only contains technologies you can see in the repository. Nothing else needs changing.

## Adding screenshots

Only use real screenshots of the running app.

1. Save them in `public/projects/raw/<project-id>/` (git-ignored).
2. Run `npm run optimize-images`. It writes WebP files to `public/projects/<project-id>/`
   and prints a ready-to-paste `images` entry with the correct width and height.
3. Paste that entry into the project's `images` array in `src/data/projects.ts`.

Until a project has real images, its card shows an **illustrative phone preview** (drawn in
HTML/CSS, labelled "Illustrative preview, not a screenshot of the app"). They are generic
layouts, not the real apps. As soon as you add entries to `images`, the real screenshot
replaces the illustration automatically. The layout is chosen with `mockup: 'shop' | 'cards' | 'list'`.

## Adding your photo

1. Put one photo in `public/profile/raw/` (git-ignored).
2. `npm run optimize-photo` creates `public/profile/photo.webp` (4:5, 800x1000) and prints a line.
3. Paste that `profilePhoto` object into `src/data/site.ts`. Until then the hero shows the "MM" mark.

## Adding videos

The gallery currently shows six real thumbnails (in `public/videos/posters/`). Each one links
to your Drive folder because individual file links were not available. To make a card play
the actual video, replace its `source` in `src/data/videos.ts` using one of the options below.

Google Drive folders cannot be read or embedded automatically: the folder listing needs a
signed-in browser, and each file must be individually shared. Add videos one of these ways
in `src/data/videos.ts`:

| Where the video lives | What to add | Notes |
| --- | --- | --- |
| Any URL (current setup) | `{ kind: 'link', href: 'https://...' }` | Thumbnail opens the URL in a new tab. Use a single file's Drive share link here. |
| YouTube / Vimeo (recommended for large files) | `{ kind: 'youtube', id: '...' }` | Upload as *Unlisted* if you do not want it searchable. |
| Google Drive | `{ kind: 'drive', id: 'FILE_ID' }` | In Drive: right-click file → Share → *Anyone with the link: Viewer*. The ID is the part between `/d/` and `/view` in the share link. |
| Small MP4 in this repo | `{ kind: 'file', src: 'videos/clip.mp4' }` | Keep under about 25 MB. Do **not** commit large originals; GitHub rejects files over 100 MB and slows down on big repos. |

Each item also takes a bilingual `title`, a `category`, and an optional `poster` image
(`public/videos/posters/...`). Set `showreel` for a large featured video above the grid.

Videos load only after the visitor presses play, so the page stays fast.
To download originals from Drive: open the folder, select the files, right-click → Download.

## Accessibility and SEO

- Semantic landmarks, skip link, keyboard-operable menu and language switcher, visible focus.
- `prefers-reduced-motion` disables the reveal animations.
- `<html lang>` and `dir` update with the language; title and description update too.
- Open Graph / Twitter / JSON-LD tags are in `index.html`. Canonical and `og:image` URLs
  are added at build time when `VITE_SITE_URL` is set (the workflow does this).

## Content honesty

Project descriptions only state what is visible in each repository's README or `pubspec.yaml`.
Team projects are labelled as such. Please review `src/data/skills.ts` and `src/data/editing.ts`
and remove anything you do not want to claim.
