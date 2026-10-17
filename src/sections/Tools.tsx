import { useLanguage } from '../i18n/LanguageProvider';
import { editingServices, editingTools } from '../data/editing';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { cssVars } from '../lib/css';

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
              {editingTools.map((tool, k) => (
                <li key={tool.name} style={cssVars({ '--k': k })}>
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
              {editingServices.map((s, k) => (
                <li key={s.en} style={cssVars({ '--k': k })}>
                  {l(s)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
