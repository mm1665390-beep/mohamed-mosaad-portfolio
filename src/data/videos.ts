import type { L10n } from '../i18n/types';

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

export type VideoCategory = 'showreel' | 'sports' | 'social' | 'promo' | 'realEstate' | 'other';

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
 * Thumbnails are real frames from your edits. Each card plays its own MP4 from
 * public/videos/clips/ (a sub-folder, because public/videos/*.mp4 is git-ignored).
 */

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
    source: { kind: 'file', src: 'videos/clips/podcast-captions.mp4' },
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
    source: { kind: 'file', src: 'videos/clips/clinic-reel.mp4' },
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
    source: { kind: 'file', src: 'videos/clips/product-promo.mp4' },
  },
  {
    id: 'real-estate-reel',
    title: {
      en: 'Real estate talking-head reel',
      ar: 'ريل عقاري',
    },
    category: 'realEstate',
    aspect: 'portrait',
    poster: 'videos/posters/reel-real-estate.webp',
    posterAlt: {
      en: 'Frame from a vertical real estate reel with a land aerial inset, hand-drawn arrow and yellow Arabic captions',
      ar: 'لقطة من ريل عقاري رأسي بصورة جوية لأرض وسهم مرسوم وعناوين عربية صفراء',
    },
    source: { kind: 'file', src: 'videos/clips/real-estate-reel.mp4' },
  },
  {
    id: 'real-estate-land-highlight',
    title: {
      en: 'Muscat, Oman land plot — aerial location highlight',
      ar: 'قطعة أرض في مسقط، سلطنة عُمان — تحديد الموقع جويًا',
    },
    category: 'realEstate',
    aspect: 'landscape',
    poster: 'videos/posters/real-estate-land-highlight.webp',
    posterAlt: {
      en: 'Aerial desert map with a highlighted land plot, a glowing white outline, and a callout showing a modern house',
      ar: 'خريطة جوية لمنطقة صحراوية مع قطعة أرض محددة بإطار مضيء وخط يصلها بصورة منزل حديث',
    },
    description: {
      en: 'Aerial-style property presentation with land highlighting and a location callout.',
      ar: 'عرض عقاري بأسلوب التصوير الجوي مع تحديد الأرض وإبراز موقعها على الخريطة.',
    },
    source: { kind: 'file', src: 'videos/clips/muscat-land-highlight.mp4' },
  },
];


/** Selected videos from Mohamed's YouTube channel, using YouTube's own thumbnails. */
export const youtubeVideos: VideoItem[] = [
  {
    id: 'youtube-feature-1',
    title: { en: 'Creative Handmade Ideas', ar: 'أفكار ومنتجات يدوية مميزة' },
    category: 'other',
    source: { kind: 'youtube', id: 'Zg4UhjWw-eA' },
  },
  {
    id: 'youtube-feature-2',
    title: { en: 'Book Review & Self Development', ar: 'مراجعة كتاب وتطوير الذات' },
    category: 'other',
    source: { kind: 'youtube', id: '5ATYhZuwtcY' },
  },
  {
    id: 'youtube-feature-3',
    title: { en: 'Trying Real Estate Investing', ar: 'محاولة استثمار في العقار' },
    category: 'other',
    source: { kind: 'youtube', id: 'khRugKEexvo' },
  },
];
