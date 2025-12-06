import React from 'react';
import { Network } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-slate-800">
      {/* Subtle Background Graphic */}
      <div className="absolute -left-20 top-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-2 text-left">
            <div className="inline-block p-3 rounded-xl bg-slate-900/50 border border-slate-800 mb-6">
               <Network className="w-6 h-6 text-brand-purple" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
              We are 3Devision—a 3D design studio that has fused fundamental CGI expertise with the generative power of Artificial Intelligence.
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl border-l-2 border-slate-800 pl-6">
              We don’t just generate images; we engineer visual systems. We offer a new level of visualization where your product is placed into perfectly curated, "alive" environments indistinguishable from real photography. By blending 3D precision with AI creativity, we provide the ultimate solution for Enterprise E-commerce.
            </p>
          </div>

          {/* Team Image */}
          <div className="lg:col-span-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                alt="3Devision Team" 
                className="w-full h-auto grayscale object-cover hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Introduction;