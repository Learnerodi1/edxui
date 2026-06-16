"use client"

import { useTheme } from "./ThemeProvider"
import clsx from "clsx"
import {
  Coins,
  Building2,
  BadgeCheck,
  GraduationCap,
  Users,
  FileStack,
} from "lucide-react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect } from "react"

const stats = [
  { value: "12.4k", label: "SOL VOLUME", icon: Coins },
  { value: "12", label: "UNIVERSITIES", icon: Building2 },
  { value: "89,330", label: "CERTIFICATES VERIFIED", icon: BadgeCheck },
  { value: "1,204", label: "INSTRUCTORS", icon: GraduationCap },
  { value: "45,000+", label: "ACTIVE STUDENTS", icon: Users },
  { value: "128,402", label: "NFTS ISSUED", icon: FileStack },
]

function AnimatedCounter({ value, className }: { value: string; className: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const numericPart = value.replace(/[^0-9.]/g, "")
  const suffix = value.replace(/[0-9.,]/g, "")
  const hasComma = value.includes(",")
  const target = parseFloat(numericPart.replace(/,/g, ""))
  const hasDecimal = numericPart.includes(".")

  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v: number) => {
    if (hasDecimal) {
      const formatted = v.toFixed(1)
      return hasComma ? Number(formatted).toLocaleString() : formatted
    }
    const formatted = Math.round(v)
    return hasComma ? formatted.toLocaleString() : String(formatted)
  })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionVal, target, {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
    })
    return controls.stop
  }, [isInView, motionVal, target])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function StatsBanner() {
  const { theme } = useTheme()
  const isLight = theme === "light"

  return (
    <section
      className={clsx(
        "relative py-12 lg:py-20 transition-colors overflow-hidden",
        isLight ? "bg-light-bg" : "bg-dark"
      )}
    >
      {/* Top accent line */}
      <div
        className={clsx(
          "absolute top-0 left-0 right-0 h-px",
          isLight
            ? "bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"
            : "bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"
        )}
      />

      {/* Background glow */}
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none",
          isLight
            ? "bg-brand-primary/[0.03]"
            : "bg-brand-accent/[0.04]"
        )}
      />

      {/* Section label */}
      <div className="text-center mb-8 lg:mb-12 relative">
        <div className="overflow-hidden">
          <motion.p
            className="text-[10px] lg:text-[11px] font-semibold tracking-[2px] text-brand-accent uppercase mb-2"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            BY THE NUMBERS
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h3
            className={clsx(
              "text-[18px] lg:text-[24px] font-[900]",
              isLight ? "text-light-text" : "text-white"
            )}
            style={{ letterSpacing: "-0.5px" }}
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Growing every day
          </motion.h3>
        </div>
      </div>

      {/* Stats grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-6xl mx-auto px-5 lg:px-10">
        {stats.map((stat, idx) => {
          const Icon = stat.icon

          return (
            <motion.div
              key={stat.label}
              className={clsx(
                "relative flex flex-col items-center text-center py-6 lg:py-8 px-3 group"
              )}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Vertical divider */}
              {idx < stats.length - 1 && (
                <div
                  className={clsx(
                    "absolute right-0 top-1/4 bottom-1/4 w-px hidden lg:block",
                    isLight
                      ? "bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent"
                      : "bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"
                  )}
                />
              )}

              {/* Small icon */}
              <motion.div
                className={clsx(
                  "w-9 h-9 rounded-full flex items-center justify-center mb-3",
                  isLight
                    ? "bg-brand-accent/[0.08]"
                    : "bg-brand-accent/10"
                )}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.15 }}
              >
                <Icon
                  size={16}
                  strokeWidth={2}
                  className="text-brand-accent"
                />
              </motion.div>

              {/* Number — animated counter */}
              <AnimatedCounter
                value={stat.value}
                className={clsx(
                  "text-[26px] lg:text-[32px] font-[900] leading-none mb-1.5 italic transition-colors duration-300",
                  "text-brand-accent group-hover:text-brand-primary"
                )}
              />

              {/* Label */}
              <span
                className={clsx(
                  "text-[7px] lg:text-[8px] font-semibold tracking-[1.5px] uppercase leading-tight",
                  isLight ? "text-light-muted" : "text-white/30"
                )}
              >
                {stat.label}
              </span>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom accent line */}
      <div
        className={clsx(
          "absolute bottom-0 left-0 right-0 h-px",
          isLight
            ? "bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"
            : "bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"
        )}
      />
    </section>
  )
}
