import React from 'react';
import { personalInfo, professionalSummary, brandStrategy } from '../data/portfolioData';
import { ArrowRight, Sparkles, Figma, Award, ShieldCheck, Cpu, MapPin, Mail, Phone, Linkedin, Github, FileText } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  photoUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, photoUrl }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#030712]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B132B] border border-sky-500/30 text-sky-300 text-[11px] font-mono uppercase tracking-wider rounded-full shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span>Final-Year B.Tech AI & Data Science</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0B132B] border border-emerald-500/30 text-emerald-300 text-[11px] font-mono uppercase tracking-wider rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for UI/UX Roles & Projects</span>
              </span>
            </div>

            {/* Title & Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">{personalInfo.fullName}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-200 tracking-tight">
                UI/UX Designer specializing in intuitive digital products & user research
              </p>
            </div>

            {/* Personal Brand Statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {brandStrategy.personalBrandStatement}
            </p>

            {/* Quick Contact & Location Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1.5 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.phone}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 rounded-xl shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#design-system"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#0B132B] hover:bg-[#121E42] border border-sky-500/30 hover:border-sky-400 text-slate-200 font-mono text-xs uppercase tracking-wider transition-all duration-200 rounded-xl shadow-md transform hover:-translate-y-0.5"
              >
                <Figma className="w-4 h-4 text-sky-400" />
                <span>Design System Inspector</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#0B132B] hover:bg-[#121E42] border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 rounded-xl"
                title="View Resume Document"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Social Links:</span>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#0B132B] border border-sky-500/20 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all rounded-lg"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#0B132B] border border-sky-500/20 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all rounded-lg"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Hero Column with Profile Photo Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Profile Photo Display Card */}
            <div className="p-5 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/25 rounded-2xl relative group shadow-[0_0_30px_rgba(56,189,248,0.12)] hover:border-sky-400/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                
                {/* Photo Frame Container */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 shrink-0 border-2 border-sky-500/40 bg-[#050811] p-1 group-hover:border-sky-400 transition-all overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={photoUrl || personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to imported default photo if url load fails
                      const target = e.target as HTMLImageElement;
                      if (target.src !== personalInfo.profileImage) {
                        target.src = personalInfo.profileImage;
                      }
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />
                </div>

                {/* Photo Meta */}
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#050811] border border-sky-500/30 text-[10px] font-mono text-sky-300 uppercase tracking-wider rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Official Profile Photo</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{personalInfo.fullName}</h3>
                    <p className="text-xs text-sky-400 font-mono">{personalInfo.professionalTitle}</p>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-tight">
                    B.Tech AI & Data Science Specialist & Figma Digital Product Designer
                  </p>
                </div>

              </div>
            </div>

            {/* Highlights Card */}
            <div className="p-6 bg-[#0B132B]/80 backdrop-blur-xl border border-sky-500/20 rounded-2xl relative overflow-hidden group shadow-xl">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-sky-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#050811] border border-sky-500/30 text-sky-400 rounded-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Verified Career Evidence</h3>
                    <p className="text-xs text-slate-400">Key achievements & academic standing</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-[#050811] border border-sky-500/30 text-sky-300 rounded-full font-bold">Extracted Data</span>
              </div>

              {/* Metric Items Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-[#050811] border border-sky-500/20 rounded-xl space-y-1 hover:border-sky-400/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono uppercase">
                    <span>CGPA Academic</span>
                    <Award className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-xl font-bold text-white">7.6 <span className="text-xs font-normal text-slate-400">/ 10</span></div>
                  <div className="text-[10px] text-slate-400 font-mono">B.Tech AI & Data Science</div>
                </div>

                <div className="p-3.5 bg-[#050811] border border-sky-500/20 rounded-xl space-y-1 hover:border-sky-400/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono uppercase">
                    <span>Discipline</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-lg font-bold text-white">NCC 'C'</div>
                  <div className="text-[10px] text-slate-400 font-mono">Certificate Holder</div>
                </div>

                <div className="p-3.5 bg-[#050811] border border-sky-500/20 rounded-xl space-y-1 hover:border-sky-400/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono uppercase">
                    <span>AI Program</span>
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-sm font-bold text-white">X Factor 21-Day</div>
                  <div className="text-[10px] text-slate-400 font-mono">AI Adoption Certified</div>
                </div>

                <div className="p-3.5 bg-[#050811] border border-sky-500/20 rounded-xl space-y-1 hover:border-sky-400/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono uppercase">
                    <span>Core Tool</span>
                    <Figma className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-sm font-bold text-white">Figma & FigJam</div>
                  <div className="text-[10px] text-slate-400 font-mono">Prototyping & Layouts</div>
                </div>
              </div>

              {/* Institution Tag */}
              <div className="mt-4 pt-3 border-t border-sky-500/20 flex items-center justify-between text-xs text-slate-400">
                <span className="truncate">Kakinada Institute of Engineering & Tech</span>
                <span className="font-mono text-sky-400 font-semibold">2023–2027</span>
              </div>
            </div>

            {/* Quick UX Philosophy Card */}
            <div className="p-4 bg-[#0B132B]/80 backdrop-blur-md border border-sky-500/20 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-[#050811] border border-sky-500/30 text-sky-400 rounded-lg shrink-0">
                <Figma className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-0.5">
                <div className="font-mono uppercase text-[11px] text-sky-300 font-bold">UI/UX Specialty Focus</div>
                <div className="text-slate-300 leading-snug">
                  Wireframing, High-Fi Prototyping, Design Systems, Auto Layout, Components & Variants, User Personas, and Usability Principles.
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
