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
  const realEstateVideos = videos.filter((v) => v.category === 'realEstate');
  const reelVideos = videos.filter((v) => v.category !== 'realEstate');
  const renderVideos = (items: typeof videos) => (
    <ul className={`video-grid ${items.every((v) => v.aspect === 'portrait') ? 'video-grid--portrait' : ''}`.trim()}>
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

        {reelVideos.length > 0 && (
          <div className="video-category-group">
            <h3 className="video-group-title">{t.video.reelsHeading}</h3>
            {renderVideos(reelVideos)}
          </div>
        )}

        {realEstateVideos.length > 0 && (
          <div className="video-category-group video-category-group--real-estate">
            <h3 className="video-group-title">{t.video.realEstateHeading}</h3>
            <p className="video-group-intro">{t.video.realEstateIntro}</p>
            {renderVideos(realEstateVideos)}
          </div>
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
