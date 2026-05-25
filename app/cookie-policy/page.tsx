import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | BritishVIPCasinoSites.com",
  description:
    "Understand how britishvipcasinosites.com uses cookies and tracking technologies, and how to manage your preferences under UK GDPR and PECR.",
}

// Cookie type cards — color-coded by type
const cookieTypes = [
  {
    title: "Strictly Necessary",
    body: "Essential for core website functionality and cannot be disabled. They activate in response to your actions such as setting privacy preferences or completing forms.",
    color: "hsl(43,90%,50%)",
    bg: "hsl(43,90%,50%,0.07)",
    border: "hsl(43,90%,50%,0.25)",
  },
  {
    title: "Performance & Analytics",
    body: "Help us understand how visitors interact with our site by collecting anonymous statistical data — including visit counts, traffic sources, and popular content areas.",
    color: "hsl(148,60%,52%)",
    bg: "hsl(148,60%,38%,0.07)",
    border: "hsl(148,60%,38%,0.25)",
  },
  {
    title: "Functional",
    body: "Enable enhanced functionality and personalisation, such as remembering your preferences or region. Declining these may affect certain site features.",
    color: "hsl(217,82%,66%)",
    bg: "hsl(217,82%,50%,0.07)",
    border: "hsl(217,82%,50%,0.25)",
  },
  {
    title: "Targeting & Advertising",
    body: "Our advertising partners may use these to build a profile of your interests for relevant ads. They do not store directly identifiable personal information.",
    color: "hsl(43,90%,50%)",
    bg: "hsl(43,90%,50%,0.07)",
    border: "hsl(43,90%,50%,0.25)",
  },
]

const managementOptions = [
  {
    title: "Via Our Cookie Banner",
    body: "On your first visit a consent panel lets you accept or decline non-essential cookies. Update your preferences at any time via the Cookie Policy link in our footer.",
    color: "hsl(43,90%,50%)",
  },
  {
    title: "Via Your Browser Settings",
    body: "Most browsers allow you to view and delete existing cookies, block third-party cookies, or block all cookies. Blocking all cookies may impair website functionality.",
    color: "hsl(148,60%,52%)",
  },
  {
    title: "Advertising Opt-Out",
    body: "To opt out of interest-based advertising from participating companies, visit the Digital Advertising Alliance at www.youronlinechoices.com/uk.",
    color: "hsl(217,82%,66%)",
  },
]

const sections = [
  {
    title: "What Are Cookies?",
    body: "Cookies are small text files stored on your device when you visit a website. They are widely used to make sites function correctly, deliver a better user experience, and provide website owners with valuable insights. Cookies typically contain a unique identifier and may include information about your preferences and how you interact with the site.",
    type: "text",
  },
  {
    title: "Types of Cookies We Use",
    body: null,
    type: "cookie-types",
  },
  {
    title: "First-Party vs Third-Party Cookies",
    body: "First-party cookies are set directly by britishvipcasinosites.com for site functionality and analytics. Third-party cookies are set by external services such as Google Analytics, social media platforms, and advertising networks — each governed by their own privacy policies.",
    type: "text",
  },
  {
    title: "How to Manage Cookies",
    body: null,
    type: "management",
  },
  {
    title: "Third-Party Services We Use",
    body: "We use cookies from: Google Analytics (traffic analysis and performance measurement), social media platforms (content sharing functionality), advertising networks (campaign reach measurement), and affiliate partners (referral and conversion tracking).",
    type: "text",
  },
  {
    title: "Cookie Lifespan",
    body: "Session cookies are temporary and deleted when you close your browser. Persistent cookies remain for a set period — from days to years — or until manually deleted by you. We do not store persistent cookies longer than necessary for their stated purpose.",
    type: "text",
  },
  {
    title: "Updates to This Policy",
    body: "We may periodically update this Cookie Policy to reflect changes in our practices, technology, or legal requirements. Significant changes will be indicated by an updated effective date at the top of this page.",
    type: "text",
  },
  {
    title: "Contact Us",
    body: "If you have questions about our cookie practices or wish to exercise your data rights, please contact our privacy team at cookies@britishvipcasinosites.com.",
    type: "text",
  },
]

const ACCENT_CYCLE = ["hsl(43,90%,50%)", "hsl(148,60%,52%)", "hsl(217,82%,66%)"]

export default function CookiePolicy() {
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
            style={{ backgroundColor: "hsl(148,60%,38%,0.08)", borderColor: "hsl(148,60%,38%,0.25)" }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <circle cx="13" cy="13" r="11" stroke="hsl(43,90%,50%)" strokeWidth="1.2" />
              <circle cx="9" cy="10" r="1.8" fill="hsl(217,82%,66%)" />
              <circle cx="16" cy="8" r="1.2" fill="hsl(43,90%,50%)" />
              <circle cx="17" cy="15.5" r="1.8" fill="hsl(217,82%,66%)" />
              <circle cx="9.5" cy="17" r="1.2" fill="hsl(43,90%,50%)" />
              <circle cx="13" cy="13" r="1" fill="hsl(148,60%,52%,0.6)" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(148,60%,52%)" }} />
            <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase" style={{ color: "hsl(148,60%,52%)" }}>Legal Document</span>
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(148,60%,52%)" }} />
          </div>
          <h1 className="font-serif font-bold text-2xl md:text-4xl text-primary-foreground text-balance mb-2">Cookie Policy</h1>
          <p className="text-xs text-muted-foreground font-sans">
            Effective: <span className="text-accent font-semibold">2026</span> &nbsp;·&nbsp; britishvipcasinosites.com
          </p>
        </div>
        <div className="rule-tricolor w-full" />
      </section>

      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Intro */}
            <div
              className="flex gap-4 mb-10 rounded-xl p-5 border"
              style={{ backgroundColor: "hsl(222,36%,13%)", borderColor: "hsl(148,60%,38%,0.25)" }}
            >
              <div className="w-[3px] shrink-0 rounded-full" style={{ backgroundColor: "hsl(148,60%,52%)" }} />
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                This Cookie Policy explains how <span className="text-foreground font-semibold">BritishVIPCasinoSites.com</span> uses cookies and similar tracking technologies when you visit our website, in full compliance with the Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section, idx) => {
                const accent = ACCENT_CYCLE[idx % 3]
                return (
                  <div key={section.title} id={`section-${idx}`}>
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
                      {section.type === "text" && section.body && (
                        <p className="text-sm text-muted-foreground leading-relaxed font-sans">{section.body}</p>
                      )}

                      {section.type === "cookie-types" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {cookieTypes.map((ct) => (
                            <div
                              key={ct.title}
                              className="rounded-xl p-4 border transition-colors"
                              style={{ backgroundColor: ct.bg, borderColor: ct.border }}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: ct.color }} />
                                <h3 className="font-serif font-semibold text-sm text-foreground">{ct.title}</h3>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed font-sans">{ct.body}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.type === "management" && (
                        <div className="space-y-3">
                          {managementOptions.map((opt) => (
                            <div
                              key={opt.title}
                              className="flex gap-4 rounded-xl p-4 border border-border/50"
                              style={{ backgroundColor: "hsl(222,36%,13%)" }}
                            >
                              <div className="w-[3px] shrink-0 rounded-full" style={{ backgroundColor: opt.color }} />
                              <div>
                                <p className="font-serif font-semibold text-sm mb-1" style={{ color: opt.color }}>{opt.title}</p>
                                <p className="text-xs text-muted-foreground leading-relaxed font-sans">{opt.body}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {idx < sections.length - 1 && (
                      <div className="mt-8 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent}55, transparent)` }} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
