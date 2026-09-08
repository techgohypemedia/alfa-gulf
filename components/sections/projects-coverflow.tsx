"use client";

import React from "react";
import { CoverflowCarousel, CoverflowSlide } from "@/components/ui/coverflow-carousel";

export const ALFA_GULF_PROJECTS: CoverflowSlide[] = [
  {
    src: "/services/commercial_projects.jpg",
    alt: "Iconic Commercial Towers - Al-Nakheel Tower",
    title: "Al-Nakheel Commercial Tower",
    subtitle: "Commercial & Office · Riyadh",
    meta: [
      { label: "Sector", value: "Commercial Tower" },
      { label: "Scope", value: "Turnkey EPC & Engineering" },
      { label: "Location", value: "Riyadh, KSA" },
      { label: "Completion", value: "Delivered on Schedule" },
    ],
  },
  {
    src: "/services/residential_villas.jpg",
    alt: "Modern Sustainable Residential Communities",
    title: "Al-Waha Sustainable Residences",
    subtitle: "Residential Community · Jeddah",
    meta: [
      { label: "Sector", value: "Residential Community" },
      { label: "Scope", value: "Smart Living & SBC Compliant" },
      { label: "Location", value: "Jeddah, KSA" },
      { label: "Standard", value: "Green Building Certified" },
    ],
  },
  {
    src: "/safety/teamwork_structural.jpg",
    alt: "Efficient Industrial Complexes",
    title: "Jubail Petrochemical Logistics Hub",
    subtitle: "Industrial & Petrochemical · Jubail",
    meta: [
      { label: "Sector", value: "Heavy Industrial" },
      { label: "Scope", value: "Structural Steel & Mechanical" },
      { label: "Location", value: "Jubail, KSA" },
      { label: "Safety Record", value: "Zero Lost-Time Incidents" },
    ],
  },
  {
    src: "/safety/common_good_infra.jpg",
    alt: "Cutting-Edge Infrastructure & Transit Hub",
    title: "Horizon Multimodal Transit Terminal",
    subtitle: "Infrastructure & Megaprojects · KSA",
    meta: [
      { label: "Sector", value: "Public Infrastructure" },
      { label: "Scope", value: "Civil Works & Solar Canopies" },
      { label: "Location", value: "NEOM / KSA" },
      { label: "Vision", value: "Saudi Vision 2030" },
    ],
  },
  {
    src: "/services/steel_structures.jpg",
    alt: "Modern Corporate Plaza & Innovation Park",
    title: "Diriyah Innovation & Tech Hub",
    subtitle: "Corporate Campus · Riyadh",
    meta: [
      { label: "Sector", value: "Corporate Plaza" },
      { label: "Scope", value: "Structural Framework & MEP" },
      { label: "Location", value: "Riyadh, KSA" },
      { label: "Design", value: "Contemporary High-Efficiency" },
    ],
  },
  {
    src: "/services/landscaping_works.jpg",
    alt: "Eco-Friendly Landscapes & Recreational Spaces",
    title: "Oasis Eco-Park & Civic Plaza",
    subtitle: "Recreational & Landscape · Eastern Province",
    meta: [
      { label: "Sector", value: "Civic & Recreational" },
      { label: "Scope", value: "Eco-Friendly Landscaping" },
      { label: "Location", value: "Khobar, KSA" },
      { label: "Sustainability", value: "Water-Saving Smart Irrigation" },
    ],
  },
  {
    src: "/services/fitout_works.jpg",
    alt: "Luxurious Executive Headquarters & Interiors",
    title: "Royal Pavilion Executive Headquarters",
    subtitle: "Corporate Fitout · Riyadh",
    meta: [
      { label: "Sector", value: "Commercial Fitout" },
      { label: "Scope", value: "Bespoke Architectural Finishes" },
      { label: "Location", value: "Riyadh, KSA" },
      { label: "Finish Level", value: "Tier-1 Ultra Luxury" },
    ],
  },
  {
    src: "/safety/safety_team_site.jpg",
    alt: "World-Class Sports & Public Arena",
    title: "Saudi Vision 2034 Sports Arena",
    subtitle: "Civic Megaproject · Riyadh",
    meta: [
      { label: "Sector", value: "Sports & Entertainment" },
      { label: "Scope", value: "FIFA 2034 Turnkey Standard" },
      { label: "Location", value: "Riyadh, KSA" },
      { label: "Capacity", value: "World-Class Facilities" },
    ],
  },
];

export function ProjectsCoverflowSection() {
  return (
    <section className="relative w-full bg-white text-zinc-900 pt-8 sm:pt-10 md:pt-12 pb-20 sm:pb-28 md:pb-36 overflow-hidden border-t border-zinc-100/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16 md:mb-20">
        {/* SECTION LABEL: Projects ────── */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-zinc-900">
            Projects
          </span>
          <span className="w-14 sm:w-20 md:w-24 h-[1.5px] bg-orange-600"></span>
        </div>

        {/* EXACT EDITORIAL CONTENT FROM SCREENSHOT */}
        <div className="max-w-5xl">
          <p className="text-zinc-800 text-base sm:text-lg md:text-[1.15rem] leading-relaxed sm:leading-loose font-normal">
            Our extensive portfolio showcases our commitment to excellence and
            innovation, with projects ranging from modern residential
            communities that embrace sustainable living to iconic commercial
            towers, efficient industrial complexes, cutting-edge healthcare
            facilities, and luxurious yet functional recreational spaces—each a
            testament to our ability to bring ideas to life. Our extensive
            portfolio is a testament to our commitment to excellence and
            innovation. From state-of-the-art commercial buildings to eco-friendly
            landscapes, every project highlights our ability to bring ideas to
            life.
          </p>
        </div>
      </div>

      {/* 3D COVERFLOW CAROUSEL FOR PROJECTS */}
      <div className="w-full">
        <CoverflowCarousel
          slides={ALFA_GULF_PROJECTS}
          cardWidth="clamp(220px, 25vw, 360px)"
          rotate={40}
          depth={0.65}
          perspective={2.8}
          gap={0.08}
          showCaption={false}
          showNavigation={true}
          showPagination={true}
          cardClassName="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 hover:ring-orange-500/40 transition-shadow duration-300"
        />
      </div>
    </section>
  );
}

export default ProjectsCoverflowSection;
