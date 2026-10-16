import type { L10n } from '../i18n/types';

/**
 * Three ways to add a video. Pick the one that fits where the file lives.
 *
 *  1. YouTube / Vimeo (best for big files; free hosting; fast)
 *       { kind: 'youtube', id: 'dQw4w9WgXcQ' }
 *       { kind: 'vimeo',   id: '123456789' }
 *
 *  2. Google Drive (file must be shared as "Anyone with the link can view")
 *       Share link: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *       { kind: 'drive', id: 'FILE_ID' }
 *
 *  3. A small MP4 you host yourself (keep it under ~25 MB; do NOT commit big files)
 *       Put it in public/videos/ and add: { kind: 'file', src: 'videos/clip.mp4' }
 *
 * Add a poster image (optional but recommended) in public/videos/posters/
 * and reference it as poster: 'videos/posters/clip.webp'.
 *
 * Leave `videos` empty and the section shows a clean link to the Drive folder.
 */
export type VideoSource =
  | { kind: 'youtube'; id: string }
  | { kind: 'vimeo'; id: string }
  | { kind: 'drive'; id: string }
  | { kind: 'file'; src: string };

export type VideoCategory = 'showreel' | 'sports' | 'social' | 'promo' | 'other';

export interface VideoItem {
  id: string;
  title: L10n;
  category: VideoCategory;
  source: VideoSource;
  /** Path relative to /public. */
  poster?: string;
  description?: L10n;
}

/** Optional featured video shown large above the gallery. */
export const showreel: VideoItem | null = null;

/**
 * Gallery items. Empty on purpose: the Drive folder could not be read from here,
 * so no file names or IDs were invented. Add your real videos below.
 */
export const videos: VideoItem[] = [];
