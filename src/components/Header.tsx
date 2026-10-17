import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Monogram } from './Monogram';
import { CloseIcon, MenuIcon } from './icons';

export const NAV_ITEMS = [
  'home',
  'about',
  'flutter',
  'video',
  'skills',
  'tools',
  'contact',
] as const;
export type NavId = (typeof NAV_ITEMS)[number];

function useActiveSection(): NavId {
  const [active, setActive] = useState<NavId>('home');
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const sections = NAV_ITEMS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as NavId);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return active;
}

/** Reading-progress bar value (0..1, written straight to a CSS variable) and a "scrolled" flag. */
function useScrollState(barRef: React.RefObject<HTMLSpanElement | null>) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? el.scrollTop / max : 0;
      barRef.current?.style.setProperty('--p', String(p));
      setScrolled(el.scrollTop > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [barRef]);
  return scrolled;
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const barRef = useRef<HTMLSpanElement>(null);
  const scrolled = useScrollState(barRef);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`.trim()}>
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Mohamed Mosaad — Home">
          <Monogram />
        </a>

        <nav
          id="primary-nav"
          className={`nav ${open ? 'is-open' : ''}`}
          aria-label={t.nav.label}
        >
          <ul>
            {NAV_ITEMS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <span className="progress" ref={barRef} aria-hidden="true" />
    </header>
  );
}
