import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HvacDivisionPage() {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[85vh] w-full flex flex-col justify-end pb-24 overflow-hidden">
        {/* Background Image with Clean Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/chilled_water_plant.jpg"
            alt="HVAC Division Alfa Gulf"
            fill
            priority
            className="object-cover scale-105"
          />
          {/* Soft, clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col gap-6">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl leading-[1.1]">
            HVAC Division
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl font-light leading-relaxed">
            Turnkey heating, ventilation, and air conditioning engineering for commercial towers, industrial facilities, hospitals, and residential developments.
          </p>
        </div>
      </section>

      {/* ── CONTENT WRAPPER ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-16 space-y-32">
        {/* ── OVERVIEW SECTION ── */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-[45%] space-y-8">
            <h2 className="text-3xl md:text-5xl leading-[1.15] font-medium text-slate-900">
              High-efficiency climate control & industrial ventilation engineering
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              At Alfa Gulf Contracting, our specialized HVAC Division engineers high-performance central cooling plants, VRF climate systems, GI/PI ductwork fabrication, cleanroom ventilation, and automated Building Management System (BMS) controls designed to handle extreme Gulf weather conditions.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0081c6] font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300"
              >
                Discuss HVAC Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
            <Image
              src="/services/hvac_division.jpg"
              alt="HVAC Division Engineering Overview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </section>

        {/* ── HIGHLIGHT BANNER ── */}
        <section className="w-full bg-[#050b14] p-12 md:p-20 relative overflow-hidden flex items-center justify-center text-center">
          {/* Abstract background subtle glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0081c6]/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/20 blur-[100px]" />

          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight font-medium text-white max-w-4xl relative z-10 text-balance">
            Optimizing thermal comfort while reducing facility energy consumption by up to <span className="text-[#0081c6]">35%</span>.
          </h2>
        </section>

        {/* ── 5 CORE DIVISIONS SECTIONS ── */}
        <div className="space-y-32">
          {/* 1. Central Chilled Water Plants */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/chilled_water_plant.jpg"
                alt="Central Chilled Water Plants & AHU Systems"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Central Chilled Water Plants & AHU Systems
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Design and installation of air-cooled and water-cooled centrifugal chillers, Air Handling Units (AHU), Fan Coil Units (FCU), and primary/secondary chilled water pump skids for high-rise commercial towers.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "ASHRAE Heat Load Calculation & Pipe Sizing",
                  "Air-Cooled & Water-Cooled Chiller Assemblies",
                  "Variable Frequency Drive (VFD) Chilled Pumps",
                  "Vibration Isolators & Acoustic Duct Attenuators",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. VRF / VRV Smart Climate Control Systems */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[45%] space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                VRF / VRV Smart Climate Control Systems
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Variable Refrigerant Flow (VRF) and Variable Refrigerant Volume (VRV) systems ideal for commercial offices, luxury villas, and hotels providing individual zone temperature control and high energy savings.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Multi-Tenant Individual Zone Climate Control",
                  "Heat Recovery & Heat Pump VRF Configurations",
                  "Daikin, Mitsubishi, Carrier & Trane Equipment",
                  "Refrigerant Leak Detection & Pressure Testing",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="VRF / VRV Smart Climate Control Systems"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </section>

          {/* 3. GI & PI Ductwork Fabrication & Industrial Exhaust */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                alt="GI & PI Ductwork Fabrication & Industrial Exhaust"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                GI & PI Ductwork Fabrication & Industrial Exhaust
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                CNC plasma automated sheet metal duct fabrication producing Galvanized Iron (GI), Pre-Insulated (PI), and 2-hour fire-rated smoke extraction ductwork with SMACNA compliant air distribution diffusers.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "SMACNA Standard CNC Automated Sheet Metal Ducting",
                  "2-Hour & 4-Hour Certified Fire-Rated Smoke Ducts",
                  "Kitchen Ecology Units & Grease Exhaust Fans",
                  "Volume Control Dampers (VCD) & Fire Dampers",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* ── GRID: Quality Assurance & SLA ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8">
          {/* Card 01 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              BMS Integration & Smart Controls
              <span className="text-4xl text-slate-200 font-bold">01</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We integrate all HVAC systems into centralized Building Management Systems (BACnet/Modbus), enabling automated schedule control, energy sub-metering, and instant alarm notifications.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              24/7 HVAC AMC & Emergency Support
              <span className="text-4xl text-slate-200 font-bold">02</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our specialized HVAC maintenance technicians provide routine duct cleaning, filter replacement, chiller overhaul, and 2-hour emergency breakdown response contracts.
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
            Ready to design or upgrade <br />
            your HVAC climate system?
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
