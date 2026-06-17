"use client"

import { useTheme } from "./ThemeProvider"
import clsx from "clsx"
import {
  Hexagon,
  CircleDollarSign,
  ShieldCheck,
  CheckCircle2,
  Link2,
  Wallet,
  Coins,
} from "lucide-react"
import { motion } from "framer-motion"

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

function VerificationCard({ isLight }: { isLight: boolean }) {
  const checks = ["Registry match", "Enrollment confirmed", "Identity anchored"]

  return (
    <>
      {/* Status bar */}
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-[9px] lg:text-[10px] font-bold tracking-[1.5px] uppercase text-green-500">
          Verification Active
        </span>
      </div>

      {/* Matric number field */}
      <div
        className={clsx(
          "rounded-lg px-3 py-2.5 mb-4 border",
          isLight
            ? "bg-light-bg/50 border-brand-primary/[0.06]"
            : "bg-white/[0.03] border-white/[0.06]"
        )}
      >
        <p
          className={clsx(
            "text-[8px] lg:text-[9px] font-semibold tracking-[1px] uppercase mb-1",
            isLight ? "text-light-muted/50" : "text-white/25"
          )}
        >
          MATRIC NUMBER
        </p>
        <p
          className={clsx(
            "text-[14px] lg:text-[16px] font-bold font-mono",
            isLight ? "text-light-text" : "text-white"
          )}
        >
          FUTO/2022/0847
          <span className="inline-block w-[2px] h-[14px] bg-brand-accent ml-0.5 animate-pulse align-middle" />
        </p>
      </div>

      {/* Verification checklist */}
      <div className="flex flex-col gap-2 mb-4">
        {checks.map((label, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-green-500 shrink-0" />
            <span
              className={clsx(
                "text-[11px] lg:text-[12px]",
                isLight ? "text-light-muted" : "text-white/50"
              )}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Access granted badge */}
      <div className="flex items-center gap-1.5 bg-green-500/10 rounded-md px-2.5 py-1.5 w-fit">
        <ShieldCheck size={12} className="text-green-500" />
        <span className="text-[9px] lg:text-[10px] font-bold tracking-[1px] uppercase text-green-500">
          Access Granted
        </span>
      </div>
    </>
  )
}

function NFTCertificateCard({ isLight }: { isLight: boolean }) {
  return (
    <>
      {/* Minted badge */}
      <div className="flex items-center gap-2 mb-4">
        <Hexagon size={14} className="text-brand-accent" />
        <span className="text-[9px] lg:text-[10px] font-bold tracking-[1.5px] uppercase bg-brand-accent/15 text-brand-accent px-2 py-0.5 rounded">
          Minted
        </span>
      </div>

      {/* Course info */}
      <div className="mb-4">
        <p
          className={clsx(
            "text-[14px] lg:text-[16px] font-bold leading-tight mb-1",
            isLight ? "text-light-text" : "text-white"
          )}
        >
          Introduction to Blockchain
        </p>
        <p
          className={clsx(
            "text-[11px] lg:text-[12px]",
            isLight ? "text-light-muted" : "text-white/45"
          )}
        >
          Federal University of Technology, Owerri
        </p>
      </div>

      {/* Detail row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <p
            className={clsx(
              "text-[8px] lg:text-[9px] font-semibold tracking-[1px] uppercase mb-1",
              isLight ? "text-light-muted/50" : "text-white/25"
            )}
          >
            Token ID
          </p>
          <p
            className={clsx(
              "text-[12px] lg:text-[14px] font-semibold font-mono",
              isLight ? "text-light-text" : "text-white"
            )}
          >
            #4A2F
          </p>
        </div>
        <div>
          <p
            className={clsx(
              "text-[8px] lg:text-[9px] font-semibold tracking-[1px] uppercase mb-1",
              isLight ? "text-light-muted/50" : "text-white/25"
            )}
          >
            Chain
          </p>
          <p
            className={clsx(
              "text-[12px] lg:text-[14px] font-semibold",
              isLight ? "text-light-text" : "text-white"
            )}
          >
            Solana
          </p>
        </div>
      </div>

      {/* Blockchain hash */}
      <div
        className={clsx(
          "flex items-center justify-between pt-3 border-t",
          isLight ? "border-brand-primary/[0.06]" : "border-white/[0.06]"
        )}
      >
        <div className="flex items-center gap-1.5">
          <Link2
            size={11}
            className={clsx(isLight ? "text-light-muted/40" : "text-white/25")}
          />
          <span
            className={clsx(
              "text-[10px] lg:text-[11px] font-mono",
              isLight ? "text-light-muted/50" : "text-white/30"
            )}
          >
            7xK9...mQ3z
          </span>
        </div>
        <span className="text-[9px] lg:text-[10px] text-brand-accent font-semibold">
          Verified on-chain
        </span>
      </div>
    </>
  )
}

function PaymentCard({ isLight }: { isLight: boolean }) {
  return (
    <>
      {/* Payment status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-green-500" />
          <span className="text-[9px] lg:text-[10px] font-bold tracking-[1.5px] uppercase text-green-500">
            Payment Complete
          </span>
        </div>
        <Coins size={16} className="text-brand-accent" />
      </div>

      {/* Amount */}
      <div className="mb-4">
        <p
          className={clsx(
            "text-[28px] lg:text-[32px] font-[900] leading-none mb-1",
            isLight ? "text-light-text" : "text-white"
          )}
        >
          2.4 <span className="text-brand-accent text-[18px] lg:text-[20px]">SOL</span>
        </p>
        <p
          className={clsx(
            "text-[11px] lg:text-[12px]",
            isLight ? "text-light-muted/60" : "text-white/35"
          )}
        >
          ≈ $340.00 USD
        </p>
      </div>

      {/* Detail row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <p
            className={clsx(
              "text-[8px] lg:text-[9px] font-semibold tracking-[1px] uppercase mb-1",
              isLight ? "text-light-muted/50" : "text-white/25"
            )}
          >
            Milestone
          </p>
          <p
            className={clsx(
              "text-[11px] lg:text-[12px] font-semibold",
              isLight ? "text-light-text" : "text-white"
            )}
          >
            Module 3 Complete
          </p>
        </div>
        <div>
          <p
            className={clsx(
              "text-[8px] lg:text-[9px] font-semibold tracking-[1px] uppercase mb-1",
              isLight ? "text-light-muted/50" : "text-white/25"
            )}
          >
            Recipient
          </p>
          <p
            className={clsx(
              "text-[11px] lg:text-[12px] font-semibold",
              isLight ? "text-light-text" : "text-white"
            )}
          >
            Dr. Adeyemi
          </p>
        </div>
      </div>

      {/* Wallet + timestamp */}
      <div
        className={clsx(
          "flex items-center justify-between pt-3 border-t",
          isLight ? "border-brand-primary/[0.06]" : "border-white/[0.06]"
        )}
      >
        <div className="flex items-center gap-1.5">
          <Wallet
            size={11}
            className={clsx(isLight ? "text-light-muted/40" : "text-white/25")}
          />
          <span
            className={clsx(
              "text-[10px] lg:text-[11px] font-mono",
              isLight ? "text-light-muted/50" : "text-white/30"
            )}
          >
            8fG2...vR1x
          </span>
        </div>
        <span
          className={clsx(
            "text-[9px] lg:text-[10px]",
            isLight ? "text-light-muted/40" : "text-white/25"
          )}
        >
          Settled instantly
        </span>
      </div>
    </>
  )
}

const visualCards = [VerificationCard, NFTCertificateCard, PaymentCard]

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
        <div className="overflow-hidden">
          <motion.p
            className="text-[10px] lg:text-[11px] font-semibold tracking-[2px] text-brand-accent uppercase mb-3"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            WHY EDUCHAIN
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className={clsx(
              "text-[24px] lg:text-[38px] font-[900] leading-[1.1]",
              isLight ? "text-light-text" : "text-white"
            )}
            style={{ letterSpacing: "-1px" }}
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Built around one hard guarantee.
          </motion.h2>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-16 lg:gap-24 max-w-6xl mx-auto">
        {cards.map((card, idx) => {
          const Icon = card.icon
          const isEven = idx % 2 === 1
          const VisualCard = visualCards[idx]

          return (
            <motion.div
              key={idx}
              className={clsx(
                "flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center",
                isEven && "lg:flex-row-reverse"
              )}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
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

              {/* Visual side — rich mock UI card */}
              <div className="flex-1 w-full lg:w-auto flex justify-center">
                <motion.div
                  className={clsx(
                    "relative w-full lg:w-[340px] rounded-xl border overflow-hidden p-5 lg:p-6",
                    isLight
                      ? "bg-light-surface border-brand-primary/[0.08]"
                      : "bg-dark-panel border-white/[0.08]"
                  )}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Background glow */}
                  <div
                    className={clsx(
                      "absolute inset-0 pointer-events-none",
                      isLight
                        ? "bg-[radial-gradient(ellipse_at_50%_110%,_rgba(158,33,2,0.08)_0%,_transparent_70%)]"
                        : "bg-[radial-gradient(ellipse_at_50%_110%,_rgba(158,33,2,0.25)_0%,_transparent_70%)]"
                    )}
                  />

                  <div className="relative z-10">
                    <VisualCard isLight={isLight} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
