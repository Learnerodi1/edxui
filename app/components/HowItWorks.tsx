"use client"

import { useTheme } from "./ThemeProvider"
import clsx from "clsx"
import { ShieldCheck, Radio, Award, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Verify your matric number",
    description: "Prove you are a real, enrolled student.",
    detail:
      "Your student ID is checked against the institutional registry in real time. Only verified, currently enrolled students pass through.",
  },
  {
    number: "02",
    icon: Radio,
    title: "Mint your decentralized identity",
    description: "A permanent DID, cryptographically yours.",
    detail:
      "Once verified, a decentralized identifier is generated on-chain — a tamper-proof digital identity you own forever.",
  },
  {
    number: "03",
    icon: Award,
    title: "Earn on-chain certificates",
    description: "Course completions become verifiable NFTs.",
    detail:
      "Every course you complete mints a verifiable credential as an NFT. Employers and institutions can confirm it instantly.",
  },
]

export function HowItWorks() {
  const { theme } = useTheme()
  const isLight = theme === "light"

  return (
    <section
      className={clsx(
        "relative px-5 lg:px-20 py-14 lg:py-28 transition-colors overflow-hidden",
        isLight ? "bg-light-surface" : "bg-dark-panel"
      )}
    >
      {/* Background pattern — subtle grid */}
      <div
        className={clsx(
          "absolute inset-0 pointer-events-none",
          isLight ? "opacity-30" : "opacity-20"
        )}
        style={{
          backgroundImage: `radial-gradient(circle, ${isLight ? "rgba(158,33,2,0.06)" : "rgba(232,94,29,0.04)"} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Section header */}
      <div className="relative text-center mb-12 lg:mb-20 max-w-3xl mx-auto">
        <p className="text-[10px] lg:text-[11px] font-semibold tracking-[2px] text-brand-accent uppercase mb-3">
          THE PROCESS
        </p>
        <h2
          className={clsx(
            "text-[24px] lg:text-[40px] font-[900] leading-[1.1] mb-4",
            isLight ? "text-light-text" : "text-white"
          )}
          style={{ letterSpacing: "-1px" }}
        >
          How It Works
        </h2>
        <p
          className={clsx(
            "text-[13px] lg:text-[15px] max-w-lg mx-auto",
            isLight ? "text-light-muted" : "text-white/40"
          )}
        >
          Three steps from enrolled student to globally verifiable credentials.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop connecting line */}
        <div
          className={clsx(
            "hidden lg:block absolute top-[72px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px]",
            isLight
              ? "bg-gradient-to-r from-brand-accent/30 via-brand-accent/50 to-brand-accent/30"
              : "bg-gradient-to-r from-brand-accent/20 via-brand-accent/40 to-brand-accent/20"
          )}
        />

        {/* Mobile connecting line */}
        <div
          className={clsx(
            "lg:hidden absolute top-0 bottom-0 left-[29px] w-[2px]",
            isLight
              ? "bg-gradient-to-b from-brand-accent/30 via-brand-accent/50 to-brand-accent/30"
              : "bg-gradient-to-b from-brand-accent/20 via-brand-accent/40 to-brand-accent/20"
          )}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isLast = idx === steps.length - 1

            return (
              <div
                key={step.number}
                className={clsx(
                  "relative flex lg:flex-col",
                  !isLast && "pb-10 lg:pb-0"
                )}
              >
                {/* Mobile: icon on the left, content on the right */}
                {/* Desktop: icon on top, content below */}

                {/* Step circle */}
                <div className="relative z-10 flex-shrink-0 mr-5 lg:mr-0 lg:mx-auto lg:mb-8">
                  <div
                    className={clsx(
                      "w-[58px] h-[58px] rounded-full flex items-center justify-center border-2 transition-colors",
                      isLight
                        ? "bg-light-bg border-brand-accent/30"
                        : "bg-dark border-brand-accent/30"
                    )}
                  >
                    <div
                      className={clsx(
                        "w-11 h-11 rounded-full flex items-center justify-center",
                        isLight ? "bg-brand-accent/10" : "bg-brand-accent/15"
                      )}
                    >
                      <Icon size={22} className="text-brand-accent" />
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={clsx(
                    "relative flex-1 rounded-xl border p-5 lg:p-6 group transition-all duration-300 hover:-translate-y-1 lg:text-center",
                    isLight
                      ? "bg-light-bg/80 border-brand-primary/[0.08] hover:border-brand-accent/25 hover:shadow-[0_8px_30px_rgba(158,33,2,0.06)]"
                      : "bg-dark/80 border-white/[0.06] hover:border-brand-accent/25 hover:shadow-[0_8px_30px_rgba(232,94,29,0.06)]"
                  )}
                >
                  {/* Watermark number */}
                  <span
                    className={clsx(
                      "absolute top-3 right-4 lg:top-4 lg:right-5 text-[48px] lg:text-[56px] font-[900] leading-none select-none pointer-events-none",
                      isLight
                        ? "text-brand-primary/[0.04]"
                        : "text-white/[0.03]"
                    )}
                  >
                    {step.number}
                  </span>

                  <h3
                    className={clsx(
                      "text-[15px] lg:text-[17px] font-bold mb-2 relative z-10",
                      isLight ? "text-light-text" : "text-white"
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={clsx(
                      "text-[11px] lg:text-[12px] font-semibold mb-3 relative z-10",
                      "text-brand-accent"
                    )}
                  >
                    {step.description}
                  </p>
                  <p
                    className={clsx(
                      "text-[11px] lg:text-[12px] leading-[1.7] relative z-10",
                      isLight ? "text-light-muted" : "text-white/35"
                    )}
                  >
                    {step.detail}
                  </p>

                  {/* Arrow hint on hover */}
                  <div
                    className={clsx(
                      "mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      "text-brand-accent"
                    )}
                  >
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
