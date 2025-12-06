import React from 'react';
import { AlertTriangle, Clock, Target, DollarSign, Camera, RefreshCw } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <DollarSign className="w-6 h-6 text-red-400" />,
      title: "Unpredictable Costs & Logistics",
      description: "Renting studios, shipping prototypes, and hiring photographers drains budgets and wastes weeks of time."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-red-400" />,
      title: "The 'Reshoot' Nightmare",
      description: "A minor change in texture or a new product accessory often requires a complete physical reshoot."
    },
    {
      icon: <Camera className="w-6 h-6 text-red-400" />,
      title: "Inconsistent Quality",
      description: "Achieving uniform lighting across thousands of SKUs for your website, Amazon, and social channels is nearly impossible with conventional cameras."
    }
  ];

  return (
    <section id="problems" className="py-24 bg-brand-bg relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative text-left">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              The E-commerce Visual Content <span className="text-red-400">Bottleneck</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              For marketing directors and brand owners in manufacturing and retail, scaling high-quality visual content is the biggest operational hurdle. The traditional photography model is fundamentally broken for high-volume catalogs.
            </p>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
               <img 
                 src="https://picsum.photos/seed/studio/600/400" 
                 alt="Chaotic photography studio" 
                 className="w-full h-auto opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-6 left-6 flex items-center gap-3">
                 <div className="bg-red-500/20 backdrop-blur-sm p-3 rounded-full border border-red-500/30">
                   <AlertTriangle className="text-red-400 w-6 h-6" />
                 </div>
                 <p className="font-semibold text-red-100">Traditional Model: Slow & Expensive</p>
               </div>
            </div>
          </div>

          <div className="space-y-6 text-left">
            {problems.map((item, index) => (
              <div key={index} className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-900/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-900/20 rounded-lg group-hover:bg-red-900/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-100">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;