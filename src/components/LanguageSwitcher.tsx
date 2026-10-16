import { useLanguage } from '../i18n/LanguageProvider';

/**
 * One button that switches to the other language. The visible label is written
 * in the target language (so an Arabic reader sees "العربية"), and is tagged with
 * its own lang attribute so screen readers pronounce it correctly.
 */
export function LanguageSwitcher() {
  const { lang, t, toggleLang } = useLanguage();
  const targetLang = lang === 'en' ? 'ar' : 'en';
  return (
    <button
      type="button"
      className="lang-switch"
      onClick={toggleLang}
      aria-label={t.lang.switchTo}
      lang={targetLang}
    >
      {t.lang.label}
    </button>
  );
}
