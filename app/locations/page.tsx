import type { Metadata } from "next";
import { InteriorPage, PageCta } from "../../components/InteriorPage";
import { LocationLists } from "../../components/LocationLists";

export const metadata: Metadata = {
  title: "Locations We Serve | Bakersfield Doc Prep Co.",
  description:
    "California counties where Bakersfield Doc Prep Co. prepares legal documents, and which services are available in each.",
};

export default function LocationsPage() {
  return (
    <InteriorPage
      eyebrow="Locations we serve"
      title="Document preparation across California."
      intro="Based in Bakersfield and available statewide. Most work is handled by phone, email, and secure document exchange, so you rarely need to visit an office."
    >
      <section className="locations-section">
        <div className="shell">
          <LocationLists />
        </div>
      </section>
      <section className="resource-note-section">
        <div className="shell resource-note-card">
          <p className="eyebrow">Not listed?</p>
          <h2>Ask about your county.</h2>
          <p>
            California Legal Document Assistants register by county. If you do not see your county
            above, call or text and we will tell you which services are available where you live.
          </p>
        </div>
      </section>
      <PageCta copy="Tell us your county and the documents you need, and we will confirm the next step." />
    </InteriorPage>
  );
}
