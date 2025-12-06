import React from 'react';
import { Box, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-left">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <Box className="w-6 h-6 text-brand-accent" />
              <span>3DEVISION</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              We engineer visual systems. Combining the speed of AI with the control of professional 3D design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Lifestyle Rendering</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">3D Configurators</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Product Animation</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">AR/VR Assets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Stop Managing Logistics. Start Selling.</h4>
            <p className="text-sm mb-4">Ready to transform your catalog with the speed of AI and the quality of High-End 3D?</p>
            <div className="flex flex-col gap-3">
              <button className="bg-brand-accent text-brand-dark font-bold py-2 px-4 rounded hover:bg-sky-400 transition-colors">
                Book a Demo
              </button>
              <button className="border border-slate-700 text-white font-bold py-2 px-4 rounded hover:bg-slate-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} 3Devision. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;