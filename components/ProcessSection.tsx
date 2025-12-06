import React from 'react';
import { ClipboardList, PenTool, Box, Image as ImageIcon, CheckCircle } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      id: "01",
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Brief & Style",
      desc: "Start by filling out a quick questionnaire to define your product category. Choose a 'mood' from our curated style library to get started."
    },
    {
      id: "02",
      icon: <PenTool className="w-6 h-6" />,
      title: "10 Concept Drafts",
      desc: "We generate 10 unique AI sketches based on your brief. Review the different angles and interiors, then pick your favorites."
    },
    {
      id: "03",
      icon: <Box className="w-6 h-6" />,
      title: "3D Integration",
      desc: "We create an exact 'digital twin' of your product. Then, we fine-tune the environment’s colors to harmonize with your specific item."
    },
    {
      id: "04",
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Visualization & Variety",
      desc: "We apply professional lighting and textures. We can also create content variations here—swapping products or changing interiors."
    },
    {
      id: "05",
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Final Polish",
      desc: "After a final round of tweaks and color correction, we deliver a package of high-resolution images ready for your catalog."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">How it works</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Simple 5-Step Process</h3>
          <p className="text-slate-400 max-w-2xl">From brief to final assets in record time.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group text-left p-4 -ml-4 rounded-xl hover:bg-slate-900/50 transition-colors duration-300">
              {/* Connector Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-800 -z-10 group-hover:bg-slate-700 transition-colors" />
              )}
              
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-accent font-bold mb-6 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-all z-10 relative">
                {step.id}
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                {step.title}
              </h4>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                   <p className="text-sm text-slate-400 leading-relaxed pt-2">
                     {step.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
           <button className="bg-brand-accent hover:bg-sky-400 text-brand-dark px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-brand-accent/25">
             Try it Now
           </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;