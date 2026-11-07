import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { DigitalGrowthPartner } from './components/DigitalGrowthPartner';
import { WhyChoose } from './components/WhyChoose';
import { Process } from './components/Process';
import { WorkShowcase } from './components/WorkShowcase';
import { Pricing } from './components/Pricing';
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
  const [selectedService, setSelectedService] = useState('Complete Digital Growth Flagship (PKR 200,000)');
  const [selectedBudget, setSelectedBudget] = useState('PKR 200,000 (Complete Digital Growth)');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'growth-partner', 'work', 'pricing', 'about', 'faq', 'quote'];
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

  const handleStartTransformation = (
    serviceName: string = 'Complete Digital Growth Flagship (PKR 200,000)',
    budget: string = 'PKR 200,000 (Complete Digital Growth)'
  ) => {
    setSelectedService(serviceName);
    setSelectedBudget(budget);
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0F1A14] flex flex-col font-sans antialiased selection:bg-[#C6FF1A] selection:text-[#0F1A14]">
      {/* Top Bar: verified phone, email, Facebook & Instagram */}
      <TopBar />

      {/* Sticky Navbar with active section indicator */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onStartTransformation={() => handleStartTransformation()} />

        {/* Capabilities Ticker */}
        <MarqueeStrip />

        {/* About CLINT BRIDGE */}
        <About />

        {/* Services & Capabilities */}
        <Services />

        {/* NEW SECTION: Your Complete Digital Growth Partner */}
        <DigitalGrowthPartner onStartTransformation={handleStartTransformation} />

        {/* Why Choose Us */}
        <WhyChoose />

        {/* Methodology / Process */}
        <Process />

        {/* Portfolio Work Showcase (5 verified live client platforms) */}
        <WorkShowcase />

        {/* Transparent Pricing Packages (Flagship PKR 200k + Web Packages) */}
        <Pricing onSelectPlan={handleStartTransformation} />

        {/* Interactive Quote Inquiry Form (with preselected package support) */}
        <QuoteForm
          preselectedService={selectedService}
          preselectedBudget={selectedBudget}
        />

        {/* Authentic Client Trust & Verifiable Proof */}
        <Testimonials />

        {/* Meet Our Karachi Team */}
        <Team />

        {/* News & Strategic Insights */}
        <Insights />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* 4-Column Balanced Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive AI Support Widget */}
      <Chatbot />
    </div>
  );
}
