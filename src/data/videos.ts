import type { L10n } from '../i18n/types';
import { site } from './site';

/**
 * Four ways to add a video. Pick the one that fits where the file lives.
 *
 *  1. YouTube / Vimeo (best for big files; free hosting; fast)
 *       { kind: 'youtube', id: 'dQw4w9WgXcQ' }
 *       { kind: 'vimeo',   id: '123456789' }
 *
 *  2. Google Drive file (must be shared as "Anyone with the link can view")
 *       Share link: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *       { kind: 'drive', id: 'FILE_ID' }   -> plays inside the page
 *
 *  3. A small MP4 you host yourself (keep it under ~25 MB; do NOT commit big files)
 *       Put it in public/videos/ and add: { kind: 'file', src: 'videos/clip.mp4' }
 *
 *  4. A plain link (used now): the thumbnail opens a URL in a new tab.
 *       { kind: 'link', href: 'https://...' }
 *       Replace the Drive-folder href with a single file's share link as soon as you have it.
 *
 * `poster` is the thumbnail, relative to /public (e.g. 'videos/posters/clip.webp').
 */
export type VideoSource =
  | { kind: 'youtube'; id: string }
  | { kind: 'vimeo'; id: string }
  | { kind: 'drive'; id: string }
  | { kind: 'file'; src: string }
  | { kind: 'link'; href: string };

export type VideoCategory = 'showreel' | 'sports' | 'social' | 'promo' | 'other';

export interface VideoItem {
  id: string;
  title: L10n;
  category: VideoCategory;
  source: VideoSource;
  /** Path relative to /public. */
  poster?: string;
  /** Describes the thumbnail image for screen readers. */
  posterAlt?: L10n;
  /** 'portrait' is 9:16 (reels / shorts). Defaults to 16:9. */
  aspect?: 'portrait' | 'landscape';
  description?: L10n;
}

/** Optional featured video shown large above the gallery. */
export const showreel: VideoItem | null = null;

/**
 * Thumbnails are real frames from your edits. Individual video links were not
 * available, so every card opens your Drive folder. Swap each `source` for the
 * file's own share link when you have it.
 */
const driveFolder: VideoSource = { kind: 'link', href: site.driveFolder };

export const videos: VideoItem[] = [
  {
    id: 'podcast-captions',
    title: {
      en: 'Podcast short with animated captions',
      ar: 'مقطع بودكاست بعناوين متحركة',
    },
    category: 'social',
    aspect: 'portrait',
    poster: 'videos/posters/reel-podcast-captions.webp',
    posterAlt: {
      en: 'Frame from a vertical podcast edit with large animated caption text over a speaker at a microphone',
      ar: 'لقطة من مقطع بودكاست رأسي بعنوان متحرك كبير فوق متحدث أمام ميكروفون',
    },
    source: driveFolder,
  },
  {
    id: 'clinic-reel',
    title: {
      en: 'Healthcare talking-head reel (Arabic)',
      ar: 'ريل طبي بالعربية',
    },
    category: 'social',
    aspect: 'portrait',
    poster: 'videos/posters/reel-clinic-arabic.webp',
    posterAlt: {
      en: 'Frame from a vertical Arabic healthcare reel with colour caption boxes and an anatomy inset',
      ar: 'لقطة من ريل طبي رأسي بالعربية بعناوين ملوّنة وصورة توضيحية للجهاز الهضمي',
    },
    source: driveFolder,
  },
  {
    id: 'product-promo',
    title: {
      en: 'Product promo reel with Arabic captions',
      ar: 'ريل ترويجي لمنتج بعناوين عربية',
    },
    category: 'promo',
    aspect: 'portrait',
    poster: 'videos/posters/reel-product-demo.webp',
    posterAlt: {
      en: 'Frame from a vertical kitchen product promo with glowing Arabic caption text',
      ar: 'لقطة من ريل ترويجي رأسي داخل مطبخ بعناوين عربية مضيئة',
    },
    source: driveFolder,
  },
  {
    id: 'real-estate-reel',
    title: {
      en: 'Real estate talking-head reel',
      ar: 'ريل عقاري',
    },
    category: 'promo',
    aspect: 'portrait',
    poster: 'videos/posters/reel-real-estate.webp',
    posterAlt: {
      en: 'Frame from a vertical real estate reel with a land aerial inset, hand-drawn arrow and yellow Arabic captions',
      ar: 'لقطة من ريل عقاري رأسي بصورة جوية لأرض وسهم مرسوم وعناوين عربية صفراء',
    },
    source: driveFolder,
  },
  {
    id: 'brand-intro',
    title: {
      en: 'Animated brand-intro title',
      ar: 'عنوان افتتاحي متحرك لعلامة تجارية',
    },
    category: 'other',
    aspect: 'portrait',
    poster: 'videos/posters/title-brand-intro.webp',
    posterAlt: {
      en: 'Frame from an animated title sequence with Arabic and English text on a grey textured background',
      ar: 'لقطة من عنوان متحرك بنص عربي وإنجليزي على خلفية رمادية مزخرفة',
    },
    source: driveFolder,
  },
  {
    id: 'animated-title-card',
    title: {
      en: 'Animated title card with portrait',
      ar: 'كارت عناوين متحرك مع صورة',
    },
    category: 'other',
    aspect: 'portrait',
    poster: 'videos/posters/title-animated-card.webp',
    posterAlt: {
      en: 'Frame from an animated title card with a framed portrait and Arabic and English captions',
      ar: 'لقطة من كارت عناوين متحرك بصورة داخل إطار وعناوين بالعربية والإنجليزية',
    },
    source: driveFolder,
  },
];
