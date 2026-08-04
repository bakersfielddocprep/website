import type { Metadata } from "next";
import { InteriorPage, PageCta } from "../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Official Legal Self-Help Resources | Bakersfield Doc Prep Co.",
  description: "Official California and Kern County court resources for forms, self-help information, and procedural guidance.",
};

const resources = [
  ["California Courts Self-Help Guide", "Statewide step-by-step information for self-represented court users.", "https://selfhelp.courts.ca.gov/"],
  ["Find California Court Forms", "Search current Judicial Council forms by topic, title, or form number.", "https://selfhelp.courts.ca.gov/find-forms"],
  ["Kern County Superior Court Self-Help", "Local self-help services, appointments, case topics, and contact information.", "https://www.kern.courts.ca.gov/self-help"],
  ["Kern County Forms & Filing", "Local court forms, filing information, fee schedules, and local rules.", "https://www.kern.courts.ca.gov/forms-filing"],
  ["Divorce Self-Help", "California Courts guidance for starting, responding to, and finishing a divorce.", "https://selfhelp.courts.ca.gov/divorce-california"],
  ["Wills, Estates & Probate", "Official information about advance planning and property after a death.", "https://selfhelp.courts.ca.gov/wills-estates-probate"],
  ["Small Claims Forms", "Current forms and official guidance for California small-claims cases.", "https://selfhelp.courts.ca.gov/small-claims-forms"],
  ["Clean Your Record", "California Courts information about different record-relief procedures.", "https://selfhelp.courts.ca.gov/clean-your-record"],
];

export default function ResourcesPage() {
  return (
    <InteriorPage
      eyebrow="Official resources"
      title="Reliable starting points for your own legal decisions."
      intro="These government resources can help you research procedures, locate forms, and find self-help services before directing document preparation."
    >
      <section className="resource-section">
        <div className="shell resource-grid">
          {resources.map(([title, copy, url], index) => (
            <a href={url} target="_blank" rel="noreferrer" className="resource-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2><p>{copy}</p><b>Visit official resource ↗</b>
            </a>
          ))}
        </div>
      </section>
      <section className="resource-note-section">
        <div className="shell resource-note-card">
          <p className="eyebrow">A note about these links</p>
          <h2>Information is not individual legal advice.</h2>
          <p>
            Court and government resources provide general information. They do not replace advice from
            an attorney who understands your facts. Bakersfield Doc Prep Co. does not control third-party
            content and cannot interpret it for you or recommend which forms or options to choose.
          </p>
        </div>
      </section>
      <PageCta copy="Once you have identified the documents you want prepared, call or text to discuss the next step." />
    </InteriorPage>
  );
}
