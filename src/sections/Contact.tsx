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
    { key: 'email', label: t.contact.email, value: site.email, detail: t.contact.emailDetail, href: `mailto:${site.email}`, external: false, number: '01' },
    { key: 'whatsapp', label: t.contact.whatsapp, value: site.whatsappDisplay, detail: t.contact.whatsappDetail, href: whatsappHref, external: true, number: '02' },
    { key: 'linkedin', label: t.contact.linkedin, value: 'mohamed-mosaad', detail: t.contact.linkedinDetail, href: site.linkedin, external: true, number: '03' },
    { key: 'github', label: t.contact.github, value: 'mm1665390-beep', detail: t.contact.githubDetail, href: site.github, external: true, number: '04' },
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

        <Reveal className="contact-cta-panel">
          <div className="contact-cta-copy">
            <span className="contact-availability"><span aria-hidden="true" />{t.contact.eyebrow}</span>
            <h3>{t.contact.ctaTitle}</h3>
            <p>{t.contact.ctaLead}</p>
          </div>
          <a className="contact-primary-cta" href={`mailto:${site.email}`}>
            <span>{t.contact.startProject}</span>
            <ArrowIcon />
          </a>
        </Reveal>

        <Reveal as="ul" className="contact-list">
          {rows.map((r) => (
            <li key={r.key}>
              {r.external ? (
                <ExternalLink href={r.href} className="contact-row" plain>
                  <span className="contact-number" aria-hidden="true">{r.number}</span>
                  <span className="contact-card-copy">
                    <span className="contact-label">{r.label}</span>
                    <span className="contact-value" dir="ltr">{r.value}</span>
                    <span className="contact-detail">{r.detail}</span>
                  </span>
                  <span className="contact-arrow"><ArrowIcon /></span>
                </ExternalLink>
              ) : (
                <a href={r.href} className="contact-row">
                  <span className="contact-number" aria-hidden="true">{r.number}</span>
                  <span className="contact-card-copy">
                    <span className="contact-label">{r.label}</span>
                    <span className="contact-value" dir="ltr">{r.value}</span>
                    <span className="contact-detail">{r.detail}</span>
                  </span>
                  <span className="contact-arrow"><ArrowIcon /></span>
                </a>
              )}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
