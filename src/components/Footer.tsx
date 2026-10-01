import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, X } from 'lucide-react';
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

  return (
    <footer className="bg-white text-[#0F1A14] pt-16 border-t border-[#E3E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Row: "Let's Connect there" with Dark Pill "Contact Us" */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-[#E3E4E4]">
          <div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1A14] tracking-tight"
              style={{
                fontFamily: 'Georgia',
                fontStyle: 'italic',
              }}
            >
              Let's Connect there
            </h2>
          </div>

          <button
            onClick={handleContactClick}
            className="group inline-flex items-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-sm font-semibold py-3.5 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
          >
            <span>Contact Us</span>
            <span className="w-5 h-5 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </button>
        </div>

        {/* 4 Columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12"
          style={{
            fontFamily: 'Georgia',
            fontStyle: 'italic',
          }}
        >
          {/* Col 1: Logo + Short description + Lime circle social icons (5 cols) */}
          <div className="lg:col-span-5">
            <LogoBadge size="lg" className="mb-4" />
            <p className="text-xs sm:text-sm text-[#5F6B64] leading-relaxed max-w-sm mb-6">
              Client Bridge is a high-performance digital marketing and web design agency based in Karachi, Pakistan. We build conversion-engineered web platforms and automated customer acquisition pipelines.
            </p>

            {/* Social Icons in Lime Circles */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1V5Cuj6SrG/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full text-[#0F1A14] flex items-center justify-center shadow-xs hover:scale-105 transition-transform"
                style={{ backgroundColor: '#ecf8ff' }}
                aria-label="Facebook page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/clintbridgeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full text-[#0F1A14] flex items-center justify-center shadow-xs hover:scale-105 transition-transform"
                style={{ backgroundColor: '#e1fcc8' }}
                aria-label="Instagram profile"
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
                className="w-10 h-10 rounded-full text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform"
                style={{ backgroundColor: '#4bb572' }}
                aria-label="Direct WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#0F1A14] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#5F6B64]">
              {['home', 'services', 'work', 'pricing', 'about', 'faq'].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleLinkClick(id, e)}
                    className="hover:text-[#254A34] capitalize transition-colors"
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#0F1A14] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#5F6B64]">
              <li
                className="flex items-start gap-2.5"
                style={{
                  fontFamily: 'Times New Roman',
                  fontWeight: 'bold',
                }}
              >
                <Phone className="w-4 h-4 text-[#254A34] shrink-0 mt-1" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:03112713755" className="hover:text-[#254A34] font-semibold text-[#0F1A14]">
                    0311-2713755
                  </a>
                  <a href="tel:03212114972" className="hover:text-[#254A34] text-xs">
                    0321-2114972
                  </a>
                  <a href="tel:+447517035549" className="hover:text-[#254A34] font-semibold text-xs text-[#254A34]">
                    +44 7517 035549
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#254A34] shrink-0" />
                <a href="mailto:clintbridge595@gmail.com" className="hover:text-[#254A34]">
                  clintbridge595@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#254A34] shrink-0 mt-0.5" />
                <span>Malir 15 Flyover, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Dark Green (#1F3B2B) */}
      <div className="bg-[#1F3B2B] text-slate-300 py-5 border-t border-[#254A34] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Client Bridge. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#C6FF1A] transition-colors focus:outline-none"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#C6FF1A] transition-colors focus:outline-none"
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
                <h3 className="font-display text-2xl font-bold mb-4">Terms & Conditions</h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#5F6B64] leading-relaxed">
                  <p>
                    <strong>1. Scope of Services:</strong> Client Bridge provides digital agency services including website design, branding, Google search optimization, and marketing. Deliverables are specified in the agreed project proposal.
                  </p>
                  <p>
                    <strong>2. Project Milestones & Review:</strong> Clients have full access to staging environments to review work prior to public deployment. Revisions must align with initial agreed briefs.
                  </p>
                  <p>
                    <strong>3. Payments:</strong> Transparent package fees (PKR 20,000 / 30,000 / 50,000) are paid according to standard project milestones with zero hidden fees.
                  </p>
                  <p>
                    <strong>4. Intellectual Property:</strong> Upon full payment, the client owns all final design assets, source code, and domain credentials created for their business.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">Privacy Policy</h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#5F6B64] leading-relaxed">
                  <p>
                    <strong>1. Information We Collect:</strong> We collect contact details (name, phone, email, business requirements) provided voluntarily through quote forms or WhatsApp discussions.
                  </p>
                  <p>
                    <strong>2. Usage:</strong> Your data is used exclusively to evaluate project requirements, issue estimates, and coordinate ongoing work. We never sell or share client data with third parties.
                  </p>
                  <p>
                    <strong>3. Direct Communication:</strong> Communications occur securely via email and official WhatsApp channels managed by Client Bridge in Karachi, Pakistan.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#E3E4E4] text-right">
              <button
                onClick={() => setModalType(null)}
                className="bg-[#254A34] text-white px-5 py-2 rounded-full text-xs font-bold"
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
