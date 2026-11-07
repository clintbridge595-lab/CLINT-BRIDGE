import React from 'react';
import { ShieldCheck, MessageSquare, ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const Testimonials: React.FC = () => {
  const trustCommitments = [
    {
      title: 'In-House Karachi Engineering',
      desc: 'You work directly with our dedicated 4-person multidisciplinary team. No middle managers or outsourced overseas contractor tiers.',
    },
    {
      title: 'Real Staging Previews',
      desc: 'Test your website on your actual mobile device on our private staging server before making final payments or going live.',
    },
    {
      title: 'Full Asset & Domain Ownership',
      desc: 'Upon project completion, you retain 100% ownership of your source code, domain name, vector logos, and hosting credentials.',
    },
  ];

  return (
    <section id="trust" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E3E4E4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Authentic Trust & Verifiable Work"
          subtitle="We believe in radical transparency. Instead of fabricating placeholder reviews or vanity metrics, we stand on our live production work."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Official Verification Notice */}
          <div className="lg:col-span-5 bg-[#254A34] text-white p-8 sm:p-10 rounded-3xl border border-[#1F3B2B] shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6FF1A]">
                Transparency Guarantee
              </span>

              <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 leading-snug">
                Client Case Studies & Verified Reviews
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                We are actively onboarding and deploying client platforms across Pakistan and internationally. Genuine client video interviews and verified case metrics are currently being compiled.
              </p>

              <div className="p-4 rounded-2xl bg-[#1F3B2B] border border-[#31503D]">
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Want to verify our track record?</strong> Every project featured in our portfolio is a live, working production website you can visit and test right now.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#31503D] mt-6">
              <span className="text-xs font-semibold text-slate-300 block mb-1.5">
                Speak directly with our team:
              </span>
              <a
                href="https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20can%20I%20speak%20with%20references%20or%20see%20recent%20client%20samples?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C6FF1A] hover:underline"
              >
                <span>Request Client References via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Core Client Commitments */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E3E4E4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#254A34] block">
                    Our Standard of Practice
                  </span>
                  <h4 className="font-serif italic font-bold text-xl sm:text-2xl text-[#0F1A14] mt-1">
                    How We Protect Your Investment
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E3E4E4] flex items-center justify-center text-[#254A34]">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-5">
                {trustCommitments.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#C6FF1A]/20 text-[#254A34] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#0F1A14] mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs text-[#5F6B64] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action to Portfolio */}
            <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#5F6B64]">
                Explore Beauty Salon, PAK E DRIVE, Best Rent Cars & more:
              </span>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#254A34] hover:text-[#1F3B2B] hover:underline"
              >
                <span>View 5 Live Client Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
