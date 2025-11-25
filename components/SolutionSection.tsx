import React from 'react';
import { Layers, Zap, Copy, Monitor } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const advantages = [
    {
      icon: <Layers className="w-6 h-6 text-brand-accent" />,
      title: "Guaranteed Photorealism",
      desc: "Images indistinguishable from professional photography, building immediate customer trust."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-accent" />,
      title: "Cut Costs by 70%",
      desc: "Eliminate physical shoots. Budget flows into assets, not logistics and overhead."
    },
    {
      icon: <Copy className="w-6 h-6 text-brand-accent" />,
      title: "Instant Iteration",
      desc: "Generate hundreds of SKUs, colors, or scenes with near-zero marginal cost."
    },
    {
      icon: <Monitor className="w-6 h-6 text-brand-accent" />,
      title: "Omnichannel Consistency",
      desc: "A Single Source of Truth ensuring perfect color and lighting across Web, Amazon, and Social."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">The Solution</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">A Dedicated AI Product Visualization Agency</h3>
          <p className="text-xl text-slate-400">
            3Devision combines human artistic expertise with cutting-edge AI rendering. 
            We are your Creative as a Service (CaaS) partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-brand-bg p-8 rounded-2xl border border-slate-800 hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                {adv.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{adv.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl overflow-hidden border border-slate-800 relative h-[400px]">
          <img 
            src="https://picsum.photos/seed/tech/1200/600" 
            alt="3D Rendering Process" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent flex items-center">
            <div className="p-12 max-w-xl">
              <h4 className="text-3xl font-bold mb-4">The 3Devision AI Advantage</h4>
              <p className="text-slate-300 mb-6">
                Our agency model, powered by advanced AI and 3D pipelines, delivers speed, scalability, and precision that traditional methods simply cannot match.
              </p>
              <div className="flex gap-4">
                 <div className="h-1 w-20 bg-brand-accent rounded-full"></div>
                 <div className="h-1 w-10 bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;