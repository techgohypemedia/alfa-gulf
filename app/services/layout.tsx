import React from 'react';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="services-layout w-full bg-slate-950 text-white min-h-screen">
      {/* Optional: Add secondary navigation or shared headers for services here later */}
      {children}
    </div>
  );
}
