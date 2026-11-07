import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

interface HeroProps {
  onStartTransformation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTransformation }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    if (onStartTransformation) {
      onStartTransformation();
    } else {
      scrollToSection('quote');
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#F8F9FA] bg-dotted-pattern py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#E3E4E4] font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-6 z-10">

            {/* Main Headline */}
            <h1
              className="font-serif italic font-bold text-[#0F1A14] tracking-tight leading-[1.12] mb-6 text-balance"
              style={{ fontSize: '36px' }}
            >
              Everything Your Business Needs to Grow Online —{' '}
              <span className="relative inline-block text-[#254A34] underline decoration-[#C6FF1A] decoration-[4px] underline-offset-6">
                All Under One Roof.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p
              className="text-[#5F6B64] leading-relaxed max-w-xl mb-8"
              style={{
                fontFamily: 'Georgia',
                fontStyle: 'italic',
                fontSize: '12px',
              }}
            >
              From Website Development to Mobile Apps and Digital Marketing — We Build Your Complete Online Business Presence. CLINT BRIDGE provides complete, end-to-end digital solutions for ambitious businesses in Pakistan and international markets.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-sans">
              <button
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-sm font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 active:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A] cursor-pointer"
              >
                <span>Start Your Digital Transformation</span>
                <span
                  className="w-5 h-5 rounded-full text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1"
                  style={{ backgroundColor: '#c3d774' }}
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('work')}
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#0F1A14] hover:text-[#254A34] py-3 px-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#254A34] rounded cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#254A34] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Photo Collage & Rotating Badge */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative p-2 sm:p-4 transition-transform duration-200 ease-out"
              style={{
                perspective: '1000px',
                transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              }}
            >
              {/* Lime Sparkle Stars */}
              <div
                className="absolute -top-4 right-12 z-20 pointer-events-none text-[#C6FF1A] drop-shadow-sm select-none"
                aria-hidden="true"
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>

              <div
                className="absolute bottom-6 -left-4 z-20 pointer-events-none text-[#C6FF1A] drop-shadow-sm select-none"
                aria-hidden="true"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>

              {/* 4-Photo Collage */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 relative max-w-lg mx-auto">
                <div
                  className="rounded-3xl overflow-hidden bg-slate-200 shadow-md border-4 border-white transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: `translateZ(${mousePos.x * 20}px)`,
                  }}
                >
                  <img
                    src={getAssetUrl('images/hero-1.jpg')}
                    alt="CLINT BRIDGE engineering digital growth and mobile applications"
                    width="400"
                    height="500"
                    className="w-full h-56 sm:h-64 object-cover photo-grayscale"
                  />
                </div>

                <div
                  className="rounded-3xl overflow-hidden bg-slate-200 shadow-md border-4 border-white mt-4 transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: `translateZ(${-mousePos.x * 20}px)`,
                  }}
                >
                  <img
                    src={getAssetUrl('images/hero-2.jpg')}
                    alt="Creative designers architecting web and mobile UI"
                    width="400"
                    height="350"
                    className="w-full h-44 sm:h-52 object-cover photo-grayscale"
                  />
                </div>

                <div
                  className="rounded-3xl overflow-hidden bg-slate-200 shadow-md border-4 border-white -mt-4 transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: `translateZ(${-mousePos.y * 20}px)`,
                  }}
                >
                  <img
                    src={getAssetUrl('images/hero-3.jpg')}
                    alt="Conversion analytics and marketing performance optimization"
                    width="400"
                    height="350"
                    className="w-full h-44 sm:h-52 object-cover photo-grayscale"
                  />
                </div>

                <div
                  className="rounded-3xl overflow-hidden bg-slate-200 shadow-md border-4 border-white transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: `translateZ(${mousePos.y * 20}px)`,
                  }}
                >
                  <img
                    src={getAssetUrl('images/hero-4.jpg')}
                    alt="Digital strategy meeting reviewing mobile app deployment"
                    width="400"
                    height="500"
                    className="w-full h-56 sm:h-64 object-cover photo-grayscale"
                  />
                </div>

                {/* Overlapping Circular Rotating Badge: "Grow Online" */}
                <div
                  onClick={handleCtaClick}
                  className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1F3B2B] border-4 border-white shadow-xl flex items-center justify-center group hover:scale-105 transition-transform duration-200"
                  title="Click to start your transformation"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                    <path
                      id="circlePathHero"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text
                      fontSize="9.2"
                      fontWeight="bold"
                      fill="#FFFFFF"
                      letterSpacing="2.2"
                      className="uppercase"
                    >
                      <textPath href="#circlePathHero" startOffset="0%">
                        GROW ONLINE ★ CLINT BRIDGE ★ GROW ONLINE ★
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute w-10 h-10 rounded-full bg-[#C6FF1A] flex items-center justify-center text-[#0F1A14] shadow-sm transition-transform duration-200 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
