import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SteelStructuresPage() {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#0081c6]"></span>
              <span className="text-[#0081c6] font-bold tracking-[0.2em] uppercase text-sm">Industrial Expertise</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1]">
              Steel Structures &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0081c6] to-blue-400">
                Fireproofing
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mt-4 font-normal leading-relaxed">
              Engineered for unparalleled strength and built for ultimate safety. We deliver precision steel erection and advanced fire protection systems that form the resilient backbone of modern megastructures.
            </p>
          </div>

          <div className="lg:w-1/2 w-full relative mt-12 lg:mt-0">
            <div className="relative w-full min-h-[350px] md:min-h-[450px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300 ring-1 ring-slate-900/5 bg-slate-900">
              <video 
                src="/Aerial_view_of_industrial_complex_202609071617_gwr_video_mvp.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0081c6]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#0081c6]/20 rounded-full blur-3xl z-[-1]"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#ff5e00]/10 rounded-full blur-2xl z-[-1]"></div>
          </div>
          
        </div>
      </section>

      {/* ── INTRO BANNER ── */}
      <section className="w-full bg-[#050b14] py-12 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white text-xl md:text-3xl font-light max-w-3xl leading-snug">
            "We don't just build frameworks; we engineer resilient skeletons that withstand time, extreme conditions, and strict safety regulations."
          </p>
          <div className="w-full md:w-auto flex flex-col items-start md:items-end">
            <span className="text-4xl font-bold text-[#0081c6]">20+</span>
            <span className="text-slate-400 text-sm tracking-widest uppercase mt-1">Years of Expertise</span>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES BENTO GRID ── */}
      <section className="py-24 lg:py-32 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col mb-16 gap-4">
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight">
            Our Capabilities
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            From complex structural fabrication to specialized passive fire protection, we provide end-to-end solutions that guarantee structural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Precision Erection */}
          <div className="md:col-span-8 group relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 min-h-[400px] flex flex-col justify-end p-10 lg:p-12">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/services/steel_structures.jpg" 
                alt="Steel Framework" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <div className="text-[#0081c6] font-bold tracking-widest text-sm mb-4">01</div>
              <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">Precision Steel Erection</h3>
              <p className="text-slate-300 max-w-lg leading-relaxed">
                Expert assembly of complex structural frameworks for high-rise buildings, industrial plants, and commercial warehouses. We utilize advanced lifting techniques and rigorous alignment protocols.
              </p>
            </div>
          </div>

          {/* Card 2: Intumescent Coatings */}
          <div className="md:col-span-4 group relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl min-h-[400px] flex flex-col justify-end p-10">
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700">
              <Image 
                src="/services/steel_rebar_supply.jpg" 
                alt="Coating Application" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="text-[#0081c6] font-bold tracking-widest text-sm mb-4">02</div>
              <h3 className="text-2xl font-medium text-white mb-4">Intumescent Fireproofing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Application of thin-film intumescent coatings that expand upon heat exposure to protect steel structures, extending structural stability during fire incidents while maintaining architectural aesthetics.
              </p>
            </div>
          </div>

          {/* Card 3: Cementitious Fireproofing */}
          <div className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-[#0081c6] shadow-xl min-h-[400px] flex flex-col justify-between p-10">
            <div className="relative z-10">
              <div className="text-white/70 font-bold tracking-widest text-sm mb-8">03</div>
              <h3 className="text-3xl font-medium text-white mb-4">Cementitious Spray</h3>
              <p className="text-white/90 leading-relaxed">
                Cost-effective, robust passive fire protection for concealed structural members. Highly durable and designed for extreme industrial environments.
              </p>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white transition-colors cursor-pointer mt-8">
              <span className="text-white group-hover:text-[#0081c6] font-medium">&rarr;</span>
            </div>
          </div>

          {/* Card 4: Safety & QA */}
          <div className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 min-h-[400px] flex flex-col justify-center p-10 lg:p-16">
            <div className="absolute inset-0 bg-slate-50 z-0"></div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
              <div className="text-[#0081c6] font-bold text-6xl opacity-20">04</div>
              <div>
                <h3 className="text-3xl font-medium text-slate-900 mb-4">Uncompromising QA & Safety</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Every beam, bolt, and coating layer undergoes stringent quality assurance. We adhere strictly to international building codes, Civil Defense requirements, and occupational health standards to ensure zero-defect delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#0081c6]"></span>
                    Non-Destructive Testing (NDT)
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#0081c6]"></span>
                    Dry/Wet Film Thickness Inspections
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#0081c6]"></span>
                    Civil Defense Certification Support
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative w-full bg-black border-b-[6px] border-[#ff5e00] overflow-hidden">
        <div className="absolute inset-0 z-0 right-0 w-full md:w-[70%] ml-auto">
          <Image 
            src="/services/steel_structures.jpg" 
            alt="Abstract Architecture" 
            fill 
            className="object-cover object-right opacity-60 grayscale mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-40 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-12 leading-tight">
            Ready to <br />
            work together?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white px-8 py-5 text-xs font-bold tracking-[0.15em] uppercase transition-colors text-center"
            >
              Build a project with us
            </Link>
            <Link 
              href="/careers"
              className="bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white px-8 py-5 text-xs font-bold tracking-[0.15em] uppercase transition-colors text-center"
            >
              Build a career with us
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
