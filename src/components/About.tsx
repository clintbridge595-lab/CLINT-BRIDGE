import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { getAssetUrl } from '../utils/asset';

export const About: React.FC = () => {
  const handleConsultation = () => {
    window.open(
      'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20would%20like%20to%20discuss%20a%20project%20with%20your%20team.',
      '_blank'
    );
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <SectionHeader
          title="Empowering Your Success with Digital Expertise"
          subtitle="CLINT BRIDGE is a focused digital agency based in Karachi, Pakistan, dedicated to crafting web solutions that solve business problems and generate genuine revenue."
          align="center"
          titleStyle={{ fontSize: '39px' }}
          subtitleStyle={{
            fontFamily: 'Georgia',
            fontStyle: 'italic',
            fontSize: '13px',
          }}
        />

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Two Grayscale Photos with Overlapping Rotating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-md mx-auto">
              {/* Photo 1: Top Left Rounded Rectangle */}
              <div className="w-4/5 rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
                <img
                  src={getAssetUrl('images/about-1.jpg')}
                  alt="CLINT BRIDGE team strategizing responsive web interface"
                  width="500"
                  height="380"
                  className="w-full h-64 sm:h-72 object-cover photo-grayscale"
                  loading="lazy"
                />
              </div>

              {/* Photo 2: Offset Bottom Right Rounded Rectangle */}
              <div className="w-4/5 ml-auto -mt-16 sm:-mt-20 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative z-10">
                <img
                  src={getAssetUrl('images/about-2.jpg')}
                  alt="CLINT BRIDGE developers executing high performance web code"
                  width="500"
                  height="380"
                  className="w-full h-64 sm:h-72 object-cover photo-grayscale"
                  loading="lazy"
                />
              </div>

              {/* Small Rotating Circular Lime Badge Overlapping Between Them */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 rounded-full bg-[#C6FF1A] border-4 border-white shadow-lg flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <path
                    id="aboutBadgePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text
                    fontSize="9"
                    fontWeight="800"
                    fill="#0F1A14"
                    letterSpacing="2.2"
                    className="uppercase font-sans"
                  >
                    <textPath href="#aboutBadgePath" startOffset="0%">
                      CLINT BRIDGE ★ EST. 2026 ★
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-7 h-7 rounded-full bg-[#254A34] flex items-center justify-center text-[#C6FF1A]">
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative + Pill CTA */}
          <div className="lg:col-span-6 font-sans">
            <h3 className="font-serif italic font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F1A14] leading-snug mb-4">
              Real Craftsmanship. Truthful Deliverables.
            </h3>
            <p
              className="text-[#5F6B64] leading-relaxed mb-8"
              style={{
                fontStyle: 'italic',
                fontSize: '12px',
              }}
            >
              CLINT BRIDGE is not an anonymous freelancer aggregator. We are an in-house multidisciplinary agency based in Karachi, Pakistan. We bring together custom website development, Android mobile apps, complete branding, digital advertising, and automated WhatsApp funnels under one roof for growing businesses in Pakistan and international markets.
            </p>

            {/* Dark Pill "Consult on WhatsApp" Button */}
            <button
              onClick={handleConsultation}
              className="group inline-flex items-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-sm font-semibold py-3.5 px-7 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 active:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A] cursor-pointer"
            >
              <span>Consult With Our Team</span>
              <span
                className="w-5 h-5 rounded-full text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1"
                style={{ backgroundColor: '#749512' }}
              >
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
