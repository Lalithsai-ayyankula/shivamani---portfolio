import React from 'react';
import { brandStrategy } from '../data/portfolioData';
import { Cpu, Figma, ShieldCheck, Zap, Compass, CheckCircle2 } from 'lucide-react';

export const BrandStrategy: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Figma':
        return <Figma className="w-5 h-5 text-sky-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      default:
        return <Zap className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="strategy" className="py-20 bg-[#050811] border-y border-sky-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0B132B] border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-widest rounded-full">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>Personal Brand Strategy & Positioning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Hire & Collaborate With Shivamani?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            An intersection of Artificial Intelligence & Data Science engineering rigor with human-centered UI/UX digital design execution.
          </p>
        </div>

        {/* Positioning & Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Professional Positioning */}
          <div className="p-6 sm:p-8 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl space-y-4 hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#050811] text-sky-400 border border-sky-500/30 rounded-lg">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Professional Positioning</h3>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed">
              {brandStrategy.professionalPositioning}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-sky-400 font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Final-Year B.Tech Student (2023–2027)</span>
            </div>
          </div>

          {/* Card 2: Unique Value Proposition */}
          <div className="p-6 sm:p-8 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl space-y-4 hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#050811] text-sky-400 border border-sky-500/30 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Unique Value Proposition</h3>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed">
              {brandStrategy.uniqueValueProposition}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-sky-400 font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Tested in Figma, FigJam, and User Research Case Studies</span>
            </div>
          </div>

        </div>

        {/* Top 3 Differentiators */}
        <div className="space-y-4">
          <div className="text-center space-y-1 mb-8">
            <h3 className="text-xl font-bold text-white">Top 3 Core Differentiators</h3>
            <p className="text-xs text-slate-400">Key strengths that distinguish Shivamani from standard designers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandStrategy.topDifferentiators.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0B132B]/80 backdrop-blur-xl border border-sky-500/20 rounded-2xl hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300 space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#050811] border border-sky-500/30 rounded-xl">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#050811] text-sky-400 border border-sky-500/30 rounded-full">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-500/20">
                  <span className="text-[11px] font-mono text-sky-300 flex items-center gap-1.5 uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.evidence}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
