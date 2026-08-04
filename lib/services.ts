export type ServiceContent = {
  slug: string;
  title: string;
  cardDescription: string;
  eyebrow: string;
  headline: string;
  intro: [string, string];
  includes: string[];
  steps: [string, string][];
  faqs: [string, string][];
  resource: { label: string; url: string };
  image?: string;
  imageAlt?: string;
};

export const services: ServiceContent[] = [
  {
    slug: "divorce-family",
    title: "Divorce & Family Documents",
    cardDescription: "Organized preparation for divorce, separation, custody, support, and related family-law forms.",
    eyebrow: "Divorce & family documents",
    headline: "Clear documents for a complicated transition.",
    intro: [
      "Family transitions already carry enough weight. We provide calm, organized document preparation for self-represented California clients who know which forms they want completed.",
      "You supply the information and direct how it should be entered. We prepare the documents in a ministerial manner, help keep the packet organized, and return it for your review. We do not advise you about rights, strategy, property, support, custody, or which forms to choose.",
    ],
    includes: [
      "Petitions, responses, and summons documents identified by you",
      "Custody, parenting-time, and support attachments you direct us to prepare",
      "Financial disclosure forms using information you provide",
      "Default, agreement, and judgment documents selected at your direction",
    ],
    steps: [
      ["Bring your direction", "Tell us which documents you want prepared and provide the information required for each form."],
      ["We prepare", "We type, organize, and check the packet for completeness at your specific direction."],
      ["You review", "You verify every answer, sign where required, and decide when and how to file."],
    ],
    faqs: [
      ["Can you tell me what I should request from the court?", "No. Only an attorney can advise you about legal rights, remedies, strategy, or what you should request. California Courts self-help resources or a lawyer can help with those decisions."],
      ["Can you represent me or speak for me in court?", "No. Bakersfield Doc Prep Co. prepares documents at a self-represented client's direction and does not appear in court or act as legal counsel."],
      ["Can you help with an uncontested matter?", "We can prepare documents you identify for an uncontested or agreed matter using the information and instructions you provide. We cannot determine whether an agreement protects your interests."],
    ],
    resource: { label: "California Courts: Divorce Self-Help Guide", url: "https://selfhelp.courts.ca.gov/divorce-california" },
    image: "/images/service-divorce-family.jpg",
    imageAlt: "Family court forms and a pen on a warm wood table",
  },
  {
    slug: "estate-planning",
    title: "Estate Planning Documents",
    cardDescription: "Thoughtful preparation of wills, trusts, deeds, and related planning documents at your direction.",
    eyebrow: "Estate planning documents",
    headline: "Put your decisions into organized documents.",
    intro: [
      "Estate-planning documents can help record decisions about property, finances, care, and the people you trust. We prepare the documents you select using the names, choices, and instructions you provide.",
      "Because these documents can have lasting consequences, we cannot recommend a plan, choose language, explain legal effects, or tell you which document is right for you. Complex estates, tax questions, blended families, and contested concerns should be reviewed by a qualified attorney.",
    ],
    includes: [
      "California statutory wills and other documents selected by you",
      "Living trust documents based on your supplied instructions",
      "Trust-transfer and supporting documents you identify",
      "Certification, amendment, and related planning forms at your direction",
    ],
    steps: [
      ["Choose your documents", "Use an attorney, an approved published resource, or your own direction to identify what you want prepared."],
      ["Provide your decisions", "Supply the names, property information, distributions, and other answers that belong in the documents."],
      ["Review and complete", "Read every provision carefully and arrange signatures, witnesses, notarization, or recording as applicable."],
    ],
    faqs: [
      ["Can you tell me whether I need a will or a trust?", "No. That is a legal recommendation. We can prepare the document you select, but an estate-planning attorney should advise you about the best structure for your circumstances."],
      ["Do you provide tax advice?", "No. We do not provide legal, tax, investment, or financial advice. Please consult the appropriate licensed professional."],
      ["Will you keep copies of my documents?", "Document-handling and retention details are explained before service begins. You should always keep complete signed originals and secure backup copies."],
    ],
    resource: { label: "California Courts: Wills, Estates & Advance Care Planning", url: "https://selfhelp.courts.ca.gov/wills-estates-probate/legal-documents" },
    image: "/images/service-estate-planning.jpg",
    imageAlt: "Navy planning folio and fountain pen in a sunlit office",
  },
  {
    slug: "landlord-documents",
    title: "Landlord Documents",
    cardDescription: "Preparation of leases, notices, and non-litigation rental documents using your instructions.",
    eyebrow: "Landlord documents",
    headline: "Rental paperwork prepared with care and clarity.",
    intro: [
      "Good records and consistent paperwork support responsible property management. We prepare landlord and rental documents that you identify and direct us to complete.",
      "We do not determine which notice, deadline, remedy, or procedure applies to your situation. Eviction and unlawful-detainer matters have strict requirements and may require an attorney, court self-help resource, or separately authorized assistance.",
    ],
    includes: [
      "Lease and rental forms selected and supplied at your direction",
      "Property and tenant information entered into your chosen documents",
      "Notices identified by you or your attorney",
      "Document organization, copies, and preparation records",
    ],
    steps: [
      ["Identify the document", "Tell us the exact rental document or published form you want prepared."],
      ["Provide the facts", "Supply the names, property details, dates, amounts, and wording to be entered."],
      ["Review before use", "Confirm every term and deadline before signing, serving, or delivering the document."],
    ],
    faqs: [
      ["Can you tell me which notice to use?", "No. Selecting a notice or advising on deadlines and remedies is legal advice. Contact a landlord-tenant attorney or an official court self-help resource for guidance."],
      ["Do you handle evictions?", "This page does not promise unlawful-detainer assistance. Any requested service must be within the business's applicable registration and California law. We will not accept work outside that scope."],
      ["Can you serve a notice for me?", "Service options depend on the document and applicable law. We can discuss administrative handling, but we cannot advise you about a legally sufficient service method."],
    ],
    resource: { label: "California Courts: Eviction Self-Help Guide", url: "https://selfhelp.courts.ca.gov/eviction" },
    image: "/images/service-landlord.jpg",
    imageAlt: "California rental home entrance in late-afternoon light",
  },
  {
    slug: "probate-documents",
    title: "Probate Documents",
    cardDescription: "Organized preparation of probate forms selected by self-represented clients.",
    eyebrow: "Probate documents",
    headline: "Order and clarity during a difficult time.",
    intro: [
      "After a death, families may face detailed court forms while also managing loss and practical responsibilities. We prepare probate documents you identify, using the information and directions you provide.",
      "Probate procedures depend on the estate, assets, deadlines, and family circumstances. We cannot determine which procedure applies, assess claims, interpret a will, or advise about distributions. Seek an attorney when you need those decisions explained.",
    ],
    includes: [
      "Petitions and supporting forms identified by you",
      "Notices, declarations, and proof documents at your direction",
      "Inventory and appraisal information entered from your records",
      "Accounting and closing forms selected by you or your attorney",
    ],
    steps: [
      ["Identify the proceeding", "Use an attorney or official self-help resource to determine the process and documents you need."],
      ["Gather estate information", "Provide names, dates, asset records, and the exact information to be entered."],
      ["Review the packet", "Verify accuracy, arrange signatures, and handle filing or service requirements."],
    ],
    faqs: [
      ["Can you tell me whether probate is required?", "No. That requires a legal evaluation. A probate attorney or official court self-help resource can help you understand available procedures."],
      ["Can you interpret a will or trust?", "No. We cannot interpret legal language, decide beneficiary rights, or recommend a distribution."],
      ["Do you manage estate property or money?", "No. We provide document-preparation services only and do not act as an executor, administrator, trustee, fiduciary, or financial professional."],
    ],
    resource: { label: "California Courts: Wills, Estates & Probate", url: "https://selfhelp.courts.ca.gov/wills-estates-probate" },
  },
  {
    slug: "civil-responses",
    title: "Civil Response Documents",
    cardDescription: "Preparation of civil response forms and supporting documents at your specific direction.",
    eyebrow: "Civil response documents",
    headline: "Turn your instructions into an organized response packet.",
    intro: [
      "Being served with court papers can feel urgent and unfamiliar. We prepare the civil response documents you identify and enter the facts and wording you provide.",
      "Civil cases often involve strict deadlines and strategic choices. We cannot calculate your deadline, choose defenses, assess claims, draft arguments, or advise you how to respond. Contact an attorney or court self-help center promptly if you need that guidance.",
    ],
    includes: [
      "Answer or response forms specifically identified by you",
      "Attachments and declarations using wording you supply",
      "Proof-of-service and fee-waiver forms you direct us to prepare",
      "Discovery response formatting from your exact answers and instructions",
    ],
    steps: [
      ["Act promptly", "Obtain legal or court guidance about deadlines, defenses, and the documents required."],
      ["Direct the preparation", "Tell us exactly which forms to complete and provide every answer or attachment."],
      ["Review and file", "Confirm the packet, sign it, and complete filing and service by the applicable deadline."],
    ],
    faqs: [
      ["Can you calculate my deadline?", "No. Deadline calculations and procedural advice can affect legal rights. Contact an attorney, court clerk, or court self-help center immediately."],
      ["Can you help me decide which defenses to use?", "No. We cannot recommend defenses, arguments, strategy, or wording. We only enter information at your direction."],
      ["Can you contact the other side for me?", "No. We do not negotiate, advocate, or communicate as your representative."],
    ],
    resource: { label: "California Courts: Civil Self-Help Resources", url: "https://selfhelp.courts.ca.gov/civil-lawsuit" },
  },
  {
    slug: "small-claims",
    title: "Small Claims Documents",
    cardDescription: "Straightforward preparation of small-claims forms chosen by self-represented clients.",
    eyebrow: "Small claims documents",
    headline: "Practical document support for self-represented claims.",
    intro: [
      "Small claims court is designed for people to represent themselves, but the paperwork still needs complete and accurate information. We prepare the forms you select using your facts and instructions.",
      "We cannot evaluate whether you should sue, identify the proper defendant, determine damages, assess evidence, or prepare your argument. Official small-claims advisors and attorneys can provide guidance beyond document preparation.",
    ],
    includes: [
      "Plaintiff claim or response documents identified by you",
      "Party and claim information entered from your records",
      "Proof-of-service and court-request forms at your direction",
      "Exhibit lists and document organization using your instructions",
    ],
    steps: [
      ["Confirm your direction", "Use official self-help resources or legal counsel to identify the claim and forms you want."],
      ["Provide the information", "Give us the exact names, addresses, amounts, dates, and statement to enter."],
      ["Review and proceed", "Verify the completed documents and handle filing, service, evidence, and attendance."],
    ],
    faqs: [
      ["Can you tell me how much to claim?", "No. Deciding damages or the value of a claim is legal strategy and remains your responsibility."],
      ["Will you appear at the hearing?", "No. We do not represent clients or appear in court."],
      ["Can you tell me what evidence to bring?", "No. A small-claims advisor, attorney, or official court resource can provide procedural or legal guidance. We can organize documents you identify."],
    ],
    resource: { label: "California Courts: Small Claims Forms", url: "https://selfhelp.courts.ca.gov/small-claims-forms" },
  },
  {
    slug: "criminal-record-relief",
    title: "Criminal Record Relief Documents",
    cardDescription: "Document preparation for record-cleaning forms selected after eligibility and legal questions are resolved.",
    eyebrow: "Criminal record relief documents",
    headline: "Move your selected record-relief paperwork forward.",
    intro: [
      "California has different record-relief procedures, each with distinct eligibility rules and effects. Once you have identified the procedure and forms you want, we can prepare those documents using your records and exact directions.",
      "We cannot determine eligibility, predict an outcome, explain immigration or licensing consequences, or recommend a form of relief. Those questions require an attorney or qualified official resource—especially for noncitizens.",
    ],
    includes: [
      "Record-relief petitions and applications specifically selected by you",
      "Case information entered from court and criminal-history records",
      "Declarations using facts and wording supplied by you",
      "Supporting document organization at your direction",
    ],
    steps: [
      ["Resolve eligibility questions", "Use an attorney or official California Courts guidance to identify the relief and forms appropriate to your record."],
      ["Gather case records", "Provide case numbers, dates, dispositions, and the exact information requested by your selected forms."],
      ["Review and submit", "Verify the completed packet and follow the applicable filing, service, and hearing instructions."],
    ],
    faqs: [
      ["Can you tell me whether I qualify?", "No. Eligibility depends on law and individual facts. We can prepare a selected form but cannot decide which relief is available."],
      ["Will relief erase my record?", "We cannot advise about the legal effect of an order. California Courts explains that different procedures have different effects and limitations."],
      ["What if I am not a U.S. citizen?", "Get advice from a qualified immigration attorney before proceeding. Criminal-record decisions can have serious immigration consequences."],
    ],
    resource: { label: "California Courts: Clean Your Record", url: "https://selfhelp.courts.ca.gov/clean-your-record" },
  },
  {
    slug: "powers-of-attorney",
    title: "Powers of Attorney",
    cardDescription: "Preparation of power-of-attorney documents selected and directed by the client.",
    eyebrow: "Power-of-attorney documents",
    headline: "Record who may act—and the choices you have already made.",
    intro: [
      "A power of attorney can give another person significant authority over financial, property, or other matters. We prepare the document you select using the agent, powers, timing, and instructions you provide.",
      "We cannot recommend an agent, choose powers, explain consequences, or advise when authority should begin or end. Because these documents can transfer substantial control, attorney review is strongly encouraged.",
    ],
    includes: [
      "California statutory power-of-attorney forms selected by you",
      "Principal, agent, successor, and contact information",
      "Powers and limitations entered exactly as you direct",
      "Signature, acknowledgment, and copy packets for your review",
    ],
    steps: [
      ["Select the document", "Use legal advice or an approved resource to identify the form and authority you intend to grant."],
      ["State your instructions", "Provide all names, powers, limits, dates, and wording to be entered."],
      ["Review and execute", "Read the entire document and arrange the required signatures, witnesses, or notarization."],
    ],
    faqs: [
      ["Can you help me choose my agent?", "No. Choosing an agent and deciding what authority to grant are personal and legal decisions."],
      ["Can you explain what each power means?", "No. We cannot interpret provisions or explain legal consequences. Please consult an attorney or approved published information."],
      ["Do you notarize the document?", "Notarization is separate from document preparation. We can explain whether an independent notary option is available, but cannot advise whether notarization is legally sufficient."],
    ],
    resource: { label: "California Courts: Power of Attorney Information", url: "https://selfhelp.courts.ca.gov/wills-estates-probate/legal-documents" },
  },
  {
    slug: "advance-health-care-directives",
    title: "Advance Health Care Directives",
    cardDescription: "Preparation of advance health care directive forms using the client's choices and instructions.",
    eyebrow: "Advance health care directives",
    headline: "Put your health care choices in writing.",
    intro: [
      "An advance health care directive records your own choices and can name someone to communicate them if you cannot speak for yourself. We prepare the form you select using the agent information and directions you provide.",
      "We do not recommend an agent, explain treatment choices, provide medical guidance, or advise about the legal effect of particular language. Discuss those questions with your health care provider and a qualified attorney.",
    ],
    includes: [
      "California advance health care directive forms selected by you",
      "Agent and alternate-agent information you provide",
      "Health care instructions entered in your exact words",
      "Signature and copy packets prepared for your review",
    ],
    steps: [
      ["Consider your choices", "Speak with the people and professionals you trust before deciding what the document should say."],
      ["Direct the preparation", "Provide your selected form, agent details, and exact health care instructions."],
      ["Review and share", "Complete valid execution and give copies to your agent, providers, and others you choose."],
    ],
    faqs: [
      ["Can you help me decide which treatments to accept or refuse?", "No. Treatment decisions require personal reflection and medical guidance. We only prepare the document using your instructions."],
      ["Can you tell me who should be my health care agent?", "No. We cannot recommend an agent. Choose someone you trust and consider discussing the role with that person and your professionals."],
      ["Where should I keep the completed directive?", "California Courts recommends sharing copies with your health care provider and the people involved in your care. Ask your provider about its record procedures."],
    ],
    resource: { label: "California Courts: Advance Health Care Directive Information", url: "https://selfhelp.courts.ca.gov/wills-estates-probate/legal-documents" },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
