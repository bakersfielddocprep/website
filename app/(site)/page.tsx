"use client";

import { useEffect } from "react";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

const services = [
  {
    number: "01",
    slug: "divorce-family",
    title: "Divorce & Family",
    description:
      "Clear, complete forms for divorce, separation, custody, and support.",
    image: "/images/service-divorce-family.jpg",
    alt: "Family court forms, a fountain pen, and a branded mug on a warm wooden table",
  },
  {
    number: "02",
    slug: "estate-planning",
    title: "Estate Planning",
    description:
      "Wills, trusts, powers of attorney, and advance health care directives.",
    image: "/images/service-estate-planning.jpg",
    alt: "Navy estate planning folio and pen beside a plant in a sunlit office",
  },
  {
    number: "03",
    slug: "landlord-documents",
    title: "Landlord Documents",
    description:
      "Notices, leases, and rental documents done right the first time.",
    image: "/images/service-landlord.jpg",
    alt: "Well-maintained California rental home entrance in warm afternoon light",
  },
];

const additionalServices = [
  ["Probate Documents", "Organized preparation for petitions and supporting probate forms.", "probate-documents"],
  ["Civil Responses", "Careful preparation of responses and related civil court documents.", "civil-responses"],
  ["Small Claims", "Straightforward assistance preparing small claims paperwork.", "small-claims"],
  ["Criminal Record Relief", "Preparation after you have identified the relief and forms you want.", "criminal-record-relief"],
  ["Powers of Attorney", "Preparation using the agent, powers, and instructions you provide.", "powers-of-attorney"],
  ["Health Care Directives", "Preparation using your selected agent and health care instructions.", "advance-health-care-directives"],
];

const processSteps = [
  ["01", "Tell us what you need", "Start with a focused conversation about the documents you want prepared."],
  ["02", "We prepare the forms", "Your paperwork is organized and prepared at your direction."],
  ["03", "You review & file", "Review the completed documents and stay in control of the filing process."],
];

const trustItems = [
  {
    icon: <span className="trust-fee-symbol">$</span>,
    label: "Flat-fee options",
  },
  { icon: "✓", label: "Accurate preparation" },
  {
    icon: (
      <span className="trust-control-symbol">
        <span />
        <span />
        <span />
      </span>
    ),
    label: "You stay in control",
  },
  { icon: "CA", label: "Serving California" },
];

export default function Home() {
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

  return (
    <main>
      <SiteHeader />

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
              <a className="button button-gold" href="/services">View services</a>
              <a className="button button-outline" href="/how-it-works">How it works</a>
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
          {trustItems.map(({ icon, label }) => (
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
              <a className="service-card reveal" href={`/services/${service.slug}`} key={service.title}>
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
              Use an attorney or official self-help resource to identify your forms.
              Once selected, we can prepare them at your direction.
            </p>
          </div>

          <div className="additional-grid">
            {additionalServices.map(([title, description, slug], index) => (
              <a className="mini-service reveal" href={`/services/${slug}`} key={title}>
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
            <a className="button button-light" href="/start">What to expect</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
