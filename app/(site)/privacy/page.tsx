import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Bakersfield Doc Prep Co.",
  description: "Website privacy practices for Bakersfield Doc Prep Co.",
};

export default function PrivacyPage() {
  return (
    <InteriorPage
      compact
      eyebrow="Website policy"
      title="Privacy Policy"
      intro="Effective August 4, 2026. This notice describes information handled through this website and direct communications initiated from it."
    >
      <article className="policy-article shell">
        <section>
          <h2>1. Information you choose to provide</h2>
          <p>
            This website does not currently include an online intake, account, payment, or document-upload form.
            If you use a call or text link, your phone provider and device will handle that communication.
            Information you provide by phone or text may include your name, contact details, and a general description
            of the document-preparation service you are requesting.
          </p>
          <p>
            Do not send Social Security numbers, financial account information, payment-card details,
            medical records, government identification, or complete legal documents through ordinary text messages.
          </p>
        </section>
        <section>
          <h2>2. Technical information</h2>
          <p>
            The site&apos;s hosting and security providers may automatically process standard technical information,
            such as an IP address, browser or device type, requested pages, timestamps, and security events,
            to deliver the site, prevent abuse, and maintain reliability. This site does not currently use
            advertising cookies, behavioral advertising pixels, or an owner-operated analytics dashboard.
          </p>
        </section>
        <section>
          <h2>3. How information is used</h2>
          <p>
            Information may be used to respond to your inquiry, determine whether the requested administrative
            service is within our scope, communicate about document preparation, maintain business records,
            protect the site, and comply with applicable obligations.
          </p>
        </section>
        <section>
          <h2>4. Disclosure and sale of information</h2>
          <p>
            We do not sell personal information or share it for cross-context behavioral advertising.
            Information may be processed by service providers that support hosting, communications, security,
            and business operations, or disclosed when required by law or reasonably necessary to protect rights and safety.
          </p>
        </section>
        <section>
          <h2>5. Retention and security</h2>
          <p>
            Information is retained only as reasonably necessary for the purpose collected, business records,
            dispute resolution, or applicable obligations. Reasonable safeguards are used, but no website,
            mobile carrier, email, or text-message system can be guaranteed completely secure.
          </p>
        </section>
        <section>
          <h2>6. Your choices</h2>
          <p>
            You may choose not to contact us through the site. You may ask about contact information we maintain
            or request a correction or deletion, subject to legal and operational retention needs, by calling
            661 218 0111. Because this site does not use behavioral advertising trackers, it does not currently
            respond differently to browser “Do Not Track” signals.
          </p>
        </section>
        <section>
          <h2>7. Third-party links and children</h2>
          <p>
            Links to courts and government resources are governed by those sites&apos; policies.
            This site is intended for adults seeking business services and is not directed to children under 13.
          </p>
        </section>
        <section>
          <h2>8. Updates and contact</h2>
          <p>
            This policy may be updated as site features or practices change. The effective date above will be revised
            when material changes are posted. Questions may be directed to Bakersfield Doc Prep Co. at 661 218 0111.
          </p>
        </section>
      </article>
    </InteriorPage>
  );
}
