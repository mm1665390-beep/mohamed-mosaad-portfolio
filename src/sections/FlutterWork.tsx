import { useLanguage } from '../i18n/LanguageProvider';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectRow } from '../components/ProjectRow';
import { ExternalLink } from '../components/ExternalLink';

const pad = (n: number, lang: 'en' | 'ar') =>
  new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US', { minimumIntegerDigits: 2 }).format(n);

export function FlutterWork() {
  const { t, lang } = useLanguage();
  return (
    <section id="flutter" className="section section-tint" aria-labelledby="flutter-title">
      <div className="container">
        <SectionHeader
          id="flutter-title"
          index={t.flutter.index}
          title={t.flutter.title}
          intro={t.flutter.intro}
        />
        <div className="projects">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} number={pad(i + 1, lang)} />
          ))}
        </div>
        <p className="section-more">
          <ExternalLink href={site.github} className="text-link">
            {t.flutter.allRepos}
          </ExternalLink>
        </p>
      </div>
    </section>
  );
}
