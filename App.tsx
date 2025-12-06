import React, { useState } from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import IndustriesSection from './components/IndustriesSection';
import ROISection from './components/ROISection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 selection:bg-brand-accent selection:text-brand-dark">
      <Navigation />
      
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        <ROISection />
        <IndustriesSection />
        <Introduction />
      </main>

      <Footer />
    </div>
  );
};

export default App;