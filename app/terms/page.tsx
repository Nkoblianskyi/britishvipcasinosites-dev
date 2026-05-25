import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms & Conditions | BritishVIPCasinoSites.com",
  description:
    "Read the terms and conditions governing your use of BritishVIPCasinoSites.com, our comparison service for UKGC-licensed UK casinos.",
}

const ACCENT_CYCLE = ["hsl(43,90%,50%)", "hsl(148,60%,52%)", "hsl(217,82%,66%)"]

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing and using BritishVIPCasinoSites.com, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please discontinue use of our website immediately. We reserve the right to amend these terms at any time, with your continued use constituting acceptance of any changes made.",
    items: null,
  },
  {
    title: "Nature of Our Service",
    body: "BritishVIPCasinoSites.com is an independent comparison and information service. We do not operate as a casino, accept wagers, or provide gambling services directly. Our website provides editorial reviews, comparisons, and referral links to third-party UKGC-licensed casino operators. We are not responsible for the services, content, or conduct of any third-party casino we link to.",
    items: null,
  },
  {
    title: "Eligibility",
    body: null,
    items: [
      { title: "Age Requirement", desc: "You must be aged 18 or over to use this website. Gambling is strictly prohibited for persons under 18. By using our site, you confirm you are of legal gambling age in your jurisdiction.", color: "hsl(43,90%,50%)" },
      { title: "Geographic Restrictions", desc: "Our service is intended for users in the United Kingdom. Gambling laws vary by jurisdiction — it is your sole responsibility to ensure that accessing casino sites is legal in your location.", color: "hsl(148,60%,52%)" },
      { title: "Responsible Use", desc: "You must not use our website if you have a gambling problem or have self-excluded from gambling services via GamStop or any individual casino's self-exclusion programme.", color: "hsl(217,82%,66%)" },
    ],
  },
  {
    title: "Affiliate Disclosure",
    body: "BritishVIPCasinoSites.com participates in affiliate marketing programmes. When you click links to casino operators on our website and subsequently register or deposit, we may receive a commission from the operator. This commercial arrangement does not influence our editorial reviews or rankings, which are determined solely by objective assessment criteria. All affiliate relationships are clearly disclosed.",
    items: null,
  },
  {
    title: "Accuracy of Information",
    body: "We strive to ensure all information on our website — including casino bonuses, terms, payment methods, and features — is accurate and current. However, casino offers change frequently and we cannot guarantee that all details are up to date at all times. Always verify current terms and conditions directly with the casino operator before registering or depositing.",
    items: null,
  },
  {
    title: "Intellectual Property",
    body: "All content on BritishVIPCasinoSites.com, including text, graphics, logos, and editorial reviews, is the property of BritishVIPCasinoSites.com or its content suppliers and is protected by UK and international copyright law. You may not reproduce, redistribute, or commercially exploit any content without prior written consent from us.",
    items: null,
  },
  {
    title: "Limitation of Liability",
    body: "BritishVIPCasinoSites.com is provided on an 'as is' basis. To the fullest extent permitted by UK law, we disclaim all liability for any losses, damages, or claims arising from your use of our website, reliance on information provided, or use of third-party casino sites accessed via our links. We are not liable for gambling losses incurred at any casino we review.",
    items: null,
  },
  {
    title: "Third-Party Links",
    body: "Our website contains links to third-party casino sites and services. We have no control over the content, privacy policies, or practices of these external sites and accept no responsibility for them. Your use of third-party sites is entirely at your own risk and subject to their respective terms and conditions.",
    items: null,
  },
  {
    title: "Responsible Gambling",
    body: "We are committed to promoting responsible gambling across all of our content and partnerships. If you are experiencing difficulties with gambling, please seek immediate assistance from BeGambleAware.org (0808 8020 133), GamCare.org.uk, or self-exclude via GamStop.co.uk.",
    items: null,
  },
  {
    title: "Governing Law",
    body: "These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
    items: null,
  },
  {
    title: "Contact Us",
    body: "For questions regarding these Terms and Conditions, please contact our legal team at: legal@britishvipcasinosites.com.",
    items: null,
  },
]

export default function Terms() {
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
            style={{ backgroundColor: "hsl(43,90%,50%,0.08)", borderColor: "hsl(43,90%,50%,0.25)" }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <path d="M13 2L4 6.5V13c0 5 4 9 9 10 5-1 9-5 9-10V6.5L13 2z" stroke="hsl(43,90%,50%)" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M9 13l3 3 5-5" stroke="hsl(148,60%,52%)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(43,90%,50%)" }} />
            <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-accent">Legal Document</span>
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(43,90%,50%)" }} />
          </div>
          <h1 className="font-serif font-bold text-2xl md:text-4xl text-primary-foreground text-balance mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-muted-foreground font-sans">
            Effective: <span className="text-accent font-semibold">2026</span> &nbsp;·&nbsp; britishvipcasinosites.com
          </p>
        </div>
        <div className="rule-tricolor w-full" />
      </section>

      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Two-column layout: TOC + content */}
            <div className="flex flex-col md:flex-row gap-8">

              {/* TOC sidebar */}
              <aside className="hidden md:block w-52 shrink-0">
                <div
                  className="sticky top-20 rounded-xl border border-border/50 p-4"
                  style={{ backgroundColor: "hsl(222,36%,11%)" }}
                >
                  <p className="text-[9px] font-sans font-bold tracking-[0.28em] uppercase text-muted-foreground mb-3">Contents</p>
                  <nav aria-label="Terms contents">
                    <ol className="space-y-1.5">
                      {sections.map((s, i) => (
                        <li key={i}>
                          <a
                            href={`#term-${i}`}
                            className="flex items-start gap-2 text-[11px] text-muted-foreground hover:text-accent transition-colors font-sans leading-snug"
                          >
                            <span className="shrink-0 font-bold" style={{ color: ACCENT_CYCLE[i % 3] }}>{String(i + 1).padStart(2, "0")}</span>
                            <span>{s.title}</span>
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
                  style={{ backgroundColor: "hsl(222,36%,13%)", borderColor: "hsl(43,90%,50%,0.22)" }}
                >
                  <div className="w-[3px] shrink-0 rounded-full" style={{ backgroundColor: "hsl(43,90%,50%)" }} />
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    Please read these Terms and Conditions carefully before using{" "}
                    <span className="text-foreground font-semibold">BritishVIPCasinoSites.com</span>. These terms govern your access to and use of our VIP casino comparison service.
                  </p>
                </div>

                <div className="space-y-10">
                  {sections.map((section, idx) => {
                    const accent = ACCENT_CYCLE[idx % 3]
                    return (
                      <div key={section.title} id={`term-${idx}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="font-serif text-[11px] font-bold shrink-0 w-7 h-7 rounded-full flex items-center justify-center border"
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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {section.items.map((item) => (
                                <div
                                  key={item.title}
                                  className="border rounded-xl p-4 transition-colors"
                                  style={{ backgroundColor: "hsl(222,36%,13%)", borderColor: `${item.color}28` }}
                                >
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                                    <span className="font-serif font-semibold text-xs" style={{ color: item.color }}>{item.title}</span>
                                  </div>
                                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        {idx < sections.length - 1 && (
                          <div className="mt-8 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent}50, transparent)` }} />
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
