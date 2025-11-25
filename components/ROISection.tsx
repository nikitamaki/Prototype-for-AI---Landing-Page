import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ROISection: React.FC = () => {
  const data = [
    { name: 'Traditional', conversion: 25, cost: 100 },
    { name: '3Devision', conversion: 94, cost: 30 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 p-4 rounded shadow-xl">
          <p className="font-bold text-white mb-2">{label}</p>
          <p className="text-brand-accent text-sm">Conversion Score: {payload[0].value}</p>
          <p className="text-emerald-400 text-sm">Relative Cost: {payload[1].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="roi" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold mb-6">
              See the Financial Impact: <br />
              <span className="text-emerald-400">Unprecedented ROI</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              The shift to our photorealistic AI product visualization agency model delivers demonstrable ROI for enterprise clients.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-4xl font-bold text-emerald-400">94%</div>
                <div>
                  <h4 className="font-bold text-white">Conversion Growth</h4>
                  <p className="text-slate-400 text-sm">Brands leveraging interactive 3D content see massive engagement spikes.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-4xl font-bold text-brand-accent">70%</div>
                <div>
                  <h4 className="font-bold text-white">Cost Savings</h4>
                  <p className="text-slate-400 text-sm">Proven process to cut visual production overhead drastically.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-10 w-full md:w-auto bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors">
              Calculate Your Savings
            </button>
          </div>

          <div className="h-[400px] w-full bg-brand-bg rounded-2xl p-6 border border-slate-800 shadow-2xl relative">
            <h3 className="text-left text-slate-400 text-sm mb-4 uppercase tracking-wider">Performance Comparison</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{fill: '#94a3b8'}} />
                <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8'}} />
                <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />} />
                <Bar dataKey="conversion" name="Conversion Rate" radius={[4, 4, 0, 0]}>
                   {data.map((entry, index) => (
                      <Cell key={`cell-conv-${index}`} fill={index === 1 ? '#34d399' : '#475569'} />
                    ))}
                </Bar>
                <Bar dataKey="cost" name="Production Cost" radius={[4, 4, 0, 0]}>
                   {data.map((entry, index) => (
                      <Cell key={`cell-cost-${index}`} fill={index === 1 ? '#38bdf8' : '#ef4444'} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4 text-xs text-slate-400">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-600 rounded-full"></div>Traditional</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-400 rounded-full"></div>3Devision Impact</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ROISection;