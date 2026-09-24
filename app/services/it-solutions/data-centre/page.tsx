import React from 'react';

export default function DataCentrePilot() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background Layers (Placeholders) */}
        <div className="absolute inset-0 bg-slate-900 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10" />
        
        <div className="relative z-20 text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Data Centre Solutions
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 font-light">
            Build the Digital Core
          </p>
        </div>
      </section>

      {/* Visual Journey Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text-white">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Design & Architecture', desc: 'Planning scalable digital infrastructure.' },
            { step: '2', title: 'Integration & Build', desc: 'Deploying high-performance servers and cooling.' },
            { step: '3', title: 'Operation & Support', desc: '24/7 monitoring and maintenance.' }
          ].map((item) => (
            <div key={item.step} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="text-4xl font-bold text-blue-500 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
