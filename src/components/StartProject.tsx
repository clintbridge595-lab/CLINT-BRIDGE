import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectBriefs } from '../data/briefs';

export const StartProject: React.FC = () => {
  return (
    <section
      className="bg-[#1F3B2B] text-white py-20 lg:py-24 border-b border-[#254A34]"
      style={{
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Laurel-Style Decorative Emblem */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative mb-6">
              {/* Laurel Wreath SVG Vector Badge */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#254A34] border-2 border-[#C6FF1A]/40 flex items-center justify-center p-4 shadow-inner">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#C6FF1A] fill-current"
                  aria-hidden="true"
                >
                  {/* Stylized Laurel Wreath Leaves */}
                  <g opacity="0.9">
                    <path d="M50 10 C45 25 35 30 25 35 C28 42 35 44 42 41 C35 50 25 55 18 65 C25 70 34 68 38 60 C32 70 25 80 28 90 C38 88 44 78 45 68 C48 78 52 88 62 90 C65 80 58 70 52 60 C56 68 65 70 72 65 C65 55 55 50 48 41 C55 44 62 42 65 35 C55 30 45 25 50 10 Z" />
                  </g>
                  {/* Center Star */}
                  <polygon
                    points="50,30 53,42 65,42 55,50 59,62 50,54 41,62 45,50 35,42 47,42"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
            </div>

            <h2
              className="font-display font-extrabold text-white tracking-tight leading-tight mb-4"
              style={{
                fontFamily: 'Georgia',
                fontSize: '37px',
                fontStyle: 'italic',
              }}
            >
              Start Your Project <br className="hidden sm:block" />
              the Right Way
            </h2>

            <p
              className="text-slate-300 leading-relaxed max-w-md"
              style={{
                fontFamily: 'Times New Roman',
                fontSize: '12px',
                fontStyle: 'italic',
              }}
            >
              A great digital product begins with structured clarity. Select the relevant questionnaire below to provide your brand background, target audience, and feature roadmap.
            </p>
          </div>

          {/* Right Column: List Rows with Thin Dividers and Round Grey Arrow Buttons */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#31503D] border-y border-[#31503D]">
              {projectBriefs.map((brief) => (
                <a
                  key={brief.id}
                  href={brief.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-6 px-4 sm:px-6 flex items-center justify-between gap-6 hover:bg-[#254A34]/50 transition-colors duration-200 rounded-xl"
                >
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#C6FF1A] transition-colors leading-snug">
                      {brief.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg leading-relaxed">
                      {brief.description}
                    </p>
                  </div>

                  {/* Round Grey Arrow Button */}
                  <div className="w-11 h-11 rounded-full bg-[#31503D] text-slate-300 group-hover:bg-[#C6FF1A] group-hover:text-[#0F1A14] shrink-0 flex items-center justify-center transition-all duration-200 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
