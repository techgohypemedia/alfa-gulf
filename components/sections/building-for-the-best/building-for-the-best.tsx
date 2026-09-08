"use client"

import React, { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export interface BuildingForTheBestProps {
  className?: string
}

export const BuildingForTheBest: React.FC<BuildingForTheBestProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const buildingContainerRef = useRef<HTMLDivElement>(null)
  const buildingImgRef = useRef<HTMLImageElement>(null)
  const [count100, setCount100] = useState(0)
  const [count15, setCount15] = useState(0)

  // Scroll-driven Parallax and Ambient Auto-Floating Animation
  useEffect(() => {
    if (!sectionRef.current || !buildingContainerRef.current || !buildingImgRef.current) return

    const ctx = gsap.context(() => {
      // 1. Scroll-driven parallax: building glides upward and expands as user scrolls
      gsap.fromTo(
        buildingContainerRef.current,
        {
          y: 110,
          scale: 0.93,
        },
        {
          y: -50,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      )

      // 2. Continuous ambient floating / breathing auto-motion
      gsap.to(buildingImgRef.current, {
        y: -16,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Intersection observer to trigger counter animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Smooth number count-up animation
  useEffect(() => {
    if (!isVisible) return

    const duration = 1600
    const startTime = performance.now()
    let frameId: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3)

      setCount100(Math.round(ease * 100))
      setCount15(Math.round(ease * 15))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible])

  const interactiveItems = [
    {
      title: "Innovation",
      href: "#services",
      content:
        "Pioneering advanced engineering methodologies, sustainable building techniques, and smart construction technologies to build the future of the Kingdom with unmatched precision.",
    },
    {
      title: "A strong foundation",
      href: "#about",
      content:
        "Rooted in over 15 years of industry excellence, strictly adhering to the Saudi Building Code (SBC) and delivering structural integrity that stands the test of time.",
    },
  ]

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative w-full bg-white text-zinc-950 py-24 sm:py-32 lg:py-36 xl:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden select-none border-t border-zinc-200/80 min-h-[85vh] flex flex-col justify-center",
        className
      )}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-[1520px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* ── LEFT COLUMN: Heading, Editorial Copy & Interactive Links ──── */}
          <div className="lg:col-span-5 xl:col-span-4 z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-normal leading-[1.08] text-zinc-950 tracking-tight">
              Building for<br />the best.
            </h2>

            <p className="mt-7 sm:mt-9 text-[15px] sm:text-base xl:text-[16.5px] leading-relaxed text-zinc-600 font-normal max-w-[390px]">
              To explore and go after new ways to build, we&apos;ve gathered the people, innovations, and partnerships that can anticipate and overcome new challenges.
            </p>

            {/* Interactive Feature Links / Accordion */}
            <div className="mt-10 sm:mt-14 space-y-0 max-w-[390px]">
              {interactiveItems.map((item, idx) => {
                const isOpen = expandedIndex === idx
                return (
                  <div
                    key={item.title}
                    className="border-b border-zinc-200/90 py-3.5 group cursor-pointer transition-colors duration-150"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "text-[17px] sm:text-[18.5px] font-normal tracking-tight transition-colors duration-150",
                          isOpen ? "text-orange-600 font-medium" : "text-zinc-900 group-hover:text-orange-600"
                        )}
                      >
                        {item.title}
                      </span>
                      <div className="flex items-center gap-1">
                        <ArrowUpRight
                          className={cn(
                            "w-4 h-4 text-zinc-400 transition-all duration-200",
                            isOpen
                              ? "text-orange-600 rotate-45"
                              : "group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          )}
                        />
                      </div>
                    </div>

                    {/* Smooth Expandable Content */}
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0 mt-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-zinc-600 pb-1">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── CENTER COLUMN: Blank Column to accommodate Center Building on Large Screens ── */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-4 pointer-events-none" />

          {/* ── RIGHT COLUMN: Stacked KPI Stats & Counters ──────────────── */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center z-10 lg:pl-10 xl:pl-16">
            <div className="max-w-[340px] w-full space-y-7 sm:space-y-9">
              {/* Stat 1: 100% SBC Compliant */}
              <div>
                <div className="text-5xl sm:text-6xl xl:text-[72px] font-light leading-none tracking-tight text-zinc-950 font-sans">
                  {isVisible ? `${count100}%` : "100%"}
                </div>
                <p className="text-xs sm:text-[13px] font-medium tracking-wide text-zinc-600 uppercase mt-2.5 sm:mt-3">
                  SBC Compliant
                </p>
                <div className="w-full h-[1px] bg-zinc-200/90 mt-7 sm:mt-9" />
              </div>

              {/* Stat 2: 0 Defect Measures */}
              <div>
                <div className="text-5xl sm:text-6xl xl:text-[72px] font-light leading-none tracking-tight text-zinc-950 font-sans">
                  0
                </div>
                <p className="text-xs sm:text-[13px] font-medium tracking-wide text-zinc-600 uppercase mt-2.5 sm:mt-3">
                  Defect Measures
                </p>
                <div className="w-full h-[1px] bg-zinc-200/90 mt-7 sm:mt-9" />
              </div>

              {/* Stat 3: 15 Years Experience */}
              <div>
                <div className="text-5xl sm:text-6xl xl:text-[72px] font-light leading-none tracking-tight text-zinc-950 font-sans">
                  {isVisible ? count15 : 15}
                </div>
                <p className="text-xs sm:text-[13px] font-medium leading-relaxed tracking-wide text-zinc-600 uppercase mt-2.5 sm:mt-3 max-w-[240px]">
                  Team of 15+ years of experience in Construction Industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CENTER VISUAL: White Honeycomb Architectural Facade Rising from Bottom ── */}
      <div
        ref={buildingContainerRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 w-[550px] sm:w-[750px] md:w-[900px] lg:w-[1050px] xl:w-[1200px] max-w-none will-change-transform"
      >
        <img
          ref={buildingImgRef}
          src="/building-facade.png"
          alt="Alfa Gulf Architectural Building Facade"
          className="w-full h-auto object-bottom block will-change-transform"
        />
      </div>
    </section>
  )
}

export default BuildingForTheBest

