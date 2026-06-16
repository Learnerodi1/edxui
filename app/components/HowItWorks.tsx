"use client"

import { useTheme } from "./ThemeProvider"
import clsx from "clsx"
import { ShieldCheck, Radio, Award, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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
        "relative px-5 lg:px-20 py-14 lg:py-28 transition-colors",
        isLight ? "bg-[#1a0a00] text-white" : "bg-dark-panel"
      )}
    >
      {/* Background pattern — subtle grid */}
      <div
        className={clsx(
          "absolute inset-0 pointer-events-none",
          "opacity-20"
        )}
        style={{
          backgroundImage: `radial-gradient(circle, rgba(232,94,29,0.04) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Section header */}
      <div className="relative text-center mb-12 lg:mb-20 max-w-3xl mx-auto">
        <div className="overflow-hidden">
          <motion.p
            className="text-[10px] lg:text-[11px] font-semibold tracking-[2px] text-brand-accent uppercase mb-3"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            THE PROCESS
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className={clsx(
              "text-[24px] lg:text-[40px] font-[900] leading-[1.1] mb-4 text-white"
            )}
            style={{ letterSpacing: "-1px" }}
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            How It Works
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.p
            className={clsx(
              "text-[13px] lg:text-[15px] max-w-lg mx-auto text-white/40"
            )}
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Three steps from enrolled student to globally verifiable credentials.
          </motion.p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop connecting line */}
        <div
          className={clsx(
            "hidden lg:block absolute top-[72px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px]",
            "bg-gradient-to-r from-brand-accent/20 via-brand-accent/40 to-brand-accent/20"
          )}
        />

        {/* Mobile connecting line */}
        <div
          className={clsx(
            "lg:hidden absolute top-0 bottom-0 left-[29px] w-[2px]",
            "bg-gradient-to-b from-brand-accent/20 via-brand-accent/40 to-brand-accent/20"
          )}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isLast = idx === steps.length - 1

            return (
              <motion.div
                key={step.number}
                className={clsx(
                  "relative flex lg:flex-col",
                  !isLast && "pb-10 lg:pb-0"
                )}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {/* Mobile: icon on the left, content on the right */}
                {/* Desktop: icon on top, content below */}

                {/* Step circle */}
                <motion.div
                  className="relative z-10 flex-shrink-0 mr-5 lg:mr-0 lg:mx-auto lg:mb-8"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <div
                    className={clsx(
                      "w-[58px] h-[58px] rounded-full flex items-center justify-center border-2 transition-colors",
                      "bg-dark border-brand-accent/30"
                    )}
                  >
                    <div
                      className={clsx(
                        "w-11 h-11 rounded-full flex items-center justify-center",
                        "bg-brand-accent/15"
                      )}
                    >
                      <Icon size={22} className="text-brand-accent" />
                    </div>
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className={clsx(
                    "relative flex-1 rounded-xl border p-5 lg:p-6 group lg:text-center",
                    "bg-dark/80 border-white/[0.06] hover:border-brand-accent/25 hover:shadow-[0_8px_30px_rgba(232,94,29,0.06)]"
                  )}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Watermark number */}
                  <span
                    className={clsx(
                      "absolute top-3 right-4 lg:top-4 lg:right-5 text-[48px] lg:text-[56px] font-[900] leading-none select-none pointer-events-none",
                      "text-white/[0.03]"
                    )}
                  >
                    {step.number}
                  </span>

                  <h3
                    className={clsx(
                      "text-[15px] lg:text-[17px] font-bold mb-2 relative z-10 text-white"
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
                      "text-[11px] lg:text-[12px] leading-[1.7] relative z-10 text-white/35"
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
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
