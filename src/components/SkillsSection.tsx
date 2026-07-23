import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Layers, Figma, Code, Wrench, HeartHandshake, CheckCircle2, Sparkles, Star } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory === 'all') return true;
    return cat.categoryName.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Design Tools')) return <Figma className="w-5 h-5 text-sky-400" />;
    if (categoryName.includes('UI/UX')) return <Layers className="w-5 h-5 text-sky-400" />;
    if (categoryName.includes('Frontend')) return <Code className="w-5 h-5 text-sky-400" />;
    if (categoryName.includes('Tools')) return <Wrench className="w-5 h-5 text-sky-400" />;
    return <HeartHandshake className="w-5 h-5 text-sky-400" />;
  };

  return (
    <section id="skills" className="py-24 bg-[#030712] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0B132B] border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-widest rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Extracted Skill Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical & Methodological Competencies
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Grouped skills extracted directly from Shivamani's resume, covering UI/UX methodologies, design tools, frontend technologies, and core soft strengths.
            </p>
          </div>

          {/* Skill Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0B132B] border border-sky-500/20 text-xs font-mono uppercase tracking-wider rounded-xl shadow-lg">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-slate-400 hover:text-sky-300 hover:bg-sky-500/10'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setSelectedCategory('UI/UX')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                selectedCategory === 'UI/UX'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-slate-400 hover:text-sky-300 hover:bg-sky-500/10'
              }`}
            >
              UI/UX Skills
            </button>
            <button
              onClick={() => setSelectedCategory('Design Tools')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                selectedCategory === 'Design Tools'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-slate-400 hover:text-sky-300 hover:bg-sky-500/10'
              }`}
            >
              Design Tools
            </button>
            <button
              onClick={() => setSelectedCategory('Strengths')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                selectedCategory === 'Strengths'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-slate-400 hover:text-sky-300 hover:bg-sky-500/10'
              }`}
            >
              Strengths
            </button>
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.18)] transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-sky-500/20">
                  <div className="p-2.5 bg-[#050811] border border-sky-500/30 rounded-xl">
                    {getCategoryIcon(cat.categoryName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">{cat.categoryName}</h3>
                    <p className="text-[11px] text-slate-400">{cat.description}</p>
                  </div>
                </div>

                {/* Skill Pills Matrix */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                        skill.highlight
                          ? 'bg-sky-500 text-white font-bold shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                          : 'bg-[#050811] text-slate-300 border border-sky-500/20 hover:border-sky-400/40'
                      }`}
                    >
                      {skill.highlight && <Star className="w-3 h-3 text-white fill-white shrink-0" />}
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#0B132B] text-sky-300 border border-sky-500/30 rounded-full ml-1">
                          {skill.tag}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-sky-500/20 flex items-center justify-between text-[11px] text-slate-400 font-mono uppercase">
                <span>{cat.skills.length} skills listed</span>
                <span className="text-sky-400 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
