import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
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

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#F3F3F3] bg-dotted-pattern py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#E3E4E4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-6 z-10">
            {/* H1 Heading */}
            <h1
              className="font-display font-black text-[#0F1A14] tracking-tight leading-[1.08] mb-6"
              style={{
                fontFamily: 'Georgia',
                fontStyle: 'italic',
                fontSize: '49px',
              }}
            >
              Empowering <br />
              Your Success with <br />
              <span
                className="underline decoration-[#C6FF1A] decoration-4 underline-offset-4"
                style={{
                  color: '#234339',
                }}
              >
                Digital Expertise
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p
              className="text-base sm:text-lg text-[#5F6B64] leading-relaxed max-w-xl mb-8"
              style={{
                fontFamily: 'Times New Roman',
                fontStyle: 'italic',
                fontSize: '15px',
              }}
            >
              Clint Bridge builds fast, beautiful websites and smart digital marketing for growing businesses across Pakistan.
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 sm:gap-6"
              style={{
                fontFamily: 'Georgia',
                fontStyle: 'italic',
              }}
            >
              <button
                onClick={() => scrollToSection('services')}
                className="group inline-flex items-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-sm font-semibold py-3.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A]"
              >
                <span>Explore More</span>
                <span
                  className="w-5 h-5 rounded-full text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1"
                  style={{
                    backgroundColor: '#f2e7e7',
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#0F1A14] hover:text-[#254A34] py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#254A34] rounded"
              >
                <span>View All Services</span>
                <ArrowUpRight className="w-4 h-4 text-[#254A34] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Photo Collage & Rotating Badge */}
          <div className="lg:col-span-6 relative">
            {/* 3D Container with subtle perspective */}
            <div
              className="relative p-2 sm:p-4 transition-transform duration-200 ease-out"
              style={{
                perspective: '1000px',
                transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              }}
            >
              {/* Four-Point Lime Sparkle Stars matching video */}
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

              {/* The 4-photo collage matching the video */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 relative max-w-lg mx-auto">
                {/* Tile 1: Tall Left Photo */}
                <div
                  className="rounded-3xl overflow-hidden bg-slate-200 shadow-md border-4 border-white transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: `translateZ(${mousePos.x * 20}px)`,
                  }}
                >
                  <img
                    src="./images/hero-1.jpg"
                    alt="Creative agency team planning digital marketing strategy"
                    width="400"
                    height="500"
                    className="w-full h-56 sm:h-64 object-cover photo-grayscale"
                  />
                </div>

                {/* Tile 2: Shorter Top Right Photo */}
                <div
                  className="rounded-3xl overflow-hidden bg-slate-200 shadow-md border-4 border-white mt-4 transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: `translateZ(${-mousePos.x * 20}px)`,
                  }}
                >
                  <img
                    src="./images/hero-2.jpg"
                    alt="Digital designers collaborating on website architecture"
                    width="400"
                    height="350"
                    className="w-full h-44 sm:h-52 object-cover photo-grayscale"
                  />
                </div>

                {/* Tile 3: Shorter Bottom Left Photo */}
                <div
                  className="rounded-3xl overflow-hidden bg-slate-200 shadow-md border-4 border-white -mt-4 transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: `translateZ(${-mousePos.y * 20}px)`,
                  }}
                >
                  <img
                    src="./images/hero-3.jpg"
                    alt="Professional workstation reviewing client conversion analytics"
                    width="400"
                    height="350"
                    className="w-full h-44 sm:h-52 object-cover photo-grayscale"
                  />
                </div>

                {/* Tile 4: Tall Right Photo */}
                <div
                  className="rounded-3xl overflow-hidden bg-slate-200 shadow-md border-4 border-white transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: `translateZ(${mousePos.y * 20}px)`,
                  }}
                >
                  <img
                    src="./images/hero-4.jpg"
                    alt="Agency strategist presenting digital brand growth"
                    width="400"
                    height="500"
                    className="w-full h-56 sm:h-64 object-cover photo-grayscale"
                  />
                </div>

                {/* Overlapping Circular Rotating Badge: "Hire Us Now" */}
                <div
                  onClick={() => scrollToSection('quote')}
                  className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1F3B2B] border-4 border-white shadow-xl flex items-center justify-center group hover:scale-105 transition-transform duration-200"
                  title="Click to hire us now"
                >
                  {/* Rotating SVG Circular Text */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-spin-slow"
                  >
                    <path
                      id="circlePath"
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
                      <textPath href="#circlePath" startOffset="0%">
                        HIRE US NOW ★ HIRE US NOW ★ HIRE US NOW ★
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Lime Arrow */}
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
