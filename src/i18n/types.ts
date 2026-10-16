export type Lang = 'en' | 'ar';

/** A string that exists in both languages. Used by content files in src/data. */
export type L10n = Record<Lang, string>;

export const LANGS: Lang[] = ['en', 'ar'];
export const DEFAULT_LANG: Lang = 'en';
export const STORAGE_KEY = 'portfolio-lang';

export const DIR: Record<Lang, 'ltr' | 'rtl'> = { en: 'ltr', ar: 'rtl' };
