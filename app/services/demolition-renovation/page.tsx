import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DemolitionRenovationPage() {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[85vh] w-full flex flex-col justify-end pb-24 overflow-hidden">
        {/* Background Image with Clean Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/structural_demolition.jpg"
            alt="Demolition & Renovation of Buildings Alfa Gulf"
            fill
            priority
            className="object-cover scale-105"
          />
          {/* Soft, clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col gap-6">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl leading-[1.1]">
            Demolition & Renovation
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl font-light leading-relaxed">
            High-precision controlled structural demolition, interior stripping, carbon fiber structural strengthening, concrete repair, and modern building renovation.
          </p>
        </div>
      </section>

      {/* ── CONTENT WRAPPER ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-16 space-y-32">
        {/* ── OVERVIEW SECTION ── */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-[45%] space-y-8">
            <h2 className="text-3xl md:text-5xl leading-[1.15] font-medium text-slate-900">
              Safe, controlled structural engineering & adaptive building reuse
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              At Alfa Gulf Contracting, our Demolition & Renovation division specializes in complex urban structural modifications. Using advanced diamond core cutting, robotic hydraulic crushers, and carbon fiber structural retrofitting, we execute controlled dismantling and comprehensive building modernizations with zero compromise on site safety.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0081c6] font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300"
              >
                Discuss Structural Renovation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
            <Image
              src="/services/demolition_renovation.jpg"
              alt="Demolition & Renovation Overview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </section>

        {/* ── HIGHLIGHT BANNER ── */}
        <section className="w-full bg-[#050b14] p-12 md:p-20 relative overflow-hidden flex items-center justify-center text-center">
          {/* Abstract background subtle glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0081c6]/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/20 blur-[100px]" />

          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight font-medium text-white max-w-4xl relative z-10 text-balance">
            Precision engineering ensuring zero structural vibration, <span className="text-[#0081c6]">90%+ material recycling</span>, and complete municipal compliance.
          </h2>
        </section>

        {/* ── 5 CORE SECTIONS ── */}
        <div className="space-y-32">
          {/* 1. Controlled High-Reach Demolition */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/structural_demolition.jpg"
                alt="Controlled Mechanical Structural Dismantling"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Controlled Mechanical Structural Dismantling
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Dismantling reinforced concrete structures, floor slabs, and shear walls using high-reach excavators, hydraulic crushers, and mist dust cannons.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Vibration Monitoring Sensors & Safety Hoarding",
                  "Dust & Noise Suppression Misting Systems",
                  "Robotic Concrete Shear Crushers & Breakers",
                  "100% Municipal Permit & Environmental Approvals",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. Selective Interior Dismantling */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[45%] space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Selective Interior Dismantling & Soft Strip
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Removal of non-structural drywall partitions, suspended ceilings, flooring, mechanical ductwork, and electrical wiring before major structural modifications.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Non-Structural Interior Strip-Out",
                  "Safe Asbestos & Hazardous Waste Abatement",
                  "Architectural Material Salvage & Sorting",
                  "Night-Shift Urban Commercial Strip-Out",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
              <Image
                src="/services/fitout_works.jpg"
                alt="Selective Interior Dismantling"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </section>

          {/* 3. Carbon Fiber Column Wrapping */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/commercial_projects.jpg"
                alt="Carbon Fiber Column Wrapping & Concrete Repair"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Carbon Fiber (CFRP) Strengthening & Repair
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Increasing load-bearing capacity of existing concrete columns and beams using CFRP wraps, steel jacketing, and epoxy resin crack injection.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "CFRP Carbon Fiber Wrap Column Retrofitting",
                  "Structural Column Steel Jacketing & Encasement",
                  "High-Pressure Epoxy Resin Crack Injection",
                  "Structural Load Verification & NDT Audits",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* ── GRID: Quality Assurance & Safety ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8">
          {/* Card 01 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              Municipal Permits & Safety Audits
              <span className="text-4xl text-slate-200 font-bold">01</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We manage all municipal demolition permits, structural engineer peer reviews, utility disconnections, and site safety hoarding to guarantee 100% regulatory compliance.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              90%+ Material Recycling & Sustainability
              <span className="text-4xl text-slate-200 font-bold">02</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Crushed concrete is processed into reusable road-base aggregate, while scrap rebar and metals are diverted to steel recycling facilities in accordance with green building practices.
            </p>
          </div>
        </section>
      </div>

      {/* ── PREMIUM CTA SECTION ── */}
      <section className="relative w-full bg-black border-b-[6px] border-[#0081c6] overflow-hidden">
        {/* Architectural background overlay */}
        <div className="absolute inset-0 z-0 right-0 w-full md:w-[70%] ml-auto">
          <Image
            src="/services/commercial_projects.jpg"
            alt="Abstract Architecture"
            fill
            className="object-cover object-right opacity-60 grayscale mix-blend-screen"
          />
          {/* Gradient to fade image into solid black on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-40 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-12 leading-tight">
            Plan your building renovation <br />
            or structural demolition?
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
