"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

function StarRating({ rating }: { rating: number }) {
  const stepped = Math.round(((rating / 10) * 5) / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-5 h-5">
            <Star className="w-5 h-5 text-muted-foreground/20" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-5 h-5 text-accent" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const topSite = bettingSites[0]

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
    >
      <div className="relative w-full max-w-sm bg-card rounded-2xl overflow-hidden animate-scale-in shadow-2xl border border-accent/20">
        {/* Dual top rule */}
        <div className="h-[3px] w-full stripe-gold-blue" />

        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[10px] font-sans font-bold tracking-[0.28em] uppercase text-accent">
                Exclusive Offer
              </p>
            </div>
            <h2 className="font-serif font-bold text-xl text-primary-foreground leading-tight">
              Top UK Casino Pick
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground/40 hover:text-accent transition-colors duration-200 p-1 rounded-lg hover:bg-accent/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col items-center gap-5">
          {/* Logo */}
          <div className="w-full bg-white rounded-xl border border-border flex items-center justify-center p-6 h-32">
            <Image
              src={topSite.logo || "/placeholder.svg"}
              alt={`${topSite.name} logo`}
              width={240}
              height={90}
              className="object-contain max-h-full w-full"
            />
          </div>

          {/* Score */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="font-serif font-bold text-4xl text-foreground leading-none">{topSite.score.toFixed(1)}</p>
            <StarRating rating={topSite.score} />
            <p className="text-xs text-muted-foreground font-sans">{topSite.reviews.toLocaleString()} verified reviews</p>
          </div>

          {/* Bonus box */}
          <div className="w-full rounded-xl border border-accent/35 bg-accent/5 px-5 py-4 text-center">
            <p className="text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-accent mb-1">
              Casino Welcome Bonus
            </p>
            <p className="font-serif font-bold text-2xl text-foreground">{topSite.bonus}</p>
            <p className="text-[11px] text-foreground/65 font-sans mt-1">{topSite.welcomeOffer}</p>
          </div>

          {/* CTA */}
          <Link
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3.5 text-sm font-sans font-bold tracking-wide rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/25"
          >
            Claim Casino Bonus Now
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-[10px] text-muted-foreground/55 font-sans text-center leading-relaxed">
            18+ | Terms &amp; Conditions Apply | BeGambleAware.org | Play Responsibly
          </p>
        </div>

        {/* Bottom rule */}
        <div className="rule-gold h-px" />
      </div>
    </div>
  )
}
