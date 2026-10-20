import { useLanguage } from '../i18n/LanguageProvider';
import { showreel, videos, youtubeVideos } from '../data/videos';
import { site } from '../data/site';
import { SectionHeader } from '../components/SectionHeader';
import { VideoCard } from '../components/VideoCard';
import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';

export function VideoWork() {
  const { t } = useLanguage();
  const hasContent = Boolean(showreel) || videos.length > 0;
  const portraitVideos = videos.filter((v) => v.aspect === 'portrait');
  const landscapeVideos = videos.filter((v) => v.aspect !== 'portrait');
  const renderVideos = (items: typeof videos, portrait: boolean) => (
    <ul className={`video-grid ${portrait ? 'video-grid--portrait' : 'video-grid--landscape'}`}>
      {items.map((v) => (
        <li key={v.id}><Reveal><VideoCard item={v} /></Reveal></li>
      ))}
    </ul>
  );

  return (
    <section id="video" className="section section-dark" aria-labelledby="video-title">
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

        {portraitVideos.length > 0 && renderVideos(portraitVideos, true)}
        {landscapeVideos.length > 0 && renderVideos(landscapeVideos, false)}

        <p className="section-more video-drive-more">
          <ExternalLink href={site.driveFolder} className="button button-primary" plain>
            {t.video.openDrive}
          </ExternalLink>
        </p>

        <div className="video-category-group video-youtube-group">
          <h3 className="video-group-title">{t.video.youtubeHeading}</h3>
          <p className="video-group-intro">{t.video.youtubeIntro}</p>
          <ul className="video-grid video-grid--youtube">
            {youtubeVideos.map((v) => (
              <li key={v.id}><Reveal><VideoCard item={v} /></Reveal></li>
            ))}
          </ul>
          <p className="section-more">
            <ExternalLink href="https://www.youtube.com/@MohamedMosaad-1" className="button button-primary youtube-channel-button" plain>
              {t.video.youtubeChannel}
            </ExternalLink>
          </p>
        </div>

        {!hasContent && (
          <Reveal className="video-empty">
            <h3>{t.video.emptyTitle}</h3>
            <p>{t.video.emptyBody}</p>
          </Reveal>
        )}

      </div>
    </section>
  );
}
