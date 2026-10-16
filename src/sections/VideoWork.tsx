import { useLanguage } from '../i18n/LanguageProvider';
import { showreel, videos } from '../data/videos';
import { site } from '../data/site';
import { SectionHeader } from '../components/SectionHeader';
import { VideoCard } from '../components/VideoCard';
import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';

export function VideoWork() {
  const { t } = useLanguage();
  const hasContent = Boolean(showreel) || videos.length > 0;

  return (
    <section id="video" className="section" aria-labelledby="video-title">
      <div className="container">
        <SectionHeader
          id="video-title"
          index={t.video.index}
          title={t.video.title}
          intro={t.video.intro}
        />

        {showreel && (
          <Reveal className="showreel">
            <VideoCard item={showreel} featured />
          </Reveal>
        )}

        {videos.length > 0 && (
          <ul className="video-grid">
            {videos.map((v) => (
              <li key={v.id}>
                <Reveal>
                  <VideoCard item={v} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}

        {!hasContent && (
          <Reveal className="video-empty">
            <h3>{t.video.emptyTitle}</h3>
            <p>{t.video.emptyBody}</p>
          </Reveal>
        )}

        <p className="section-more">
          <ExternalLink href={site.driveFolder} className="button button-primary" plain>
            {t.video.openDrive}
          </ExternalLink>
        </p>
      </div>
    </section>
  );
}
