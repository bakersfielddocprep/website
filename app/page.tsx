"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Divorce & Family",
    description:
      "Clear, complete forms for divorce, separation, custody, and support.",
    image: "/images/service-divorce-family.jpg",
    alt: "Family court forms, a fountain pen, and a branded mug on a warm wooden table",
  },
  {
    number: "02",
    title: "Estate Planning",
    description:
      "Wills, trusts, powers of attorney, and advance health care directives.",
    image: "/images/service-estate-planning.jpg",
    alt: "Navy estate planning folio and pen beside a plant in a sunlit office",
  },
  {
    number: "03",
    title: "Landlord Documents",
    description:
      "Notices, leases, and rental documents done right the first time.",
    image: "/images/service-landlord.jpg",
    alt: "Well-maintained California rental home entrance in warm afternoon light",
  },
];

const additionalServices = [
  ["Probate Documents", "Organized preparation for petitions and supporting probate forms."],
  ["Civil Responses", "Careful preparation of responses and related civil court documents."],
  ["Small Claims", "Straightforward assistance preparing small claims paperwork."],
  ["Criminal Record Relief", "Document preparation for eligible record-relief filings."],
  ["Powers of Attorney", "Clear documents that help you plan for important decisions."],
  ["Health Care Directives", "Preparation of advance health care directive documents."],
];

const processSteps = [
  ["01", "Tell us what you need", "Start with a focused conversation about the documents you want prepared."],
  ["02", "We prepare the forms", "Your paperwork is organized and prepared at your direction."],
  ["03", "You review & file", "Review the completed documents and stay in control of the filing process."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Registered &amp; Bonded <i /> California LDA #232</span>
          <a href="tel:+16612180111">
            Call or text <strong>661 218 0111</strong>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-inner">
          <a className="brand" href="#top" aria-label="Bakersfield Doc Prep Co. home">
            <span className="brand-mark-wrap">
              <img src="/images/brand-mark.png" alt="" />
            </span>
            <span className="brand-name">
              <strong>Bakersfield</strong>
              <span>Doc Prep Co.</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#process">How it works</a>
            <a href="#about">About</a>
            <a href="#resources">Resources</a>
          </nav>

          <a className="button button-outline nav-cta" href="#contact">
            Start your documents
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>How it works</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#resources" onClick={closeMenu}>Resources</a>
          <a className="button button-gold" href="#contact" onClick={closeMenu}>
            Start your documents
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" id="content">
          <div className="hero-copy-inner reveal is-visible">
            <p className="eyebrow">California Legal Document Assistant</p>
            <h1>
              Legal paperwork.
              <br />
              Clearly handled.
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="hero-lede">
              Professional document preparation without the attorney retainer.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#services">View services</a>
              <a className="button button-outline" href="#process">How it works</a>
            </div>
            <p className="disclaimer">
              We are not attorneys and cannot provide legal advice.
            </p>
          </div>
        </div>

        <figure className="hero-visual">
          <img
            src="/images/hero-samuel.jpg"
            alt="Samuel, owner of Bakersfield Doc Prep Co., in a warm Bakersfield office overlooking palm trees and civic buildings"
          />
          <figcaption className="owner-caption">
            <span>Samuel</span>
            <small>Owner &amp; California LDA #232</small>
          </figcaption>
        </figure>
      </section>

      <section className="trust-bar" aria-label="Why clients choose us">
        <div className="shell trust-grid">
          {[
            ["◇", "Flat-fee options"],
            ["✓", "Accurate preparation"],
            ["○", "You stay in control"],
            ["CA", "Serving California"],
          ].map(([icon, label]) => (
            <div className="trust-item" key={label}>
              <span className="trust-icon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Practical support. Thoughtful preparation.</p>
            <h2>Support for life&apos;s important next steps</h2>
            <p>
              Professional document preparation designed to make complicated
              paperwork feel clear, organized, and manageable.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <a className="service-card reveal" href="#contact" key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt={service.alt} />
                </div>
                <div className="service-content">
                  <span className="card-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="text-link">Learn more <b aria-hidden="true">→</b></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="shell">
          <div className="process-intro reveal">
            <p className="eyebrow">How it works</p>
            <h2>A clearer path, from first call to finished documents.</h2>
            <p>
              You stay informed and in control. We keep the preparation process
              organized and moving forward at your direction.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map(([number, title, description]) => (
              <article className="process-step reveal" key={number}>
                <span className="step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <figure className="about-image reveal">
            <img
              src="/images/about-office.jpg"
              alt="Bakersfield Doc Prep Co. office desk with branded folio, documents, and a view of Bakersfield"
            />
            <figcaption>California rooted. Community focused.</figcaption>
          </figure>

          <div className="about-copy reveal">
            <p className="eyebrow">About Bakersfield Doc Prep Co.</p>
            <h2>Professional preparation. Human guidance.</h2>
            <p className="large-copy">
              Many people need help completing legal documents—not the cost or
              complexity of an attorney retainer.
            </p>
            <p>
              Samuel founded Bakersfield Doc Prep Co. to make document preparation
              more affordable, accessible, and less intimidating. Every engagement
              is handled with care, organization, and respect for your direction.
            </p>
            <div className="credentials">
              <div><strong>Registered &amp; Bonded</strong><span>California LDA</span></div>
              <div><strong>LDA #232</strong><span>Professional preparation</span></div>
              <div><strong>Flat-fee options</strong><span>Clear expectations</span></div>
              <div><strong>Statewide service</strong><span>Serving California</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section additional-section" id="resources">
        <div className="shell">
          <div className="additional-heading reveal">
            <div>
              <p className="eyebrow">More ways we can help</p>
              <h2>Documents prepared for the moments that matter.</h2>
            </div>
            <p>
              Not sure which forms you need? Start with a conversation about the
              document-preparation service you are looking for.
            </p>
          </div>

          <div className="additional-grid">
            {additionalServices.map(([title, description], index) => (
              <a className="mini-service reveal" href="#contact" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-card reveal">
          <div className="contact-mark" aria-hidden="true">BD</div>
          <div>
            <p className="eyebrow">Start with a conversation</p>
            <h2>Ready to move forward?</h2>
            <p>
              Tell us what documents you need, and we&apos;ll help you understand the
              preparation process.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-gold" href="tel:+16612180111">Call 661 218 0111</a>
            <a className="button button-light" href="sms:+16612180111">Send a text</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="brand brand-inverse" href="#top">
              <span className="brand-name">
                <strong>Bakersfield</strong>
                <span>Doc Prep Co.</span>
              </span>
            </a>
            <p>
              Affordable, organized, and reliable legal document preparation
              throughout California.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#services">Services</a>
            <a href="#process">How it works</a>
            <a href="#about">About</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+16612180111">661 218 0111</a>
            <span>California LDA #232</span>
            <span>Registered &amp; Bonded</span>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>
            Bakersfield Doc Prep Co. is a registered and bonded California Legal
            Document Assistant. We are not attorneys, cannot provide legal advice,
            and cannot represent clients in court.
          </p>
          <span>© {new Date().getFullYear()} Bakersfield Doc Prep Co.</span>
        </div>
      </footer>
    </main>
  );
}
