import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import en, { type Dictionary } from './en';
import ar from './ar';
import { DEFAULT_LANG, DIR, STORAGE_KEY, type L10n, type Lang } from './types';

const dictionaries: Record<Lang, Dictionary> = { en, ar };

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  /** Pick the current language from a bilingual content string. */
  l: (value: L10n) => string;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'ar') return stored;
  } catch {
    /* storage can be unavailable (private mode); fall back to default */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(
    () => setLang(lang === 'en' ? 'ar' : 'en'),
    [lang, setLang],
  );

  // Keep <html lang/dir>, the document title and the meta description in sync.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = DIR[lang];
    document.title = dictionaries[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dictionaries[lang].meta.description);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', lang === 'ar' ? 'ar_EG' : 'en_US');
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: DIR[lang],
      t: dictionaries[lang],
      l: (v) => v[lang],
      setLang,
      toggleLang,
    }),
    [lang, setLang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
