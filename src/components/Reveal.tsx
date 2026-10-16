import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Delay in ms, used sparingly for small staggers. */
  delay?: number;
}

/**
 * Fades content up once when it scrolls into view.
 * Does nothing (content is visible immediately) if the user prefers reduced motion
 * or IntersectionObserver is unavailable.
 */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
