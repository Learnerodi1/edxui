"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sun, Moon } from "lucide-react";
import clsx from "clsx";
import { Nav } from "./components/nav";
import { useTheme } from "./components/ThemeProvider";
import { WhySection } from "./components/WhySection";
import { HowItWorks } from "./components/HowItWorks";
import { StatsBanner } from "./components/StatsBanner";
import Image from "next/image";
import bg1 from "./bg1.png";
import bg3 from "./bg3.png";
import bg2 from "./b2.png";

const slides = [
  {
    counter: "/ 01",
    label: "ON-CHAIN CREDENTIALS",
    subtitle: "Verified · Permanent · Yours",
    headingTop: "Own Your",
    headingAccent: "Learning.",
    imgUrl: bg1,
    imgStyle: " ",
    description:
      "EduChain puts Nigerian university credentials on-chain with real student-ID verification. Tokenized courses, instant transcript access, and certificates that are immutable and traceable.",
  },
  {
    counter: "/ 02",
    label: "VERIFIED TRANSCRIPTS",
    subtitle: "Instant · Trusted · Global",
    headingTop: "Verify Your",
    headingAccent: "Future.",
    imgUrl: bg2,
    imgStyle: "-rotate-30",
    description:
      "Access your academic records anytime, anywhere. Employers and institutions can verify your credentials instantly through our decentralized verification network.",
  },
  {
    counter: "/ 03",
    label: "ACADEMIC IDENTITY",
    subtitle: "Secure · Portable · Forever",
    headingTop: "Build Your",
    headingAccent: "Legacy.",
    imgUrl: bg3,
    imgStyle: " -rotate-30",
    description:
      "Your academic achievements live forever on the blockchain. No forgeries, no lost records — a permanent digital identity that grows with your career.",
  },
];

function ThemeToggleSwitch({
  isLight,
  onToggle,
}: {
  isLight: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={clsx(
        "relative w-[36px] h-[20px] rounded-full border flex items-center px-[3px] transition-colors",
        isLight
          ? "bg-light-surface border-brand-primary/15"
          : "bg-[#1a1a1a] border-white/[0.08]"
      )}
    >
      <div
        className={clsx(
          "w-[14px] h-[14px] rounded-full bg-brand-accent transition-transform duration-250",
          isLight ? "translate-x-[16px]" : "translate-x-0"
        )}
      />
      <span
        className={clsx(
          "absolute text-[9px] leading-none",
          isLight ? "left-[5px]" : "right-[4px]"
        )}
      >
        {isLight ? "☀️" : "🌙"}
      </span>
    </button>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const isLight = theme === "light";

  return (
    <main
      className={clsx(
        "font-sans transition-colors duration-300",
        isLight ? "bg-light-bg text-light-text" : "bg-dark text-white"
      )}
    >
      <Nav />

      {/* MOBILE TOP BAR */}
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3.5 border-b lg:hidden",
          isLight
            ? "bg-light-bg border-brand-primary/10"
            : "bg-dark border-white/[0.08]"
        )}
      >
        <span className="text-[16px] font-bold tracking-wide">
          Edu<span className="text-brand-accent">ChainX</span>
        </span>
        <ThemeToggleSwitch isLight={isLight} onToggle={toggleTheme} />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* HERO SECTION                               */}
      {/* ═══════════════════════════════════════════ */}
      <section className="flex lg:h-screen relative">
        {/* LEFT SIDEBAR — desktop only */}
        <aside
          className={clsx(
            "relative hidden lg:flex flex-col items-center overflow-hidden justify-around w-[100px] border-r px-6",
            isLight ? "border-brand-primary/[0.08]" : "border-white/[0.08]"
          )}
        >
          <div className="flex flex-col items-center gap-3 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={clsx(
                  "text-[11px] font-semibold transition-colors",
                  i === current
                    ? "text-brand-accent"
                    : isLight
                      ? "text-light-text/25"
                      : "text-white/25"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
            <div
              className={clsx(
                "absolute rotate-90 text-9xl font-bold bottom-20",
                isLight
                  ? "text-brand-primary/[0.06]"
                  : "text-brand-accent/[0.06]"
              )}
            >
              EDX
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mb-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={clsx(
                  "w-[3px] h-10 rounded-full transition-colors",
                  i === current
                    ? "bg-brand-accent"
                    : isLight
                      ? "bg-brand-primary/15"
                      : "bg-white/15"
                )}
              />
            ))}
          </div>
        </aside>

        {/* MAIN COLUMN */}
        <div className="flex flex-col flex-1 pt-[56px] lg:pt-3 lg:p-3 lg:pr-0 overflow-hidden">
          {/* Desktop logo + theme toggle */}
          <div className="hidden lg:flex items-center justify-between py-3 pr-6">
            <span className="text-4xl font-bold tracking-wide">
              Edu<span className="text-brand-accent">ChainX</span>
            </span>
            <button
              onClick={toggleTheme}
              className={clsx(
                "p-2 rounded-lg transition-colors",
                isLight
                  ? "text-brand-primary hover:bg-brand-primary/10"
                  : "text-brand-accent hover:bg-white/10"
              )}
            >
              {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* ============ MOBILE HERO ============ */}
          <div className="flex flex-col px-4 pt-5 lg:hidden">
            <div
              className={clsx(
                "text-[10px] tracking-[2px] mb-1",
                isLight ? "text-light-dim/20" : "text-white/20"
              )}
            >
              {slide.counter}
            </div>
            <p className="text-[10px] font-semibold tracking-[1px] text-brand-accent uppercase mb-[3px]">
              {slide.label}
            </p>
            <p
              className={clsx(
                "text-[9px] mb-3.5",
                isLight ? "text-light-dim/50" : "text-white/40"
              )}
            >
              {slide.subtitle}
            </p>

            <h1
              className="text-[30px] font-[900] leading-[1.05] mb-3.5"
              style={{ letterSpacing: "-1px" }}
            >
              {slide.headingTop}
              <br />
              <span className="text-brand-accent">{slide.headingAccent}</span>
            </h1>

            <div
              className={clsx(
                "relative w-full h-[150px] rounded-[10px] border overflow-hidden mb-3.5 flex items-center justify-center",
                isLight
                  ? "bg-light-surface/80 border-brand-primary/10"
                  : "bg-white/[0.04] border-white/[0.08]"
              )}
            >
              <Image
                alt=""
                width={400}
                height={400}
                src={slide.imgUrl}
                className={clsx(
                  "h-full w-auto object-contain",
                  slide.imgStyle
                )}
              />
              <div
                className={clsx(
                  "absolute bottom-0 left-0 right-0 h-[60px]",
                  isLight
                    ? "bg-gradient-to-t from-light-bg to-transparent"
                    : "bg-gradient-to-t from-dark to-transparent"
                )}
              />
            </div>

            <p
              className={clsx(
                "text-[10px] leading-[1.75] mb-4",
                isLight ? "text-light-dim/50" : "text-white/40"
              )}
            >
              {slide.description}
            </p>

            <div className="flex flex-col gap-2 mb-3.5">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-brand-primary text-white text-[12px] font-semibold py-3 rounded-[7px] hover:brightness-110 transition"
              >
                Start Onboarding
                <ArrowRight size={13} />
              </a>
              <a
                href="#"
                className={clsx(
                  "flex items-center justify-center text-[12px] py-3 rounded-[7px] border transition",
                  isLight
                    ? "border-brand-primary/10 text-light-dim/50 hover:bg-brand-primary/5"
                    : "border-white/[0.08] text-white/40 hover:bg-white/5"
                )}
              >
                Explore Courses
              </a>
            </div>

            <p
              className={clsx(
                "text-[9px] text-center mb-3",
                isLight ? "text-light-dim/30" : "text-white/20"
              )}
            >
              ✔ 12 universities • 45,000+ students
            </p>

            <div className="flex gap-1.5 justify-center mb-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={clsx(
                    "h-[6px] rounded-full transition-all",
                    i === current
                      ? "w-[18px] bg-brand-accent"
                      : clsx(
                          "w-[6px]",
                          isLight ? "bg-brand-primary/15" : "bg-white/20"
                        )
                  )}
                />
              ))}
            </div>
          </div>

          {/* ============ DESKTOP HERO ============ */}
          <div className="hidden lg:flex flex-1 w-full flex-row items-center relative z-10">
            <div className="absolute top-[-10%] right-1/2 translate-x-1/2 z-0">
              <Image
                alt=""
                width={800}
                height={800}
                src={slide.imgUrl}
                className={slide.imgStyle}
              />
            </div>

            <div className="w-full flex flex-row items-center justify-around h-full">
              <section className="flex gap-2 flex-col relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <span
                    className={clsx(
                      "text-[13px] font-medium",
                      isLight ? "text-light-text/35" : "text-white/45"
                    )}
                  >
                    {slide.counter}
                  </span>
                </div>
                <p className="text-[11px] font-semibold tracking-[0.15em] text-brand-accent uppercase mb-2">
                  {slide.label}
                </p>
                <p
                  className={clsx(
                    "text-[12px] mb-3",
                    isLight ? "text-light-text/35" : "text-white/45"
                  )}
                >
                  {slide.subtitle}
                </p>
              </section>

              <section className="flex gap-3 flex-col relative z-10 self-end">
                <h1
                  className="font-[900] leading-[1.05] mb-5"
                  style={{
                    fontSize: "clamp(36px, 5vw, 58px)",
                    letterSpacing: "-2px",
                  }}
                >
                  {slide.headingTop}
                  <br />
                  <span className="text-brand-accent">
                    {slide.headingAccent}
                  </span>
                </h1>
                <p
                  className={clsx(
                    "text-[13px] leading-[1.7] max-w-[420px] mb-7",
                    isLight ? "text-light-text/45" : "text-white/45"
                  )}
                >
                  {slide.description}
                </p>
              </section>
            </div>
          </div>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex flex-wrap items-center gap-3 mb-5 w-full relative z-10">
            <a
              href="#"
              className={clsx(
                "inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition",
                isLight
                  ? "bg-brand-primary text-white"
                  : "bg-brand-accent/50 text-white"
              )}
            >
              Start Onboarding
              <ArrowRight size={14} />
            </a>
            <a
              href="#"
              className={clsx(
                "inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 rounded-lg transition",
                isLight
                  ? "border border-brand-primary/20 text-brand-primary hover:bg-brand-primary/5"
                  : "border border-white/20 text-white hover:bg-white/5"
              )}
            >
              Explore Courses
            </a>
          </div>

          {/* BOTTOM INFO PANEL */}
          <div
            className={clsx(
              "w-full lg:w-fit lg:self-end relative z-10 grid grid-cols-2 border-t",
              isLight
                ? "bg-light-card border-brand-primary/10"
                : "bg-dark-panel border-white/[0.08]"
            )}
          >
            <div
              className={clsx(
                "px-3.5 sm:px-6 lg:px-7 py-3 lg:py-5 border-r",
                isLight ? "border-brand-primary/10" : "border-white/[0.08]"
              )}
            >
              <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
                <span
                  className={clsx(
                    "text-[8px] lg:text-[10px] font-semibold tracking-[2px] uppercase",
                    isLight ? "text-light-dim/30" : "text-white/20"
                  )}
                >
                  Upcoming
                </span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded uppercase bg-brand-accent/15 text-brand-accent">
                  Soon
                </span>
              </div>
              <p className="text-[11px] lg:text-[13px] font-semibold mb-0.5 lg:mb-1">
                Verification Summit
              </p>
              <p
                className={clsx(
                  "text-[9px] lg:text-[11px]",
                  isLight ? "text-light-dim/50" : "text-white/45"
                )}
              >
                Lagos — August 2026
              </p>
            </div>

            <div className="px-3.5 sm:px-6 lg:px-7 py-3 lg:py-5">
              <span
                className={clsx(
                  "text-[8px] lg:text-[10px] font-semibold tracking-[2px] uppercase block mb-1.5 lg:mb-2",
                  isLight ? "text-light-dim/30" : "text-white/20"
                )}
              >
                News
              </span>
              <p className="text-[11px] lg:text-[13px] font-semibold mb-0.5 lg:mb-1">
                Partnership with 5 new universities
              </p>
              <p
                className={clsx(
                  "text-[9px] lg:text-[11px] mb-1 lg:mb-2",
                  isLight ? "text-light-dim/50" : "text-white/45"
                )}
              >
                Expanding our network across West Africa
              </p>
              <a
                href="#"
                className="text-[9px] lg:text-[12px] font-semibold text-brand-accent hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR — desktop only */}
        <aside
          className={clsx(
            "hidden lg:flex flex-col items-center justify-center w-[100px] border-l shrink-0 gap-6",
            isLight ? "border-brand-primary/[0.08]" : "border-white/[0.08]"
          )}
        >
          {[
            "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
            "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
            "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
          ].map((d, i) => (
            <a
              key={i}
              href="#"
              className={clsx(
                "transition-colors",
                isLight
                  ? "text-light-text/20 hover:text-brand-primary/60"
                  : "text-white/25 hover:text-white/60"
              )}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={d} />
              </svg>
            </a>
          ))}
        </aside>

      </section>

      {/* HORIZON DIVIDER — demarcation between hero and next section */}
      <div
        className={clsx(
          "w-full h-[60px] lg:h-[80px]",
          isLight ? "bg-light-bg" : "bg-dark"
        )}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <defs>
            <linearGradient id="horizon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9E2102" stopOpacity="0" />
              <stop offset="20%" stopColor="#9E2102" stopOpacity={isLight ? "0.15" : "0.25"} />
              <stop offset="50%" stopColor="#E85E1D" stopOpacity={isLight ? "0.3" : "0.45"} />
              <stop offset="80%" stopColor="#9E2102" stopOpacity={isLight ? "0.15" : "0.25"} />
              <stop offset="100%" stopColor="#9E2102" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C360,10 1080,10 1440,50"
            fill="none"
            stroke="url(#horizon-grad)"
            strokeWidth="2"
          />
          <path
            d="M0,55 C380,18 1060,18 1440,55"
            fill="none"
            stroke="url(#horizon-grad)"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* WHY SECTION                                */}
      {/* ═══════════════════════════════════════════ */}
      <WhySection />
      <HowItWorks />
      <StatsBanner />
    </main>
  );
}
