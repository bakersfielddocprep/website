import type { Metadata } from "next";
import { InteriorPage, PageCta } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "About Samuel & Bakersfield Doc Prep Co.",
  description: "Meet Samuel and learn why Bakersfield Doc Prep Co. makes client-directed document preparation more approachable.",
};

export default function AboutPage() {
  return (
    <InteriorPage
      eyebrow="About Bakersfield Doc Prep Co."
      title="Professional preparation. Human guidance."
      intro="Samuel built Bakersfield Doc Prep Co. around a simple idea: people who have made their own legal decisions deserve careful, respectful help preparing the paperwork."
    >
      <section className="owner-story-section">
        <div className="shell owner-story-grid">
          <figure><img src="/images/hero-samuel.jpg" alt="Samuel, owner of Bakersfield Doc Prep Co., in his Bakersfield office" /></figure>
          <div>
            <p className="eyebrow">Meet Samuel</p>
            <h2>California rooted. Community focused.</h2>
            <p className="large-copy">
              Legal paperwork can feel intimidating long before anyone reaches a courthouse.
              Samuel&apos;s goal is to make the preparation itself feel orderly, professional, and manageable.
            </p>
            <p>
              Bakersfield Doc Prep Co. works with self-represented individuals who have selected
              the documents they want and need reliable help turning their instructions into a polished packet.
              Each engagement is handled with attention to detail, clear communication, and respect for the client&apos;s direction.
            </p>
            <p>
              That role is different from an attorney&apos;s role. Samuel does not advise clients what to do,
              interpret legal rights, recommend forms or strategies, or appear in court. When a question requires
              legal judgment, clients are encouraged to use a lawyer or an official court self-help resource.
            </p>
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="shell">
          <div className="detail-section-heading"><p className="eyebrow">How we work</p><h2>Preparation built on four commitments.</h2></div>
          <div className="values-grid">
            <article><span>01</span><h3>Clarity</h3><p>Plain communication about our process, scope, and what we need from you.</p></article>
            <article><span>02</span><h3>Direction</h3><p>Your selected documents and your instructions remain at the center of the work.</p></article>
            <article><span>03</span><h3>Organization</h3><p>Careful typing, consistent formatting, and complete document packets.</p></article>
            <article><span>04</span><h3>Boundaries</h3><p>Honest separation between ministerial preparation and legal advice.</p></article>
          </div>
        </div>
      </section>
      <PageCta heading="Work directly with an owner who respects your direction." />
    </InteriorPage>
  );
}
