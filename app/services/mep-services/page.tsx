import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MepServicesPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* ── HEADER SECTION ── */}
      <section className="relative w-full pt-32 pb-16 lg:pt-48 lg:pb-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 leading-[1.1] md:w-1/2">
          MEP Services
        </h1>
        <p className="text-lg text-slate-600 md:w-1/2 font-light leading-relaxed max-w-2xl">
          Delivering high-quality mechanical, electrical, and plumbing solutions for seamless project execution.
        </p>
      </section>

      {/* ── SPLIT SECTION: ADVANTAGES FOR PROJECT OWNERS ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1]">
              Advantages for project owners
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              The predictability of lump sum contracts is the primary benefit to project owners. The owner can expect the project to be completed within budget and often more quickly so that the contractor can maximize resources and save on labor costs. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Lump sum contracts also render little financial risk for owners as the contractor is responsible for any cost overruns. These factors make it easier for project owners to obtain financing since lenders prefer to fund defined projects with clearly delineated costs.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
              alt="Engineers reviewing MEP plans" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── MASSIVE FULL WIDTH PIPES IMAGE ── */}
      <section className="w-full mb-24 lg:mb-32">
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden shadow-2xl border-y border-slate-200">
          <Image 
            src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop" 
            alt="Massive HVAC Pipes" 
            fill 
            sizes="100vw"
            className="object-cover hover:scale-105 transition-transform duration-[3000ms]"
          />
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative w-full bg-black border-b-[6px] border-[#ff5e00] overflow-hidden">
        <div className="absolute inset-0 z-0 right-0 w-full md:w-[70%] ml-auto">
          <Image 
            src="https://images.unsplash.com/photo-1423683249427-8ca22bd873e0?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract Architecture" 
            fill 
            className="object-cover object-right opacity-60 grayscale mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-40 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-12 leading-tight">
            Ready to build <br />
            together?
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
