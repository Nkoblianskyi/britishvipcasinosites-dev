"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Trophy, TrendingUp, Award } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

// Rank configuration: gold for #1, green for #2-3, blue for #4-6
function getRankConfig(index: number) {
  if (index === 0) return {
    rankClass: "rank-gold",
    accentColor: "hsl(43,90%,50%)",
    borderColor: "hsl(43,90%,50%,0.35)",
    cardBg: "hsl(43,90%,50%,0.04)",
    ctaBg: "linear-gradient(135deg, hsl(43,90%,46%), hsl(43,90%,62%))",
    ctaColor: "hsl(224,44%,5%)",
    icon: <Trophy className="w-3 h-3" aria-hidden="true" />,
    label: "#1 Top VIP Casino",
  }
  if (index <= 2) return {
    rankClass: "rank-green",
    accentColor: "hsl(148,60%,52%)",
    borderColor: "hsl(148,60%,38%,0.30)",
    cardBg: "hsl(148,60%,38%,0.04)",
    ctaBg: "linear-gradient(135deg, hsl(148,60%,33%), hsl(148,60%,48%))",
    ctaColor: "#fff",
    icon: <TrendingUp className="w-3 h-3" aria-hidden="true" />,
    label: `#${index + 1} Recommended`,
  }
  return {
    rankClass: "rank-blue",
    accentColor: "hsl(217,82%,66%)",
    borderColor: "hsl(217,82%,50%,0.25)",
    cardBg: "hsl(217,82%,50%,0.04)",
    ctaBg: "linear-gradient(135deg, hsl(217,82%,44%), hsl(217,82%,58%))",
    ctaColor: "#fff",
    icon: <Award className="w-3 h-3" aria-hidden="true" />,
    label: `#${index + 1} ${["Popular", "Trusted", "Editor's Pick"][index - 3] ?? "Featured"}`,
  }
}

function StarRating({ rating, size = "md", accentColor }: { rating: number; size?: "sm" | "md" | "lg"; accentColor?: string }) {
  const raw = (rating / 10) * 5
  const stepped = Math.round(raw / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  const starSize = size === "lg" ? "w-4 h-4" : size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className={`relative inline-block ${starSize}`}>
            <Star className={`${starSize} text-muted-foreground/20`} fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className={`${starSize}`} fill="currentColor" style={{ color: accentColor ?? "hsl(43,90%,50%)" }} />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

// Circular score badge
function ScoreBadge({ score, color, textColor }: { score: number; color: string; textColor?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-full shrink-0"
      style={{
        width: 56,
        height: 56,
        border: `2px solid ${color}50`,
        backgroundColor: `${color}10`,
      }}
    >
      <span className="font-sans font-bold text-base leading-none" style={{ color: textColor ?? color }}>
        {score.toFixed(1)}
      </span>
      <span
        className="font-sans text-[8px] leading-none mt-0.5"
        style={textColor ? { color: textColor, opacity: 0.7 } : undefined}
      >
        /10
      </span>
    </div>
  )
}

export function BettingSitesList() {
  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-3 md:px-4 max-w-5xl">

        {/* Section heading */}
        <div className="mb-7 text-center">
          <div className="stripe-tricolor w-20 rounded-full mx-auto mb-4" style={{ height: "3px" }} />
          <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground mb-1">
            Top UK VIP Casino Sites
          </h2>
          <p className="text-xs text-muted-foreground font-sans">
            Independently reviewed &amp; ranked by our editorial team. UKGC licensed only.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {bettingSites.map((site, index) => {
            const cfg = getRankConfig(index)

            return (
              <div
                key={site.id}
                className="relative rounded-xl overflow-visible animate-fade-in-up transition-all duration-300"
                style={{
                  animationDelay: `${index * 70}ms`,
                  border: `1px solid ${cfg.borderColor}`,
                  backgroundColor: "hsl(222,36%,11%)",
                  boxShadow: `0 0 0 1px ${cfg.accentColor}10, 0 4px 24px ${cfg.accentColor}08`,
                }}
              >
                {/* Rank pill — floating above card */}
                <div className="absolute -top-3.5 left-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[9px] font-sans font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full shadow-md ${cfg.rankClass}`}
                  >
                    {cfg.icon}
                    {cfg.label}
                  </span>
                </div>

                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                  style={{ background: `linear-gradient(to bottom, ${cfg.accentColor}, ${cfg.accentColor}40)` }}
                />

                {/* ── DESKTOP layout ── */}
                <div className="hidden md:flex items-stretch min-h-[100px] rounded-xl overflow-hidden">

                  {/* Logo column */}
                  <div
                    className="w-48 shrink-0 flex items-center justify-center px-5 py-5 border-r"
                    style={{ backgroundColor: "#fff", borderColor: `${cfg.accentColor}20` }}
                  >
                    <Image
                      src={site.logo}
                      alt={`${site.name} logo`}
                      width={160}
                      height={60}
                      className="object-contain max-h-14 w-auto"
                    />
                  </div>

                  {/* Bonus column */}
                  <div
                    className="flex-1 flex flex-col items-center justify-center px-6 py-4 gap-1 border-r"
                    style={{ borderColor: `${cfg.accentColor}15` }}
                  >
                    <p className="text-[9px] font-sans font-bold tracking-[0.22em] uppercase text-muted-foreground">Welcome Bonus</p>
                    <p className="font-serif font-bold text-xl leading-tight text-center" style={{ color: cfg.accentColor }}>
                      {site.bonus}
                    </p>
                    <p className="text-[11px] font-sans font-semibold text-center leading-snug" style={{ color: `${cfg.accentColor}bb` }}>
                      {site.welcomeOffer}
                    </p>
                  </div>

                  {/* Score column */}
                  <div
                    className="w-40 shrink-0 flex flex-col items-center justify-center px-4 py-4 gap-2 border-r"
                    style={{ borderColor: `${cfg.accentColor}15` }}
                  >
                    <ScoreBadge score={site.score} color={cfg.accentColor} />
                    <StarRating rating={site.score} size="md" accentColor={cfg.accentColor} />
                    <span className="text-[9px] text-muted-foreground font-sans">{site.reviews.toLocaleString()} reviews</span>
                  </div>

                  {/* CTA column */}
                  <div className="w-40 shrink-0 flex flex-col items-center justify-center px-5 py-5 gap-2">
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center py-3 text-sm font-sans font-bold tracking-wide rounded-xl transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                      style={{ background: cfg.ctaBg, color: cfg.ctaColor }}
                    >
                      Claim Bonus
                    </Link>
                    <p className="text-[8px] text-muted-foreground/50 font-sans text-center">18+ | T&amp;Cs Apply</p>
                  </div>
                </div>

                {/* ── MOBILE layout ── */}
                <div className="md:hidden flex flex-col rounded-xl overflow-hidden">

                  {/* Row 1: Logo | Bonus */}
                  <div className="flex items-stretch border-b" style={{ borderColor: `${cfg.accentColor}15`, minHeight: "76px" }}>
                    <div
                      className="w-[40%] shrink-0 flex items-center justify-center px-3 py-3 border-r"
                      style={{ backgroundColor: "#fff", borderColor: `${cfg.accentColor}20` }}
                    >
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={130}
                        height={48}
                        className="object-contain max-h-12 w-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center px-3 py-3 gap-0.5">
                      <p className="text-[8px] font-sans font-bold tracking-[0.2em] uppercase text-muted-foreground">Welcome Bonus</p>
                      <p className="font-serif font-bold text-lg leading-snug text-center" style={{ color: cfg.accentColor }}>
                        {site.bonus}
                      </p>
                      <p className="text-[9px] font-sans font-semibold text-center leading-tight" style={{ color: `${cfg.accentColor}aa` }}>
                        {site.welcomeOffer}
                      </p>
                    </div>
                  </div>

                  {/* Row 2: Score | CTA */}
                  <div className="flex items-stretch" style={{ minHeight: "60px" }}>
                    <div className="flex-1 flex items-center gap-3 px-4 py-3">
                      <ScoreBadge score={site.score} color={cfg.accentColor} textColor="#fff" />
                      <div className="flex flex-col gap-1">
                        <StarRating rating={site.score} size="sm" accentColor={cfg.accentColor} />
                        <span className="text-[8px] text-muted-foreground font-sans">{site.reviews.toLocaleString()} reviews</span>
                      </div>
                    </div>
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-5 text-sm font-sans font-bold tracking-wider uppercase transition-all duration-200 hover:brightness-110 border-l"
                      style={{ background: cfg.ctaBg, color: cfg.ctaColor, borderColor: `${cfg.accentColor}20`, minWidth: "100px" }}
                    >
                      Claim
                    </Link>
                  </div>

                  {/* Row 3: Terms */}
                  <div
                    className="px-4 py-1.5 border-t"
                    style={{ backgroundColor: "hsl(222,42%,8%)", borderColor: `${cfg.accentColor}12` }}
                  >
                    <p className="text-[8px] text-muted-foreground/55 font-sans text-center leading-relaxed">
                      18+ | T&amp;Cs Apply | {site.terms}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[10px] text-muted-foreground/40 mt-8 font-sans leading-relaxed">
          All listed casinos hold valid UKGC licences. Rankings are based on independent editorial assessment. Affiliate commissions may apply.
        </p>
      </div>
    </section>
  )
}
