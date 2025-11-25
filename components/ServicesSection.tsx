import React from 'react';
import { Settings, Image, Play, Box } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "AI-Powered Lifestyle Rendering",
      desc: "Instantly place your 3D product into ideal, customizable, photorealistic environments without expensive staging.",
      icon: <Image className="w-8 h-8" />,
      img: "https://picsum.photos/seed/interior/400/300"
    },
    {
      title: "Interactive 3D Configurators",
      desc: "Allow B2B buyers to configure products and get real-time pricing, accelerating sales cycles.",
      icon: <Settings className="w-8 h-8" />,
      img: "https://picsum.photos/seed/car/400/300"
    },
    {
      title: "High-Impact Product Animation",
      desc: "Dynamic animations to explain complex functions, ideal for machinery and medical equipment.",
      icon: <Play className="w-8 h-8" />,
      img: "https://picsum.photos/seed/robot/400/300"
    },
    {
      title: "AR/VR Ready Digital Assets",
      desc: "Future-proof content optimized for Augmented Reality, reducing product returns by up to 30%.",
      icon: <Box className="w-8 h-8" />,
      img: "https://picsum.photos/seed/vr/400/300"
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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10 transition-opacity duration-300" />
              
              <img 
                src={service.img} 
                alt={service.title}
                className="w-full h-64 object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="w-14 h-14 rounded-full bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 flex items-center justify-center mb-4 text-brand-accent">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-400 max-w-md">{service.desc}</p>
                <div className="mt-6 w-full h-px bg-slate-800 group-hover:bg-brand-accent/50 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;