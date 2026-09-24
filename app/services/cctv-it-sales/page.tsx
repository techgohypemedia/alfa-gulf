import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CctvItSalesPage() {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[85vh] w-full flex flex-col justify-end pb-24 overflow-hidden">
        {/* Background Image with Clean Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="CCTV & IT Sales and Services Alfa Gulf"
            fill
            priority
            className="object-cover scale-105"
          />
          {/* Soft, clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col gap-6">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl leading-[1.1]">
            CCTV & IT Sales and Services
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl font-light leading-relaxed">
            We deliver turnkey 4K surveillance systems, high-speed fiber structured cabling, biometric access control, cloud server infrastructure, and enterprise cybersecurity for commercial, residential, and industrial developments.
          </p>
        </div>
      </section>

      {/* ── CONTENT WRAPPER ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-16 space-y-32">
        {/* ── OVERVIEW SECTION ── */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-[45%] space-y-8">
            <h2 className="text-3xl md:text-5xl leading-[1.15] font-medium text-slate-900">
              Mission-critical security & IT infrastructure built for performance
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              At Alfa Gulf Contracting, our specialized CCTV and IT division provides comprehensive design, supply, installation, and maintenance services. We ensure full compliance with SIRA and local security regulatory authorities, delivering seamless connectivity and complete peace of mind.
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
              src="/services/cctv_it_services.jpg"
              alt="IT & CCTV Infrastructure Overview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </section>

        {/* ── HIGHLIGHT BANNER ── */}
        <section className="w-full bg-[#050b14] p-12 md:p-20 relative overflow-hidden flex items-center justify-center text-center">
          {/* Abstract background subtle glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0081c6]/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[100px]" />

          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight font-medium text-white max-w-4xl relative z-10 text-balance">
            Empowering facilities with <span className="text-[#0081c6]">24/7 intelligent surveillance</span>, enterprise fiber cabling, and resilient IT networks.
          </h2>
        </section>

        {/* ── 5 CORE SECTIONS ── */}
        <div className="space-y-32">
          {/* 1. 4K AI CCTV & Video Surveillance */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/cctv/cctv_ai_surveillance.jpg"
                alt="Enterprise 4K AI CCTV & Video Surveillance"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Enterprise 4K AI CCTV & Video Surveillance
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Turnkey installation of ultra-high-definition 4K IP cameras with real-time AI video analytics, thermal imaging, Automatic Number Plate Recognition (ANPR), and centralized video wall control rooms.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "SIRA & MOI Regulatory Compliance & Approval",
                  "Automatic Number Plate Recognition (ANPR)",
                  "AI Facial Recognition & Intrusion Perimeter Alerts",
                  "30 to 180 Days SAN/NAS Secure Video Storage",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. Structured Cabling & Data Center Networking */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[45%] space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Structured Cabling & Data Center Networking
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Enterprise-grade fiber optic backbones, Cat6A structured cabling, server rack management, and Fluke certified testing for commercial buildings, data centers, and corporate offices.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Single-mode & Multi-mode Fiber Optic Laying",
                  "High-Density Cat6A / Cat7 Structured Cabling",
                  "Server Rack Setup & Patch Panel Cable Dressing",
                  "100% Fluke DTX Certification & Testing Reports",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
              <Image
                src="/services/cctv/structured_cabling_datacenter.jpg"
                alt="Structured Cabling & Data Center Networking"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </section>

          {/* 3. Biometric Access Control & Turnstiles */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/cctv/biometric_access_control.jpg"
                alt="Biometric Access Control & Turnstile Gates"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Biometric Access Control & Turnstile Gates
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Smart access control solutions including touchless facial recognition readers, RFID card access, pedestrian flap turnstiles, and automated vehicle boom barriers integrated with HR time attendance systems.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Touchless Facial & Fingerprint Biometric Readers",
                  "Pedestrian Flap Barriers & Heavy Duty Turnstiles",
                  "Automatic RFID Vehicle Boom Barriers & ANPR Gates",
                  "HR Time-Attendance & Payroll System Integration",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Enterprise Cloud IT Servers & Hardware */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[45%] space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Enterprise Cloud IT Servers & Hardware Supply
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Complete IT hardware procurement, blade/rack server installation, SAN storage arrays, Active Directory setup, and hybrid cloud backup solutions for corporate enterprises.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Dell EMC, HPE & Lenovo Rack Server Procurement",
                  "High Availability SAN/NAS Storage Deployments",
                  "VMware ESXi & Microsoft Hyper-V Virtualization",
                  "Disaster Recovery & Offsite Cloud Automated Backups",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-800 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200">
              <Image
                src="/services/cctv/cloud_server_infrastructure.jpg"
                alt="Enterprise Cloud IT Servers & Hardware Supply"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </section>

          {/* 5. Cybersecurity, Next-Gen Firewalls & NOC */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[55%] w-full relative aspect-[4/3] overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
              <Image
                src="/services/cctv/cybersecurity_network_defense.jpg"
                alt="Cybersecurity, Next-Gen Firewalls & NOC"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-[45%] space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                Cybersecurity, Next-Gen Firewalls & NOC
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                Complete network protection featuring UTM Next-Gen Firewalls, Zero-Trust VPNs, endpoint threat detection, and 24/7 proactive Network Operations Center (NOC) monitoring.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Fortinet & Palo Alto UTM Firewall Configuration",
                  "Zero-Trust Remote Access VPN & IPsec Tunnels",
                  "Intrusion Detection & Prevention Systems (IDS/IPS)",
                  "24/7 NOC Monitoring & Automated Incident Mitigation",
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
              Regulatory Approval & SIRA
              <span className="text-4xl text-slate-200 font-bold">01</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Every surveillance installation is designed according to local government guidelines (SIRA / MOI), ensuring full audit approval, proper camera placement, recording frame rates, and secure storage retention.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white p-10 lg:p-14 border border-slate-200 shadow-sm hover:border-[#0081c6]/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              24/7 Managed NOC & Maintenance
              <span className="text-4xl text-slate-200 font-bold">02</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We provide annual maintenance contracts (AMC) backed by SLA commitments. Our specialized technical support team monitors uptime, replaces faulty hardware, and executes routine system maintenance.
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
            Ready to build <br />
            your IT & security infrastructure?
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
