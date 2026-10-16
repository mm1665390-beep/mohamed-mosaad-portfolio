import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader id="about-title" index={t.about.index} title={t.about.title} />
        <div className="about-grid">
          <Reveal className="about-text">
            <p className="about-lead">{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </Reveal>
          <Reveal as="dl" className="facts" delay={80}>
            <div className="fact">
              <dt>{t.about.educationLabel}</dt>
              <dd>
                <strong>{t.about.school}</strong>
                <br />
                {t.about.degree}
              </dd>
            </div>
            <div className="fact">
              <dt>{t.about.locationLabel}</dt>
              <dd>{t.about.location}</dd>
            </div>
            <div className="fact">
              <dt>{t.about.languagesLabel}</dt>
              <dd>{t.about.languages}</dd>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
