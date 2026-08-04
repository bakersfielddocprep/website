import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPage, PageCta } from "../../../components/InteriorPage";
import { getService, services } from "../../../lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Bakersfield Doc Prep Co.`,
    description: service.cardDescription,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <InteriorPage eyebrow={service.eyebrow} title={service.headline} intro={service.intro[0]}>
      <section className="detail-intro-section">
        <div className={`shell detail-intro-grid ${service.image ? "with-image" : ""}`}>
          {service.image && (
            <figure className="detail-image">
              <img src={service.image} alt={service.imageAlt ?? ""} />
            </figure>
          )}
          <div className="detail-prose">
            <p className="eyebrow">What this service means</p>
            <h2>Preparation at your specific direction.</h2>
            <p>{service.intro[0]}</p>
            <p>{service.intro[1]}</p>
            <div className="scope-notice">
              <strong>Important scope notice</strong>
              <p>
                Bakersfield Doc Prep Co. is not a law firm. We are not attorneys and cannot
                represent you or advise about legal rights, remedies, defenses, options,
                form selection, or strategy. You select the documents, provide the information,
                and direct how they are completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-list-section">
        <div className="shell detail-list-grid">
          <div>
            <p className="eyebrow">Documents we can prepare</p>
            <h2>Once you have selected the documents you need.</h2>
          </div>
          <ul className="editorial-list">
            {service.includes.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="detail-process-section">
        <div className="shell">
          <div className="detail-section-heading">
            <p className="eyebrow">A simple preparation process</p>
            <h2>Clear steps. Clear responsibility.</h2>
          </div>
          <div className="detail-steps">
            {service.steps.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2>Know what document preparation does—and does not—include.</h2>
            <a className="official-resource-link" href={service.resource.url} target="_blank" rel="noreferrer">
              {service.resource.label} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list">
            {service.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <PageCta />
    </InteriorPage>
  );
}
