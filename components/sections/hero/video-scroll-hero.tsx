"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

const TOTAL_FRAMES = 192

const getFramePath = (index: number) => {
  const frameNum = String(index + 1).padStart(4, "0")
  return `/video_frames_smooth_1080p_webp/frames/frame_${frameNum}.webp`
}

// 2-line clean chapter headlines
// Chapter 1 is displayed on initial view (not blank) and fills on scroll
const CHAPTERS = [
  {
    id: "chapter-industrial",
    start: 0.0,
    end: 0.33,
    isInitial: true,
    lines: [
      "Pioneering the future of",
      "heavy industrial construction",
    ],
  },
  {
    id: "chapter-mep",
    start: 0.36,
    end: 0.66,
    isInitial: false,
    lines: [
      "Engineering smart infrastructure &",
      "mission-critical datacenter systems",
    ],
  },
  {
    id: "chapter-architecture",
    start: 0.68,
    end: 0.88,
    isInitial: false,
    lines: [
      "Delivering landmark commercial complexes",
      "across Saudi Arabia",
    ],
  },
]

// Calculates motion + character fill percentage based on scroll progress
function getChapterTransition(
  progress: number,
  start: number,
  end: number,
  isInitial: boolean = false
) {
  // First chapter: visible on initial load (not blank), fills as user scrolls
  if (isInitial) {
    if (progress > end) {
      return {
        opacity: 0,
        translateX: -50,
        fillRatio: 1.0,
        isVisible: false,
      }
    }

    const duration = end - start
    const p = Math.max(0, Math.min(1, (progress - start) / duration))

    // 1. Initial view at scroll 0 is visible; fills character-by-character as you scroll
    if (p < 0.55) {
      const fill = p / 0.55
      const drift = (p / 0.55) * -10
      return {
        opacity: 1,
        translateX: drift,
        fillRatio: fill,
        isVisible: true,
      }
    }

    // 2. Center hold (p: 0.55 -> 0.76)
    if (p <= 0.76) {
      return {
        opacity: 1,
        translateX: -10,
        fillRatio: 1.0,
        isVisible: true,
      }
    }

    // 3. Smooth exit (p: 0.76 -> 1.0)
    const t = (p - 0.76) / 0.24
    return {
      opacity: Math.max(0, 1 - t * 1.5),
      translateX: -10 - t * 40,
      fillRatio: 1.0,
      isVisible: true,
    }
  }

  // Subsequent chapters: enter from right as user scrolls into their range
  if (progress < start || progress > end) {
    return {
      opacity: 0,
      translateX: 140,
      fillRatio: 0,
      isVisible: false,
    }
  }

  const duration = end - start
  const p = (progress - start) / duration // 0.0 -> 1.0

  // 1. Enter from the RIGHT as scroll begins (p: 0.0 -> 0.28)
  if (p < 0.28) {
    const t = p / 0.28
    const ease = 1 - Math.pow(1 - t, 3) // cubic ease-out
    return {
      opacity: Math.min(1, t * 1.6),
      translateX: 150 * (1 - ease), // 150px -> 0px (coming from the right)
      fillRatio: t * 0.4,
      isVisible: true,
    }
  }

  // 2. Center hold & progressive character fill (p: 0.28 -> 0.76)
  if (p <= 0.76) {
    const t = (p - 0.28) / (0.76 - 0.28) // 0 -> 1
    return {
      opacity: 1,
      translateX: -t * 12, // subtle drift
      fillRatio: 0.4 + t * 0.6, // completes fill to 100%
      isVisible: true,
    }
  }

  // 3. Exit (p: 0.76 -> 1.0)
  const t = (p - 0.76) / 0.24
  return {
    opacity: Math.max(0, 1 - t * 1.5),
    translateX: -12 - t * 50,
    fillRatio: 1.0,
    isVisible: true,
  }
}

// Letter-by-letter scroll fill component with reduced size and reduced boldness
function FillableHeadline({
  lines,
  fillRatio,
}: {
  lines: string[]
  fillRatio: number
}) {
  let totalChars = 0
  for (const line of lines) {
    totalChars += line.length
  }

  const currentActiveIndex = Math.min(
    totalChars,
    Math.max(0, Math.floor(fillRatio * (totalChars + 2)))
  )

  let charTracker = 0

  return (
    <div className="space-y-1 sm:space-y-2 select-none">
      {lines.map((line, lineIdx) => {
        const words = line.split(" ")

        return (
          <div
            key={lineIdx}
            className="flex flex-wrap items-center justify-center gap-x-[0.26em] text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.18]"
          >
            {words.map((word, wordIdx) => {
              const wordChars = word.split("")

              const renderedChars = wordChars.map((char, cIdx) => {
                const thisIndex = charTracker
                charTracker++

                const isFilled = thisIndex < currentActiveIndex
                const isActive = thisIndex === currentActiveIndex

                // Active leading letter being filled (Alfa Gulf brand blue highlight)
                if (isActive && fillRatio < 0.98) {
                  return (
                    <span
                      key={cIdx}
                      className="text-[#0081c6] font-bold drop-shadow-[0_0_18px_rgba(0,129,198,0.95)] scale-110 inline-block transition-transform duration-75"
                    >
                      {char}
                    </span>
                  )
                }

                // Filled letters: clean white
                if (isFilled || fillRatio >= 0.98) {
                  return (
                    <span
                      key={cIdx}
                      className="text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)] transition-colors duration-75"
                    >
                      {char}
                    </span>
                  )
                }

                // Upcoming letters: translucent white with subtle contrast
                return (
                  <span
                    key={cIdx}
                    className="text-white/40 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] transition-colors duration-75"
                  >
                    {char}
                  </span>
                )
              })

              charTracker++ // space between words

              return (
                <span key={wordIdx} className="inline-flex whitespace-nowrap">
                  {renderedChars}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export function VideoScrollHero() {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const imagesRef = React.useRef<(HTMLImageElement | null)[]>([])
  const targetFrameRef = React.useRef(0)
  const currentFrameRef = React.useRef(0)
  const animFrameIdRef = React.useRef<number | null>(null)

  const [scrollProgress, setScrollProgress] = React.useState(0)
  const [isFirstFrameReady, setIsFirstFrameReady] = React.useState(false)

  // Preload frames progressively
  React.useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null)
    let isCancelled = false

    const firstImg = new Image()
    firstImg.src = getFramePath(0)
    firstImg.onload = () => {
      if (isCancelled) return
      imagesRef.current[0] = firstImg
      setIsFirstFrameReady(true)
    }

    const loadRemaining = () => {
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image()
        img.src = getFramePath(i)
        img.onload = () => {
          if (isCancelled) return
          imagesRef.current[i] = img
        }
      }
    }

    const timer = setTimeout(loadRemaining, 40)

    return () => {
      isCancelled = true
      clearTimeout(timer)
    }
  }, [])

  // Draw frame on canvas with cover-fit aspect ratio
  const renderFrameToCanvas = React.useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let img = imagesRef.current[frameIndex]
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = frameIndex; i >= 0; i--) {
        if (imagesRef.current[i]?.complete && imagesRef.current[i]!.naturalWidth > 0) {
          img = imagesRef.current[i]
          break
        }
      }
    }
    if (!img || !img.complete) return

    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight

    const scale = Math.max(cw / iw, ch / ih)
    const nw = iw * scale
    const nh = ih * scale
    const ox = (cw - nw) / 2
    const oy = (ch - nh) / 2

    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, ox, oy, nw, nh)
  }, [])

  // Resize canvas backing store to match high-DPI display
  React.useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      const currentIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      )
      renderFrameToCanvas(currentIdx)
    }

    handleResize()
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [renderFrameToCanvas])

  // Draw initial frame when ready
  React.useEffect(() => {
    if (isFirstFrameReady) {
      renderFrameToCanvas(0)
    }
  }, [isFirstFrameReady, renderFrameToCanvas])

  // Continuous animation loop for buttery smooth scrubbing
  React.useEffect(() => {
    let active = true

    const loop = () => {
      if (!active) return

      const target = targetFrameRef.current
      const current = currentFrameRef.current
      const diff = target - current

      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.15
        const frameIdx = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(currentFrameRef.current))
        )
        renderFrameToCanvas(frameIdx)
      }

      animFrameIdRef.current = requestAnimationFrame(loop)
    }

    animFrameIdRef.current = requestAnimationFrame(loop)

    return () => {
      active = false
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current)
    }
  }, [renderFrameToCanvas])

  // Map container scroll position to frame index
  React.useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalScrollableDistance = container.offsetHeight - windowHeight

      if (totalScrollableDistance <= 0) return

      const scrolled = -rect.top
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollableDistance))

      setScrollProgress(progress)
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      id="video-hero-section"
      className="relative w-full h-[450vh] bg-slate-950 select-none"
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950">
        {/* Canvas rendering 1080p WebP frame sequence */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isFirstFrameReady ? 1 : 0 }}
        />

        {/* Ambient Dark Scrims for contrast */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

        {/* Center Text Container - Visible from initial load without being blank */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-4 sm:px-8 z-20 overflow-hidden transition-opacity duration-500"
          style={{ opacity: isFirstFrameReady ? 1 : 0 }}
        >
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            {CHAPTERS.map((ch) => {
              const transition = getChapterTransition(
                scrollProgress,
                ch.start,
                ch.end,
                ch.isInitial
              )

              if (!transition.isVisible) return null

              return (
                <div
                  key={ch.id}
                  style={{
                    opacity: transition.opacity,
                    transform: `translate3d(${transition.translateX}px, 0, 0)`,
                  }}
                  className="absolute inset-x-0 flex flex-col items-center justify-center text-center pointer-events-auto will-change-transform"
                >
                  {/* Character fill headline (refined font-bold, 2 lines) */}
                  <FillableHeadline
                    lines={ch.lines}
                    fillRatio={transition.fillRatio}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Subtle Scroll Prompt at very top */}
        {scrollProgress < 0.05 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs font-semibold tracking-widest uppercase animate-bounce pointer-events-none z-20">
            <span>Scroll To Explore</span>
            <ChevronDown className="w-4 h-4 text-[#0081c6]" />
          </div>
        )}
      </div>
    </div>
  )
}
