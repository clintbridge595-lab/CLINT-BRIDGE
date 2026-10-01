import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { pricingPlans } from '../data/pricing';

export const Pricing: React.FC = () => {
  const handleSelectPlan = (planName: string, whatsappMsg: string) => {
    const encoded = encodeURIComponent(whatsappMsg);
    window.open(`https://wa.me/923112713755?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-[#F3F3F3] border-b border-[#E3E4E4]"
      style={{
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Simple Packages. Clear Value."
          subtitle="Fixed transparent investments with no surprise hourly charges. High impact websites engineered for local and international growth."
          align="center"
          titleStyle={{
            fontFamily: 'Georgia',
            fontStyle: 'italic',
            fontSize: '39px',
            fontWeight: 'normal',
          }}
          subtitleStyle={{
            fontFamily: 'Times New Roman',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '13px',
          }}
        />

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isHighlight = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-[#254A34] text-white shadow-2xl border-2 border-[#C6FF1A] lg:-translate-y-3'
                    : 'bg-white text-[#0F1A14] shadow-sm border border-[#E3E4E4] hover:shadow-md'
                }`}
              >
                {/* Most Popular Badge on the highlighted card */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C6FF1A] text-[#0F1A14] text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3
                      className={`font-display text-2xl font-bold ${
                        isHighlight ? 'text-white' : 'text-[#0F1A14]'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                        isHighlight ? 'text-slate-200' : 'text-[#5F6B64]'
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-8 pb-8 border-b border-dashed border-[#E3E4E4]/40">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-sm font-bold uppercase tracking-wider ${
                          isHighlight ? 'text-[#C6FF1A]' : 'text-[#254A34]'
                        }`}
                      >
                        {plan.currency}
                      </span>
                      <span
                        className={`font-display text-4xl sm:text-5xl font-black tracking-tight ${
                          isHighlight ? 'text-white' : 'text-[#0F1A14]'
                        }`}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <span
                      className={`text-xs mt-1 block ${
                        isHighlight ? 'text-slate-300' : 'text-[#5F6B64]'
                      }`}
                    >
                      One-time transparent setup
                    </span>
                  </div>

                  {/* Feature Checklist with Lime Checkmarks */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#C6FF1A]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#C6FF1A] stroke-[3]" />
                        </div>
                        <span className={isHighlight ? 'text-slate-200' : 'text-[#0F1A14]'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Choose Plan CTA button */}
                <button
                  onClick={() => handleSelectPlan(plan.name, plan.whatsappMessage)}
                  className={`w-full group inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 ${
                    isHighlight
                      ? 'bg-[#C6FF1A] text-[#0F1A14] hover:bg-[#b8f014] focus-visible:ring-white'
                      : 'bg-[#254A34] text-white hover:bg-[#1F3B2B] focus-visible:ring-[#C6FF1A]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Scope / Enterprise Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#5F6B64]">
            Need custom backend features, hospital booking portals, or multi-branch logistics?{' '}
            <a
              href="https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20I%20have%20custom%20enterprise%20requirements%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#254A34] font-bold underline hover:text-[#1F3B2B]"
            >
              Chat directly with our team for a tailored proposal
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
