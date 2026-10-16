import { site } from '../data/site';

/** Typographic "MM" mark used in the header, footer and hero. No photo. */
export function Monogram({ className = '' }: { className?: string }) {
  return (
    <span className={`monogram ${className}`.trim()} aria-hidden="true">
      {site.initials}
    </span>
  );
}
