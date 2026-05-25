"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    id: "faq-1",
    question: "How do we select the best UK VIP casino sites?",
    answer:
      "Our expert team rigorously evaluates each casino across UKGC licensing, security infrastructure, welcome bonus value, game selection breadth, software provider quality, mobile experience, payment flexibility, withdrawal speeds, and customer support availability. We only recommend casinos that consistently deliver outstanding performance across all these criteria and genuinely prioritise UK player satisfaction.",
    color: "hsl(43,90%,50%)",
    category: "Our Process",
  },
  {
    id: "faq-2",
    question: "Are these casino sites legal and safe in the UK?",
    answer:
      "Absolutely. Every casino featured on BritishVIPCasinoSites.com holds a valid UK Gambling Commission licence, ensuring they meet stringent requirements covering player protection, fair gaming, secure financial transactions, and responsible gambling. Your funds are protected under UK law, and all sites use advanced SSL encryption to safeguard your data.",
    color: "hsl(148,60%,52%)",
    category: "Safety",
  },
  {
    id: "faq-3",
    question: "What types of welcome bonuses do UK casinos offer?",
    answer:
      "UK casinos offer a variety of welcome promotions including matched deposit bonuses (e.g. 100% up to £200), free spins on selected slots, no-deposit bonuses for new players, and cashback on initial losses. Each offer comes with specific terms including wagering requirements. We highlight the most valuable and accessible promotions, always with transparent T&C breakdowns.",
    color: "hsl(217,82%,66%)",
    category: "Bonuses",
  },
  {
    id: "faq-4",
    question: "How do I claim a casino welcome bonus?",
    answer:
      "To claim a welcome bonus: 1) Click our exclusive link to the casino, 2) Register a new account with accurate personal details, 3) Make a qualifying deposit via an eligible payment method, 4) Opt in or enter a promotional code if required. Some bonuses activate automatically upon deposit. Always read the T&Cs regarding wagering requirements, eligible games, and time limits before claiming.",
    color: "hsl(43,90%,50%)",
    category: "Bonuses",
  },
  {
    id: "faq-5",
    question: "What payment methods do UK casinos accept?",
    answer:
      "Top UK casinos accept debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, prepaid cards (Paysafecard), and mobile payments (Apple Pay, Google Pay). Note that credit cards are banned for gambling in the UK since April 2020. Most sites process deposits instantly and withdrawals within 24–72 hours, with e-wallets typically being fastest.",
    color: "hsl(148,60%,52%)",
    category: "Banking",
  },
  {
    id: "faq-6",
    question: "Can I play at a casino on my mobile phone?",
    answer:
      "Yes, all our recommended casinos offer excellent mobile gaming experiences. Most provide dedicated iOS and Android apps with full game libraries, whilst others feature polished responsive websites. You can play slots, live dealer games, and table games, manage your account, claim bonuses, and process withdrawals directly from your mobile device.",
    color: "hsl(217,82%,66%)",
    category: "Mobile",
  },
  {
    id: "faq-7",
    question: "What is the UK Gambling Commission?",
    answer:
      "The UK Gambling Commission (UKGC) is the independent statutory body that licences and regulates all gambling operators serving UK customers. It enforces rigorous standards for fairness, security, anti-money laundering compliance, and responsible gambling. UKGC-licensed casinos must segregate customer funds, provide mandatory self-exclusion tools, and undergo regular compliance audits.",
    color: "hsl(43,90%,50%)",
    category: "Regulation",
  },
  {
    id: "faq-8",
    question: "How can I gamble responsibly?",
    answer:
      "Set strict deposit and time limits before you start, never chase losses, take regular breaks, and never gamble under stress. Use responsible gambling tools — deposit limits, time-outs, and self-exclusion — available at all UKGC-licensed casinos. If concerned about your gambling, seek help from BeGambleAware.org (0808 8020 133), GamCare.org.uk, or register with GamStop.co.uk.",
    color: "hsl(148,60%,52%)",
    category: "Safety",
  },
]

function FaqItem({ faq, isOpen, onToggle }: {
  faq: typeof FAQS[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="rounded-xl border transition-all duration-200 overflow-hidden"
      style={{
        borderColor: isOpen ? `${faq.color}40` : "hsl(222,30%,18%)",
        backgroundColor: isOpen ? `${faq.color}06` : "hsl(222,36%,11%)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
        aria-expanded={isOpen}
      >
        {/* Left accent dot */}
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
          style={{ backgroundColor: isOpen ? faq.color : "hsl(222,18%,35%)" }}
        />
        <span className="flex-1 font-serif font-semibold text-sm md:text-base text-foreground group-hover:text-foreground/90 leading-snug">
          {faq.question}
        </span>
        {/* Category badge */}
        <span
          className="hidden md:inline-block shrink-0 text-[9px] font-sans font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
          style={{
            borderColor: `${faq.color}35`,
            color: faq.color,
            backgroundColor: `${faq.color}10`,
          }}
        >
          {faq.category}
        </span>
        <ChevronDown
          className="w-4 h-4 shrink-0 transition-transform duration-300"
          style={{
            color: isOpen ? faq.color : "hsl(222,18%,45%)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        />
      </button>

      {/* Answer panel */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-5 pb-5 pt-1">
          {/* Accent rule */}
          <div
            className="w-10 h-[2px] rounded-full mb-3"
            style={{ backgroundColor: faq.color }}
          />
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1")

  // Split into two columns for desktop
  const col1 = FAQS.filter((_, i) => i % 2 === 0)
  const col2 = FAQS.filter((_, i) => i % 2 === 1)

  return (
    <section className="py-12 md:py-20 section-mid">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="stripe-tricolor w-16 rounded-full mx-auto mb-5" style={{ height: "3px" }} />
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-foreground mb-3 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans">
            Everything you need to know about UK VIP casino sites, bonuses, safety, and choosing the right casino for you.
          </p>
        </div>

        {/* Desktop: two-column grid | Mobile: single column */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-3">
            {FAQS.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>

          {/* Desktop two-column */}
          <div className="hidden md:grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              {col1.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {col2.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Help note */}
        <div className="text-center mt-10">
          <p className="text-xs text-muted-foreground/55 font-sans">
            Still have questions?{" "}
            <a
              href="/about-us"
              className="underline underline-offset-2 hover:text-accent transition-colors"
              style={{ color: "hsl(43,90%,50%,0.80)" }}
            >
              Learn more about our editorial process
            </a>
            {" "}or contact us via our{" "}
            <a
              href="/privacy-policy"
              className="underline underline-offset-2 hover:text-accent transition-colors"
              style={{ color: "hsl(148,60%,52%,0.80)" }}
            >
              privacy page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
