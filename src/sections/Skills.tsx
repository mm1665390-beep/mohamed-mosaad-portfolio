import { useLanguage } from '../i18n/LanguageProvider';
import { skillGroups } from '../data/skills';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';

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
            <Reveal key={g.id} className="skill-group" delay={i * 40}>
              <h3>{t.skills.groups[g.id]}</h3>
              <ul dir="ltr" className="skill-list">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
