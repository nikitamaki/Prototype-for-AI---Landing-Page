import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const d3Container = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!d3Container.current) return;

    const svg = d3.select(d3Container.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.attr("width", width).attr("height", height);

    // Create random nodes
    const nodeCount = 60;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.01,
      vy: (Math.random() - 0.5) * 0.01,
      r: Math.random() * 2 + 1
    }));

    // Simulation
    const simulation = d3.forceSimulation(nodes)
      .alphaDecay(0)
      .velocityDecay(0)
      .force("charge", d3.forceManyBody().strength(-0.1))
      .force("collision", d3.forceCollide().radius(1));

    // Draw elements
    const g = svg.append("g");
    
    // Lines group
    const linkGroup = g.append("g").attr("stroke", "#38bdf8").attr("stroke-opacity", 0.15).attr("stroke-width", 1);
    
    // Nodes group
    const nodeGroup = g.append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", "#818cf8")
      .attr("opacity", 0.6);

    simulation.on("tick", () => {
      // Boundary check
      nodes.forEach(node => {
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
        node.x += node.vx;
        node.y += node.vy;
      });

      nodeGroup
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      // Connect near nodes
      const links: any[] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            links.push({ source: nodes[i], target: nodes[j] });
          }
        }
      }

      const linkSelection = linkGroup.selectAll("line").data(links);
      linkSelection.enter().append("line")
        .merge(linkSelection as any)
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
      linkSelection.exit().remove();
    });

    const handleResize = () => {
        svg.attr("width", window.innerWidth).attr("height", window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      simulation.stop();
      window.removeEventListener('resize', handleResize);
      svg.selectAll("*").remove();
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden pt-20">
      <svg 
        ref={d3Container} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/0 via-brand-bg/50 to-brand-bg z-10" />

      <div className="relative z-20 container mx-auto px-6 text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-brand-accent text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Next-Gen Product Rendering
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight max-w-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          AI Technology + <br /> 
          Expert 3D Precision
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Create studio-quality photorealistic content for massive assortments. We combine the speed of AI with the control of professional 3D design to scale your visuals 10X faster than traditional photography.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <button className="group bg-brand-accent hover:bg-sky-400 text-brand-dark px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
            Get a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full font-semibold text-white border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-2">
             View Portfolio
             <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;