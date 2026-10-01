import React from 'react';
import { Smartphone, PackageCheck, MessageCircle, BarChart3 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      desc: 'Over 85% of traffic in Pakistan originates on mobile phones. Every layout, button, and font size is optimized for handheld screens.',
    },
    {
      icon: PackageCheck,
      title: 'Clear Packages',
      desc: 'Transparent pricing upfront with clearly documented deliverables. No hidden hourly creep, surprise invoices, or scope ambiguity.',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp-First Support',
      desc: 'Direct communication with our 4-person team on WhatsApp. Immediate responses, voice notes, and quick revisions when you need them.',
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting',
      desc: 'Real Google Analytics, search console metrics, and ad spend verification. Honest growth reporting without fabricated statistics.',
    },
  ];

  return (
    <section
      className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4] overflow-hidden"
      style={{
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Why Our Clients Believe We're Different"
          subtitle="We eliminate the friction of dealing with disengaged contractors by acting as your dedicated local growth engineers."
          align="center"
          titleStyle={{
            fontFamily: 'Georgia',
            fontSize: '38px',
          }}
          subtitleStyle={{
            fontSize: '16px',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo collage + Lime half-circle with squiggle + sparkle star */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              {/* Lime Sparkle Star top right */}
              <div
                className="absolute -top-4 -right-2 z-20 pointer-events-none text-[#C6FF1A] drop-shadow-sm select-none"
                aria-hidden="true"
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>

              {/* Photo 1: Upper card */}
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-100 w-4/5">
                <img
                  src="/images/why-1.jpg"
                  alt="Client Bridge engineering workstation"
                  width="400"
                  height="300"
                  className="w-full h-56 sm:h-64 object-cover photo-grayscale"
                  loading="lazy"
                />
              </div>

              {/* Graphic element: Lime half-circle with black squiggle line */}
              <div
                className="absolute top-1/3 -right-6 z-10 w-28 h-28 rounded-full bg-[#C6FF1A] border-4 border-white shadow-md flex items-center justify-center p-4 overflow-hidden"
                aria-hidden="true"
              >
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <path
                    d="M 5,20 Q 15,5 25,20 T 45,20 T 55,20"
                    stroke="#0F1A14"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Photo 2: Offset bottom card */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 w-4/5 ml-auto -mt-12 relative z-0">
                <img
                  src="/images/why-2.jpg"
                  alt="Client Bridge team alignment meeting"
                  width="400"
                  height="300"
                  className="w-full h-56 sm:h-64 object-cover photo-grayscale"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Dark-Green Grid of Feature Tiles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                const containerStyle: React.CSSProperties =
                  index === 0
                    ? { fontFamily: 'Georgia', fontStyle: 'italic' }
                    : {};

                const titleStyle: React.CSSProperties =
                  index === 0 || index === 1
                    ? { fontSize: '22px' }
                    : { fontFamily: 'Georgia', fontSize: '21px' };

                const descStyle: React.CSSProperties =
                  index === 0 || index === 1
                    ? { fontSize: '12px' }
                    : { fontSize: '13px' };

                return (
                  <div
                    key={index}
                    className="bg-[#254A34] text-white p-6 sm:p-7 rounded-3xl border border-[#31503D] shadow-sm hover:border-[#C6FF1A]/60 transition-all duration-200 flex flex-col justify-between"
                    style={containerStyle}
                  >
                    <div>
                      {/* Lime circular icon container */}
                      <div className="w-12 h-12 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center mb-5 shadow-sm">
                        <IconComponent className="w-6 h-6 stroke-[2.2]" />
                      </div>

                      <h3
                        className="font-display font-bold text-white mb-2.5"
                        style={titleStyle}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-slate-200 leading-relaxed"
                        style={descStyle}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
