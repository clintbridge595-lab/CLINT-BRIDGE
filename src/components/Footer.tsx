import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { LogoBadge } from './LogoBadge';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://wa.me/923112713755', '_blank');
    }
  };

  const servicesList = [
    'Complete Digital Growth (Flagship)',
    'Website Design & Development',
    'Android Mobile App Development',
    'Social Media & Content Marketing',
    'Branding & Logo Design',
    'Search Engine Optimization (SEO)',
    'Google Business Profile & Maps',
    'WhatsApp Marketing & Funnels',
    'E-commerce Solutions',
    'Maintenance & Cloud Hosting',
  ];

  return (
    <footer className="bg-white text-[#0F1A14] pt-16 border-t border-[#E3E4E4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Call to Action Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-[#E3E4E4]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#254A34] mb-1.5 block">
              Start Your Digital Growth
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1A14] tracking-tight">
              Let's Build Something Exceptional
            </h2>
          </div>

          <button
            onClick={handleContactClick}
            className="group inline-flex items-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-sm font-semibold py-3.5 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 shrink-0"
          >
            <span>Get a Free Quote</span>
            <span className="w-5 h-5 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </button>
        </div>

        {/* 4 Balanced Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14">
          {/* Col 1: Brand Info & Socials (4 cols) */}
          <div className="lg:col-span-4">
            <LogoBadge size="lg" className="mb-4" />
            <p className="text-xs sm:text-sm text-[#5F6B64] leading-relaxed max-w-sm mb-6">
              CLINT BRIDGE is a premier digital agency based in Karachi, Pakistan. We engineer high-performance web platforms, distinctive brand identities, and automated customer acquisition pipelines.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61595149822424"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ECF8FF] text-[#0F1A14] flex items-center justify-center hover:bg-[#D5EFFF] hover:scale-105 transition-all shadow-2xs"
                aria-label="CLINT BRIDGE Facebook page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/clint_bridge_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E1FCC8] text-[#0F1A14] flex items-center justify-center hover:bg-[#CEF8A6] hover:scale-105 transition-all shadow-2xs"
                aria-label="CLINT BRIDGE Instagram profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/923112713755"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-all shadow-2xs"
                aria-label="Direct WhatsApp to CLINT BRIDGE"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#5F6B64]">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Work', id: 'work' },
                { label: 'Services', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Insights', id: 'insights' },
                { label: 'FAQs', id: 'faq' },
                { label: 'Get a Quote', id: 'quote' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(item.id, e)}
                    className="hover:text-[#254A34] transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5F6B64]">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick('services', e)}
                    className="hover:text-[#254A34] transition-colors leading-snug inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact Information (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F1A14] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#5F6B64]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#254A34] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:03002464078" className="hover:text-[#254A34] font-semibold text-[#0F1A14] transition-colors">
                    0300-2464078 <span className="text-[10px] text-slate-400 font-normal">(Primary)</span>
                  </a>
                  <a href="tel:03212114972" className="hover:text-[#254A34] font-semibold text-[#0F1A14] transition-colors">
                    0321-2114972 <span className="text-[10px] text-slate-400 font-normal">(Direct Line)</span>
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#254A34] shrink-0" />
                <a href="mailto:official.clientbridge@gmail.com" className="hover:text-[#254A34] transition-colors">
                  official.clientbridge@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#254A34] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">Karachi, Pakistan</span>
              </li>

              <li className="pt-2">
                <a
                  href="https://wa.me/923112713755?text=Hello%20CLINT%20BRIDGE,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#254A34] bg-[#C6FF1A]/40 hover:bg-[#C6FF1A] px-3 py-1.5 rounded-full transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Dark Forest Green */}
      <div className="bg-[#1F3B2B] text-slate-300 py-5 border-t border-[#254A34] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 CLINT BRIDGE. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#C6FF1A] transition-colors focus:outline-none cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#C6FF1A] transition-colors focus:outline-none cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Terms & Conditions / Privacy Policy */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#0F1A14] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-black transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'terms' ? (
              <div>
                <h3 className="font-serif italic text-2xl font-bold mb-4 text-[#0F1A14]">Terms & Conditions</h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#5F6B64] leading-relaxed">
                  <p>
                    <strong>1. Scope of Services:</strong> CLINT BRIDGE provides comprehensive digital agency services including the Complete Digital Growth Flagship package (PKR 200,000), custom website design & development, Android mobile apps, brand identity systems, Meta/Google ad setups, search engine optimization, Google Business Profile management, and WhatsApp funnel automation.
                  </p>
                  <p>
                    <strong>2. Project Milestones & Review:</strong> Clients receive access to live staging environments to review work prior to public deployment. Revisions are completed according to the agreed project scope.
                  </p>
                  <p>
                    <strong>3. Transparent Payments:</strong> Package fees (Flagship PKR 200,000; Standalone Web PKR 30,000 / 40,000 / 60,000) are structured into clear milestone commitments with zero hidden hourly creep. Ad spend is paid directly by the client to platform vendors (Meta/Google). Hosting and third-party developer subscriptions are charged separately where applicable.
                  </p>
                  <p>
                    <strong>4. Intellectual Property:</strong> Upon final milestone settlement, the client owns 100% of all delivered assets, source code, media, and domain credentials created specifically for their business.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-serif italic text-2xl font-bold mb-4 text-[#0F1A14]">Privacy Policy</h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#5F6B64] leading-relaxed">
                  <p>
                    <strong>1. Information Collection:</strong> We collect contact details (name, phone number, email address, and business requirements) provided voluntarily through our quote inquiry forms or direct WhatsApp discussions.
                  </p>
                  <p>
                    <strong>2. Confidentiality & Data Use:</strong> Your information is used strictly to evaluate your project requirements, prepare project proposals, and maintain client communications. CLINT BRIDGE never sells, rents, or discloses client data to third parties.
                  </p>
                  <p>
                    <strong>3. Secure Communications:</strong> Client communications occur directly via verified official channels (+92 300 2464078, +92 321 2114972, and official.clientbridge@gmail.com).
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#E3E4E4] text-right">
              <button
                onClick={() => setModalType(null)}
                className="bg-[#254A34] hover:bg-[#1F3B2B] text-white px-6 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
