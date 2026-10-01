import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { faqs } from '../data/faq';

export const Faq: React.FC = () => {
  // One open by default (first item index 0)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const handleContactWhatsApp = () => {
    window.open(
      'https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20I%20have%20a%20question%20regarding%20your%20services.',
      '_blank'
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          label="FAQs"
          title="Questions? Look here."
          subtitle="Honest, straightforward answers about our timelines, costs, and project handoff."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Accordion with 6 Items */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#254A34] text-white border-[#254A34] shadow-md'
                      : 'bg-[#FAF7EF] text-[#0F1A14] border-[#E3E4E4] hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left font-display text-base sm:text-lg font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A]"
                    aria-expanded={isOpen}
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
                    <div className="px-6 sm:px-8 pb-6 text-sm text-slate-200 leading-relaxed border-t border-[#31503D]/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: 2 Cards (Dark Green card on top, Light card below) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Dark Green Card with Lime Chat Icon & Lime "Contact Us" Button */}
            <div className="bg-[#254A34] text-white p-7 sm:p-8 rounded-3xl border border-[#1F3B2B] shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center mb-5 shadow-sm">
                <MessageCircle className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Have different questions?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Our lead developers and strategists are available on WhatsApp to discuss your exact project scope and technical doubts.
              </p>

              <button
                onClick={handleContactWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C6FF1A] hover:bg-[#b8f014] text-[#0F1A14] text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full shadow-sm transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Light Card with Phone Icon & "24/7 Service" */}
            <div className="bg-[#FAF7EF] p-7 sm:p-8 rounded-3xl border border-[#E3E4E4] shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#254A34] text-[#C6FF1A] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#254A34] block">
                  24/7 WhatsApp Service
                </span>
                <a
                  href="tel:03112713755"
                  className="font-display text-xl sm:text-2xl font-extrabold text-[#0F1A14] hover:text-[#254A34] transition-colors"
                >
                  0311-2713755
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
