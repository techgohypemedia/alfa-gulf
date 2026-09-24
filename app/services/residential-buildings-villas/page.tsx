import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ResidentialVillasPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* ── MASSIVE HERO SECTION (Image with Text Overlay) ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center mb-16 lg:mb-24 overflow-hidden border-b border-slate-200 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern residential building facade" 
            fill 
            priority
            sizes="100vw"
            className="object-cover scale-105 hover:scale-100 transition-transform duration-[3000ms]"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:w-2/3 lg:w-1/2 gap-6 mt-20">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#0081c6]"></span>
            <span className="text-[#0081c6] font-bold tracking-[0.2em] uppercase text-sm">Luxury Living</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1]">
            Residential Complex<br/>& Villas
          </h1>
          <p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl">
            We bring our expertise to create elegant and functional homes, including bespoke villas tailored to individual tastes. Our focus is on high-quality craftsmanship and delivering spaces that combine comfort, style, and durability.
          </p>
        </div>
      </section>

      {/* ── SPLIT SECTION 1: PUSHING INDUSTRY FORWARD (Image Left, Text Right) ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 w-full h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
              alt="Modern geometric villas" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-medium text-slate-900 leading-[1.1]">
              Pushing the <br/>Industry Forward
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              At Alfa Gulf Contracting, we are passionate about driving value into every project we undertake. We continue to challenge our people, projects and the industry. By being forward-thinking, we are continually finding new ways to deliver success for our clients and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPLIT SECTION 2: INTEGRATED CONSTRUCTION (Text Left, Image Right) ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1]">
              Delivering integrated construction services to build lasting success
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              When you partner with Alfa Gulf Contracting, you not only get innovative solutions, you get our fully vested team and a commitment to doing things right. Our relentless focus on success leads to smarter more collaborative building practices.
            </p>
            <p className="text-lg text-slate-900 font-medium">
              No matter the challenge, we build on what we know works and elevate your vision of success.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern integrated residential construction" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── INFO BLOCKS ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-32 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#0081c6]"></span>
              <span className="text-[#0081c6] font-bold tracking-[0.2em] uppercase text-sm">Standards</span>
            </div>
            <h3 className="text-3xl font-medium text-slate-900 mb-6">Quality Assurance</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Alfa Gulf Contracting’s culture of quality is built into everything we do and begins with personal accountability from our employee-owners. Successful quality projects demonstrate our culture that embraces clear communication, strong problem-solving, and a relentless focus on creating strong relationships. We work with you from project start-up through completion to ensure your expectations are delivered and the final project meets all your needs.
            </p>
          </div>
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#0081c6]"></span>
              <span className="text-[#0081c6] font-bold tracking-[0.2em] uppercase text-sm">Innovation</span>
            </div>
            <h3 className="text-3xl font-medium text-slate-900 mb-6">Tracking Project Trends</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              From smart sensors to comprehensive integrated project analytics, we track and trend progress, quality, safety and more. This data allows us to understand the immediate and potential impacts of items and provides a simple means of examining complex data, provide you with options, and resolve challenges before they become issues.
            </p>
          </div>
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
