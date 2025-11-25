import React, { useState, useEffect } from 'react';
import { Menu, X, Box } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-brand-bg/90 backdrop-blur-md border-slate-800 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tighter">
          <Box className="w-8 h-8 text-brand-accent" />
          <span>3DEVISION</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problems" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Challenges</a>
          <a href="#solution" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Solutions</a>
          <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#roi" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Results</a>
          <button className="bg-white text-brand-bg px-5 py-2 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors">
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          <a href="#problems" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Challenges</a>
          <a href="#solution" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Solutions</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Services</a>
          <a href="#roi" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Results</a>
          <button className="bg-brand-accent text-brand-dark w-full py-3 rounded font-bold">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;