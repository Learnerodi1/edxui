"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Compass, ShieldCheck, LayoutGrid, Layers, Building2, Users, Award } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import clsx from "clsx"

const mainItems = [
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: ShieldCheck, label: "Verify", href: "/verification" },
  { icon: LayoutGrid, label: "Dashboard", href: "/dashboard" },
  { icon: Layers, label: "How", href: "/how-it-works" },
]

const drawerItems = [
  { icon: Building2, label: "Universities", href: "/universities" },
  { icon: Users, label: "Tutors", href: "/tutors" },
  { icon: Award, label: "Certificates", href: "/certificates" },
]

export function BottomNav() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const isLight = theme === "light"
  const drawerItemActive = drawerItems.some((item) => pathname === item.href)

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex flex-col">
      {/* More drawer — inline, pushes above nav */}
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          drawerOpen ? "max-h-[200px]" : "max-h-0"
        )}
      >
        <div
          className={clsx(
            "px-4 pt-3.5 pb-2.5 border-t",
            isLight
              ? "bg-[#F5EDE1]/[0.99] border-[#9E2102]/10"
              : "bg-[#0d0d0d]/[0.99] border-white/[0.08]"
          )}
        >
          <p
            className={clsx(
              "text-[9px] font-semibold tracking-[2px] uppercase mb-2.5",
              isLight ? "text-[#3c1400]/30" : "text-white/20"
            )}
          >
            More Pages
          </p>
          <div className="grid grid-cols-3 gap-2">
            {drawerItems.map(({ icon: Icon, label, href }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  className={clsx(
                    "flex flex-col items-center gap-[5px] py-3 px-1.5 rounded-lg border transition-colors",
                    active
                      ? isLight
                        ? "bg-[#9E2102]/[0.08] border-[#E85E1D]/30 text-[#E85E1D]"
                        : "bg-[#9E2102]/15 border-[#E85E1D]/30 text-[#E85E1D]"
                      : isLight
                        ? "bg-[#FAF2E8]/80 border-[#9E2102]/10 text-[#3c1400]/50 hover:border-[#E85E1D]/30 hover:bg-[#9E2102]/[0.08]"
                        : "bg-white/[0.04] border-white/[0.08] text-white/20 hover:border-[#E85E1D]/30 hover:bg-[#9E2102]/15"
                  )}
                >
                  <Icon size={22} strokeWidth={1.8} />
                  <span className="text-[8px] font-semibold text-center">{label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <nav
        className={clsx(
          "flex items-center justify-around px-1 pt-2 pb-[calc(0.625rem+env(safe-area-inset-bottom))] border-t backdrop-blur-2xl",
          isLight
            ? "bg-[#FAF2E8]/[0.97] border-[#9E2102]/10"
            : "bg-[#0f0f0f]/[0.97] border-white/[0.08]"
        )}
      >
        {mainItems.map(({ icon: Icon, label, href }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex flex-col items-center gap-[3px] min-w-[48px] px-2.5 py-[5px] rounded-lg transition-colors",
                active
                  ? isLight
                    ? "text-[#E85E1D] bg-[#9E2102]/[0.08]"
                    : "text-[#E85E1D] bg-[#9E2102]/15"
                  : isLight
                    ? "text-[#3c1400]/30"
                    : "text-white/20"
              )}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span className="text-[8px] font-semibold">{label}</span>
            </Link>
          )
        })}

        {/* More button with three-dot pattern */}
        <button
          onClick={() => setDrawerOpen((prev) => !prev)}
          className={clsx(
            "flex flex-col items-center gap-[3px] min-w-[48px] px-2.5 py-[5px] rounded-lg transition-colors",
            drawerOpen || drawerItemActive
              ? isLight
                ? "text-[#E85E1D] bg-[#9E2102]/[0.08]"
                : "text-[#E85E1D] bg-[#9E2102]/15"
              : isLight
                ? "text-[#3c1400]/30"
                : "text-white/20"
          )}
        >
          <div className="flex gap-[2px] items-center h-[18px] justify-center">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={clsx(
                  "w-[3px] h-[3px] rounded-full",
                  drawerOpen || drawerItemActive
                    ? "bg-[#E85E1D]"
                    : isLight
                      ? "bg-[#3c1400]/30"
                      : "bg-white/20"
                )}
              />
            ))}
          </div>
          <span className="text-[8px] font-semibold">More</span>
        </button>
      </nav>
    </div>
  )
}
