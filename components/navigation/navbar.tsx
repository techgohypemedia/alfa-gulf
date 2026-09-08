"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Building2,
  Flame,
  Home as HomeIcon,
  Wrench,
  Zap,
  Camera,
  Trees,
  Package,
  Wind,
  Hammer,
  Send,
  ArrowRight,
} from "lucide-react"

// Real Alfa Gulf Services
const SERVICES = [
  {
    title: "Commercial Projects",
    href: "/services/commercial-buildings",
    description: "Office towers, commercial hubs, and corporate complexes",
    icon: Building2,
  },
  {
    title: "Steel Structure & Fire Proofing",
    href: "/services/steel-proofing",
    description: "Certified intumescent coating & industrial structural steel",
    icon: Flame,
  },
  {
    title: "Residential Complex & Villas",
    href: "/services/residential-villas",
    description: "Luxury villas, residential compounds, and high-end living",
    icon: HomeIcon,
  },
  {
    title: "Fit-Out Works",
    href: "/services/fit-out-works",
    description: "Premium interior fit-out, finishes, and turnkey delivery",
    icon: Wrench,
  },
  {
    title: "MEP Services",
    href: "/services/mep-services",
    description: "Mechanical, electrical, plumbing, and low-current integration",
    icon: Zap,
  },
  {
    title: "IT & CCTV Services",
    href: "/services/it-cctv-services",
    description: "Security surveillance, networking, and smart building tech",
    icon: Camera,
  },
  {
    title: "Landscaping Works",
    href: "/services/landscaping-works",
    description: "Hardscaping, irrigation systems, and architectural greenery",
    icon: Trees,
  },
  {
    title: "Building Material Supplies",
    href: "/services/material-supply",
    description: "Direct procurement of certified construction materials",
    icon: Package,
  },
  {
    title: "HVAC Systems",
    href: "/services/hfac-systems",
    description: "Engineered ventilation, cooling plants, and ducting systems",
    icon: Wind,
  },
  {
    title: "Demolition & Renovation",
    href: "/services/demolish-renovate",
    description: "Safe controlled dismantling and structural retrofitting",
    icon: Hammer,
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isContactOpen, setIsContactOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [inquirySubmitted, setInquirySubmitted] = React.useState(false)

  const dropdownTimerRef = React.useRef<NodeJS.Timeout | null>(null)
  const searchInputRef = React.useRef<HTMLInputElement | null>(null)

  // Track scroll position for subtle shadow enhancement
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Focus search input when search modal opens
  React.useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus()
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isSearchOpen])

  // Handle ESC key to close overlays
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false)
        setIsContactOpen(false)
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleMouseEnterServices = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setIsServicesOpen(true)
  }

  const handleMouseLeaveServices = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInquirySubmitted(true)
    setTimeout(() => {
      setInquirySubmitted(false)
      setIsContactOpen(false)
    }, 2000)
  }

  const filteredServices = searchQuery.trim()
    ? SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <>
      {/* Top accent bar line - matches screenshot's dark upper strip */}
      <div className="h-[3px] w-full bg-[#282d37]" />

      <header
        className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-200 border-b ${
          isScrolled
            ? "border-slate-200/80 shadow-sm"
            : "border-slate-100"
        }`}
      >
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-[84px]">
            {/* Left: ALFA Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center group py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0081c6] rounded"
                aria-label="Alfa Gulf Home"
              >
                <div className="relative h-12 sm:h-14 w-auto aspect-[238/199]">
                  <Image
                    src="/alfa-logo.png"
                    alt="Alfa Gulf Technologies & Construction Company"
                    fill
                    sizes="(max-width: 640px) 140px, 180px"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links & Actions */}
            <div className="hidden lg:flex items-center space-x-9 xl:space-x-11">
              {/* Navigation Items */}
              <nav className="flex items-center space-x-7 xl:space-x-9" aria-label="Main Navigation">
                <Link
                  href="/"
                  className="text-[13px] font-bold tracking-[0.08em] uppercase text-slate-800 hover:text-[#0081c6] transition-colors py-2 relative group"
                >
                  HOME
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0081c6] transition-all duration-200 group-hover:w-full" />
                </Link>

                <Link
                  href="/about-us"
                  className="text-[13px] font-bold tracking-[0.08em] uppercase text-slate-800 hover:text-[#0081c6] transition-colors py-2 relative group"
                >
                  ABOUT US
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0081c6] transition-all duration-200 group-hover:w-full" />
                </Link>

                {/* SERVICES Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                >
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    aria-expanded={isServicesOpen}
                    className="flex items-center gap-1 text-[13px] font-bold tracking-[0.08em] uppercase text-slate-800 hover:text-[#0081c6] transition-colors py-2 relative group focus:outline-none"
                  >
                    SERVICES
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 group-hover:text-[#0081c6] ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#0081c6] transition-all duration-200 ${
                        isServicesOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>

                  {/* Services Mega Dropdown Menu */}
                  {isServicesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[620px] bg-white rounded-lg shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      role="menu"
                    >
                      {SERVICES.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <Link
                            key={service.title}
                            href={service.href}
                            role="menuitem"
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-md hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="w-8 h-8 rounded bg-sky-50 text-[#0081c6] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#0081c6] group-hover/item:text-white transition-colors">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-semibold text-slate-900 group-hover/item:text-[#0081c6] transition-colors">
                                {service.title}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                      <div className="col-span-2 mt-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-1">
                        <span className="text-slate-400">Alfa Gulf Engineering & Contracting</span>
                        <Link
                          href="/services"
                          onClick={() => setIsServicesOpen(false)}
                          className="font-medium text-[#0081c6] hover:underline flex items-center gap-1"
                        >
                          View all services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/news"
                  className="text-[13px] font-bold tracking-[0.08em] uppercase text-slate-800 hover:text-[#0081c6] transition-colors py-2 relative group"
                >
                  NEWS
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0081c6] transition-all duration-200 group-hover:w-full" />
                </Link>
              </nav>

              {/* Right Side: Search Icon, Vertical Divider, and 2x2 Grid Icon + GET IN TOUCH */}
              <div className="flex items-center pl-2">
                {/* Search Icon Button */}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-slate-800 hover:text-[#0081c6] transition-colors focus:outline-none rounded-md"
                  aria-label="Open Search"
                >
                  <Search className="w-[17px] h-[17px] stroke-[2]" />
                </button>

                {/* Vertical Divider */}
                <div
                  className="h-4 w-[1px] bg-slate-300 mx-3.5"
                  aria-hidden="true"
                />

                {/* GET IN TOUCH Button with 4-dot / 2x2 grid icon */}
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="group flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] uppercase text-slate-900 hover:text-[#0081c6] transition-colors py-1.5 focus:outline-none"
                >
                  {/* Custom 2x2 square dot grid icon matching the reference image */}
                  <span
                    className="grid grid-cols-2 gap-[2.5px] w-3 h-3 text-slate-900 group-hover:text-[#0081c6] transition-colors"
                    aria-hidden="true"
                  >
                    <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                    <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                    <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                    <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  </span>
                  <span>GET IN TOUCH</span>
                </button>
              </div>
            </div>

            {/* Mobile Actions: Search, Get in Touch icon, and Hamburger */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-800 hover:text-[#0081c6] transition-colors focus:outline-none"
                aria-label="Open Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="p-2 text-slate-800 hover:text-[#0081c6] transition-colors focus:outline-none"
                aria-label="Get in Touch"
              >
                <span
                  className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 text-slate-900"
                  aria-hidden="true"
                >
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-900 hover:text-[#0081c6] transition-colors focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-[#0081c6] hover:bg-slate-50 rounded-md transition-colors"
              >
                HOME
              </Link>

              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-[#0081c6] hover:bg-slate-50 rounded-md transition-colors"
              >
                ABOUT US
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-[#0081c6] hover:bg-slate-50 rounded-md transition-colors"
                >
                  <span>SERVICES</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180 text-[#0081c6]" : "text-slate-400"
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-md mt-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.title}
                        href={s.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileServicesOpen(false)
                        }}
                        className="block px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-[#0081c6] transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/news"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-[#0081c6] hover:bg-slate-50 rounded-md transition-colors"
              >
                NEWS
              </Link>
            </nav>

            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsContactOpen(true)
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#0081c6] text-white font-bold tracking-wider text-xs uppercase shadow-sm hover:bg-[#0070ad] transition-colors"
              >
                <span
                  className="grid grid-cols-2 gap-[2px] w-3 h-3 text-white"
                  aria-hidden="true"
                >
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                </span>
                <span>GET IN TOUCH</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* SEARCH MODAL OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center border-b border-slate-200 px-4 py-3">
              <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, projects, equipment, or news..."
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-slate-600 mr-2"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results / Quick Suggestions */}
            <div className="p-4 max-h-[380px] overflow-y-auto">
              {searchQuery.trim() ? (
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Services & Solutions ({filteredServices.length})
                  </div>
                  {filteredServices.length > 0 ? (
                    <div className="space-y-1">
                      {filteredServices.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => {
                            setIsSearchOpen(false)
                            setSearchQuery("")
                          }}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div>
                            <div className="text-sm font-medium text-slate-900 group-hover:text-[#0081c6]">
                              {service.title}
                            </div>
                            <div className="text-xs text-slate-500">
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0081c6] transition-colors" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-sm text-slate-500">
                      No matching results for &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Steel&rdquo;, &ldquo;Commercial&rdquo;, or &ldquo;HVAC&rdquo;.
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Popular Categories
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Commercial Projects", "Steel Structure", "MEP Services", "Fit-Out", "HVAC", "Demolition"].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setSearchQuery(tag)}
                          className="text-xs bg-slate-100 hover:bg-sky-50 hover:text-[#0081c6] text-slate-700 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Quick Links
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/about-us"
                      onClick={() => setIsSearchOpen(false)}
                      className="p-2 rounded hover:bg-slate-50 text-slate-700 flex items-center gap-2"
                    >
                      <Building2 className="w-3.5 h-3.5 text-[#0081c6]" /> About Alfa Gulf
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSearchOpen(false)
                        setIsContactOpen(true)
                      }}
                      className="p-2 rounded hover:bg-slate-50 text-slate-700 flex items-center gap-2 text-left"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0081c6]" /> Contact & Inquiries
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* GET IN TOUCH MODAL / DRAWER */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-[#1f242e] text-white p-6 relative">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span
                  className="grid grid-cols-2 gap-[2.5px] w-3.5 h-3.5 text-sky-400"
                  aria-hidden="true"
                >
                  <span className="w-1.5 h-1.5 rounded-[0.5px] bg-current" />
                  <span className="w-1.5 h-1.5 rounded-[0.5px] bg-current" />
                  <span className="w-1.5 h-1.5 rounded-[0.5px] bg-current" />
                  <span className="w-1.5 h-1.5 rounded-[0.5px] bg-current" />
                </span>
                <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                  Alfa Gulf Direct Contact
                </span>
              </div>
              <h3 className="text-xl font-bold">Get In Touch With Us</h3>
              <p className="text-slate-300 text-xs mt-1">
                Have a project or construction inquiry? Speak directly with our team.
              </p>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="absolute top-5 right-5 p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Contact Numbers */}
            <div className="grid grid-cols-2 gap-3 p-5 bg-slate-50 border-b border-slate-100">
              <a
                href="tel:00966510737090"
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 hover:border-[#0081c6] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0081c6] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Direct Call</div>
                  <div className="text-xs font-bold text-slate-800 tracking-tight">+966 510 737 090</div>
                </div>
              </a>

              <a
                href="mailto:info@alfa-gulf.com"
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 hover:border-[#0081c6] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0081c6] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Email Inquiries</div>
                  <div className="text-xs font-bold text-slate-800 tracking-tight">info@alfa-gulf.com</div>
                </div>
              </a>
            </div>

            {/* Quick Inquiry Form */}
            <form onSubmit={handleInquirySubmit} className="p-6 space-y-4">
              {inquirySubmitted ? (
                <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-center space-y-1">
                  <div className="font-bold text-sm">Inquiry Received!</div>
                  <div className="text-xs text-emerald-600">
                    Our technical representative will get back to you shortly.
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#0081c6] focus:ring-1 focus:ring-[#0081c6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+966 ..."
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#0081c6] focus:ring-1 focus:ring-[#0081c6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#0081c6] focus:ring-1 focus:ring-[#0081c6]"
                      defaultValue="Commercial Projects"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your scope of work, timeline, or location..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#0081c6] focus:ring-1 focus:ring-[#0081c6] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> Riyadh, KSA
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0081c6] hover:bg-[#0070ad] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Request
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}
