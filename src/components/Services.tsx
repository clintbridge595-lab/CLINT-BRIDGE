import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { featuredServices, secondaryServices, ServiceItem } from '../data/services';
import { getAssetUrl } from '../utils/asset';

export const Services: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('social-media'); // Default lime center card

  const handleLearnMore = (serviceTitle: string) => {
    const encoded = encodeURIComponent(`Hi Client Bridge, I would like to inquire about ${serviceTitle}.`);
    window.open(`https://wa.me/923112713755?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="services"
      className="relative bg-[#254A34] text-white py-20 lg:py-28 overflow-hidden"
      style={{
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      {/* Subtle diagonal stripe border pattern at top */}
      <div
        className="absolute top-0 inset-x-0 h-2 bg-repeat-x opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #C6FF1A, #C6FF1A 10px, transparent 10px, transparent 20px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Top-Right Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2
              className="font-display font-extrabold text-white tracking-tight leading-[1.15]"
              style={{
                fontFamily: 'Georgia',
                fontSize: '35px',
              }}
            >
              Boost Your Brand with Our Expertise
            </h2>
          </div>

          <a
            href="https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20please%20send%20me%20your%20full%20services%20deck."
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto group inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0F1A14] text-xs sm:text-sm font-bold py-3 px-6 rounded-full shadow-sm transition-all duration-200"
          >
            <span>View All Services</span>
            <span className="w-5 h-5 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </a>
        </div>

        {/* Primary Row: 3 Big Cards matching reference video */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => {
            const isHighlight = activeCardId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardId(service.id)}
                className={`group relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isHighlight
                    ? 'bg-[#C6FF1A] text-[#0F1A14] border-[#C6FF1A] shadow-xl scale-[1.02] -translate-y-1'
                    : 'bg-[#31503D] text-white border-[#3F634E] hover:border-[#C6FF1A]/50 shadow-md'
                }`}
              >
                {/* Photo placement: For lime card, photo is at bottom; for side cards, photo is on top */}
                {!isHighlight && (
                  <div className="rounded-2xl overflow-hidden mb-6 h-52 bg-slate-900/40">
                    <img
                      src={getAssetUrl(service.image)}
                      alt={service.title}
                      width="400"
                      height="240"
                      className="w-full h-full object-cover photo-grayscale group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div>
                  <span
                    className={`text-xs uppercase font-extrabold tracking-wider ${
                      isHighlight ? 'text-[#254A34]' : 'text-[#C6FF1A]'
                    }`}
                  >
                    {service.category}
                  </span>
                  <h3
                    className={`font-display text-2xl font-bold mt-2 mb-3 leading-snug ${
                      isHighlight ? 'text-[#0F1A14]' : 'text-white'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isHighlight ? 'text-[#1F2421]/80 font-medium' : 'text-slate-300'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <ul className="space-y-2 mb-6 text-xs font-semibold">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            isHighlight ? 'text-[#254A34]' : 'text-[#C6FF1A]'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For lime highlighted card: Photo at bottom as shown in video */}
                {isHighlight && (
                  <div className="rounded-2xl overflow-hidden mb-6 h-48 bg-slate-900/40 shadow-inner">
                    <img
                      src={getAssetUrl(service.image)}
                      alt={service.title}
                      width="400"
                      height="240"
                      className="w-full h-full object-cover photo-grayscale group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleLearnMore(service.title)}
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                      isHighlight
                        ? 'text-[#0F1A14] hover:text-[#254A34]'
                        : 'text-[#C6FF1A] hover:text-white'
                    }`}
                  >
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Row: 5 Smaller Cards */}
        <div className="pt-6 border-t border-[#31503D]">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#C6FF1A] mb-6">
            Complementary Growth Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {secondaryServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleLearnMore(service.title)}
                className="group bg-[#1F3B2B] hover:bg-[#31503D] p-5 rounded-2xl border border-[#31503D] hover:border-[#C6FF1A]/50 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#254A34] text-[#C6FF1A] flex items-center justify-center mb-3 group-hover:bg-[#C6FF1A] group-hover:text-[#0F1A14] transition-colors">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-[#C6FF1A] mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inquire <span>→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle diagonal stripe border pattern at bottom */}
      <div
        className="absolute bottom-0 inset-x-0 h-2 bg-repeat-x opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #C6FF1A, #C6FF1A 10px, transparent 10px, transparent 20px)',
        }}
        aria-hidden="true"
      />
    </section>
  );
};
