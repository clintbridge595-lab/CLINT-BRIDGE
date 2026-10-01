import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { Process } from './components/Process';
import { WorkShowcase } from './components/WorkShowcase';
import { Pricing } from './components/Pricing';
import { StartProject } from './components/StartProject';
import { QuoteForm } from './components/QuoteForm';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Insights } from './components/Insights';
import { Faq } from './components/Faq';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'work', 'pricing', 'about', 'faq', 'quote'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F1A14] flex flex-col font-sans antialiased selection:bg-[#C6FF1A] selection:text-[#0F1A14]">
      {/* [A] Top Bar (dark green, slim: phone, email, address, Facebook & Instagram lime angled block) */}
      <TopBar />

      {/* [B] Sticky Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {/* [C] Hero section with 3D photo collage & rotating badge */}
        <Hero />

        {/* [D] Marquee Strip */}
        <MarqueeStrip />

        {/* [E] About Us with progress bars and truthful statistics */}
        <About />

        {/* Section separator marquee strip */}
        <MarqueeStrip />

        {/* [F] Our Services (dark forest green with signature middle lime card) */}
        <Services />

        {/* [G] Why Choose Us with 2x2 grid */}
        <WhyChoose />

        {/* [H] Marquee Strip */}
        <MarqueeStrip />

        {/* [I] Our Work Process (01, 02, 03 cards) */}
        <Process />

        {/* [J] Marquee Strip */}
        <MarqueeStrip />

        {/* [K] Our Work (5 real client projects) */}
        <WorkShowcase />

        {/* [L] Pricing (3 clear packages: 20k / 30k / 50k) */}
        <Pricing />

        {/* [M] Design & Briefs (Start your project the right way) */}
        <StartProject />

        {/* [N] Get Your Free Quote Form */}
        <QuoteForm />

        {/* [O] Marquee Strip */}
        <MarqueeStrip />

        {/* [P] Testimonials */}
        <Testimonials />

        {/* [Q] Meet Our Expert Team (4 members) */}
        <Team />

        {/* [R] News & Insights */}
        <Insights />

        {/* [S] FAQs */}
        <Faq />

        {/* [T] Newsletter (with marquee strips above and below) */}
        <Newsletter />
      </main>

      {/* [U] Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* [6] Interactive AI Chatbot (Urdu + English) */}
      <Chatbot />
    </div>
  );
}
