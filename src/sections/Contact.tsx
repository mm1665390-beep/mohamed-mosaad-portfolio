import { useLanguage } from '../i18n/LanguageProvider';
import { site } from '../data/site';
import { SectionHeader } from '../components/SectionHeader';
import { ExternalLink } from '../components/ExternalLink';
import { ArrowIcon } from '../components/icons';
import { Reveal } from '../components/Reveal';

export function Contact() {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    t.contact.whatsappMessage,
  )}`;

  const rows = [
    { key: 'email', label: t.contact.email, value: site.email, href: `mailto:${site.email}`, external: false },
    { key: 'whatsapp', label: t.contact.whatsapp, value: site.whatsappDisplay, href: whatsappHref, external: true },
    { key: 'linkedin', label: t.contact.linkedin, value: 'mohamed-mosaad', href: site.linkedin, external: true },
    { key: 'github', label: t.contact.github, value: 'mm1665390-beep', href: site.github, external: true },
  ];

  return (
    <section id="contact" className="section section-contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          id="contact-title"
          index={t.contact.index}
          title={t.contact.title}
          intro={t.contact.lead}
        />
        <Reveal as="ul" className="contact-list">
          {rows.map((r) => (
            <li key={r.key}>
              {r.external ? (
                <ExternalLink href={r.href} className="contact-row" plain>
                  <span className="contact-label">{r.label}</span>
                  <span className="contact-value" dir="ltr">
                    {r.value}
                  </span>
                  <ArrowIcon />
                </ExternalLink>
              ) : (
                <a href={r.href} className="contact-row">
                  <span className="contact-label">{r.label}</span>
                  <span className="contact-value" dir="ltr">
                    {r.value}
                  </span>
                  <ArrowIcon />
                </a>
              )}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
