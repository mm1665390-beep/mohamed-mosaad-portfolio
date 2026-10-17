import { useLanguage } from '../i18n/LanguageProvider';
import { skillGroups } from '../data/skills';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { cssVars } from '../lib/css';

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="section section-tint" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          id="skills-title"
          index={t.skills.index}
          title={t.skills.title}
          intro={t.skills.intro}
        />
        <div className="skill-groups">
          {skillGroups.map((g, i) => (
            <Reveal key={g.id} className="skill-group" delay={i * 90}>
              <div className="skill-card-top">
                <span className="skill-card-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="skill-card-mark" aria-hidden="true"><span /></span>
              </div>
              <h3>{t.skills.groups[g.id]}</h3>
              <ul className="skill-list">
                {g.items.map((item, k) => (
                  <li key={item} dir="ltr" style={cssVars({ '--k': k })}>
                    <span className="skill-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
