import React from 'react';
import { ArrowRight, FileText, Palette, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover & Strategize',
      icon: FileText,
      description:
        'Client fills our structured brief form. We analyze your customer demographics, existing competitors in Karachi, and core conversion goals.',
      actionText: 'Fill Website Brief',
      actionUrl: 'https://forms.gle/eUynYqzZziPvoqZz6',
    },
    {
      num: '02',
      title: 'Design & Build',
      icon: Palette,
      description:
        'We craft custom UI/UX wireframes, integrate subtle 3D touches, configure WhatsApp lead hooks, and write fast, responsive React code.',
      actionText: 'View Sample Projects',
      actionUrl: '#work',
    },
    {
      num: '03',
      title: 'Launch & Grow',
      icon: Rocket,
      description:
        'Staging review, final QA testing on mobile devices, Google Business and SEO integration, and launch on our reliable cloud hosting.',
      actionText: 'Choose Package',
      actionUrl: '#pricing',
    },
  ];

  return (
    <section
      className="py-20 lg:py-28 bg-[#F3F3F3] border-b border-[#E3E4E4]"
      style={{
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header Split: Left Heading, Right Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <h2
              className="font-display font-extrabold text-[#0F1A14] tracking-tight leading-[1.12]"
              style={{
                fontFamily: 'Georgia',
                fontSize: '37px',
              }}
            >
              Step-by-Step to <br className="hidden sm:block" />
              Your Growth
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p
              className="text-[#5F6B64] leading-relaxed"
              style={{
                fontFamily: 'Times New Roman',
                fontSize: '16px',
              }}
            >
              We eliminate endless guesswork with a lean 3-step production pipeline. From initial brief questionnaire to live production launch, you have direct WhatsApp visibility every single day.
            </p>
          </div>
        </div>

        {/* 3 White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E3E4E4] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Upper Body */}
                <div className="p-8 sm:p-9 relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7EF] border border-[#E3E4E4] text-[#254A34] flex items-center justify-center mb-6 group-hover:bg-[#254A34] group-hover:text-[#C6FF1A] transition-colors">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#0F1A14] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#5F6B64] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <a
                    href={step.actionUrl}
                    target={step.actionUrl.startsWith('http') ? '_blank' : '_self'}
                    rel={step.actionUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#254A34] hover:text-[#1F3B2B] uppercase tracking-wider group-hover:underline"
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
