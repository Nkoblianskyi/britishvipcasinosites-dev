"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"
import { Cookie, X, CheckCircle2 } from "lucide-react"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up p-3 md:p-5">
      <div
        className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-accent/20"
        style={{ backgroundColor: "hsl(220,35%,10%)" }}
      >
        {/* Top gold accent line */}
        <div className="h-[3px] w-full stripe-gold-blue" />

        <div className="p-5 md:p-6">
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 md:items-center">

            {/* Icon + content */}
            <div className="flex gap-4 flex-1">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-accent/25"
                style={{ backgroundColor: "hsl(43,88%,52%,0.1)" }}
              >
                <Cookie className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-foreground mb-1">
                  We value your privacy
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  We use cookies to personalise content, analyse site traffic, and improve your experience on{" "}
                  <span className="text-foreground font-medium">britishtopcasinosites.com</span>.
                  Read our{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors font-semibold"
                  >
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors font-semibold"
                  >
                    Privacy Policy
                  </Link>
                  {" "}for full details.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap md:flex-nowrap">
              <button
                onClick={declineAll}
                aria-label="Decline all cookies"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-sans font-semibold text-muted-foreground border border-border rounded-xl hover:border-accent/30 hover:text-foreground transition-all duration-200"
              >
                <X className="w-4 h-4" aria-hidden="true" />
                Decline
              </button>
              <button
                onClick={acceptAll}
                aria-label="Accept all cookies"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-bold bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
              >
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
