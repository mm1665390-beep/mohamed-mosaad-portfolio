import type { ReactNode } from 'react';

export type MockupKind = 'shop' | 'cards' | 'list';

/**
 * ILLUSTRATIVE app previews built from plain HTML/CSS.
 * They are NOT screenshots. They show a generic layout for the kind of app
 * (shop / card catalogue / list) and are always shown with a visible
 * "Illustrative preview" label. Once a project has real screenshots in
 * src/data/projects.ts, those replace the mockup automatically.
 */

function Phone({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <div className="m-status">
          <span />
          <span />
        </div>
        {children}
      </div>
    </div>
  );
}

const Nav = () => (
  <div className="m-nav">
    <i className="is-on" />
    <i />
    <i />
    <i />
  </div>
);

const Bars = () => (
  <>
    <span className="m-bar" />
    <span className="m-bar m-bar-s" />
  </>
);

/* ---- shop: reflects the E-Commerce README (browse, search, cart, checkout) ---- */
function ShopFront() {
  return (
    <>
      <div className="m-head">
        <b className="m-title">Shop</b>
        <span className="m-dot" />
      </div>
      <div className="m-search">Search products</div>
      <div className="m-chips">
        <i className="is-on" />
        <i />
        <i />
      </div>
      <div className="m-grid">
        {[0, 1, 2, 3].map((n) => (
          <div className="m-card" key={n}>
            <span className={`m-img m-img-${n % 3}`} />
            <Bars />
            <span className="m-price" />
          </div>
        ))}
      </div>
      <Nav />
    </>
  );
}
function ShopBack() {
  return (
    <>
      <div className="m-head">
        <b className="m-title">Cart</b>
      </div>
      {[0, 1].map((n) => (
        <div className="m-row" key={n}>
          <span className={`m-thumb m-img-${n}`} />
          <div className="m-row-text">
            <Bars />
          </div>
          <span className="m-qty" />
        </div>
      ))}
      <div className="m-total">
        <span className="m-bar" />
        <span className="m-bar m-bar-s" />
      </div>
      <div className="m-button">Checkout</div>
    </>
  );
}

/* ---- cards: generic card catalogue, no text claims ---- */
function CardsFront() {
  return (
    <>
      <div className="m-head">
        <span className="m-bar m-bar-m" />
        <span className="m-dot" />
      </div>
      <span className="m-banner" />
      <div className="m-grid">
        {[0, 1, 2, 3].map((n) => (
          <div className="m-card" key={n}>
            <span className={`m-img m-img-${(n + 1) % 3}`} />
            <Bars />
          </div>
        ))}
      </div>
      <Nav />
    </>
  );
}
function CardsBack() {
  return (
    <>
      <span className="m-hero" />
      <div className="m-pad">
        <span className="m-bar m-bar-l" />
        <span className="m-bar" />
        <span className="m-bar" />
        <span className="m-bar m-bar-s" />
      </div>
      <div className="m-button" />
    </>
  );
}

/* ---- list: generic list layout, no text claims ---- */
function ListFront() {
  return (
    <>
      <div className="m-head">
        <span className="m-bar m-bar-m" />
        <span className="m-dot" />
      </div>
      <div className="m-search" />
      {[0, 1, 2, 3].map((n) => (
        <div className="m-row" key={n}>
          <span className={`m-avatar m-img-${n % 3}`} />
          <div className="m-row-text">
            <Bars />
          </div>
          <span className="m-chev" />
        </div>
      ))}
      <Nav />
    </>
  );
}
function ListBack() {
  return (
    <>
      <div className="m-head">
        <span className="m-bar m-bar-m" />
      </div>
      <span className="m-banner m-banner-tall" />
      <div className="m-pad">
        <span className="m-bar m-bar-l" />
        <span className="m-bar" />
        <span className="m-bar m-bar-s" />
      </div>
      <div className="m-button" />
    </>
  );
}

const screens: Record<MockupKind, { back: ReactNode; front: ReactNode }> = {
  shop: { back: <ShopBack />, front: <ShopFront /> },
  cards: { back: <CardsBack />, front: <CardsFront /> },
  list: { back: <ListBack />, front: <ListFront /> },
};

export function PhoneMockup({ kind, label }: { kind: MockupKind; label: string }) {
  const s = screens[kind];
  return (
    <div className="mock-panel">
      {/* Decorative. The label below is what screen readers get. */}
      <div className="mock" dir="ltr" aria-hidden="true">
        <Phone className="phone-back">{s.back}</Phone>
        <Phone className="phone-front">{s.front}</Phone>
      </div>
      <span className="mock-label">{label}</span>
    </div>
  );
}
