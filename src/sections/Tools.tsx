import { useLanguage } from '../i18n/LanguageProvider';
import { editingServices, editingTools } from '../data/editing';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';

export function Tools() {
  const { t, l } = useLanguage();
  return (
    <section id="tools" className="section" aria-labelledby="tools-title">
      <div className="container">
        <SectionHeader
          id="tools-title"
          index={t.tools.index}
          title={t.tools.title}
          intro={t.tools.intro}
        />
        <div className="tools-grid">
          <Reveal>
            <h3 className="subhead">{t.tools.toolsLabel}</h3>
            <ul className="tool-list">
              {editingTools.map((tool) => (
                <li key={tool.name}>
                  <span className="tool-name" dir="ltr">
                    {tool.name}
                  </span>
                  <span className="tool-role">{l(tool.role)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="subhead">{t.tools.servicesLabel}</h3>
            <ul className="service-list">
              {editingServices.map((s) => (
                <li key={s.en}>{l(s)}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
