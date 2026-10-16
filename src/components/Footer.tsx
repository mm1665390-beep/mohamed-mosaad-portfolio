import { useLanguage } from '../i18n/LanguageProvider';
import { site } from '../data/site';
import { Monogram } from './Monogram';
import { ExternalLink } from './ExternalLink';

export function Footer() {
  const { t, l } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-id">
          <Monogram />
          <p>
            © {year} {l(site.name)}. {t.footer.rights}
          </p>
        </div>
        <ul className="footer-links">
          <li>
            <ExternalLink href={site.github} plain>
              {t.contact.github}
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={site.linkedin} plain>
              {t.contact.linkedin}
            </ExternalLink>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>{t.contact.email}</a>
          </li>
          <li>
            <a href="#home">{t.footer.top}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
