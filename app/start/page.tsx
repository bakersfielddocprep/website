import type { Metadata } from "next";
import { InteriorPage } from "../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Start Your Documents | Bakersfield Doc Prep Co.",
  description: "Prepare for your first conversation with Bakersfield Doc Prep Co. and understand the client-directed process.",
};

export default function StartPage() {
  return (
    <InteriorPage
      eyebrow="Start your documents"
      title="Begin with the document you have selected."
      intro="A productive first conversation starts with clear direction: the document you want prepared, the information it requires, and any official instructions you are following."
    >
      <section className="start-section">
        <div className="shell start-grid">
          <div className="start-panel">
            <p className="eyebrow">Before you call</p>
            <h2>Gather what you already know.</h2>
            <ol>
              <li><span>01</span><div><h3>The document or form</h3><p>Have the title, form number, published instructions, or attorney direction available.</p></div></li>
              <li><span>02</span><div><h3>Your source information</h3><p>Collect correct names, dates, addresses, case numbers, records, and other factual details.</p></div></li>
              <li><span>03</span><div><h3>Your exact instructions</h3><p>Be ready to say what information and wording you want entered into the selected documents.</p></div></li>
              <li><span>04</span><div><h3>Your timing</h3><p>Share any deadline you have independently confirmed. We cannot calculate or guarantee legal deadlines.</p></div></li>
            </ol>
          </div>
          <aside className="start-contact-card">
            <p className="eyebrow">Call or text Samuel</p>
            <h2>661 218 0111</h2>
            <p>
              Briefly describe the document-preparation service you are looking for.
              Please do not send Social Security numbers, payment information, medical records,
              or other sensitive documents by ordinary text message.
            </p>
            <a className="button button-gold" href="tel:+16612180111">Call now</a>
            <a className="button button-light" href="sms:+16612180111">Send a text</a>
            <small>Registered &amp; Bonded · California LDA #232</small>
          </aside>
        </div>
      </section>
      <section className="expect-section">
        <div className="shell expect-grid">
          <div><p className="eyebrow">What happens next</p><h2>A clear scope before preparation begins.</h2></div>
          <div>
            <p>
              We will confirm whether your request is within the lawful scope of document preparation,
              explain the administrative preparation process, and identify what information is needed from you.
            </p>
            <p>
              Before paid services begin, the engagement and fees must be documented in the required written agreement.
              If your question requires advice about rights, remedies, defenses, options, form selection, or strategy,
              you will be directed to an attorney or official self-help resource instead.
            </p>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
