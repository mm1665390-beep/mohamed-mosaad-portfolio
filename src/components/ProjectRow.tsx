import type { Project } from '../data/projects';
import { useLanguage } from '../i18n/LanguageProvider';
import { assetUrl } from '../lib/assets';
import { ExternalLink } from './ExternalLink';
import { ArrowIcon } from './icons';
import { Reveal } from './Reveal';

interface Props {
  project: Project;
  number: string;
}

export function ProjectRow({ project, number }: Props) {
  const { t, l } = useLanguage();
  const titleId = `project-${project.id}`;
  const shot = project.images[0];

  return (
    <Reveal as="article" className="project" >
      <div className="project-visual" aria-hidden={shot ? undefined : true}>
        {shot ? (
          <img
            src={assetUrl(shot.src)}
            width={shot.width}
            height={shot.height}
            alt={`${t.flutter.screenshotAlt} ${project.name}: ${l(shot.alt)}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-placeholder">
            <span className="project-placeholder-number">{number}</span>
            <span className="project-placeholder-name" dir="ltr">
              {project.name}
            </span>
          </div>
        )}
      </div>

      <div className="project-body">
        <p className="project-kind">
          <span className={`badge badge-${project.kind}`}>
            {project.kind === 'team' ? t.flutter.teamProject : t.flutter.soloProject}
          </span>
          {project.teamName && <span className="project-team">{project.teamName}</span>}
        </p>
        <h3 id={titleId} className="project-title" dir="ltr">
          {project.name}
        </h3>
        <p className="project-desc">{l(project.description)}</p>

        {project.status && (
          <p className="project-meta">
            <span className="meta-label">{t.flutter.status}</span>
            {l(project.status)}
          </p>
        )}

        <div className="project-stack">
          <span className="meta-label">{t.flutter.stack}</span>
          <ul className="chips" dir="ltr">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <ExternalLink
          href={project.repo}
          className="button button-secondary"
          aria-labelledby={`${titleId}-link ${titleId}`}
          plain
        >
          <span id={`${titleId}-link`}>{t.flutter.viewRepo}</span>
          <ArrowIcon />
        </ExternalLink>
      </div>
    </Reveal>
  );
}
