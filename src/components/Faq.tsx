import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { faqs } from '../data/faq';

export const Faq: React.FC = () => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const handleContactWhatsApp = () => {
    window.open(
      'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20have%20a%20question%20regarding%20your%20services.',
      '_blank'
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Honest, straightforward answers about our packages, timelines, hosting renewals, and review milestones."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Accordion with 6 Verified Questions */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#254A34] text-white border-[#254A34] shadow-md'
                      : 'bg-[#FAF8F5] text-[#0F1A14] border-[#E3E4E4] hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className={isOpen ? 'text-white' : 'text-[#0F1A14]'}>
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-black transition-colors ${
                        isOpen
                          ? 'bg-[#C6FF1A] text-[#0F1A14]'
                          : 'bg-white border border-[#E3E4E4] text-[#254A34]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      className="px-6 sm:px-8 pb-6 text-slate-200 leading-relaxed border-t border-[#31503D]/60 pt-4 text-xs sm:text-sm animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: 2 Support Cards */}
          <div className="lg:col-span-4 space-y-5">
            {/* Dark Green Card with WhatsApp Chat */}
            <div className="bg-[#254A34] text-white p-7 sm:p-8 rounded-3xl border border-[#1F3B2B] shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center mb-5 shadow-sm">
                <MessageCircle className="w-6 h-6 stroke-[2.2]" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#C6FF1A]">
                Direct Consultant
              </span>

              <h4 className="font-serif italic text-xl sm:text-2xl font-bold text-white mt-1 mb-2 leading-snug">
                Have a unique project scope?
              </h4>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                Our in-house Karachi engineers evaluate your goals directly without agency sales intermediaries.
              </p>

              <button
                onClick={handleContactWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C6FF1A] text-[#0F1A14] font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider shadow-sm hover:bg-[#b8f014] transition-colors"
              >
                <span>Ask on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-[#E3E4E4] text-[#0F1A14]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#254A34] text-[#C6FF1A] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B64] block">
                    Immediate Call
                  </span>
                  <a
                    href="tel:03002464078"
                    className="font-bold text-sm text-[#0F1A14] hover:text-[#254A34] transition-colors"
                  >
                    0300-2464078
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#5F6B64] leading-relaxed">
                Available Monday – Saturday, 9:00 AM – 9:00 PM (PKT).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
