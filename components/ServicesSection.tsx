import React from 'react';
import { Settings, Image, Play, Box } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "AI-Powered Lifestyle Rendering",
      desc: "Instantly place your products into ideal, customizable, photorealistic environments.",
      icon: <Image className="w-8 h-8" />,
      img: "https://picsum.photos/seed/interior/400/600"
    },
    {
      title: "Interactive 3D Configurators",
      desc: "Allow B2B buyers to customize products, view real-time pricing, and preview in AR.",
      icon: <Settings className="w-8 h-8" />,
      img: "https://picsum.photos/seed/car/400/600"
    },
    {
      title: "High-Impact Product Animation",
      desc: "Dynamic 3D animations that explain complex functions—ideal for machinery, tech, and medical equipment.",
      icon: <Play className="w-8 h-8" />,
      img: "https://picsum.photos/seed/robot/400/600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">
          Specialized Services for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-purple">
            High-Value E-commerce
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 min-h-[500px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10 transition-opacity duration-300" />
              
              <img 
                src={service.img} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="relative p-8 z-20 w-full">
                <div className="w-14 h-14 rounded-full bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 flex items-center justify-center mb-6 text-brand-accent">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 opacity-90">{service.desc}</p>
                <div className="w-full h-px bg-slate-700 group-hover:bg-brand-accent/50 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;