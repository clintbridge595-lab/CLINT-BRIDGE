import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const progressBars = [
    { label: 'Website Design & Development', percentage: 90 },
    { label: 'Branding & Creativity', percentage: 85 },
    { label: 'Digital Marketing & SEO', percentage: 80 },
  ];

  const handleConsultation = () => {
    window.open(
      'https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20I%20would%20like%20to%20discuss%20a%20project%20with%20your%20team.',
      '_blank'
    );
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <SectionHeader
          title="Empowering Your Success with Digital Expertise"
          subtitle="We are a focused digital team in Karachi dedicated to crafting web solutions that solve business problems and generate genuine revenue."
          align="center"
          titleStyle={{
            fontFamily: 'Georgia',
            fontStyle: 'italic',
            fontSize: '38px',
          }}
          subtitleStyle={{
            fontFamily: 'Times New Roman',
            fontSize: '16px',
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
                  src="/images/about-1.jpg"
                  alt="Client Bridge team strategizing responsive web interface"
                  width="500"
                  height="380"
                  className="w-full h-64 sm:h-72 object-cover photo-grayscale"
                  loading="lazy"
                />
              </div>

              {/* Photo 2: Offset Bottom Right Rounded Rectangle */}
              <div className="w-4/5 ml-auto -mt-16 sm:-mt-20 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative z-10">
                <img
                  src="/images/about-2.jpg"
                  alt="Client Bridge developers executing high performance web code"
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
                    fontSize="9.5"
                    fontWeight="800"
                    fill="#0F1A14"
                    letterSpacing="2.2"
                    className="uppercase"
                  >
                    <textPath href="#aboutBadgePath" startOffset="0%">
                      CLIENT BRIDGE ★ SINCE 2026 ★
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-7 h-7 rounded-full bg-[#254A34] flex items-center justify-center text-[#C6FF1A]">
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative + Progress Bars + Pill CTA */}
          <div
            className="lg:col-span-6"
            style={{
              fontFamily: 'Georgia',
              fontStyle: 'italic',
            }}
          >
            <h3
              className="font-display text-2xl sm:text-3xl font-bold text-[#0F1A14] leading-snug mb-4"
              style={{
                fontFamily: 'Times New Roman',
                fontStyle: 'italic',
                fontSize: '31px',
              }}
            >
              Real Craftsmanship. Truthful Deliverables.
            </h3>
            <p
              className="text-[#5F6B64] text-base leading-relaxed mb-8"
              style={{
                fontFamily: 'Georgia',
                fontStyle: 'italic',
                fontSize: '13px',
              }}
            >
              Client Bridge is not an anonymous freelancer aggregator. We are an in-house 4-person multidisciplinary agency based in Malir 15 Flyover, Pakistan. We bridge the gap between creative visual excellence and tangible client acquisition for clinics, restaurants, car rentals, salons, and e-commerce brands.
            </p>

            {/* Three Progress Bars with Lime Circular Handles */}
            <div className="space-y-6 mb-10">
              {progressBars.map((bar, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center text-sm font-bold text-[#0F1A14] mb-2">
                    <span>{bar.label}</span>
                    <span className="font-mono text-[#254A34]">{bar.percentage}%</span>
                  </div>
                  {/* Track */}
                  <div className="relative h-2.5 bg-slate-100 rounded-full overflow-visible">
                    {/* Fill Bar */}
                    <div
                      className="h-full bg-[#254A34] rounded-full transition-all duration-1000 ease-out relative"
                      style={{
                        width: isVisible ? `${bar.percentage}%` : '0%',
                      }}
                    >
                      {/* Lime Circular Handle at the end */}
                      <span className="absolute -right-2 -top-1.5 w-5 h-5 rounded-full bg-[#C6FF1A] border-2 border-[#254A34] shadow-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dark Pill "About Us ->" Button */}
            <button
              onClick={handleConsultation}
              className="group inline-flex items-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-sm font-semibold py-3.5 px-7 rounded-full shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A]"
            >
              <span>About Our Agency</span>
              <span className="w-5 h-5 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
