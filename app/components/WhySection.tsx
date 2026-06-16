"use client"

import { useTheme } from "./ThemeProvider"
import clsx from "clsx"
import { Hexagon, CircleDollarSign, ShieldCheck } from "lucide-react"

const cards = [
  {
    number: "01.",
    title: "The verified-student gate",
    description:
      "Anyone can build an NFT course marketplace. Ours only lets real, enrolled students in — every account is checked against the institutional registry before a single credential is issued. That gate is the moat: and it's why the credentials actually mean something to an employer.",
    icon: ShieldCheck,
  },
  {
    number: "02.",
    title: "NFT Certificates",
    description:
      "Course completions minted as verifiable NFTs/SFTs straight to your identity — confirmable by anyone, instantly.",
    icon: Hexagon,
  },
  {
    number: "03.",
    title: "Instant Tutor Payments",
    description:
      "Trustless SOL payment rails release funds the moment a milestone is met. No middlemen, no waiting.",
    icon: CircleDollarSign,
  },
]

export function WhySection() {
  const { theme } = useTheme()
  const isLight = theme === "light"

  return (
    <section
      className={clsx(
        "relative px-5 lg:px-20 py-14 lg:py-24 transition-colors overflow-hidden",
        isLight ? "bg-light-bg" : "bg-dark"
      )}
    >
      {/* Watermark */}
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] lg:text-[28rem] font-[900] leading-none select-none pointer-events-none",
          isLight ? "text-brand-primary/[0.03]" : "text-white/[0.02]"
        )}
      >
        EDX
      </div>

      {/* Section header */}
      <div className="mb-10 lg:mb-16 max-w-6xl mx-auto">
        <p className="text-[10px] lg:text-[11px] font-semibold tracking-[2px] text-brand-accent uppercase mb-3">
          WHY EDUCHAIN
        </p>
        <h2
          className={clsx(
            "text-[24px] lg:text-[38px] font-[900] leading-[1.1]",
            isLight ? "text-light-text" : "text-white"
          )}
          style={{ letterSpacing: "-1px" }}
        >
          Built around one hard guarantee.
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-16 lg:gap-24 max-w-6xl mx-auto">
        {cards.map((card, idx) => {
          const Icon = card.icon
          const isEven = idx % 2 === 1

          return (
            <div
              key={idx}
              className={clsx(
                "flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center",
                isEven && "lg:flex-row-reverse"
              )}
            >
              {/* Text side */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3 lg:mb-4">
                  <span
                    className={clsx(
                      "text-[28px] lg:text-[36px] font-[900]",
                      isLight ? "text-light-dim/10" : "text-white/[0.06]"
                    )}
                  >
                    {card.number}
                  </span>
                  <div
                    className={clsx(
                      "flex-1 h-[1px] max-w-[80px]",
                      isLight ? "bg-brand-accent/40" : "bg-brand-accent/30"
                    )}
                  />
                </div>
                <h3
                  className={clsx(
                    "text-[20px] lg:text-[26px] font-bold mb-4 lg:mb-5 italic",
                    isLight ? "text-light-text" : "text-white"
                  )}
                >
                  {card.title}
                </h3>
                <p
                  className={clsx(
                    "text-[13px] lg:text-[14px] leading-[1.8] max-w-[480px]",
                    isLight ? "text-light-muted" : "text-white/45"
                  )}
                >
                  {card.description}
                </p>
              </div>

              {/* Visual side — icon card */}
              <div className="flex-1 w-full lg:w-auto flex justify-center">
                <div
                  className={clsx(
                    "relative w-full lg:w-[340px] h-[200px] lg:h-[260px] rounded-xl border overflow-hidden flex items-center justify-center",
                    isLight
                      ? "bg-light-surface border-brand-primary/[0.08]"
                      : "bg-dark-panel border-white/[0.08]"
                  )}
                >
                  {/* Background glow */}
                  <div
                    className={clsx(
                      "absolute inset-0",
                      isLight
                        ? "bg-[radial-gradient(ellipse_at_50%_110%,_rgba(158,33,2,0.08)_0%,_transparent_70%)]"
                        : "bg-[radial-gradient(ellipse_at_50%_110%,_rgba(158,33,2,0.25)_0%,_transparent_70%)]"
                    )}
                  />

                  {/* Large faded icon */}
                  <Icon
                    size={100}
                    strokeWidth={0.8}
                    className={clsx(
                      "relative z-10",
                      isLight
                        ? "text-brand-accent/20"
                        : "text-brand-accent/15"
                    )}
                  />

                  {/* Small accent icon */}
                  <div
                    className={clsx(
                      "absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center",
                      isLight
                        ? "bg-brand-accent/15"
                        : "bg-brand-accent/20"
                    )}
                  >
                    <Icon size={20} className="text-brand-accent" />
                  </div>

                  {/* Bottom gradient */}
                  <div
                    className={clsx(
                      "absolute bottom-0 left-0 right-0 h-[60px]",
                      isLight
                        ? "bg-gradient-to-t from-light-surface to-transparent"
                        : "bg-gradient-to-t from-dark-panel to-transparent"
                    )}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
