import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | BritishVIPCasinoSites.com — Expert UK Casino Reviews",
  description:
    "Learn about our editorial mission, review methodology, and commitment to helping UK players find the finest UKGC-licensed VIP casinos on britishvipcasinosites.com.",
}

const pillars = [
  {
    title: "UKGC Licensed Only",
    body: "Every casino we feature holds a valid UK Gambling Commission licence, guaranteeing the highest standards of player protection, secure transactions, and verified fair gaming.",
    color: "hsl(43,90%,50%)",
    bg: "hsl(43,90%,50%,0.08)",
    border: "hsl(43,90%,50%,0.28)",
  },
  {
    title: "British Player Focused",
    body: "We prioritise casinos that understand British gaming culture — accepting GBP, supporting UK payment methods, and offering UK-based customer support around the clock.",
    color: "hsl(148,60%,52%)",
    bg: "hsl(148,60%,38%,0.08)",
    border: "hsl(148,60%,38%,0.28)",
  },
  {
    title: "Expert-Led Reviews",
    body: "Our experienced analysts conduct thorough, hands-on testing of every platform, examining game quality, bonus transparency, withdrawal performance, and overall user experience.",
    color: "hsl(217,82%,66%)",
    bg: "hsl(217,82%,50%,0.08)",
    border: "hsl(217,82%,50%,0.28)",
  },
  {
    title: "Exclusive VIP Deals",
    body: "We negotiate enhanced welcome offers and exclusive promotions unavailable through direct sign-up — giving our readers a genuine VIP edge from the moment they register.",
    color: "hsl(43,90%,50%)",
    bg: "hsl(43,90%,50%,0.08)",
    border: "hsl(43,90%,50%,0.28)",
  },
]

const methodology = [
  ["Licensing & Security", "UKGC licence verification, SSL encryption, and fund segregation compliance", "hsl(43,90%,50%)"],
  ["Welcome Bonuses", "Comprehensive value assessment of wagering requirements and realistic completion terms", "hsl(148,60%,52%)"],
  ["Game Library", "Slot variety, live dealer tables, RTP rates, jackpots, and software provider quality", "hsl(217,82%,66%)"],
  ["Payment Methods", "UK-friendly deposit and withdrawal options, processing speeds, and fee transparency", "hsl(43,90%,50%)"],
  ["Mobile Experience", "App quality, responsive website performance, and full game availability on mobile", "hsl(148,60%,52%)"],
  ["Customer Support", "Live chat availability, email response times, and UK-focused support team quality", "hsl(217,82%,66%)"],
  ["Responsible Gaming", "Deposit limits, self-exclusion tools, and links to BeGambleAware and GamCare", "hsl(43,90%,50%)"],
]

const values = [
  { title: "Transparency", body: "We clearly explain our testing methodology and ranking criteria so you understand exactly how and why we evaluate casinos the way we do.", color: "hsl(43,90%,50%)" },
  { title: "Editorial Independence", body: "Our reviews remain completely impartial. Whilst we earn affiliate commissions, these commercial arrangements never influence our honest, player-first assessments.", color: "hsl(148,60%,52%)" },
  { title: "Continuous Updates", body: "The UK casino landscape evolves constantly. We regularly reassess every platform to ensure our recommendations reflect current offers, licensing status, and platform quality.", color: "hsl(217,82%,66%)" },
  { title: "Responsible Gaming", body: "We actively promote responsible gambling practices and prominently feature links to BeGambleAware, GamCare, and GamStop across our platform.", color: "hsl(43,90%,50%)" },
]

export default function AboutUs() {
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
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border"
            style={{ backgroundColor: "hsl(43,90%,50%,0.08)", borderColor: "hsl(43,90%,50%,0.25)" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="12" stroke="hsl(43,90%,50%)" strokeWidth="1.2" />
              <path d="M9 14 L12 10 L14 13 L17 9 L19 14" stroke="hsl(148,60%,52%)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="14" cy="18" r="2" fill="hsl(217,82%,66%)" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(43,90%,50%)" }} />
            <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase" style={{ color: "hsl(43,90%,50%)" }}>Who We Are</span>
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(43,90%,50%)" }} />
          </div>
          <h1 className="font-serif font-bold text-2xl md:text-4xl text-primary-foreground text-balance mb-3">
            About British VIP Casino Sites
          </h1>
          <p className="text-xs text-muted-foreground font-sans mb-2">
            Updated: <span className="text-accent font-semibold">2026</span> &nbsp;·&nbsp; britishvipcasinosites.com
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-lg">
            Your trusted authority on UK VIP casino sites — helping British players find the finest UKGC-licensed casinos through independent, expert-led analysis.
          </p>
        </div>
        <div className="rule-tricolor w-full" />
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-14">

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "hsl(217,82%,66%)" }} />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Clarity in a Complex Market</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-sans">
                At BritishVIPCasinoSites.com, we have established ourselves as the UK&apos;s trusted destination for premium casino evaluation and comparison. In today&apos;s crowded British gaming marketplace, our specialist team cuts through the marketing noise to identify genuinely exceptional VIP casino experiences tailored specifically for players in the United Kingdom.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Whether you are passionate about slots, live blackjack, roulette, or progressive jackpots, we help you discover casinos that deliver outstanding value, a superior game library, transparent bonus terms, and first-class customer service — all under the protection of the UK Gambling Commission.
              </p>
            </div>

            {/* Pillars */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "hsl(43,90%,50%)" }} />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">What Sets Us Apart</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((p, i) => (
                  <div
                    key={i}
                    className="border rounded-xl p-5 transition-all duration-200"
                    style={{ backgroundColor: "hsl(222,36%,13%)", borderColor: p.border }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border"
                        style={{ backgroundColor: p.bg, borderColor: p.border }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                      </div>
                      <h3 className="font-serif font-bold text-sm text-foreground">{p.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "hsl(148,60%,52%)" }} />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Our Review Methodology</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-sans">
                Behind every recommendation lies a comprehensive evaluation process developed by industry veterans. We scrutinise each casino across multiple critical dimensions to ensure every listing meets the standard British VIP players deserve:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {methodology.map(([title, desc, color], i) => (
                  <div
                    key={i}
                    className="flex gap-3 border border-border/50 rounded-xl px-4 py-3 hover:border-accent/25 transition-colors"
                    style={{ backgroundColor: "hsl(222,36%,13%)" }}
                  >
                    <div className="w-[3px] shrink-0 rounded-full" style={{ backgroundColor: color as string }} />
                    <div>
                      <span className="font-serif font-semibold text-xs block mb-0.5" style={{ color: color as string }}>{title}</span>
                      <span className="text-xs text-muted-foreground leading-relaxed font-sans">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "hsl(217,82%,66%)" }} />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Our Core Principles</h2>
              </div>
              <div className="space-y-3">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="flex gap-4 border border-border/50 rounded-xl p-5 hover:border-accent/25 transition-colors"
                    style={{ backgroundColor: "hsl(222,36%,13%)" }}
                  >
                    <div
                      className="w-[3px] shrink-0 rounded-full"
                      style={{ backgroundColor: v.color }}
                    />
                    <div>
                      <p className="font-serif font-semibold text-sm mb-1" style={{ color: v.color }}>{v.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans">{v.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding block */}
            <div
              className="rounded-xl overflow-hidden border"
              style={{ backgroundColor: "hsl(222,42%,7%)", borderColor: "hsl(43,90%,50%,0.18)" }}
            >
              <div className="stripe-tricolor w-full" />
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-7">
                  <p className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-accent mb-2">How We Are Funded</p>
                  <h3 className="font-serif font-bold text-xl text-primary-foreground mb-3">Free for All UK Players</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed font-sans">
                    Our platform is sustained through affiliate partnerships with licensed casinos, who compensate us when visitors register through our links. This allows us to operate entirely free of charge for readers, with no subscription fees or restricted content.
                  </p>
                </div>
                <div
                  className="md:w-[250px] shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l p-7 gap-2"
                  style={{ backgroundColor: "hsl(148,60%,38%,0.07)", borderColor: "hsl(148,60%,38%,0.20)" }}
                >
                  <p className="font-serif font-bold text-sm" style={{ color: "hsl(148,60%,52%)" }}>Editorial Integrity</p>
                  <p className="text-xs text-primary-foreground/55 leading-relaxed font-sans">
                    Commercial relationships never compromise our rankings — every position is determined solely by platform quality, player satisfaction, and objective metrics.
                  </p>
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
