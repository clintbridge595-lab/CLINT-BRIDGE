import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LogoBadge } from './LogoBadge';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20business.', '_blank');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E3E4E4] py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo in white rounded container */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick('home', e)}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#254A34] rounded-xl"
        >
          <LogoBadge size="md" />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`relative py-1 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#254A34]'
                    : 'text-[#5F6B64] hover:text-[#0F1A14]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#254A34] rounded-full transition-all duration-300"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Pill Button "Get A Quote" */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleQuoteClick}
            className="group inline-flex items-center gap-2 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A]"
          >
            <span>Get A Quote</span>
            <span className="w-5 h-5 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#0F1A14] rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#254A34]"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-white/98 backdrop-blur-lg border-b border-[#E3E4E4] p-6 shadow-xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`text-lg font-bold py-2 border-b border-slate-100 flex items-center justify-between ${
                  activeSection === link.id ? 'text-[#254A34]' : 'text-[#0F1A14]'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#C6FF1A]" />
                )}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleQuoteClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#254A34] text-white py-3.5 px-6 rounded-full font-semibold text-sm shadow-md"
              >
                <span>Get A Free Quote</span>
                <span className="w-5 h-5 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center text-xs font-bold">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
