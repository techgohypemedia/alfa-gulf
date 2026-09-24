import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FitOutWorksPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* ── HEADER SECTION ── */}
      <section className="relative w-full pt-32 pb-16 lg:pt-48 lg:pb-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 leading-[1.1] md:w-1/2">
          Fit-Out Works
        </h1>
        <p className="text-lg text-slate-600 md:w-1/2 font-light leading-relaxed max-w-2xl">
          We provide customized interior fit-out solutions that transform spaces into functional, aesthetic, and inspiring environments. Whether for retail, office, residential, or commercial properties, our designs reflect the specific needs and vision of our clients.
        </p>
      </section>

      {/* ── MASSIVE HERO IMAGE ── */}
      <section className="w-full mb-24 lg:mb-32">
        <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden shadow-2xl border-y border-slate-200">
          <Image 
            src="/services/fitout_works.jpg" 
            alt="Modern Interior Fit-Out" 
            fill 
            priority
            sizes="100vw"
            className="object-cover hover:scale-105 transition-transform duration-[2000ms]"
          />
          {/* Subtle vignette for premium feel */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem] pointer-events-none"></div>
        </div>
      </section>

      {/* ── TARGET VALUE DESIGN SECTION ── */}
      <section className="py-20 lg:py-32 w-full bg-[#f8f9fa] border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#0081c6]"></span>
              <span className="text-[#0081c6] font-bold tracking-[0.2em] uppercase text-sm">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium text-slate-900 leading-[1.1]">
              Target Value <br/>
              <span className="text-slate-400">Design</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Based on Lean principles, integrated teams gain collective insight into the client’s true value drivers and uses a set based design approach to evaluate design options against target values. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                In the end, the owner benefits from maximized value; the architect benefits from a more informed design; the GC benefits from greater cost/risk certainty; and the trades and sub-consultants benefit from early engagement and accountability for processes.
              </p>
              <div className="p-6 bg-white border-l-4 border-[#0081c6] shadow-sm mt-8">
                <p className="text-slate-800 font-medium italic">
                  "Expert-optimized design solutions save time/cost through quality contract documents."
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/services/fitout_works.jpg" 
                alt="Architect working on target value design blueprints" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0081c6]/10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative w-full bg-black border-b-[6px] border-[#ff5e00] overflow-hidden">
        <div className="absolute inset-0 z-0 right-0 w-full md:w-[70%] ml-auto">
          <Image 
            src="/services/fitout_works.jpg" 
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
