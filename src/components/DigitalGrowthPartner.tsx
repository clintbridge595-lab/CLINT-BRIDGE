import React from 'react';
import {
  Globe,
  Smartphone,
  Palette,
  Share2,
  Target,
  Search,
  MessageSquare,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface DigitalGrowthPartnerProps {
  onStartTransformation: (packageName?: string) => void;
}

export const DigitalGrowthPartner: React.FC<DigitalGrowthPartnerProps> = ({
  onStartTransformation,
}) => {
  const pillars = [
    {
      icon: Globe,
      number: '01',
      title: 'High-Performance Websites',
      subtitle: 'Up to 8 Custom Pages',
      desc: 'Bespoke React engineering, lightning-fast Core Web Vitals, mobile-first UX, and high-converting lead capture funnels.',
      tags: ['React Architecture', 'Speed Optimized', 'Mobile First'],
    },
    {
      icon: Smartphone,
      number: '02',
      title: 'Android Mobile Apps',
      subtitle: 'Native MVP Experience',
      desc: 'Custom Android application built for your business workflows, client retention, and direct handheld engagement.',
      tags: ['Android MVP', 'API Integration', 'Play Store Readiness'],
    },
    {
      icon: Palette,
      number: '03',
      title: 'Strategic Brand Identity',
      subtitle: 'Complete Visual Language',
      desc: 'Distinctive vector logo design, custom color palettes, font hierarchy, and comprehensive brand guideline assets.',
      tags: ['Logo Design', 'Brand Guidelines', 'Social Media Kit'],
    },
    {
      icon: Share2,
      number: '04',
      title: 'Social Media Execution',
      subtitle: '12 Posts + 4 Reels',
      desc: 'Professional multi-platform content production, creative graphic design, short-form video reels, and monthly strategy.',
      tags: ['Content Calendar', 'Viral Reels', 'Active Management'],
    },
    {
      icon: Target,
      number: '05',
      title: 'Paid Digital Advertising',
      subtitle: 'Meta & Google Funnels',
      desc: 'Laser-targeted customer acquisition campaigns designed to generate measurable, qualified sales leads with proven ROAS.',
      tags: ['Meta Ads', 'Audience Research', 'Lead Generation'],
    },
    {
      icon: Search,
      number: '06',
      title: 'Search & Maps SEO',
      subtitle: 'Organic Market Dominance',
      desc: 'On-page technical SEO paired with Google Business Profile Maps optimization to capture active local buyers.',
      tags: ['Google Maps 3-Pack', 'Technical SEO', 'Keyword Growth'],
    },
    {
      icon: MessageSquare,
      number: '07',
      title: 'WhatsApp Automation',
      subtitle: 'Direct Sales Routing',
      desc: 'WhatsApp Business catalog setup, prefilled enquiry funnels, and automated response scripts for instant conversion.',
      tags: ['Catalog Setup', 'Instant Routing', 'Zero Dropoff'],
    },
    {
      icon: BarChart3,
      number: '08',
      title: 'Analytics & Dedicated QA',
      subtitle: '30-Day Support Period',
      desc: 'Google Analytics 4 setup, event tracking, real-time conversion monitoring, and 30-day post-launch technical assistance.',
      tags: ['GA4 Tracking', 'Transparent ROI', 'Direct Support'],
    },
  ];

  return (
    <section
      id="growth-partner"
      className="py-20 lg:py-28 bg-[#1F3B2B] text-white border-b border-[#254A34] relative overflow-hidden font-sans"
    >
      {/* Subtle background ambient gradients */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#254A34]/60 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C6FF1A]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F9FA] tracking-tight leading-[1.14] mb-6 text-balance">
            Everything Your Business Needs to Grow Online —{' '}
            <span className="text-[#C6FF1A]">All Under One Roof.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans text-balance">
            From Website Development to Mobile Apps and Digital Marketing — We Build Your Complete Online Business Presence. Eliminate fragmented contractors and manage your entire digital ecosystem with a single dedicated team in Karachi.
          </p>
        </div>

        {/* 8 Connected Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#254A34]/70 hover:bg-[#254A34] border border-[#31503D] hover:border-[#C6FF1A]/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F3B2B] border border-[#31503D] text-[#C6FF1A] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#C6FF1A] group-hover:text-[#0F1A14] transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="font-serif italic text-xs font-bold text-slate-400 group-hover:text-[#C6FF1A] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif italic text-xl font-bold text-white mb-1 group-hover:text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#C6FF1A] mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium bg-[#1F3B2B] text-slate-300 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Conversion Banner calling the Flagship Package */}
        <div className="bg-[#162C1F] border-2 border-[#C6FF1A]/60 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#0F1A14] bg-[#C6FF1A] px-3.5 py-1 rounded-full mb-3 shadow-xs">
                Turnkey Agency Flagship
              </span>
              <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
                Complete Digital Growth Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mb-4">
                Get a custom 8-page website, an Android mobile app MVP, full corporate branding, Meta ad campaigns, 12 social media posts + 4 video reels, Google Business SEO, and WhatsApp automation configured and managed under one comprehensive contract.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6FF1A]" />
                  <span>Fixed Investment: PKR 200,000</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6FF1A]" />
                  <span>Timeline: 25–35 Business Days</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6FF1A]" />
                  <span>Dedicated Karachi Team</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                onClick={() =>
                  onStartTransformation('Complete Digital Growth Flagship (PKR 200,000)')
                }
                className="group inline-flex items-center gap-3 bg-[#C6FF1A] hover:bg-[#b8f014] text-[#0F1A14] font-extrabold text-sm sm:text-base py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Start Your Digital Transformation</span>
                <span className="w-6 h-6 rounded-full bg-[#0F1A14] text-[#C6FF1A] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
              </button>
              <span className="text-[11px] text-slate-400 mt-2 font-medium">
                Direct WhatsApp consultation & fixed quote
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
