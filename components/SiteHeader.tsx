"use client";

import { useEffect, useState } from "react";

const links = [
  ["Services", "/services"],
  ["How it works", "/how-it-works"],
  ["About", "/about"],
  ["Resources", "/resources"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Registered &amp; Bonded <i /> California LDA #232</span>
          <a href="tel:+16612180111">Call or text <strong>661 218 0111</strong></a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell nav-inner">
          <a className="brand" href="/" aria-label="Bakersfield Doc Prep Co. home">
            <span className="brand-mark-wrap"><img src="/images/brand-mark.png" alt="" /></span>
            <span className="brand-name"><strong>Bakersfield</strong><span>Doc Prep Co.</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <a className="button button-outline nav-cta" href="/start">Start your documents</a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
        <nav
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <a href={href} onClick={() => setMenuOpen(false)} key={href}>{label}</a>
          ))}
          <a className="button button-gold" href="/start" onClick={() => setMenuOpen(false)}>
            Start your documents
          </a>
        </nav>
      </header>
    </>
  );
}
