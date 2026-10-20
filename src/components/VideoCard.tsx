import { useState } from 'react';
import type { VideoItem, VideoSource } from '../data/videos';
import { useLanguage } from '../i18n/LanguageProvider';
import { assetUrl } from '../lib/assets';
import { ArrowIcon, PlayIcon } from './icons';
import { ExternalLink } from './ExternalLink';

function posterFor(item: VideoItem): string | null {
  if (item.poster) return assetUrl(item.poster);
  const s = item.source;
  if (s.kind === 'youtube') return `https://i.ytimg.com/vi/${s.id}/maxresdefault.jpg`;
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
    case 'link':
      return null; // link cards never mount a player
  }
}

/** Address of the original video, used for the "Open original" fallback link. */
function originalUrl(source: VideoSource): string | null {
  switch (source.kind) {
    case 'drive':
      return `https://drive.google.com/file/d/${source.id}/view`;
    case 'youtube':
      return `https://www.youtube.com/watch?v=${source.id}`;
    case 'vimeo':
      return `https://vimeo.com/${source.id}`;
    case 'file':
      return assetUrl(source.src);
    case 'link':
      return null; // the whole card is already the link
  }
}

/**
 * Video card.
 * - Embeddable sources load only after the visitor presses play.
 * - "link" sources show the thumbnail and open the URL in a new tab.
 */
export function VideoCard({ item, featured = false }: { item: VideoItem; featured?: boolean }) {
  const { t, l } = useLanguage();
  const [active, setActive] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [posterFallback, setPosterFallback] = useState(false);
  const poster = posterFor(item);
  const resolvedPoster = item.source.kind === 'youtube' && posterFallback
    ? `https://i.ytimg.com/vi/${item.source.id}/hqdefault.jpg`
    : poster;
  const title = l(item.title);
  const portrait = item.aspect === 'portrait';
  const posterAlt = item.posterAlt ? l(item.posterAlt) : '';
  const original = originalUrl(item.source);

  const image =
    poster && !posterFailed ? (
      <img
        src={resolvedPoster ?? undefined}
        alt={item.source.kind === 'link' ? posterAlt : ''}
        width={portrait ? 540 : 960}
        height={portrait ? 960 : 540}
        loading="lazy"
        decoding="async"
        onError={() => {
          if (item.source.kind === 'youtube' && !posterFallback) setPosterFallback(true);
          else setPosterFailed(true);
        }}
      />
    ) : (
      <span className="video-fallback" aria-hidden="true">
        {title}
      </span>
    );

  return (
    <figure
      className={`video-card ${featured ? 'is-featured' : ''} ${portrait ? 'is-portrait' : ''}`.trim()}
    >
      <div className="video-frame">
        {item.source.kind === 'link' ? (
          <a
            className="video-start"
            href={item.source.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {image}
            <span className="sr-only">
              {title} — {t.video.viewInDrive} ({t.contact.opensNew})
            </span>
            <span className="video-open" aria-hidden="true">
              {t.video.viewInDrive}
              <ArrowIcon width={16} height={16} />
            </span>
          </a>
        ) : active ? (
          <Player source={item.source} title={title} />
        ) : (
          <button
            type="button"
            className="video-start"
            onClick={() => setActive(true)}
            aria-label={`${t.video.play}: ${title}`}
          >
            {image}
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
        {original && (
          <ExternalLink href={original} className="video-original" plain>
            {t.video.openOriginal}
          </ExternalLink>
        )}
      </figcaption>
    </figure>
  );
}
