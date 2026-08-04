import type { Metadata } from "next";
import { InteriorPage } from "../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Terms of Use | Bakersfield Doc Prep Co.",
  description: "Terms governing use of the Bakersfield Doc Prep Co. informational website.",
};

export default function TermsPage() {
  return (
    <InteriorPage
      compact
      eyebrow="Website policy"
      title="Terms of Use"
      intro="Effective August 4, 2026. By using this website, you agree to the following terms governing the site itself."
    >
      <article className="policy-article shell">
        <section>
          <h2>1. Informational website only</h2>
          <p>
            This website provides general information about administrative legal document preparation.
            It does not provide legal advice, create an attorney-client relationship, recommend a legal option,
            select forms, or substitute for advice from a licensed attorney.
          </p>
        </section>
        <section>
          <h2>2. Legal Document Assistant scope</h2>
          <p>
            Bakersfield Doc Prep Co. is not a law firm. A California Legal Document Assistant may complete
            client-selected documents in a ministerial manner using the client&apos;s specific direction.
            We cannot advise about rights, remedies, defenses, options, form selection, deadlines, or strategy,
            and cannot represent anyone in court.
          </p>
        </section>
        <section>
          <h2>3. No service engagement through browsing</h2>
          <p>
            Visiting the site, clicking a call or text link, or sending an initial inquiry does not create a paid
            service engagement. Any document-preparation engagement is governed by a separate written agreement
            completed before services begin, including the scope, fees, and required disclosures.
          </p>
        </section>
        <section>
          <h2>4. Your responsibility</h2>
          <p>
            You are responsible for selecting documents, providing accurate information and exact instructions,
            reviewing all completed documents, confirming deadlines, arranging legally sufficient signatures or service,
            and obtaining legal, tax, financial, or medical advice when needed.
          </p>
        </section>
        <section>
          <h2>5. No guarantee of outcome</h2>
          <p>
            We do not guarantee that a court, agency, financial institution, health care provider, recorder,
            or other recipient will accept a document or that any desired result will occur. Court and agency
            decisions are outside our control.
          </p>
        </section>
        <section>
          <h2>6. Official and third-party resources</h2>
          <p>
            Links are provided for convenience. We do not control or endorse third-party content and are not responsible
            for its availability, accuracy, or policies. Court forms and procedures may change; use current official sources.
          </p>
        </section>
        <section>
          <h2>7. Acceptable use and intellectual property</h2>
          <p>
            Do not misuse the site, interfere with its operation, attempt unauthorized access, or use its content to
            impersonate the business. The site&apos;s original design, branding, copy, and media may not be reproduced
            for commercial use without permission, except where applicable law allows.
          </p>
        </section>
        <section>
          <h2>8. Availability, changes, and contact</h2>
          <p>
            The site may be changed, suspended, or updated without notice. These terms may also be updated,
            with the effective date revised when posted. Questions may be directed to Bakersfield Doc Prep Co.
            at 661 218 0111.
          </p>
        </section>
      </article>
    </InteriorPage>
  );
}
