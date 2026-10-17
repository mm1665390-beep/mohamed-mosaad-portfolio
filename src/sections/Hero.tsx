import { useLanguage } from '../i18n/LanguageProvider';
import { profilePhoto, site } from '../data/site';
import { assetUrl } from '../lib/assets';
import { cssVars } from '../lib/css';
import { ArrowIcon } from '../components/icons';

export function Hero() {
  const { t, l } = useLanguage();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {/* Decorative, very slow background motion in brand colours only */}
      <div className="hero-bg" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow enter" style={cssVars({ '--i': 0 })}>
            {l(site.name)} · {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-title enter" style={cssVars({ '--i': 1 })}>
            <span className="hero-line">{t.hero.role1}</span>
            <span className="hero-line hero-line-accent">{t.hero.role2}</span>
          </h1>
          <p className="hero-lead enter" style={cssVars({ '--i': 2 })}>
            {t.hero.lead}
          </p>
          <div className="hero-actions enter" style={cssVars({ '--i': 3 })}>
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

        {profilePhoto ? (
          <div className="hero-photo">
            <img
              src={assetUrl(profilePhoto.src)}
              width={profilePhoto.width}
              height={profilePhoto.height}
              alt={l(site.name)}
              fetchPriority="high"
              decoding="async"
            />
            <span className="hero-photo-tag" aria-hidden="true">
              {site.initials}
            </span>
          </div>
        ) : (
          <div className="hero-mark" aria-hidden="true">
            <span className="hero-mark-letters">{site.initials}</span>
          </div>
        )}
      </div>
    </section>
  );
}
