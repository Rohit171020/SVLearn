import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import RoleSelector from './components/RoleSelector';
import ServicesSection from './components/ServicesSection';
import TechStackMatrix from './components/TechStackMatrix';
import RoiCalculator from './components/RoiCalculator';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BrochureModal from './components/BrochureModal';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedServiceQuote, setSelectedServiceQuote] = useState(null);
  const [appliedRoi, setAppliedRoi] = useState(null);

  const handleSelectServiceForQuote = (service) => {
    setSelectedServiceQuote(service);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultWithRoi = (roiData) => {
    setAppliedRoi(roiData);
  };

  return (
    <div className="svlearn-app">
      {/* Navigation */}
      <Navbar 
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onSelectService={handleSelectServiceForQuote}
      />

      {/* Hero with brand identity */}
      <main>
        <Hero 
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* Impact Numbers & Corporate Hiring Ticker */}
        <ImpactStats />

        {/* Solutions by Stakeholder: Colleges, Enterprises, Students */}
        <RoleSelector 
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 10 Core Services with Search, Filters & Deep-Dive Modals */}
        <ServicesSection 
          onSelectServiceForQuote={handleSelectServiceForQuote}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* Industry-Aligned Technology Stacks */}
        <TechStackMatrix 
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Interactive Placement & Upskilling ROI Simulator */}
        <RoiCalculator 
          onConsultWithRoi={handleConsultWithRoi}
        />

        {/* 4-Step Outcome Methodology */}
        <ProcessTimeline />

        {/* Institutional & Corporate Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Lead Capture & Institutional Proposal Form */}
        <ContactSection 
          selectedService={selectedServiceQuote}
          appliedRoi={appliedRoi}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onSelectService={handleSelectServiceForQuote}
      />

      {/* Instant Brochure Download Modal */}
      <BrochureModal 
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}
