import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ExternalIcon } from './icons';
import { useLanguage } from '../i18n/LanguageProvider';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  /** Hide the trailing arrow icon. */
  plain?: boolean;
}

/** Link that opens in a new tab safely and tells screen readers so. */
export function ExternalLink({ href, children, plain, className, ...rest }: Props) {
  const { t } = useLanguage();
  const isHttp = /^https?:/i.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {isHttp && <span className="sr-only"> ({t.contact.opensNew})</span>}
      {!plain && <ExternalIcon className="link-icon" />}
    </a>
  );
}
