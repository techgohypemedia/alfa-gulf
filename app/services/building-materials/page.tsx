import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BuildingMaterialsPage() {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[85vh] w-full flex flex-col justify-end pb-24 overflow-hidden">
        {/* Background Image with Clean Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/steel_rebar_supply.jpg"
            alt="Building Material Supply Alfa Gulf"
            fill
            priority
            className="object-cover scale-105"
          />
          {/* Soft, clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col gap-6">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl leading-[1.1]">
            Building Material Supply
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl font-light leading-relaxed">
            Direct bulk procurement and Just-In-Time site delivery of ASTM/BS certified structural steel, ready-mix concrete, MEP piping, cement, and architectural finishing supplies for major construction developments.
          </p>
        </div>
      </section>

      {/* ── CONTENT WRAPPER ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-16 space-y-32">
        {/* ── OVERVIEW SECTION ── */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-[45%] space-y-8">
            <h2 className="text-3xl md:text-5xl leading-[1.15] font-medium text-slate-900">
              Certified material supply chain backed by rigorous quality assurance
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              Alfa Gulf Contracting’s logistics wing manages direct sourcing from global mills and local manufacturers. We ensure complete batch traceability, Mill Test Certificates (MTC), lab testing compliance, and guaranteed delivery schedules to keep project timelines uninterrupted.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0081c6] font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300"
              >
                Discuss Material Sourcing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
            <Image
              src="/services/building_materials.jpg"
              alt="Building Materials Logistics Overview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </section>

        {/* ── HIGHLIGHT BANNER ── */}
        <section className="w-full bg-[#050b14] p-12 md:p-20 relative overflow-hidden flex items-center justify-center text-center">
          {/* Abstract background subtle glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0081c6]/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600/20 blur-[100px]" />

          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight font-medium text-white max-w-4xl relative z-10 text-balance">
            Uncompromising structural integrity through <span className="text-[#0081c6]">100% lab-tested materials</span> and dependable site logistics.
          </h2>
        </section>

        {/* ── 4-GRID CATALOG MATRIX ── */}
        <section className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900">
              Core Material Supply Categories
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl">
              Our comprehensive supply matrix caters to civil contractors, developers, and MEP specialists across the Gulf region.
            </p>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Category 01 */}
            <div className="bg-white border border-slate-200 shadow-sm p-8 lg:p-10 space-y-6 hover:border-[#0081c6]/40 transition-colors duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/services/steel_rebar_supply.jpg"
                  alt="Structural Steel & Rebar Supply"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-slate-900">
                Structural Steel & Rebar Supplies
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                High-yield deformed steel rebar (Grade 60/500B), I-beams, H-beams, channels, hollow structural sections, and structural plates with Mill Test Certificates.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100">
                {[
                  "Deformed High-Yield Rebar (8mm to 40mm)",
                  "Universal Beams, Columns & Structural Channels",
                  "Couplers, Binding Wire & Epoxy Coated Rebar",
                ].map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-700 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 02 */}
            <div className="bg-white border border-slate-200 shadow-sm p-8 lg:p-10 space-y-6 hover:border-[#0081c6]/40 transition-colors duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
                  alt="Ready-Mix Concrete & Aggregates"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-slate-900">
                Ready-Mix Concrete, Aggregates & Cement
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ordinary Portland Cement (OPC), Sulfate Resistant Cement (SRC), washed dune sand, crushed limestone aggregates, and computer-batched ready-mix concrete.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100">
                {[
                  "Computerized Batching Plants Ready-Mix Supply",
                  "OPC & SRC Bulk Cement Tanker Deliveries",
                  "Washed Dune Sand & 10mm/20mm Limestone Aggregates",
                ].map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-700 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 03 */}
            <div className="bg-white border border-slate-200 shadow-sm p-8 lg:p-10 space-y-6 hover:border-[#0081c6]/40 transition-colors duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2069&auto=format&fit=crop"
                  alt="MEP Piping & Electrical Supplies"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-slate-900">
                MEP Piping, Conduit & Cable Supplies
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Industrial copper piping, PPR/PEX plumbing tubes, Galvanized Iron (GI) electrical conduits, XLPE armored power cables, and distribution panel boards.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100">
                {[
                  "K-Type & L-Type ACR Copper Tubes & Fittings",
                  "PPR Hot/Cold Water Pipes & HDPE Underground Lines",
                  "Low Voltage & Medium Voltage Armored Cables",
                ].map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-700 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 04 */}
            <div className="bg-white border border-slate-200 shadow-sm p-8 lg:p-10 space-y-6 hover:border-[#0081c6]/40 transition-colors duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Finishing Stones, Tiles & Insulation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-slate-900">
                Finishing Stones, Tiles & Thermal Insulation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Premium natural marble slabs, porcelain floor tiles, rockwool fireproof insulation boards, acoustic ceiling tiles, and waterproofing membranes.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100">
                {[
                  "Italian & Spanish Marble Slabs & Porcelain Tiles",
                  "Rockwool, Extruded Polystyrene (XPS) Insulation",
                  "APP Bituminous Waterproofing Membranes & Primers",
                ].map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-700 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── GRID: Quality Assurance & SLA ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8">
          {/* Card 01 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              Independent Lab Certification
              <span className="text-4xl text-slate-200 font-bold">01</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Every shipment is accompanied by Mill Test Certificates (MTC) and independent third-party laboratory tensile/compressive test reports, verifying adherence to ASTM, BS, and ISO international standards.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              Just-In-Time Bulk Fleet Logistics
              <span className="text-4xl text-slate-200 font-bold">02</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our heavy transport logistics fleet guarantees scheduled site offloading, preventing congestion on commercial construction sites and protecting sensitive materials from weather damage.
            </p>
          </div>
        </section>
      </div>

      {/* ── PREMIUM CTA SECTION ── */}
      <section className="relative w-full bg-black border-b-[6px] border-[#0081c6] overflow-hidden">
        {/* Architectural background overlay */}
        <div className="absolute inset-0 z-0 right-0 w-full md:w-[70%] ml-auto">
          <Image
            src="https://images.unsplash.com/photo-1423683249427-8ca22bd873e0?q=80&w=2070&auto=format&fit=crop"
            alt="Abstract Architecture"
            fill
            className="object-cover object-right opacity-60 grayscale mix-blend-screen"
          />
          {/* Gradient to fade image into solid black on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-40 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-12 leading-tight">
            Need bulk building materials <br />
            supplied to your site?
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
