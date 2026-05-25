import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Safer Betting | BritishVIPCasinoSites.com",
  description:
    "BritishVIPCasinoSites.com is committed to safer betting. Find tools, resources, and UK support organisations to help you stay in control of your gambling.",
}

const tools = [
  {
    title: "Deposit Limits",
    body: "All UKGC-licensed casinos must offer daily, weekly, and monthly deposit limits. Setting these before you start ensures your spending never exceeds what you are comfortable losing.",
    color: "hsl(43,90%,50%)",
    bg: "hsl(43,90%,50%,0.07)",
    border: "hsl(43,90%,50%,0.25)",
  },
  {
    title: "Reality Checks",
    body: "Reality check notifications alert you to how long you have been playing. These prompts help you take regular breaks and maintain clear perspective throughout a session.",
    color: "hsl(148,60%,52%)",
    bg: "hsl(148,60%,38%,0.07)",
    border: "hsl(148,60%,38%,0.25)",
  },
  {
    title: "Time-Out Periods",
    body: "If you need a short break from gambling, time-out options let you temporarily suspend your account from 24 hours up to 6 weeks — no questions asked.",
    color: "hsl(217,82%,66%)",
    bg: "hsl(217,82%,50%,0.07)",
    border: "hsl(217,82%,50%,0.25)",
  },
  {
    title: "Self-Exclusion",
    body: "Self-exclusion blocks you from gambling for a minimum of 6 months. All UKGC-licensed casinos must honour this immediately and cease any marketing contact during the exclusion period.",
    color: "hsl(43,90%,50%)",
    bg: "hsl(43,90%,50%,0.07)",
    border: "hsl(43,90%,50%,0.25)",
  },
]

const organisations = [
  {
    name: "UK Gambling Commission",
    description: "The official regulator of all gambling in Great Britain. Verifies licences, enforces standards, and protects consumers.",
    href: "https://www.gamblingcommission.gov.uk/",
    logo: "/Gambling_Commission_logo.png",
    color: "hsl(0,72%,55%)",
  },
  {
    name: "BeGambleAware",
    description: "Free, confidential advice and support 24/7. Call the National Gambling Helpline on 0808 8020 133.",
    href: "https://www.begambleaware.org/",
    logo: "/gamble-aware.png",
    color: "hsl(43,90%,50%)",
  },
  {
    name: "GamCare",
    description: "The UK's leading provider of support, information, and advice for anyone affected by problem gambling.",
    href: "https://www.gamcare.org.uk/",
    logo: "/gamcare.png",
    color: "hsl(148,60%,52%)",
  },
  {
    name: "GamStop",
    description: "Register with GamStop to self-exclude instantly from all UKGC-licensed gambling websites and apps.",
    href: "https://www.gamstop.co.uk/",
    logo: "/gamstop.svg",
    color: "hsl(217,82%,66%)",
  },
  {
    name: "Gambling Therapy",
    description: "Free online support and counselling for anyone affected by problem gambling, available worldwide.",
    href: "https://www.gamblingtherapy.org/",
    logo: "/gordon.png",
    color: "hsl(43,90%,50%)",
  },
]

const warningSigns = [
  "Spending more than you can comfortably afford to lose",
  "Gambling to escape problems, relieve stress, or improve your mood",
  "Chasing losses by increasing bet sizes or session lengths",
  "Being dishonest with friends or family about your gambling",
  "Neglecting work, studies, family, or personal responsibilities",
  "Borrowing money or selling possessions to fund gambling",
  "Feeling anxious, irritable, or depressed when not gambling",
  "Repeatedly failing to cut back despite wanting to stop",
]

export default function SaferBetting() {
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
            style={{ backgroundColor: "hsl(148,60%,38%,0.08)", borderColor: "hsl(148,60%,38%,0.28)" }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <circle cx="13" cy="13" r="11" stroke="hsl(43,90%,50%)" strokeWidth="1.2" />
              <path d="M13 7v8" stroke="hsl(148,60%,52%)" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="13" cy="18" r="1.2" fill="hsl(148,60%,52%)" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(148,60%,52%)" }} />
            <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase" style={{ color: "hsl(148,60%,52%)" }}>Player Welfare</span>
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(148,60%,52%)" }} />
          </div>
          <h1 className="font-serif font-bold text-2xl md:text-4xl text-primary-foreground text-balance mb-3">
            Safer Betting
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-md mb-2">
            Gambling should always be a form of entertainment. At BritishVIPCasinoSites.com, we are committed to promoting safe, responsible play for every UK player.
          </p>
          <p className="text-xs text-muted-foreground font-sans">
            Updated: <span className="text-accent font-semibold">2026</span> &nbsp;·&nbsp; britishvipcasinosites.com
          </p>
        </div>
        <div className="rule-tricolor w-full" />
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-14">

            {/* Commitment */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "hsl(217,82%,66%)" }} />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Gambling in Control</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-sans">
                Gambling is a legitimate form of entertainment enjoyed safely and responsibly by millions of UK adults each year. However, for some individuals it can become problematic. We take our responsibility seriously and actively encourage all visitors to gamble safely, within their means, and only ever for entertainment — not as a way to make money or solve financial problems.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                We exclusively feature UKGC-licensed casinos, all of which are required by law to provide comprehensive responsible gambling tools. If you are ever concerned about your gambling or that of someone close to you, please use the resources listed below.
              </p>
            </div>

            {/* Tools grid */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "hsl(43,90%,50%)" }} />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Responsible Gambling Tools</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border transition-colors"
                    style={{ backgroundColor: tool.bg, borderColor: tool.border }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border"
                        style={{ backgroundColor: `${tool.color}18`, borderColor: `${tool.color}38` }}
                      >
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tool.color }} />
                      </div>
                      <h3 className="font-serif font-bold text-sm text-foreground">{tool.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">{tool.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning signs — danger checklist */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "hsl(148,60%,52%)" }} />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Warning Signs to Watch For</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-sans">
                Recognising the signs of problem gambling is the first and most important step towards getting help. If you identify with any of the following, we encourage you to reach out to one of the support organisations listed below:
              </p>

              {/* Alert bar */}
              <div
                className="flex items-center gap-3 rounded-xl px-5 py-3 mb-5 border"
                style={{ backgroundColor: "hsl(0,65%,48%,0.07)", borderColor: "hsl(0,65%,48%,0.25)" }}
              >
                <AlertTriangle className="w-4 h-4 shrink-0" style={{ color: "hsl(0,65%,60%)" }} aria-hidden="true" />
                <p className="text-xs font-sans" style={{ color: "hsl(0,65%,72%)" }}>
                  If you are in crisis, call the National Gambling Helpline now: <strong>0808 8020 133</strong> (free, 24/7)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {warningSigns.map((sign, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 border border-border/50 rounded-xl px-4 py-3"
                    style={{ backgroundColor: "hsl(222,36%,13%)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: i % 3 === 0 ? "hsl(43,90%,50%)" : i % 3 === 1 ? "hsl(148,60%,52%)" : "hsl(217,82%,66%)" }}
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed font-sans">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support organisations */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "hsl(217,82%,66%)" }} />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">UK Support Organisations</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {organisations.map((org) => (
                  <Link
                    key={org.name}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-xl p-5 flex flex-col gap-3 group transition-all duration-200"
                    style={{
                      backgroundColor: "hsl(222,36%,13%)",
                      borderColor: `${org.color}25`,
                    }}
                  >
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={120}
                      height={36}
                      className="object-contain h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <div>
                      <p
                        className="font-serif font-bold text-sm mb-1 transition-colors"
                        style={{ color: org.color }}
                      >
                        {org.name}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans">{org.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Emergency callout */}
            <div
              className="rounded-xl overflow-hidden border"
              style={{ backgroundColor: "hsl(222,42%,7%)", borderColor: "hsl(148,60%,38%,0.25)" }}
            >
              <div className="stripe-tricolor w-full" />
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-7">
                  <p
                    className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase mb-2"
                    style={{ color: "hsl(148,60%,52%)" }}
                  >
                    Need Help Right Now?
                  </p>
                  <h3 className="font-serif font-bold text-xl text-primary-foreground mb-3">
                    Free, Confidential Support Around the Clock
                  </h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed font-sans">
                    The National Gambling Helpline provides free, confidential support, information, and counselling 24 hours a day, 7 days a week. You do not need to be in crisis to call — any concern about your gambling is worth discussing.
                  </p>
                </div>
                <div
                  className="md:w-[220px] shrink-0 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l p-7 gap-1"
                  style={{ backgroundColor: "hsl(148,60%,38%,0.08)", borderColor: "hsl(148,60%,38%,0.20)" }}
                >
                  <p className="font-serif font-bold text-3xl text-accent">0808 8020 133</p>
                  <p className="text-[10px] text-primary-foreground/45 font-sans text-center">Free from UK landlines and mobiles</p>
                </div>
              </div>
              <div className="px-7 pb-5">
                <p className="text-[10px] text-primary-foreground/28 leading-relaxed font-sans">
                  18+ only. Gambling can be addictive. Please play responsibly. All casinos listed hold valid UKGC licences. When the fun stops, stop.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
