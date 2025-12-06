import React from 'react';
import { Layers, Zap, Copy, Monitor, Sparkles, Box, MessageSquare } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-brand-accent" />,
      title: "God-Tier Photorealism",
      desc: "Images possess all the qualities of professional studio photography (perfect light, composition, details) without the physical constraints."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-accent" />,
      title: "Cut Production Costs by 70%",
      desc: "Eliminate studio rentals and logistics. Shift your budget from 'shipping products' to 'creating assets.'"
    },
    {
      icon: <Copy className="w-6 h-6 text-brand-accent" />,
      title: "Infinite Scalability",
      desc: "Have 50 types of wall panels or 100 furniture models? We can instantly swap products within a single scene."
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-accent" />,
      title: "Unique Every Time",
      desc: "Forget repetitive stock backgrounds. Every scene is generated individually to match your brand's specific style."
    },
    {
      icon: <Monitor className="w-6 h-6 text-brand-accent" />,
      title: "Omnichannel Consistency",
      desc: "We create a 'Single Source of Truth'—a master 3D model ensuring perfect color accuracy across your website, AR apps, and advertising."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-accent" />,
      title: "Simplified Communication",
      desc: "A streamlined 5-step process that eliminates guesswork. Clear milestones from brief to final delivery."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Technology Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="text-left">
                <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">The Technology</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Controlled Innovation: <br/>Why Our Approach Wins</h3>
                <h4 className="text-xl font-semibold text-white mb-4">Total Control Over the Chaos</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">
                    Using "raw" AI tools often yields unpredictable, hallucinated results. We solve this by leveraging our deep 3D background.
                </p>
                
                <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-purple/20 p-2 rounded text-brand-purple"><Sparkles className="w-5 h-5" /></div>
                        <div>
                            <strong className="text-white block">AI for Atmosphere</strong>
                            <span className="text-slate-400 text-sm">We use AI to generate unique, atmospheric interiors and environments.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-accent/20 p-2 rounded text-brand-accent"><Box className="w-5 h-5" /></div>
                        <div>
                            <strong className="text-white block">3D for Precision</strong>
                            <span className="text-slate-400 text-sm">Our professional artists integrate your product with jewelry-like precision. We control the geometry, scale, and materials 100%.</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                    <p className="text-slate-200 font-medium">
                        "The Result: You get the emotional impact of a creative photoshoot with the technical accuracy of an engineering file."
                    </p>
                </div>
            </div>

            {/* Visual Cue - Comparison */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-[500px] shadow-2xl">
                 <div className="absolute inset-0 flex">
                     <div className="w-1/2 bg-slate-800 relative overflow-hidden">
                         <img src="https://picsum.photos/seed/bad/600/800" alt="Raw AI" className="object-cover w-full h-full opacity-40 blur-sm grayscale" />
                         <div className="absolute inset-0 flex items-center justify-center">
                             <span className="bg-red-900/80 text-red-100 px-4 py-2 rounded font-bold text-sm">Raw AI</span>
                         </div>
                     </div>
                     <div className="w-1/2 bg-slate-900 relative overflow-hidden">
                         <img src="https://picsum.photos/seed/good/600/800" alt="3Devision Process" className="object-cover w-full h-full" />
                         <div className="absolute inset-0 flex items-center justify-center">
                             <span className="bg-emerald-900/80 text-emerald-100 px-4 py-2 rounded font-bold text-sm">3Devision</span>
                         </div>
                     </div>
                 </div>
                 <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm p-4 text-center">
                     <p className="text-xs text-white uppercase tracking-widest font-bold">Process Comparison</p>
                 </div>
            </div>
        </div>

        {/* Benefits Section */}
        <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">The 3Devision Advantage</h2>
            <div className="h-1 w-20 bg-brand-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {benefits.map((adv, idx) => (
            <div key={idx} className="bg-brand-bg p-8 rounded-2xl border border-slate-800 hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                {adv.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{adv.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;