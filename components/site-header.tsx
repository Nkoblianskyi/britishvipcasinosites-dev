import Link from "next/link"

/** Unique diamond-crown logo mark — gold top, green band, blue base */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer hexagon frame */}
      <path
        d="M20 2 L35 11 L35 29 L20 38 L5 29 L5 11 Z"
        stroke="hsl(43,90%,50%)"
        strokeWidth="1.2"
        fill="hsl(224,44%,5%)"
      />
      {/* Inner shield */}
      <path
        d="M20 7 L30 13 L30 23 Q30 31 20 35 Q10 31 10 23 L10 13 Z"
        fill="hsl(217,82%,18%)"
        stroke="hsl(217,82%,50%)"
        strokeWidth="0.8"
      />
      {/* Gold crown top */}
      <path
        d="M13 18 L15.5 13 L18 17.5 L20 12 L22 17.5 L24.5 13 L27 18 Z"
        fill="hsl(43,90%,52%)"
      />
      {/* Green band */}
      <rect x="13" y="18" width="14" height="3.5" rx="0.5" fill="hsl(148,60%,40%)" />
      {/* Blue base gem */}
      <path
        d="M17 23.5 L20 22 L23 23.5 L22 27.5 L18 27.5 Z"
        fill="hsl(217,82%,62%)"
      />
      {/* Crown top dots */}
      <circle cx="15.5" cy="12.5" r="1" fill="hsl(43,90%,70%)" />
      <circle cx="20" cy="11" r="1.2" fill="hsl(43,90%,70%)" />
      <circle cx="24.5" cy="12.5" r="1" fill="hsl(43,90%,70%)" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ backgroundColor: "hsl(224,44%,4%)" }}>
      {/* Tricolor top stripe */}
      <div className="stripe-tricolor w-full" />

      {/* Single row: centered logo + wordmark, 18+ pinned right */}
      <div className="relative flex items-center justify-center" style={{ height: "54px" }}>

        {/* Center — logo + wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group select-none"
          aria-label="British VIP Casino Sites — Home"
        >
          <LogoMark className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-105" />

          {/* Single-line name */}
          <div className="flex items-baseline gap-1.5 leading-none whitespace-nowrap">
            <span
              className="font-serif font-bold tracking-tight text-base md:text-lg"
              style={{ color: "hsl(43,90%,52%)" }}
            >
              British
            </span>
            <span
              className="font-serif font-extrabold tracking-tight text-base md:text-lg"
              style={{ color: "hsl(148,60%,52%)" }}
            >
              VIP
            </span>
            <span className="font-serif font-semibold tracking-tight text-base md:text-lg text-primary-foreground/90">
              Casino Sites
            </span>
          </div>
        </Link>

        {/* Right — 18+ badge pinned to edge */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <span
            className="hidden sm:block text-[9px] font-sans font-semibold tracking-[0.18em] uppercase"
            style={{ color: "hsl(43,90%,50%,0.55)" }}
          >
            Gamble Responsibly
          </span>
          <span
            className="inline-flex items-center justify-center font-sans font-black text-[11px] rounded border"
            style={{
              borderColor: "hsl(0,75%,52%)",
              color: "hsl(0,75%,60%)",
              backgroundColor: "hsl(0,75%,52%,0.10)",
              width: "30px",
              height: "20px",
              letterSpacing: "0.04em",
            }}
          >
            18+
          </span>
        </div>

      </div>
    </header>
  )
}
