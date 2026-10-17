import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface Props {
  id: string;
  index: string;
  title: string;
  intro?: ReactNode;
}

/** Numbered section heading that animates in once. `id` is used for aria-labelledby. */
export function SectionHeader({ id, index, title, intro }: Props) {
  return (
    <Reveal as="header" className="section-header">
      <p className="section-index" aria-hidden="true">
        {index}
      </p>
      <div>
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </Reveal>
  );
}
