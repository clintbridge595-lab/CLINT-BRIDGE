import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { MarqueeStrip } from './MarqueeStrip';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    setIsSubscribed(true);
  };

  return (
    <div className="w-full">
      {/* Top Marquee Strip */}
      <MarqueeStrip />

      {/* Main Newsletter Section in soft grey */}
      <section
        className="bg-[#F3F3F3] py-16 sm:py-20 border-b border-[#E3E4E4]"
        style={{
          fontFamily: 'Georgia',
          fontStyle: 'italic',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#254A34] mb-2 block">
            Direct Agency Insights
          </span>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1A14] tracking-tight leading-snug mb-4">
            Subscribe for Digital Growth Tips & Updates
          </h2>

          <p className="text-xs sm:text-sm text-[#5F6B64] max-w-xl mx-auto mb-8">
            Get practical strategies on local SEO in Pakistan, high-converting WhatsApp lead funnels, and modern web design tips sent once a month. No spam ever.
          </p>

          {isSubscribed ? (
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-[#E3E4E4] text-xs font-bold text-[#254A34] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#1FA866]" />
              <span>Thank you! You are now subscribed to our growth updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex items-center relative">
              <div className="relative w-full">
                {/* Lime envelope icon */}
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#254A34]">
                  <span className="w-8 h-8 rounded-full bg-[#C6FF1A] flex items-center justify-center text-[#0F1A14]">
                    <Mail className="w-4 h-4" />
                  </span>
                </div>
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-32 py-3.5 rounded-full bg-white border border-[#E3E4E4] text-sm text-[#0F1A14] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#254A34] shadow-xs"
                />
                {/* Dark 'Subscribe' pill */}
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-xs font-bold px-5 rounded-full transition-colors active:scale-95"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Bottom Marquee Strip */}
      <MarqueeStrip style={{ height: '37.3229px' }} />
    </div>
  );
};
