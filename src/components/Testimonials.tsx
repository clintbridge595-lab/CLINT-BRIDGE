import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { placeholderReviews } from '../data/testimonials';
import { getAssetUrl } from '../utils/asset';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? placeholderReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === placeholderReviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = placeholderReviews[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#F3F3F3] border-b border-[#E3E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          label="Testimonials"
          title="Trusted by Our Clients"
          subtitle="We build genuine, lasting partnerships focused on performance and measurable business growth."
          align="center"
        />

        {/* Layout matching reference: Dark green square card on left, White review card with arrows on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left: Dark green square card */}
          <div className="lg:col-span-5 bg-[#254A34] text-white p-8 sm:p-10 rounded-3xl border border-[#1F3B2B] shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 stroke-[2.2]" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#C6FF1A]">
                Client Feedback
              </span>

              {/* Truthful positioning: "Client reviews coming soon" as instructed */}
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4 leading-snug">
                Client reviews coming soon
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We are actively onboarding and deploying client platforms. Genuine client case studies and verified client feedback will appear here as ongoing projects conclude.
              </p>
            </div>

            <div className="pt-6 border-t border-[#31503D] mt-6">
              <span className="text-xs font-semibold text-slate-300">
                Want to speak with past clients?
              </span>
              <a
                href="https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20can%20I%20speak%20with%20references%20or%20see%20recent%20client%20samples?"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-bold text-[#C6FF1A] hover:underline mt-1"
              >
                Inquire via WhatsApp for references →
              </a>
            </div>
          </div>

          {/* Right: White review card with interactive arrows & avatar slider */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E3E4E4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-10 h-10 text-[#C6FF1A] fill-[#C6FF1A]/30" />
                <span className="text-xs font-mono text-slate-400">
                  {currentIndex + 1} / {placeholderReviews.length}
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-[#0F1A14] font-medium leading-relaxed mb-8">
                "{currentReview.quote}"
              </blockquote>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#E3E4E4]">
              {/* Author Info */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-xs shrink-0">
                  <img
                    src={getAssetUrl(currentReview.avatar)}
                    alt={currentReview.clientName}
                    width="48"
                    height="48"
                    className="w-full h-full object-cover photo-grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0F1A14]">
                    {currentReview.clientName}
                  </h4>
                  <p className="text-xs text-[#5F6B64]">
                    {currentReview.businessName} · {currentReview.location}
                  </p>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-[#E3E4E4] text-[#0F1A14] hover:bg-[#254A34] hover:text-white hover:border-[#254A34] transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#254A34]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-[#E3E4E4] text-[#0F1A14] hover:bg-[#254A34] hover:text-white hover:border-[#254A34] transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#254A34]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
