import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function CommercialProjectsPage() {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="relative h-[85vh] w-full flex flex-col justify-end pb-24 overflow-hidden">
        {/* Background Image with Premium Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/services/commercial_projects.jpg" 
            alt="Commercial Project Render" 
            fill 
            priority
            className="object-cover scale-105 animate-[subtle-zoom_20s_ease-in-out_infinite_alternate]"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col gap-6">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[#0081c6]"></span>
            <span className="text-[#0081c6] font-mono text-sm tracking-widest uppercase">Division 01</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl leading-[1.1]">
            Commercial Projects
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            We specialize in the design and construction of commercial buildings, ensuring that every project meets industry standards while delivering innovative, sustainable, and cost-effective solutions.
          </p>
        </div>
      </section>

      {/* ── CONTENT WRAPPER ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-16 space-y-32">
        
        {/* ── SECTION 1: Integrated Construction ── */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-[45%] space-y-8">
            <h2 className="text-3xl md:text-5xl leading-[1.15] font-medium text-slate-900">
              Delivering integrated construction services to build lasting success
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              When you partner with Alfa Gulf, you not only get innovative solutions, you get our fully vested team and a commitment to doing things right. Our relentless focus on success leads to smarter more collaborative building practices.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#0081c6] font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300">
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
                      <div className="lg:w-[55%] w-full relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl shadow-slate-200">
             <Image 
              src="/services/fitout_works.jpg" 
              alt="Modern building interior" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Glassmorphism accent */}
            <div className="absolute bottom-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl text-white max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-sm font-medium">Uncompromising Quality & Execution</p>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHT BANNER ── */}
        <section className="w-full bg-[#050b14] rounded-3xl p-12 md:p-20 relative overflow-hidden flex items-center justify-center text-center">
          {/* Abstract background shapes */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0081c6]/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight font-medium text-white max-w-4xl relative z-10 text-balance">
            No matter the challenge, we build on what we know works and <span className="text-[#0081c6]">elevate your vision</span> of success.
          </h2>
        </section>

        {/* ── SECTION 2: Pushing the Industry ── */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-[55%] w-full relative aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl shadow-slate-200 order-2 lg:order-1">
             <Image 
              src="/services/building_materials.jpg" 
              alt="Glass building facade" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0081c6]/20 to-transparent mix-blend-overlay"></div>
          </div>
          <div className="lg:w-[45%] space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl leading-[1.15] font-medium text-slate-900">
              Pushing the Industry Forward
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              At Alfa Gulf Contracting, we are passionate about driving value into every project we undertake. We continue to challenge our people, projects and the industry. By being forward-thinking, we are continually finding new ways to deliver success for our clients and stakeholders.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                "Innovative Engineering Solutions",
                "Sustainable Building Practices",
                "Stakeholder Value Creation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-800 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0081c6]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── GRID: Quality & Analytics ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Quality Card */}
          <div className="bg-white p-10 lg:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-[#0081c6]/30 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              Quality Assurance
              <span className="text-4xl text-slate-100 font-bold">01</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Alfa Gulf Contracting’s culture of quality is built into everything we do and begins with personal accountability from our employee-owners. Successful quality projects demonstrate our culture that embraces clear communication, strong problem-solving, and a relentless focus on creating strong relationships. We work with you from project start-up through completion.
            </p>
          </div>
          
          {/* Tracking Card */}
          <div className="bg-white p-10 lg:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-[#0081c6]/30 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 flex items-center justify-between">
              Tracking Project Trends
              <span className="text-4xl text-slate-100 font-bold">02</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              From smart sensors to comprehensive integrated project analytics, we track and trend progress, quality, safety and more. This data allows us to understand the immediate and potential impacts of items and provides a simple means of examining complex data, provide you with options, and resolve challenges before they become issues.
            </p>
          </div>
        </section>

      </div>

      {/* ── PREMIUM CTA SECTION ── */}
      <section className="relative w-full bg-black border-b-[6px] border-[#ff5e00] overflow-hidden">
        {/* Architectural background overlay */}
        <div className="absolute inset-0 z-0 right-0 w-full md:w-[70%] ml-auto">
          <Image 
            src="/services/commercial_projects.jpg" 
            alt="Abstract Architecture" 
            fill 
            className="object-cover object-right opacity-60 grayscale mix-blend-screen"
          />-right opacity-60 grayscale mix-blend-screen"
          />
          {/* Gradient to fade image into solid black on the left */}
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
