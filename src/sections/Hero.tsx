import { useLanguage } from '../i18n/LanguageProvider';
import { site } from '../data/site';
import { ArrowIcon } from '../components/icons';

export function Hero() {
  const { t, l } = useLanguage();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            {l(site.name)} · {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-line">{t.hero.role1}</span>
            <span className="hero-line hero-line-accent">{t.hero.role2}</span>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#flutter">
              {t.hero.ctaWork}
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#video">
              {t.hero.ctaVideo}
            </a>
            <a className="button button-text" href="#contact">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <span className="hero-mark-letters">{site.initials}</span>
        </div>
      </div>
    </section>
  );
}
