import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { getAssetUrl } from '../utils/asset';

interface QuoteFormProps {
  preselectedService?: string;
  preselectedBudget?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  preselectedService,
  preselectedBudget,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Complete Digital Growth Flagship (PKR 200,000)',
    budget: 'PKR 200,000 (Complete Digital Growth)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
        budget: preselectedBudget || prev.budget,
      }));
    }
  }, [preselectedService, preselectedBudget]);

  const servicesList = [
    'Complete Digital Growth Flagship (PKR 200,000)',
    'Android Mobile App Development',
    'Website Design & Development',
    'Starter Website Package (PKR 30,000)',
    'Business 3D Web Package (PKR 40,000)',
    'Growth Partner Marketing Package (PKR 60,000)',
    'Branding & Logo Design',
    'Search Engine Optimization (SEO)',
    'Google Business Profile & Local Maps',
    'Social Media Marketing & Meta Ads',
    'WhatsApp Marketing & Funnels',
    'E-commerce Store Development',
    'Website Maintenance & Cloud Hosting',
  ];

  const budgetOptions = [
    'PKR 200,000 (Complete Digital Growth)',
    'PKR 30,000 – PKR 40,000',
    'PKR 40,000 – PKR 60,000',
    'PKR 60,000+ (Enterprise Scope)',
    'Flexible / Need Scope Consultation',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone or WhatsApp number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your project';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format structured WhatsApp message
    const text = `*New Project Inquiry — CLINT BRIDGE*
----------------------------------------
*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Email:* ${formData.email.trim()}
*Service/Package:* ${formData.service}
*Investment Level:* ${formData.budget}
*Project Details:*
${formData.message.trim()}
----------------------------------------
_Submitted via CLINT BRIDGE Digital Agency Portal_`;

    const whatsappUrl = `https://wa.me/923112713755?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Start Your Digital Transformation"
          subtitle="Tell us about your business goals. Our Karachi multidisciplinary team will prepare a structured proposal with clear milestones and transparent delivery timelines."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#E3E4E4] shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#254A34] text-[#C6FF1A] flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#0F1A14] mb-2">
                  Inquiry Dispatched via WhatsApp!
                </h3>
                <p className="text-sm text-[#5F6B64] max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-[#0F1A14]">{formData.name}</span>. We have forwarded your selected package and project details directly to our senior strategists. We will reply within 2 business hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/923112713755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#254A34] text-white py-2.5 px-6 rounded-full text-xs font-bold hover:bg-[#1F3B2B] transition-colors"
                  >
                    Open Direct WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Complete Digital Growth Flagship (PKR 200,000)',
                        budget: 'PKR 200,000 (Complete Digital Growth)',
                        message: '',
                      });
                    }}
                    className="text-xs font-bold text-[#254A34] hover:underline cursor-pointer"
                  >
                    ← Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Preselection Notice Pill if Flagship */}
                {formData.service.includes('Complete Digital Growth') && (
                  <div className="bg-[#254A34] text-white rounded-2xl p-4 flex items-center justify-between gap-3 text-xs border border-[#C6FF1A]/40 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#C6FF1A] shrink-0" />
                      <span>
                        Flagship Package Preselected: <strong className="text-[#C6FF1A]">Complete Digital Growth (PKR 200,000)</strong>
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold bg-[#C6FF1A] text-[#0F1A14] px-2.5 py-0.5 rounded-full hidden sm:inline-block">
                      Turnkey
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Asim Raza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0F1A14] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#254A34] transition-all ${
                        errors.name ? 'border-red-500' : 'border-[#E3E4E4]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0300-2464078"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0F1A14] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#254A34] transition-all ${
                        errors.phone ? 'border-red-500' : 'border-[#E3E4E4]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. business@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0F1A14] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#254A34] transition-all ${
                        errors.email ? 'border-red-500' : 'border-[#E3E4E4]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Project Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                      Investment Budget Level <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3E4E4] text-sm text-[#0F1A14] focus:outline-none focus:ring-2 focus:ring-[#254A34] transition-all"
                    >
                      {budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Interested In */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                    Service or Package Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3E4E4] text-sm text-[#0F1A14] focus:outline-none focus:ring-2 focus:ring-[#254A34] transition-all"
                  >
                    {servicesList.map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                    Business Details & Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your industry, whether you need web, mobile app, branding, or ads, and your ideal launch target..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0F1A14] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#254A34] transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#E3E4E4]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white font-bold py-4 px-8 rounded-full shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A] disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#C6FF1A]" />
                      <span>Opening WhatsApp Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Start Your Digital Transformation</span>
                      <Send className="w-4 h-4 text-[#C6FF1A] transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-md mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 h-[480px] sm:h-[540px]">
                <img
                  src={getAssetUrl('images/quote.jpg')}
                  alt="CLINT BRIDGE consultant discussing complete digital growth strategy"
                  width="500"
                  height="700"
                  className="w-full h-full object-cover photo-grayscale"
                  loading="lazy"
                />
              </div>

              {/* Lime Sparkle Stars */}
              <div
                className="absolute -bottom-4 -right-4 z-20 pointer-events-none text-[#C6FF1A] drop-shadow-md select-none"
                aria-hidden="true"
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
              <div
                className="absolute -bottom-8 right-8 z-20 pointer-events-none text-[#C6FF1A] drop-shadow-md select-none"
                aria-hidden="true"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
