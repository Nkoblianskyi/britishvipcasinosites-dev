import Link from "next/link"
import Image from "next/image"
import { Phone, ShieldCheck } from "lucide-react"

const NAV_LINKS = [
  { label: "Home",             href: "/" },
  { label: "About Us",         href: "/about-us" },
  { label: "Privacy Policy",   href: "/privacy-policy" },
  { label: "Cookie Policy",    href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Safer Betting",    href: "/responsible-gaming" },
]

const TRUST_LOGOS = [
  { src: "/gamble-aware.png",             alt: "BeGambleAware",          href: "https://www.begambleaware.org/" },
  { src: "/gamcare.png",                  alt: "GamCare",                href: "https://www.gamcare.org.uk/" },
  { src: "/gordon.png",                   alt: "Gambling Therapy",       href: "https://www.gamblingtherapy.org/" },
  { src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission", href: "https://www.gamblingcommission.gov.uk/" },
  { src: "/gamstop.svg",                  alt: "GamStop",                href: "https://www.gamstop.co.uk/" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: "hsl(224,48%,4%)" }} className="text-primary-foreground">

      {/* TOP TRICOLOR STRIPE */}
      <div className="stripe-tricolor w-full" />

      {/* ── TRUST LOGOS ROW ── */}
      <div
        className="border-b"
        style={{ borderColor: "hsl(222,30%,14%)", backgroundColor: "hsl(224,44%,6%)" }}
      >
        <div className="container mx-auto px-4 py-5">
          <p className="text-center text-[9px] font-sans font-bold tracking-[0.32em] uppercase mb-4"
            style={{ color: "hsl(43,90%,50%,0.45)" }}>
            Verified &amp; Supported By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {TRUST_LOGOS.map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.alt}
                className="transition-opacity duration-200 opacity-90 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={32}
                  className="object-contain h-8 w-auto"
                  style={{ filter: "none" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* COL 1 — Brand & tagline */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit" aria-label="British VIP Casino Sites home">
              {/* Inline SVG logo — same as header */}
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 shrink-0 group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                <path d="M20 2 L35 11 L35 29 L20 38 L5 29 L5 11 Z" stroke="hsl(43,90%,50%)" strokeWidth="1.2" fill="hsl(224,44%,5%)" />
                <path d="M20 7 L30 13 L30 23 Q30 31 20 35 Q10 31 10 23 L10 13 Z" fill="hsl(217,82%,18%)" stroke="hsl(217,82%,50%)" strokeWidth="0.8" />
                <path d="M13 18 L15.5 13 L18 17.5 L20 12 L22 17.5 L24.5 13 L27 18 Z" fill="hsl(43,90%,52%)" />
                <rect x="13" y="18" width="14" height="3.5" rx="0.5" fill="hsl(148,60%,40%)" />
                <path d="M17 23.5 L20 22 L23 23.5 L22 27.5 L18 27.5 Z" fill="hsl(217,82%,62%)" />
                <circle cx="15.5" cy="12.5" r="1" fill="hsl(43,90%,70%)" />
                <circle cx="20" cy="11" r="1.2" fill="hsl(43,90%,70%)" />
                <circle cx="24.5" cy="12.5" r="1" fill="hsl(43,90%,70%)" />
              </svg>
              <div className="flex flex-col leading-none select-none">
                <div className="flex items-baseline gap-1 whitespace-nowrap">
                  <span className="font-serif font-bold text-sm tracking-tight" style={{ color: "hsl(43,90%,52%)" }}>British</span>
                  <span className="font-serif font-extrabold text-sm tracking-tight" style={{ color: "hsl(148,60%,52%)" }}>VIP</span>
                  <span className="font-serif font-semibold text-sm tracking-tight text-primary-foreground/85">Casino Sites</span>
                </div>
                <span className="font-sans text-[9px] tracking-[0.12em] mt-0.5" style={{ color: "hsl(43,90%,50%,0.35)" }}>
                  britishvipcasinosites.com
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed font-sans max-w-[230px]" style={{ color: "hsl(222,18%,52%)" }}>
              Britain&apos;s independent VIP casino comparison platform. Expert reviews, exclusive offers, 100% UKGC-licensed.
            </p>

            {/* Responsible gaming badge */}
            <div
              className="inline-flex items-start gap-2.5 rounded-xl border px-3.5 py-3 w-fit"
              style={{ backgroundColor: "hsl(148,60%,38%,0.07)", borderColor: "hsl(148,60%,38%,0.22)" }}
            >
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(148,60%,52%)" }} aria-hidden="true" />
              <div>
                <p className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase mb-0.5" style={{ color: "hsl(148,60%,52%)" }}>
                  Play Responsibly
                </p>
                <p className="text-[11px] font-sans font-bold" style={{ color: "hsl(148,60%,60%)" }}>
                  When the fun stops, STOP.
                </p>
              </div>
            </div>
          </div>

          {/* COL 2 — Navigation */}
          <div>
            <p
              className="text-[9px] font-sans font-bold tracking-[0.32em] uppercase mb-4"
              style={{ color: "hsl(43,90%,50%)" }}
            >
              Quick Links
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-0 divide-y" style={{ borderColor: "hsl(222,30%,14%)" }}>
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="footer-nav-link flex items-center justify-between py-2.5 text-xs font-sans transition-colors duration-200 group"
                    >
                      {item.label}
                      <span className="w-0 h-px group-hover:w-4 transition-all duration-300" style={{ backgroundColor: "hsl(43,90%,52%)" }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COL 3 — Safer Gambling */}
          <div>
            <p
              className="text-[9px] font-sans font-bold tracking-[0.32em] uppercase mb-4"
              style={{ color: "hsl(148,60%,52%)" }}
            >
              Safer Gambling
            </p>
            <div className="space-y-3 text-xs font-sans leading-relaxed" style={{ color: "hsl(222,18%,52%)" }}>
              <p>
                All casinos on britishvipcasinosites.com hold valid UKGC licences. Gambling is strictly for adults 18+.
              </p>
              <p>
                Set deposit limits, take breaks, and use self-exclusion tools. Bet only what you can afford to lose.
              </p>
              <div
                className="rounded-lg border p-3 mt-4"
                style={{ backgroundColor: "hsl(217,82%,50%,0.07)", borderColor: "hsl(217,82%,50%,0.20)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: "hsl(217,82%,66%)" }} aria-hidden="true" />
                  <p className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: "hsl(43,90%,52%)" }}>
                    Free Helpline
                  </p>
                </div>
                <p className="font-serif font-bold text-sm mb-0.5" style={{ color: "hsl(217,82%,66%)" }}>
                  0808 8020 133
                </p>
                <p className="text-[9px]" style={{ color: "hsl(222,18%,45%)" }}>
                  24/7 · Free · Confidential
                </p>
              </div>
            </div>
          </div>

          {/* COL 4 — Disclaimer */}
          <div>
            <p
              className="text-[9px] font-sans font-bold tracking-[0.32em] uppercase mb-4"
              style={{ color: "hsl(217,82%,66%)" }}
            >
              Legal Notice
            </p>
            <div className="space-y-2.5 text-[11px] font-sans leading-relaxed" style={{ color: "hsl(222,18%,45%)" }}>
              <p>
                britishvipcasinosites.com is an independent affiliate comparison service. We earn commission when you register through our links.
              </p>
              <p>
                Bonuses, terms and availability are subject to change. Always verify current offers directly with the casino operator.
              </p>
              <p>
                18+ only. T&amp;Cs apply. Please gamble responsibly.
              </p>
              <div
                className="flex items-center gap-2 pt-2 mt-2 border-t"
                style={{ borderColor: "hsl(222,30%,14%)" }}
              >
                <span
                  className="inline-flex items-center justify-center font-sans font-black text-[10px] rounded border"
                  style={{
                    borderColor: "hsl(0,75%,52%)",
                    color: "hsl(0,75%,60%)",
                    backgroundColor: "hsl(0,75%,52%,0.10)",
                    width: "28px",
                    height: "18px",
                  }}
                >
                  18+
                </span>
                <span className="text-[10px] font-semibold" style={{ color: "hsl(43,90%,50%,0.55)" }}>
                  UKGC Licensed Only
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="border-t"
        style={{ borderColor: "hsl(222,30%,10%)", backgroundColor: "hsl(224,48%,3%)" }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-sans" style={{ color: "hsl(222,18%,35%)" }}>
            &copy; {year} britishvipcasinosites.com &mdash; All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[11px] font-sans">
            <span className="font-semibold" style={{ color: "hsl(43,90%,50%,0.50)" }}>UKGC Licensed</span>
            <span style={{ color: "hsl(222,18%,25%)" }}>&middot;</span>
            <span className="font-bold" style={{ color: "hsl(148,60%,52%,0.65)" }}>18+</span>
            <span style={{ color: "hsl(222,18%,25%)" }}>&middot;</span>
            <span style={{ color: "hsl(222,18%,35%)" }}>BeGambleAware.org</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
