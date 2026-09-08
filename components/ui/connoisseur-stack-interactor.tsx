"use client"

import React, { useState, useRef, useEffect, useId } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

export type PatternType = "bento" | "pixels" | "hexagons" | "louvers" | "technical"

export interface MenuItem {
  num: string
  name: string
  image: string
  pattern: PatternType
  clipId?: string
  category?: string
}

export const DEFAULT_ALFAGULF_SERVICES: MenuItem[] = [
  {
    num: "01",
    name: "Commercial projects",
    pattern: "bento",
    image: "/services/commercial_projects.jpg",
    category: "Commercial Infrastructure",
  },
  {
    num: "02",
    name: "Steel structures Erection works, fire proofing",
    pattern: "pixels",
    image: "/services/steel_structures.jpg",
    category: "Industrial Engineering",
  },
  {
    num: "03",
    name: "Residential buildings & villas",
    pattern: "hexagons",
    image: "/services/residential_villas.jpg",
    category: "Luxury Architecture",
  },
  {
    num: "04",
    name: "Fitout works",
    pattern: "louvers",
    image: "/services/fitout_works.jpg",
    category: "Interior Architecture",
  },
  {
    num: "05",
    name: "MEP Services",
    pattern: "technical",
    image: "/services/mep_services.jpg",
    category: "Mechanical & Electrical",
  },
  {
    num: "06",
    name: "CCTV & IT sales and services",
    pattern: "pixels",
    image: "/services/cctv_it_services.jpg",
    category: "Mission-Critical Technology",
  },
  {
    num: "07",
    name: "Landscaping works",
    pattern: "bento",
    image: "/services/landscaping_works.jpg",
    category: "Sustainable Landscape",
  },
  {
    num: "08",
    name: "Building material supply",
    pattern: "louvers",
    image: "/services/building_materials.jpg",
    category: "Logistics & Supply",
  },
  {
    num: "09",
    name: "HVAC division",
    pattern: "technical",
    image: "/services/hvac_division.jpg",
    category: "Climate & Air Systems",
  },
  {
    num: "10",
    name: "Demolition & Renovation of buildings",
    pattern: "hexagons",
    image: "/services/demolition_renovation.jpg",
    category: "Renovation & Restoration",
  },
]

const renderPatternTiles = (pattern: PatternType) => {
  switch (pattern) {
    case "louvers":
      // 5 horizontal architectural bands
      return (
        <>
          <rect className="geo-tile" x="12" y="12" width="476" height="175" rx="20" data-cx="250" data-cy="99.5" />
          <rect className="geo-tile" x="12" y="197" width="476" height="60" rx="14" data-cx="250" data-cy="227" />
          <rect className="geo-tile" x="12" y="267" width="476" height="60" rx="14" data-cx="250" data-cy="297" />
          <rect className="geo-tile" x="12" y="337" width="476" height="60" rx="14" data-cx="250" data-cy="367" />
          <rect className="geo-tile" x="12" y="407" width="476" height="81" rx="20" data-cx="250" data-cy="447.5" />
        </>
      )
    case "bento":
      // 3-panel architectural bento layout (full height & width coverage)
      return (
        <>
          <rect className="geo-tile" x="12" y="12" width="228" height="476" rx="22" data-cx="126" data-cy="250" />
          <rect className="geo-tile" x="250" y="12" width="238" height="232" rx="22" data-cx="369" data-cy="128" />
          <rect className="geo-tile" x="250" y="254" width="238" height="234" rx="22" data-cx="369" data-cy="371" />
        </>
      )
    case "pixels":
      // 3x3 mosaic grid (9 rounded tiles)
      return (
        <>
          {[
            { x: 12, y: 12, cx: 87, cy: 87 },
            { x: 175, y: 12, cx: 250, cy: 87 },
            { x: 338, y: 12, cx: 413, cy: 87 },
            { x: 12, y: 175, cx: 87, cy: 250 },
            { x: 175, y: 175, cx: 250, cy: 250 },
            { x: 338, y: 175, cx: 413, cy: 250 },
            { x: 12, y: 338, cx: 87, cy: 413 },
            { x: 175, y: 338, cx: 250, cy: 413 },
            { x: 338, y: 338, cx: 413, cy: 413 },
          ].map((t, i) => (
            <rect
              key={i}
              className="geo-tile"
              x={t.x}
              y={t.y}
              width="150"
              height="150"
              rx="18"
              data-cx={t.cx}
              data-cy={t.cy}
            />
          ))}
        </>
      )
    case "hexagons":
      // 6-panel architectural mosaic layout
      return (
        <>
          <rect className="geo-tile" x="12" y="12" width="228" height="280" rx="20" data-cx="126" data-cy="152" />
          <rect className="geo-tile" x="12" y="302" width="228" height="186" rx="20" data-cx="126" data-cy="395" />
          <rect className="geo-tile" x="250" y="12" width="238" height="140" rx="20" data-cx="369" data-cy="82" />
          <rect className="geo-tile" x="250" y="162" width="114" height="155" rx="16" data-cx="307" data-cy="239.5" />
          <rect className="geo-tile" x="374" y="162" width="114" height="155" rx="16" data-cx="431" data-cy="239.5" />
          <rect className="geo-tile" x="250" y="327" width="238" height="161" rx="20" data-cx="369" data-cy="407.5" />
        </>
      )
    case "technical":
      // 4x4 precision tech grid (16 tiles)
      return (
        <>
          {Array.from({ length: 16 }).map((_, i) => {
            const col = i % 4
            const row = Math.floor(i / 4)
            const x = 14 + col * 121
            const y = 14 + row * 121
            const size = 108
            const cx = x + size / 2
            const cy = y + size / 2
            return (
              <rect
                key={i}
                className="geo-tile"
                x={x}
                y={y}
                width={size}
                height={size}
                rx="12"
                data-cx={cx}
                data-cy={cy}
              />
            )
          })}
        </>
      )
  }
}

export interface ServicesStackInteractorProps {
  items?: MenuItem[]
  className?: string
  subtitle?: string
  heading?: string
  description?: string
}

export const ServicesStackInteractor: React.FC<ServicesStackInteractorProps> = ({
  items = DEFAULT_ALFAGULF_SERVICES,
  className = "",
  subtitle = "Services",
  description = "From towering commercial structures to bespoke residential villas, ALFA GULF CONTRACTING is equipped to handle diverse construction needs with precision and expertise. Our specialized divisions include:",
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const masterTl = useRef<gsap.core.Timeline | null>(null)
  const rawId = useId()
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, "")

  const playAnimation = (index: number) => {
    if (masterTl.current) {
      masterTl.current.kill()
    }

    const svg = svgRef.current
    if (!svg) return

    const clipId = `geo-clip-${uid}-${index}`
    const clipEl = svg.querySelector(`#${clipId}`)
    if (!clipEl) return

    const tiles = clipEl.querySelectorAll<SVGGraphicsElement>(".geo-tile")
    if (!tiles.length) return

    // Set initial scale: 0 around each tile's own exact center (data-cx, data-cy)
    tiles.forEach((tile) => {
      const cx = tile.getAttribute("data-cx") || "250"
      const cy = tile.getAttribute("data-cy") || "250"
      gsap.set(tile, {
        scale: 0,
        transformOrigin: `${cx}px ${cy}px`,
        force3D: false,
      })
    })

    const tl = gsap.timeline()

    // 1. Reveal with snappy architectural stagger and expo easing
    tl.to(tiles, {
      scale: 1,
      duration: 0.65,
      stagger: { amount: 0.28, from: "random" },
      ease: "expo.out",
      force3D: false,
    })
      // 2. Idle breathing effect to keep the composition dynamic and alive
      .to(tiles, {
        scale: 1.025,
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: { amount: 0.15, from: "center" },
        force3D: false,
      })

    masterTl.current = tl
  }

  useEffect(() => {
    playAnimation(0)
    return () => {
      if (masterTl.current) masterTl.current.kill()
    }
  }, [])

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return
    setActiveIndex(index)
    playAnimation(index)
  }

  // 5 unified horizontal rows pairing (01 & 06), (02 & 07), (03 & 08), (04 & 09), (05 & 10)
  const serviceRows = [
    { left: items[0], right: items[5], leftIdx: 0, rightIdx: 5 },
    { left: items[1], right: items[6], leftIdx: 1, rightIdx: 6 },
    { left: items[2], right: items[7], leftIdx: 2, rightIdx: 7 },
    { left: items[3], right: items[8], leftIdx: 3, rightIdx: 8 },
    { left: items[4], right: items[9], leftIdx: 4, rightIdx: 9 },
  ]

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative w-full bg-white text-zinc-900 py-12 sm:py-28 lg:py-32 px-4 sm:px-10 lg:px-16 overflow-hidden select-none border-t border-zinc-200/80 min-h-0 sm:min-h-[85vh] flex flex-col justify-center",
        className
      )}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-[1520px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 xl:gap-14 items-center">
          {/* ── LEFT COLUMN: Header & Editorial Description ───────────── */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-500 uppercase">
                {subtitle}
              </span>
              <span className="w-8 h-[2px] bg-zinc-950 inline-block" />
            </div>

            <p className="text-base sm:text-xl xl:text-[21px] font-normal leading-relaxed sm:leading-[1.62] text-zinc-700 tracking-tight">
              {description.split("ALFA GULF CONTRACTING").map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <strong className="font-semibold text-zinc-950">ALFA GULF CONTRACTING</strong>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* ── MIDDLE COLUMN: 10 Services ── */}
          <div className="lg:col-span-5 xl:col-span-5">
            {/* Phone View: Clean Sequential 01 to 10 List */}
            <div className="block sm:hidden border-t border-b border-zinc-200/80 divide-y divide-zinc-200/80">
              {items.map((item, idx) => {
                const isActive = activeIndex === idx

                return (
                  <div
                    key={item.num}
                    onClick={() => handleItemHover(idx)}
                    className={cn(
                      "group cursor-pointer flex items-start gap-3 py-2.5 px-2 rounded-lg transition-colors duration-150",
                      isActive ? "bg-zinc-100/90 shadow-xs" : "active:bg-zinc-50"
                    )}
                  >
                    <span
                      className={cn(
                        "text-xs font-mono tracking-wider pt-0.5 transition-colors duration-150 shrink-0",
                        isActive
                          ? "text-zinc-950 font-bold"
                          : "text-zinc-400 group-hover:text-zinc-600"
                      )}
                    >
                      {item.num}
                    </span>
                    <span
                      className={cn(
                        "text-[14.5px] leading-snug font-medium transition-colors duration-150",
                        isActive
                          ? "text-zinc-950 font-semibold"
                          : "text-zinc-600 group-hover:text-zinc-950"
                      )}
                    >
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Desktop & Tablet View (>= sm): 5 Perfectly Aligned Rows (01-05 Left, 06-10 Right) */}
            <div className="hidden sm:block border-t border-b border-zinc-200/80 divide-y divide-zinc-200/80">
              {serviceRows.map((row, rowIdx) => {
                const isLeftActive = activeIndex === row.leftIdx
                const isRightActive = activeIndex === row.rightIdx

                return (
                  <div
                    key={rowIdx}
                    className="grid grid-cols-2 gap-x-8 xl:gap-x-10 py-3.5 sm:py-4.5"
                  >
                    {/* Left Column Item (01-05) */}
                    {row.left && (
                      <div
                        onMouseEnter={() => handleItemHover(row.leftIdx)}
                        onClick={() => handleItemHover(row.leftIdx)}
                        className={cn(
                          "group cursor-pointer flex items-start gap-3.5 py-1.5 px-2.5 -mx-2.5 rounded-lg transition-colors duration-150",
                          isLeftActive ? "bg-zinc-100/90 shadow-xs" : "hover:bg-zinc-50"
                        )}
                      >
                        <span
                          className={cn(
                            "text-xs sm:text-sm font-mono tracking-wider pt-0.5 transition-colors duration-150 shrink-0",
                            isLeftActive
                              ? "text-zinc-950 font-bold"
                              : "text-zinc-400 group-hover:text-zinc-600"
                          )}
                        >
                          {row.left.num}
                        </span>
                        <span
                          className={cn(
                            "text-[14.5px] sm:text-[15px] xl:text-[15.5px] leading-snug font-medium transition-colors duration-150",
                            isLeftActive
                              ? "text-zinc-950 font-semibold"
                              : "text-zinc-600 group-hover:text-zinc-950"
                          )}
                        >
                          {row.left.name}
                        </span>
                      </div>
                    )}

                    {/* Right Column Item (06-10) */}
                    {row.right && (
                      <div
                        onMouseEnter={() => handleItemHover(row.rightIdx)}
                        onClick={() => handleItemHover(row.rightIdx)}
                        className={cn(
                          "group cursor-pointer flex items-start gap-3.5 py-1.5 px-2.5 -mx-2.5 rounded-lg transition-colors duration-150",
                          isRightActive ? "bg-zinc-100/90 shadow-xs" : "hover:bg-zinc-50"
                        )}
                      >
                        <span
                          className={cn(
                            "text-xs sm:text-sm font-mono tracking-wider pt-0.5 transition-colors duration-150 shrink-0",
                            isRightActive
                              ? "text-zinc-950 font-bold"
                              : "text-zinc-400 group-hover:text-zinc-600"
                          )}
                        >
                          {row.right.num}
                        </span>
                        <span
                          className={cn(
                            "text-[14.5px] sm:text-[15px] xl:text-[15.5px] leading-snug font-medium transition-colors duration-150",
                            isRightActive
                              ? "text-zinc-950 font-semibold"
                              : "text-zinc-600 group-hover:text-zinc-950"
                          )}
                        >
                          {row.right.name}
                        </span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Full Dynamic Geometric Image Effect (No Background Image, No Details) ─── */}
          <div className="lg:col-span-3 xl:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-zinc-900/10 bg-transparent">
              <svg
                ref={svgRef}
                viewBox="0 0 500 500"
                className="w-full h-full block select-none"
              >
                <defs>
                  {items.map((item, idx) => (
                    <clipPath key={item.num} id={`geo-clip-${uid}-${idx}`}>
                      {renderPatternTiles(item.pattern)}
                    </clipPath>
                  ))}
                </defs>

                {/* Foreground image revealed through the dynamic geometric architectural shapes */}
                <g clipPath={`url(#geo-clip-${uid}-${activeIndex})`}>
                  <image
                    href={items[activeIndex].image}
                    width="500"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStackInteractor

