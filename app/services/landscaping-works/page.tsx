import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandscapingWorksPage() {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[85vh] w-full flex flex-col justify-end pb-24 overflow-hidden">
        {/* Background Image with Clean Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/landscaping_works.jpg"
            alt="Landscaping Works Alfa Gulf"
            fill
            priority
            className="object-cover scale-105"
          />
          {/* Soft, clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col gap-6">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl leading-[1.1]">
            Landscaping Works
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl font-light leading-relaxed">
            We deliver turnkey softscaping, luxury hardscaping, smart automated irrigation, custom water features, and architectural night lighting for commercial developments, residential villas, and public parks.
          </p>
        </div>
      </section>

      {/* ── CONTENT WRAPPER ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-16 space-y-32">
        {/* ── OVERVIEW SECTION ── */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-[45%] space-y-8">
            <h2 className="text-3xl md:text-5xl leading-[1.15] font-medium text-slate-900">
              Sustainable outdoor architecture and master landscape engineering
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              At Alfa Gulf Contracting, our dedicated Landscaping division brings together horticultural expertise, structural engineering, and sustainable water management. From concept design and soil preparation to luxury hardscapes and year-round maintenance, we turn outdoor environments into vibrant, lasting masterpieces.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0081c6] font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
            <Image
              src="/services/landscaping_works.jpg"
              alt="Landscaping Works Overview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </section>

        {/* ── HIGHLIGHT BANNER ── */}
        <section className="w-full bg-[#050b14] p-12 md:p-20 relative overflow-hidden flex items-center justify-center text-center">
          {/* Abstract background subtle glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0081c6]/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600/20 blur-[100px]" />

          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight font-medium text-white max-w-4xl relative z-10 text-balance">
            Creating harmony between <span className="text-[#0081c6]">nature and modern architecture</span> through innovative landscape design and water efficiency.
          </h2>
        </section>

        {/* ── 5 CORE SECTIONS ── */}
        <div className="space-y-32">
          {/* 1. Commercial & Residential Softscaping */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/landscaping/softscaping_gardens.jpg"
                alt="Commercial & Residential Softscaping"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Commercial & Residential Softscaping
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Complete planting design and execution including climate-adapted turf grass, specimen date palms, flowering shrubs, organic ground cover, and rich soil conditioning tailored to local weather conditions.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Premium Paspalum & Bermuda Turf Grass Installation",
                  "Specimen Date Palms & Ornamental Shade Trees",
                  "Seasonal Flower Beds & Native Drought-Tolerant Plants",
                  "Soil Testing, Organic Fertilization & Root Barrier Laying",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. Hardscaping & Outdoor Living Structures */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[45%] space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Hardscaping & Outdoor Living Structures
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Precision installation of natural stone pathways, interlock pavers, custom timber and aluminum pergolas, outdoor kitchens, fire pits, retaining walls, and architectural coping.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Granite, Slate & Marble Paving Stone Installation",
                  "Custom Architectural Wooden & Metal Pergolas",
                  "Outdoor Fireplace, Sunken Seating & BBQ Counters",
                  "Structural Retaining Walls & Boundary Planter Boxes",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
              <Image
                src="/services/landscaping/hardscaping_pergola.jpg"
                alt="Hardscaping & Outdoor Living Structures"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </section>

          {/* 3. Automated Smart Irrigation Systems */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/landscaping/smart_irrigation.jpg"
                alt="Automated Smart Irrigation Systems"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Automated Smart Irrigation Systems
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                High-efficiency automatic irrigation networks featuring drip lines, gear-driven pop-up sprinklers, rain sensors, smart Wi-Fi controllers, and TSE recycled water integration for minimal water waste.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Rain Bird & Hunter Smart Irrigation Controllers",
                  "Sub-Surface Drip Irrigation & Pop-up Gear Sprinklers",
                  "Soil Moisture Sensors & Weather Station Connectivity",
                  "TSE Treated Water Pipe Network Integration",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Water Features, Cascades & Swimming Pools */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[45%] space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Water Features, Cascades & Swimming Pools
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Custom design and construction of temperature-controlled infinity swimming pools, cascading stone water walls, reflective koi ponds, jet fountains, and automated filtration plants.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Luxury Infinity Edge & Skimmer Swimming Pools",
                  "Architectural Cascading Water Walls & Jet Fountains",
                  "Automated Saltwater Chlorination & Filtration Systems",
                  "Pool Deck Tiling, Coping Stone & Safety Fencing",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
              <Image
                src="/services/landscaping/swimming_pool_fountain.jpg"
                alt="Water Features, Cascades & Swimming Pools"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </section>

          {/* 5. Architectural Landscape Night Lighting */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/landscaping/landscape_lighting.jpg"
                alt="Architectural Landscape Night Lighting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Architectural Landscape Night Lighting
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Low-voltage outdoor LED illumination accentuating trees, pathways, water features, and architectural structures with automated astronomical timers and smart app controls.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Brass & Stainless Steel Warm LED Tree Uplights",
                  "Pedestrian Pathway Bollard & Step Safety Lights",
                  "Underwater Fiber Optic Pool & Waterfall Lights",
                  "Low-Voltage Transformers with Smart Automation",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* ── GRID: Quality Assurance & Maintenance ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8">
          {/* Card 01 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              Environmental & Municipal Compliance
              <span className="text-4xl text-slate-200 font-bold">01</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Every landscaping project adheres strictly to municipal green building standards, water conservation regulations, and environmental guidelines, ensuring seamless project approvals and long-term sustainability.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              Annual Landscape Maintenance & AMC
              <span className="text-4xl text-slate-200 font-bold">02</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our ongoing maintenance services include lawn mowing, tree pruning, pest control, seasonal flower replacement, and routine irrigation checkups to keep your landscape lush and healthy all year round.
            </p>
          </div>
        </section>
      </div>

      {/* ── PREMIUM CTA SECTION ── */}
      <section className="relative w-full bg-black border-b-[6px] border-[#0081c6] overflow-hidden">
        {/* Architectural background overlay */}
        <div className="absolute inset-0 z-0 right-0 w-full md:w-[70%] ml-auto">
          <Image
            src="/services/landscaping_works.jpg"
            alt="Abstract Architecture"
            fill
            className="object-cover object-right opacity-60 grayscale mix-blend-screen"
          />
          {/* Gradient to fade image into solid black on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-40 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-12 leading-tight">
            Ready to transform <br />
            your outdoor landscape?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white px-8 py-5 text-xs font-bold tracking-[0.15em] uppercase transition-colors text-center"
            >
              Discuss Your Project With Us
            </Link>

            <Link
              href="/contact"
              className="bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white px-8 py-5 text-xs font-bold tracking-[0.15em] uppercase transition-colors text-center"
            >
              Contact Engineering Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
