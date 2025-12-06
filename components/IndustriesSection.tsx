import React from 'react';

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      category: "Kitchen & Bath",
      items: ["Bathroom Vanities", "Faucets & Shower Systems", "Bathtubs & Toilets", "Shower Enclosures"]
    },
    {
      category: "Cabinetry",
      items: ["RTA & Custom Kitchen Cabinets", "Kitchen Islands", "Closet Systems & Wardrobes"]
    },
    {
      category: "Surfaces",
      items: ["Hardwood, Laminate, LVP", "Ceramic Tiles & Porcelain", "Wall Panels", "Exterior Siding"]
    },
    {
      category: "Contract Furniture",
      items: ["Office Workstations", "Office Seating", "Hospitality Furniture", "Outdoor Furniture"]
    },
    {
      category: "Lighting & Electrical",
      items: ["Pendants & Ceiling Lights", "Track Lighting", "Switches & Sockets"]
    },
    {
      category: "Hardware & Building",
      items: ["Door Hardware", "Cabinet Hardware", "Interior & Exterior Doors", "Windows & Garage Doors"]
    }
  ];

  return (
    <section className="py-20 bg-brand-bg border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
          <h2 className="text-2xl font-bold mb-8 text-left text-white border-b border-slate-800 pb-4 inline-block">
            Industries We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 text-left">
            {industries.map((ind, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-brand-accent mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                  {ind.category}
                </h3>
                <ul className="space-y-1.5">
                  {ind.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-slate-400 text-sm hover:text-slate-200 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;