import type { Metadata } from "next";
import { InteriorPage, PageCta } from "../../components/InteriorPage";

export const metadata: Metadata = {
  title: "How Document Preparation Works | Bakersfield Doc Prep Co.",
  description: "Understand the client-directed legal document preparation process from first conversation through final review.",
};

const stages = [
  ["01", "You identify the documents", "You arrive knowing which document or published form you want prepared. If you need help choosing, consult an attorney or an official court self-help resource first."],
  ["02", "You provide the information", "You supply the names, dates, amounts, facts, choices, and exact wording that should appear in the selected documents."],
  ["03", "We prepare the packet", "We type and organize the documents in a ministerial manner at your specific direction, then return them for your review."],
  ["04", "You verify every detail", "You read every page, confirm accuracy, request any factual corrections, and decide whether the documents reflect your instructions."],
  ["05", "You sign and proceed", "You complete signatures, witnessing, notarization, filing, service, or delivery according to applicable instructions and professional guidance."],
];

export default function HowItWorksPage() {
  return (
    <InteriorPage
      eyebrow="How it works"
      title="A clear preparation process—with you in control."
      intro="Our role is focused: prepare the documents you select using the information and exact direction you provide."
    >
      <section className="timeline-section">
        <div className="shell timeline-grid">
          <div className="timeline-intro">
            <p className="eyebrow">From first call to finished packet</p>
            <h2>Five straightforward stages.</h2>
            <p>
              Every matter is different, but the division of responsibility stays the same:
              you make the decisions and approve the content; we prepare the paperwork.
            </p>
          </div>
          <div className="timeline-list">
            {stages.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="responsibility-section">
        <div className="shell responsibility-grid">
          <article>
            <p className="eyebrow">What you direct</p>
            <h2>Your decisions remain yours.</h2>
            <ul>
              <li>The documents and forms you want prepared</li>
              <li>The facts, choices, requests, and wording to include</li>
              <li>When and how the finished documents will be used</li>
              <li>Whether to seek advice or professional review</li>
            </ul>
          </article>
          <article>
            <p className="eyebrow">What we prepare</p>
            <h2>Meticulous, organized paperwork.</h2>
            <ul>
              <li>Typing information into your selected documents</li>
              <li>Organizing pages, attachments, and copies</li>
              <li>Making factual corrections you specifically direct</li>
              <li>Administrative filing or service only when legally permitted and specifically directed</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="boundary-section">
        <div className="shell boundary-card">
          <p className="eyebrow">When you need more than preparation</p>
          <h2>Some questions belong with an attorney or court self-help center.</h2>
          <p>
            We cannot tell you which form to select, what legal rights or defenses you have,
            what result to request, how to calculate a deadline, or what strategy to follow.
            We will pause document preparation when your request requires legal judgment.
          </p>
          <a className="official-resource-link" href="https://selfhelp.courts.ca.gov/" target="_blank" rel="noreferrer">
            Visit California Courts Self-Help <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <PageCta />
    </InteriorPage>
  );
}
