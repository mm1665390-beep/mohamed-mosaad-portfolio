import type { ReactNode } from 'react';

interface Props {
  id: string;
  index: string;
  title: string;
  intro?: ReactNode;
}

/** Numbered section heading. `id` becomes the heading id for aria-labelledby. */
export function SectionHeader({ id, index, title, intro }: Props) {
  return (
    <header className="section-header">
      <p className="section-index" aria-hidden="true">
        {index}
      </p>
      <div>
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </header>
  );
}
