import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Design & Development',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Website Design & Development',
    '3D Custom Website',
    'Branding / Logo Design',
    'Search Engine Optimization (SEO)',
    'Google Business Profile & Maps',
    'Social Media Marketing & Meta Ads',
    'WhatsApp Marketing Funnel',
    'Full Growth Package (PKR 50,000)',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
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

    // Format WhatsApp message with URL encoding
    const text = `*New Quote Request from Client Bridge Website*
----------------------------------------
*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Email:* ${formData.email.trim()}
*Service:* ${formData.service}
*Project Details:*
${formData.message.trim()}
----------------------------------------
_Sent from clintbridge.com_`;

    const whatsappUrl = `https://wa.me/923112713755?text=${encodeURIComponent(text)}`;

    setIsSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="quote"
      className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4] relative"
      style={{
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Get Your Free Quote Today!"
          subtitle="Tell us about your project requirements. We reply with a clear breakdown and direct scope recommendations within 2 business hours."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FAF7EF] p-8 sm:p-10 rounded-3xl border border-[#E3E4E4] shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#254A34] text-[#C6FF1A] flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0F1A14] mb-2">
                  Quote Request Sent via WhatsApp!
                </h3>
                <p className="text-sm text-[#5F6B64] max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-[#0F1A14]">{formData.name}</span>. We have opened WhatsApp with your exact inquiry details. Our Karachi team is reviewing your requirements.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'Website Design & Development',
                      message: '',
                    });
                  }}
                  className="text-xs font-bold text-[#254A34] hover:underline"
                >
                  ← Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                      Your Name <span className="text-red-500">*</span>
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
                      placeholder="e.g. 0311-2713755"
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

                  {/* Service Interested In */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                      Service Interested In <span className="text-red-500">*</span>
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
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-1.5">
                    Project Message / Goals <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your business, current website or goals..."
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

                {/* Dark Pill "Send Message" Button */}
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white font-bold py-4 px-8 rounded-full shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A]"
                >
                  <span>Send Message & Open WhatsApp</span>
                  <Send className="w-4 h-4 text-[#C6FF1A] transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: One Tall Rounded Grayscale Photo with Lime Sparkle Stars at bottom right */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-md mx-auto">
              {/* Tall Rounded Grayscale Photo */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 h-[480px] sm:h-[540px]">
                <img
                  src="/images/quote.jpg"
                  alt="Client Bridge consultant discussing project strategy"
                  width="500"
                  height="700"
                  className="w-full h-full object-cover photo-grayscale"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Info Card */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[#E3E4E4] shadow-md max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1FA866] animate-pulse" />
                  <span className="text-xs font-bold text-[#0F1A14]">Instant Response</span>
                </div>
                <p className="text-xs text-[#5F6B64]">
                  Direct WhatsApp connection with our Karachi lead developers.
                </p>
              </div>

              {/* Lime Sparkle Stars at the Bottom-Right Corner */}
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
