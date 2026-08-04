import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function InteriorPage({
  eyebrow,
  title,
  intro,
  children,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <main>
      <SiteHeader />
      <section className={`interior-hero ${compact ? "interior-hero-compact" : ""}`} id="content">
        <div className="shell interior-hero-grid">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <p>{intro}</p>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function PageCta({
  heading = "Ready to get your paperwork moving?",
  copy = "Tell us which documents you want prepared and what information should be entered.",
}: {
  heading?: string;
  copy?: string;
}) {
  return (
    <section className="interior-cta">
      <div className="shell interior-cta-card">
        <div>
          <p className="eyebrow">Start with a conversation</p>
          <h2>{heading}</h2>
          <p>{copy}</p>
        </div>
        <div className="contact-actions">
          <a className="button button-gold" href="tel:+16612180111">Call 661 218 0111</a>
          <a className="button button-light" href="/start">What to expect</a>
        </div>
      </div>
    </section>
  );
}
