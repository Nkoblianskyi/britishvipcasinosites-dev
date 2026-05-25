"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, Award, Clock, Zap, CreditCard, Smartphone, CheckCircle } from "lucide-react"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[52px]">

        {/* ── HERO — compact: 250px mobile / 400px desktop ── */}
        <section
          className="hero-outer relative overflow-hidden flex flex-col"
          style={{ height: "250px" }}
        >
          <style>{`@media(min-width:768px){.hero-outer{height:400px!important}}`}</style>

          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/casino-hero.jpg"
              alt=""
              fill
              className="object-cover object-center"
              style={{ filter: "hue-rotate(20deg) saturate(0.55) brightness(0.40)" }}
              priority
              aria-hidden="true"
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(150deg, hsl(224,55%,6%,0.92) 0%, hsl(148,40%,7%,0.55) 55%, hsl(217,60%,9%,0.90) 100%)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-12"
              style={{ background: "linear-gradient(to top, hsl(222,42%,7%), transparent)" }}
            />
          </div>

          {/* Content — vertically centered, all content must fit inside height */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Tricolor stripe at top */}
            <div className="stripe-tricolor w-full shrink-0" />

            {/* Centred content block */}
            <div className="flex-1 flex items-center overflow-hidden">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:gap-8 w-full">

                  {/* LEFT copy */}
                  <div className="flex-1 min-w-0">
                    {/* Eyebrow — hidden on very small to avoid overflow */}
                    <div
                      className="hidden sm:inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-accent/30 mb-2"
                      style={{ backgroundColor: "hsl(43,90%,50%,0.08)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "hsl(43,90%,50%)" }}
                      />
                      <span className="text-[9px] font-sans font-bold tracking-[0.22em] uppercase text-accent">
                        UK VIP Casino Comparison 2026
                      </span>
                    </div>

                    {/* Headline — tighter on mobile */}
                    <h1 className="font-serif font-bold text-lg sm:text-2xl md:text-3xl leading-tight text-primary-foreground mb-1.5 md:mb-2 text-balance">
                      <span className="text-accent">British VIP</span>{" "}Casino Sites
                      <br className="hidden sm:block" />
                      <span
                        className="text-base sm:text-xl md:text-2xl font-semibold"
                        style={{ color: "hsl(148,60%,52%)" }}
                      >
                        {" "}Ranked &amp; Reviewed
                      </span>
                    </h1>

                    {/* Description — desktop only */}
                    <p className="hidden md:block text-xs text-primary-foreground/60 leading-relaxed mb-2 max-w-md font-sans">
                      Independent expert reviews of every UKGC-licensed casino — bonuses, game libraries, payout speeds and support.
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-accent shrink-0" aria-hidden="true" />
                        <span className="text-[9px] text-primary-foreground/50 font-sans">
                          Updated: <span className="text-accent font-semibold">{currentDate}</span>
                        </span>
                      </div>
                      <span className="text-primary-foreground/20">·</span>
                      <button
                        onClick={() => setIsAdvertiserModalOpen(true)}
                        className="text-[9px] text-accent/70 hover:text-accent underline underline-offset-2 transition-colors font-sans"
                      >
                        Advertiser Disclosure
                      </button>
                      <span className="text-primary-foreground/20">·</span>
                      <button
                        onClick={() => setIsAgeModalOpen(true)}
                        className="text-[9px] text-accent/70 hover:text-accent underline underline-offset-2 transition-colors font-sans"
                      >
                        Age Verification
                      </button>
                    </div>
                  </div>

                  {/* RIGHT — trust pills (desktop only, compact) */}
                  <div className="hidden md:grid grid-cols-2 gap-2 shrink-0">
                    {[
                      { icon: <Shield className="w-3.5 h-3.5" aria-hidden="true" />, label: "Expert Reviews", color: "hsl(43,90%,50%)" },
                      { icon: <Award className="w-3.5 h-3.5" aria-hidden="true" />, label: "Top Bonuses", color: "hsl(148,60%,52%)" },
                      { icon: <Zap className="w-3.5 h-3.5" aria-hidden="true" />, label: "Fast Payouts", color: "hsl(217,82%,66%)" },
                      { icon: <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />, label: "UKGC Verified", color: "hsl(43,90%,50%)" },
                    ].map((card, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg border px-3 py-2 backdrop-blur-sm"
                        style={{ backgroundColor: "hsl(222,45%,10%,0.80)", borderColor: `${card.color}28` }}
                      >
                        <span style={{ color: card.color }}>{card.icon}</span>
                        <span className="font-sans font-semibold text-[10px] text-primary-foreground/80 whitespace-nowrap">
                          {card.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Tricolor bottom rule */}
            <div className="rule-tricolor w-full shrink-0" />
          </div>
        </section>

        {/* ── Trust bar (mobile visible) ── */}
        <div
          className="border-b border-border/40"
          style={{ backgroundColor: "hsl(222,38%,9%)" }}
        >
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
              {[
                { icon: <Shield className="w-3 h-3 shrink-0" aria-hidden="true" />, label: "UKGC Licensed", color: "hsl(43,90%,50%)" },
                { icon: <Award className="w-3 h-3 shrink-0" aria-hidden="true" />, label: "Exclusive Offers", color: "hsl(148,60%,52%)" },
                { icon: <Zap className="w-3 h-3 shrink-0" aria-hidden="true" />, label: "Fast Payouts", color: "hsl(217,82%,66%)" },
                { icon: <CheckCircle className="w-3 h-3 shrink-0" aria-hidden="true" />, label: "Verified Reviews", color: "hsl(43,90%,50%)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 shrink-0" style={{ color: item.color }}>
                  {item.icon}
                  <span className="text-[10px] font-sans font-semibold text-primary-foreground/70 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Casino Sites List ─────────────────────────────── */}
        <div id="casino-sites">
          <BettingSitesList />
        </div>

        {/* ── Editorial Info Section ────────────────────────── */}
        <section className="py-12 md:py-20 section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Section header */}
              <div className="flex flex-col items-center text-center mb-10 md:mb-14">
                <div className="stripe-tricolor w-16 rounded-full mb-5" style={{ height: "3px" }} />
                <h2 className="font-serif font-bold text-2xl md:text-4xl text-foreground text-balance mb-3">
                  How to Choose <br className="hidden md:block" /> British Vip Casino Sites in 2026
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg font-sans">
                  Everything you need to know before depositing - from UKGC regulation to bonus terms and payout speeds.
                </p>
              </div>

              {/* Quick-pick grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 md:mb-14">
                {[
                  { icon: <Shield className="w-5 h-5" aria-hidden="true" />, label: "UKGC Licence", desc: "Always verify a valid licence before playing.", color: "hsl(43,90%,50%)", bg: "hsl(43,90%,50%,0.07)" },
                  { icon: <Award className="w-5 h-5" aria-hidden="true" />, label: "Fair Bonuses", desc: "Compare wagering — lower is better.", color: "hsl(148,60%,52%)", bg: "hsl(148,60%,38%,0.07)" },
                  { icon: <CreditCard className="w-5 h-5" aria-hidden="true" />, label: "Fast Payouts", desc: "Top casinos settle within 24 hours.", color: "hsl(217,82%,66%)", bg: "hsl(217,82%,50%,0.07)" },
                  { icon: <Smartphone className="w-5 h-5" aria-hidden="true" />, label: "Mobile Ready", desc: "Full library on iOS and Android.", color: "hsl(43,90%,50%)", bg: "hsl(43,90%,50%,0.07)" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/50 p-4 flex flex-col gap-2 hover:border-accent/30 transition-colors card-glow"
                    style={{ backgroundColor: "hsl(222,36%,13%)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <span className="font-serif font-bold text-sm text-foreground">{item.label}</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Article blocks */}
              <article className="space-y-5 md:space-y-6">

                {/* Block 1 — Regulation (blue accent) */}
                <div
                  className="rounded-xl border-l-4 p-5 md:p-7"
                  style={{ borderColor: "hsl(217,82%,50%)", backgroundColor: "hsl(217,82%,50%,0.07)" }}
                >
                  <h3 className="font-serif font-bold text-base md:text-xl text-foreground mb-3">
                    UK Casino Regulation: The Gold Standard
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 font-sans">
                    The UK Gambling Commission (UKGC) is widely regarded as the world&apos;s most rigorous gambling regulator. Every legitimate online casino operating in Britain must hold a current UKGC licence — a legal requirement demanding operators segregate customer funds, conduct robust identity verification, and submit to regular third-party audits.
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans">
                    Every casino listed on BritishVIPCasinoSites.com has been independently verified as fully licensed and compliant.
                  </p>
                </div>

                {/* Block 2 — two-column split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      accent: "hsl(43,90%,50%)",
                      title: "Evaluating Welcome Bonuses",
                      body: "UK casinos compete aggressively on welcome offers — matched deposits, free spins, cashback, and no-deposit bonuses are all common. The headline figure is rarely the whole story.",
                      items: [
                        "Wagering requirement: aim for 30x or lower",
                        "Game contribution: slots usually count 100%",
                        "Time limit: look for at least 30 days to clear",
                        "Max bet rule: typically £5 per spin while wagering",
                      ],
                    },
                    {
                      accent: "hsl(148,60%,52%)",
                      title: "Game Libraries & Software Providers",
                      body: "The quality and breadth of a casino's game library is a strong indicator of overall quality. Leading sites partner with multiple certified software studios.",
                      items: [
                        "Slots: 1,000+ titles from NetEnt, Pragmatic, Microgaming",
                        "Live casino: Evolution Gaming tables for authenticity",
                        "Table games: multiple RNG blackjack, roulette variants",
                        "Progressive jackpots: Mega Moolah, Age of the Gods",
                      ],
                    },
                  ].map((block, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border/50 p-5 hover:border-accent/30 transition-colors"
                      style={{ backgroundColor: "hsl(222,36%,13%)" }}
                    >
                      <div className="w-8 h-[3px] rounded-full mb-4" style={{ backgroundColor: block.accent }} />
                      <h3 className="font-serif font-bold text-base md:text-lg text-foreground mb-2">
                        {block.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 font-sans">
                        {block.body}
                      </p>
                      <ul className="space-y-1.5">
                        {block.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-[11px] text-muted-foreground font-sans">
                            <span className="mt-0.5 shrink-0 font-bold" style={{ color: block.accent }}>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Block 3 — Banking */}
                <div
                  className="rounded-xl border border-border/50 p-5 md:p-7"
                  style={{ backgroundColor: "hsl(222,36%,13%)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="w-8 h-[3px] rounded-full mb-4" style={{ backgroundColor: "hsl(43,90%,50%)" }} />
                      <h3 className="font-serif font-bold text-base md:text-xl text-foreground mb-2">
                        Banking Methods &amp; Withdrawal Speed
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 font-sans">
                        Since April 2020, UK players cannot use credit cards at online casinos. Accepted methods include Visa and Mastercard debit cards, PayPal, Skrill, Neteller, bank transfers, and Apple Pay.
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans">
                        Class-leading casinos process e-wallet withdrawals in under 4 hours, with debit card payments settled in 1–3 business days.
                      </p>
                    </div>
                    <div
                      className="md:w-44 shrink-0 rounded-xl border border-border/50 p-4"
                      style={{ backgroundColor: "hsl(222,42%,8%)" }}
                    >
                      <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">Typical Speeds</p>
                      {[
                        { method: "E-wallets", speed: "Under 4 hours", color: "hsl(148,60%,52%)" },
                        { method: "Debit Card", speed: "1–3 days", color: "hsl(43,90%,50%)" },
                        { method: "Bank Transfer", speed: "3–5 days", color: "hsl(217,82%,66%)" },
                        { method: "Apple Pay", speed: "Under 24 h", color: "hsl(148,60%,52%)" },
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5 border-b border-border/30 last:border-0">
                          <span className="text-[11px] text-muted-foreground font-sans">{row.method}</span>
                          <span className="text-[11px] font-sans font-semibold" style={{ color: row.color }}>{row.speed}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Block 4 — Mobile + Support */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="rounded-xl border-l-4 p-5"
                    style={{ borderColor: "hsl(43,90%,50%)", backgroundColor: "hsl(43,90%,50%,0.05)" }}
                  >
                    <h3 className="font-serif font-bold text-base md:text-lg text-foreground mb-2">
                      Mobile Casino Experience
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 font-sans">
                      Over 65% of UK casino sessions happen on mobile. A top-tier mobile casino delivers the full game library, live dealer streams, instant deposits, and fast withdrawals.
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans">
                      Look for HTML5-based platforms that work in your browser without a download. Dedicated iOS and Android apps offer faster loading and biometric login.
                    </p>
                  </div>
                  <div
                    className="rounded-xl border-l-4 p-5"
                    style={{ borderColor: "hsl(217,82%,50%)", backgroundColor: "hsl(217,82%,50%,0.05)" }}
                  >
                    <h3 className="font-serif font-bold text-base md:text-lg text-foreground mb-2">
                      Customer Support Standards
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 font-sans">
                      Responsive support is non-negotiable. Premier UK casinos provide 24/7 live chat staffed by knowledgeable agents, complemented by email support and telephone assistance.
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans">
                      Test support before depositing: ask a question via live chat. Average response times under 2 minutes signal a well-staffed operation.
                    </p>
                  </div>
                </div>

                {/* Block 5 — Responsible Gambling (green accent) */}
                <div
                  className="rounded-xl border border-border/50 p-5 md:p-7"
                  style={{ backgroundColor: "hsl(222,36%,13%)" }}
                >
                  <div className="w-8 h-[3px] rounded-full mb-4" style={{ backgroundColor: "hsl(148,60%,52%)" }} />
                  <h3 className="font-serif font-bold text-base md:text-xl text-foreground mb-3">
                    Responsible Gambling Tools
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-5 font-sans">
                    All UKGC-licensed casinos are legally required to provide a comprehensive suite of responsible gambling tools to protect players.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { label: "Deposit Limits", desc: "Set daily, weekly, or monthly deposit caps.", color: "hsl(43,90%,50%)" },
                      { label: "Reality Checks", desc: "Timed notifications remind you how long you have played.", color: "hsl(148,60%,52%)" },
                      { label: "Self-Exclusion", desc: "Block yourself from all UKGC operators via GamStop.", color: "hsl(217,82%,66%)" },
                      { label: "Cooling-Off Periods", desc: "Take a 24-hour to 30-day break any time.", color: "hsl(43,90%,50%)" },
                      { label: "Session Time Limits", desc: "Cap individual gambling sessions in advance.", color: "hsl(148,60%,52%)" },
                      { label: "Loss Limits", desc: "Prevent losses exceeding a set amount per period.", color: "hsl(217,82%,66%)" },
                    ].map((tool, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-3 border border-border/40"
                        style={{ backgroundColor: "hsl(222,42%,8%)" }}
                      >
                        <p className="font-serif font-semibold text-xs mb-1" style={{ color: tool.color }}>{tool.label}</p>
                        <p className="text-[11px] text-muted-foreground leading-relaxed font-sans">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </article>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <div id="faq-section">
          <FaqSection />
        </div>

        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
        <SiteFooter />
      </div>
    </main>
  )
}
