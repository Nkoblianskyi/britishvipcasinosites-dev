import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | BritishVIPCasinoSites.com",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal data in compliance with UK GDPR and the Data Protection Act 2018.",
}

// Rotating accent colors for section cards
const ACCENT_CYCLE: string[] = ["hsl(43,90%,50%)", "hsl(148,60%,52%)", "hsl(217,82%,66%)"]

const sections = [
  {
    title: "Information We Collect",
    body: null,
    items: [
      ["Personal Identifiers", "When you subscribe to our newsletter or contact our team, we may collect your name, email address, and any information you voluntarily provide to us."],
      ["Usage Data", "We automatically collect data about your interactions with our website, including pages viewed, time on site, referring websites, browser type, device information, and anonymised IP address."],
      ["Cookies & Tracking", "We use cookies and similar technologies to enhance your browsing experience. For full details, please consult our Cookie Policy."],
    ],
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to: operate and maintain our website; improve user experience through personalisation; send newsletters and casino-related updates (with your explicit consent); respond to enquiries promptly; analyse usage patterns to improve our service; comply with legal obligations; and detect, prevent, and address fraud or security threats.",
    items: null,
  },
  {
    title: "Legal Basis for Processing",
    body: null,
    items: [
      ["Consent", "When you have given us explicit, informed permission — such as when subscribing to our newsletter."],
      ["Legitimate Interests", "When processing is necessary for our business operations, provided your fundamental rights are not overridden."],
      ["Legal Obligation", "When we are required to process data to comply with applicable UK laws and regulations."],
    ],
  },
  {
    title: "Information Sharing & Disclosure",
    body: "We do not sell, trade, or rent your personal information to third parties. We may share data only with: trusted service providers assisting with hosting, analytics, and operations (bound by confidentiality agreements); legal authorities when required by UK law or court order; and in the event of a business transfer, subject to equivalent privacy protections.",
    items: null,
  },
  {
    title: "Data Security",
    body: "We implement robust technical and organisational measures to protect your personal information, including SSL/TLS encryption, secure server infrastructure, strict access controls, and regular security reviews. No internet transmission is completely risk-free, but we continually apply best-practice safeguards to minimise vulnerability.",
    items: null,
  },
  {
    title: "Data Retention",
    body: "We retain your personal information only for as long as necessary to fulfil the purposes described in this policy or as required by UK law. When data is no longer needed, we securely delete or anonymise it in accordance with our internal retention schedule.",
    items: null,
  },
  {
    title: "Your Rights Under UK GDPR",
    body: null,
    items: [
      ["Right of Access", "Request a copy of the personal data we hold about you at any time."],
      ["Right to Rectification", "Ask us to correct inaccurate or incomplete personal information."],
      ["Right to Erasure", "Request deletion of your personal data, subject to applicable exceptions."],
      ["Right to Restrict Processing", "Limit how we use your data in certain defined circumstances."],
      ["Right to Data Portability", "Receive your data in a structured, machine-readable format."],
      ["Right to Object", "Object to processing based on legitimate interests or direct marketing."],
      ["Right to Withdraw Consent", "Withdraw any previously given consent at any time without penalty."],
    ],
  },
  {
    title: "Third-Party Links",
    body: "Our website contains links to external casino sites and third-party services. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.",
    items: null,
  },
  {
    title: "Children's Privacy",
    body: "Our website is intended exclusively for individuals aged 18 and over. We do not knowingly collect personal information from anyone under 18. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will take prompt corrective action.",
    items: null,
  },
  {
    title: "Changes to This Policy",
    body: "We may periodically update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. Significant changes will be communicated by posting the updated policy on this page with a revised effective date.",
    items: null,
  },
  {
    title: "Contact Us",
    body: "For questions, to exercise your data rights, or to raise a privacy concern, contact our Data Protection team at: privacy@britishvipcasinosites.com. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.",
    items: null,
  },
]

// TOC anchors
const tocItems = sections.map((s, i) => ({ id: `section-${i}`, title: s.title }))

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* HERO — compact centered */}
      <section className="pt-[52px]">
        <div className="stripe-tricolor w-full" />
        <div
          className="flex flex-col items-center justify-center text-center px-4 py-10 md:py-14"
          style={{ backgroundColor: "hsl(222,42%,7%)" }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border"
            style={{ backgroundColor: "hsl(217,82%,50%,0.08)", borderColor: "hsl(217,82%,50%,0.25)" }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <rect x="4" y="3" width="18" height="20" rx="2.5" stroke="hsl(43,90%,50%)" strokeWidth="1.2" />
              <line x1="8" y1="8.5" x2="18" y2="8.5" stroke="hsl(217,82%,66%)" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="8" y1="12" x2="18" y2="12" stroke="hsl(43,90%,50%,0.45)" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="8" y1="15.5" x2="13" y2="15.5" stroke="hsl(43,90%,50%,0.45)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(217,82%,66%)" }} />
            <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase" style={{ color: "hsl(217,82%,66%)" }}>Legal Document</span>
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(217,82%,66%)" }} />
          </div>
          <h1 className="font-serif font-bold text-2xl md:text-4xl text-primary-foreground text-balance mb-2">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground font-sans">
            Effective: <span className="text-accent font-semibold">2026</span> &nbsp;·&nbsp; britishvipcasinosites.com
          </p>
        </div>
        <div className="rule-tricolor w-full" />
      </section>

      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Two-column: TOC sidebar + content */}
            <div className="flex flex-col md:flex-row gap-8">

              {/* TOC sidebar */}
              <aside className="hidden md:block w-52 shrink-0">
                <div
                  className="sticky top-20 rounded-xl border border-border/50 p-4"
                  style={{ backgroundColor: "hsl(222,36%,11%)" }}
                >
                  <p className="text-[9px] font-sans font-bold tracking-[0.28em] uppercase text-muted-foreground mb-3">Contents</p>
                  <nav aria-label="Page contents">
                    <ol className="space-y-1.5">
                      {tocItems.map((item, i) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="flex items-start gap-2 text-[11px] text-muted-foreground hover:text-accent transition-colors font-sans leading-snug toc-link"
                          >
                            <span className="shrink-0 font-bold" style={{ color: ACCENT_CYCLE[i % 3] }}>{String(i + 1).padStart(2, "0")}</span>
                            <span>{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                {/* Intro block */}
                <div
                  className="flex gap-4 mb-10 rounded-xl p-5 border"
                  style={{ backgroundColor: "hsl(222,36%,13%)", borderColor: "hsl(217,82%,50%,0.20)" }}
                >
                  <div className="w-[3px] shrink-0 rounded-full" style={{ backgroundColor: "hsl(217,82%,66%)" }} />
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    At <span className="text-foreground font-semibold">BritishVIPCasinoSites.com</span>, safeguarding your privacy is our paramount concern. This Privacy Policy outlines how we collect, use, store, and protect your personal information in full compliance with UK GDPR and the Data Protection Act 2018.
                  </p>
                </div>

                <div className="space-y-10">
                  {sections.map((section, idx) => {
                    const accent = ACCENT_CYCLE[idx % 3]
                    return (
                      <div key={section.title} id={`section-${idx}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="font-serif text-xs font-bold shrink-0 w-7 h-7 rounded-full flex items-center justify-center border text-[11px]"
                            style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}10` }}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h2 className="font-serif font-bold text-lg md:text-xl text-foreground">{section.title}</h2>
                        </div>
                        <div className="pl-10">
                          {section.body && (
                            <p className="text-sm text-muted-foreground leading-relaxed font-sans">{section.body}</p>
                          )}
                          {section.items && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {section.items.map(([title, desc]) => (
                                <div
                                  key={title}
                                  className="border rounded-xl p-4 transition-colors"
                                  style={{ backgroundColor: "hsl(222,36%,13%)", borderColor: `${accent}25` }}
                                >
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                                    <span className="font-serif font-semibold text-sm" style={{ color: accent }}>{title}</span>
                                  </div>
                                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{desc}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        {idx < sections.length - 1 && (
                          <div className="rule-gold mt-8" style={{ background: `linear-gradient(to right, transparent, ${accent}60, transparent)` }} />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
