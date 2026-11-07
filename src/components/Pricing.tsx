import React from 'react';
import {
  Check,
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Info,
  Globe,
  Smartphone,
  Palette,
  Share2,
  Target,
  Search,
  MessageSquare,
  BarChart3,
  ExternalLink,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { pricingPlans, flagshipPackage, FlagshipDeliverableModule } from '../data/pricing';

interface PricingProps {
  onSelectPlan?: (planName: string, budget?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const handleSelectPlan = (planName: string, whatsappMsg: string, budget?: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName, budget);
    } else {
      const encoded = encodeURIComponent(whatsappMsg);
      window.open(`https://wa.me/923112713755?text=${encoded}`, '_blank');
    }
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-4 h-4 text-[#C6FF1A]" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-[#C6FF1A]" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-[#C6FF1A]" />;
      case 'Share2':
        return <Share2 className="w-4 h-4 text-[#C6FF1A]" />;
      case 'Target':
        return <Target className="w-4 h-4 text-[#C6FF1A]" />;
      case 'Search':
        return <Search className="w-4 h-4 text-[#C6FF1A]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-4 h-4 text-[#C6FF1A]" />;
      case 'BarChart':
        return <BarChart3 className="w-4 h-4 text-[#C6FF1A]" />;
      default:
        return <Check className="w-4 h-4 text-[#C6FF1A]" />;
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#1B3626] text-white border-b border-[#254A34] font-sans relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#254A34]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#C6FF1A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#254A34] border border-[#31503D] px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF1A]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6FF1A]">
              Transparent Agency Investments
            </span>
          </div>

          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F9FA] tracking-tight leading-[1.15] mb-4 text-balance">
            Predictable Pricing. Complete Business Outcomes.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans text-balance">
            From our comprehensive flagship digital transformation package to focused web engineering plans, every investment comes with zero hidden hourly fees and 100% intellectual property ownership.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* [A] PREMIUM FLAGSHIP PACKAGE: COMPLETE DIGITAL GROWTH (PKR 200,000)   */}
        {/* ==================================================================== */}
        <div className="mb-20">
          <div className="bg-[#162C1F] border-2 border-[#C6FF1A] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Top Badge Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="bg-[#C6FF1A] text-[#0F1A14] text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm">
                  ★ Flagship Solution
                </span>
                <span className="text-xs font-semibold text-slate-300 hidden sm:inline-block">
                  All Under One Roof
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#254A34] text-slate-200 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#C6FF1A]" />
                <span>Estimated Timeline: {flagshipPackage.timeline}</span>
              </div>
            </div>

            {/* Title & Price Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-8 border-b border-white/10">
              <div className="lg:col-span-7">
                <h3 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F9FA] tracking-tight mb-3">
                  {flagshipPackage.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
                  {flagshipPackage.description}
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col lg:items-end justify-start">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold uppercase tracking-wider text-[#C6FF1A]">
                    {flagshipPackage.currency}
                  </span>
                  <span className="font-sans text-5xl sm:text-6xl font-black text-white tracking-tight tabular-nums">
                    {flagshipPackage.price}
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  {flagshipPackage.billingType} · Fixed Contract
                </div>

                {/* Primary CTA */}
                <button
                  onClick={() =>
                    handleSelectPlan(
                      'Complete Digital Growth Flagship (PKR 200,000)',
                      flagshipPackage.whatsappMessage,
                      'PKR 200,000 (Complete Digital Growth)'
                    )
                  }
                  className="mt-6 group inline-flex items-center gap-3 bg-[#C6FF1A] hover:bg-[#b8f014] text-[#0F1A14] text-sm sm:text-base font-extrabold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer w-full sm:w-auto justify-center"
                >
                  <span>{flagshipPackage.ctaText}</span>
                  <span className="w-6 h-6 rounded-full bg-[#0F1A14] text-[#C6FF1A] flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                </button>
              </div>
            </div>

            {/* Deliverables Breakdown: 8 Distinct Modules */}
            <div className="py-10">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-serif italic text-xl sm:text-2xl font-bold text-white">
                  Package Deliverables & Inclusions
                </h4>
                <span className="text-xs font-semibold text-[#C6FF1A] bg-[#254A34] px-3 py-1 rounded-full border border-[#31503D]">
                  8 Integrated Disciplines
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {flagshipPackage.deliverables.map((module: FlagshipDeliverableModule, mIdx: number) => (
                  <div
                    key={mIdx}
                    className="bg-[#1F3B2B] border border-[#254A34] rounded-2xl p-5 hover:border-[#C6FF1A]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-white/10">
                        <div className="w-8 h-8 rounded-xl bg-[#254A34] flex items-center justify-center shrink-0">
                          {getModuleIcon(module.iconName)}
                        </div>
                        <h5 className="font-serif italic text-sm font-bold text-white leading-tight">
                          {module.title}
                        </h5>
                      </div>

                      <ul className="space-y-2">
                        {module.items.map((item: string, iIdx: number) => (
                          <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                            <Check className="w-3.5 h-3.5 text-[#C6FF1A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Pricing Conditions Box */}
            <div className="bg-[#14261B] border border-white/10 rounded-2xl p-6 lg:p-7">
              <div className="flex items-center gap-2 mb-3 text-[#C6FF1A]">
                <Info className="w-4 h-4 shrink-0" />
                <h5 className="font-sans text-xs font-bold uppercase tracking-wider">
                  Important Pricing & Scope Conditions
                </h5>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 leading-relaxed font-sans">
                {flagshipPackage.conditions.map((cond: string, cIdx: number) => (
                  <div key={cIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF1A] shrink-0 mt-1.5" />
                    <span>{cond}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* [B] STANDALONE WEB PACKAGES: STARTER, BUSINESS, GROWTH PARTNER       */}
        {/* ==================================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-white mb-2">
              Focused Web & Marketing Packages
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Need a dedicated website or focused lead engine without mobile app development? Choose from our transparent single-focus packages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => {
              const isHighlight = plan.isPopular;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                    isHighlight
                      ? 'bg-[#254A34] text-white shadow-2xl border-2 border-[#C6FF1A] lg:-translate-y-2'
                      : 'bg-[#1F3B2B] text-white shadow-sm border border-[#254A34] hover:border-slate-400'
                  }`}
                >
                  {isHighlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C6FF1A] text-[#0F1A14] text-[11px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-sm">
                      Most Popular Web Plan
                    </div>
                  )}

                  <div>
                    <div className="mb-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-serif italic text-2xl font-bold text-white">
                          {plan.name}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-200">
                          <Clock className="w-3 h-3" />
                          <span>{plan.timeline}</span>
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="mb-6 pb-6 border-b border-dashed border-white/20">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C6FF1A]">
                          {plan.currency}
                        </span>
                        <span className="font-sans text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                          {plan.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C6FF1A]" />
                        <span className="text-xs font-medium text-slate-300">
                          {plan.billingType} · Zero Hidden Fees
                        </span>
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                          <div className="w-4 h-4 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Choose Plan CTA button */}
                  <button
                    onClick={() =>
                      handleSelectPlan(
                        `${plan.name} Package (PKR ${plan.price})`,
                        plan.whatsappMessage,
                        `PKR ${plan.price}`
                      )
                    }
                    className={`w-full group inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm active:scale-95 cursor-pointer ${
                      isHighlight
                        ? 'bg-[#C6FF1A] text-[#0F1A14] hover:bg-[#b8f014]'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                    }`}
                  >
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Terms & Consultation Note */}
        <div className="mt-14 text-center max-w-2xl mx-auto space-y-2 border-t border-white/10 pt-8">
          <p className="text-xs text-slate-300">
            <span className="font-bold text-white">Hosting & Domain Policy:</span> 1 Month of high-speed cloud hosting + domain registration (.com/.pk) is included in every package. Renew with us at nominal annual rates or transfer to your preferred provider with zero lock-in.
          </p>
          <p className="text-xs text-slate-300">
            Need custom backend APIs, iOS applications, or enterprise cloud migration?{' '}
            <a
              href="https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20have%20custom%20enterprise%20requirements%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6FF1A] font-bold underline hover:opacity-90 inline-flex items-center gap-1"
            >
              <span>Chat directly with our Karachi team</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
