import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover & Strategize',
      subtitle: 'Days 1–2',
      description:
        'We analyze your target audience, existing competitors in your industry, and core conversion goals to create a high-impact roadmap.',
      actionText: 'Get Free Quote',
      actionUrl: '#quote',
      deliverables: ['Competitor research', 'Sitemap & UX architecture', 'Content requirements'],
    },
    {
      num: '02',
      title: 'Design & Engineering',
      subtitle: 'Days 3–6',
      description:
        'We craft custom responsive UI wireframes, integrate fast interactive touchpoints, configure WhatsApp lead funnels, and write clean React code.',
      actionText: 'View Sample Projects',
      actionUrl: '#work',
      deliverables: ['Custom responsive UI', 'Mobile conversion hooks', 'WhatsApp lead routing'],
    },
    {
      num: '03',
      title: 'Launch & Optimize',
      subtitle: 'Day 7 onwards',
      description:
        'Staging review, final QA testing on mobile devices, Google Business and SEO integration, and smooth deployment to high-speed cloud hosting.',
      actionText: 'Choose Package',
      actionUrl: '#pricing',
      deliverables: ['Domain & SSL setup', 'Google Search Console', 'Fast cloud hosting'],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-[#E3E4E4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#254A34] mb-2 block">
              Our Methodology
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1A14] tracking-tight leading-[1.15]">
              Step-by-Step to <br className="hidden sm:block" />
              Measurable Growth
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#5F6B64] leading-relaxed">
              We eliminate endless agency delays with a transparent 3-step production pipeline. From initial project questionnaire to public live launch, you have direct WhatsApp visibility and daily progress checkpoints.
            </p>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl overflow-hidden shadow-xs border border-[#E3E4E4] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group p-8"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif italic text-3xl font-extrabold text-[#254A34]">
                      {step.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#254A34] bg-[#C6FF1A]/40 px-3 py-1 rounded-full">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif italic text-2xl font-bold text-[#0F1A14] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F6B64] leading-relaxed mb-6 font-sans">
                    {step.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#254A34] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E3E4E4]">
                  <a
                    href={step.actionUrl}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#254A34] hover:text-[#1F3B2B] uppercase tracking-wider group-hover:underline"
                  >
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
