import type { Metadata } from "next";
import { InteriorPage, PageCta } from "../../components/InteriorPage";
import { services } from "../../lib/services";

export const metadata: Metadata = {
  title: "Legal Document Preparation Services | Bakersfield Doc Prep Co.",
  description: "Explore California legal document preparation services provided at the client's specific direction.",
};

export default function ServicesPage() {
  return (
    <InteriorPage
      eyebrow="Document preparation services"
      title="Professional preparation for the documents you select."
      intro="Choose a service to learn what we can prepare at your specific direction—and where document preparation stops and legal advice begins."
    >
      <section className="service-index-section">
        <div className="shell service-index-grid">
          {services.map((service, index) => (
            <a href={`/services/${service.slug}`} className="service-index-card" key={service.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.title}</h2>
              <p>{service.cardDescription}</p>
              <b>Read service details <i aria-hidden="true">→</i></b>
            </a>
          ))}
        </div>
      </section>
      <section className="global-scope-section">
        <div className="shell global-scope-grid">
          <div><p className="eyebrow">The LDA difference</p><h2>You make the legal decisions. We prepare the paperwork.</h2></div>
          <div>
            <p>
              A California Legal Document Assistant may complete client-selected documents in a
              ministerial manner using the client&apos;s specific direction. An LDA cannot recommend
              forms, interpret the law, advise about rights or strategy, or represent anyone in court.
            </p>
            <a className="official-resource-link" href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=6400." target="_blank" rel="noreferrer">
              Read California Business &amp; Professions Code §6400 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <PageCta />
    </InteriorPage>
  );
}
