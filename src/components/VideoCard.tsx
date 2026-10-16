import { useState } from 'react';
import type { VideoItem, VideoSource } from '../data/videos';
import { useLanguage } from '../i18n/LanguageProvider';
import { assetUrl } from '../lib/assets';
import { PlayIcon } from './icons';

function posterFor(item: VideoItem): string | null {
  if (item.poster) return assetUrl(item.poster);
  const s = item.source;
  if (s.kind === 'youtube') return `https://i.ytimg.com/vi/${s.id}/hqdefault.jpg`;
  if (s.kind === 'drive') return `https://drive.google.com/thumbnail?id=${s.id}&sz=w960`;
  return null;
}

function Player({ source, title }: { source: VideoSource; title: string }) {
  switch (source.kind) {
    case 'youtube':
      return (
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${source.id}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      );
    case 'vimeo':
      return (
        <iframe
          title={title}
          src={`https://player.vimeo.com/video/${source.id}?autoplay=1`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    case 'drive':
      return (
        <iframe
          title={title}
          src={`https://drive.google.com/file/d/${source.id}/preview`}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      );
    case 'file':
      return (
        <video
          controls
          autoPlay
          playsInline
          preload="none"
          src={assetUrl(source.src)}
          aria-label={title}
        />
      );
  }
}

/**
 * Click-to-load video. Nothing but a still image is downloaded until the visitor
 * presses play, so a long gallery does not slow the page down.
 */
export function VideoCard({ item, featured = false }: { item: VideoItem; featured?: boolean }) {
  const { t, l } = useLanguage();
  const [active, setActive] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const poster = posterFor(item);
  const title = l(item.title);

  return (
    <figure className={`video-card ${featured ? 'is-featured' : ''}`}>
      <div className="video-frame">
        {active ? (
          <Player source={item.source} title={title} />
        ) : (
          <button
            type="button"
            className="video-start"
            onClick={() => setActive(true)}
            aria-label={`${t.video.play}: ${title}`}
          >
            {poster && !posterFailed ? (
              <img
                src={poster}
                alt=""
                loading="lazy"
                decoding="async"
                onError={() => setPosterFailed(true)}
              />
            ) : (
              <span className="video-fallback" aria-hidden="true">
                {title}
              </span>
            )}
            <span className="video-play" aria-hidden="true">
              <PlayIcon width={22} height={22} />
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <span className="video-category">{t.video.category[item.category]}</span>
        <span className="video-title">{title}</span>
        {item.description && <span className="video-desc">{l(item.description)}</span>}
      </figcaption>
    </figure>
  );
}
