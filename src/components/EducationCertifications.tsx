import React from 'react';
import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award, ShieldCheck, Cpu, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#050811] border-y border-sky-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0B132B] border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-widest rounded-full">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            <span>Academic Standing & Recognized Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Verified academic qualification at Kakinada Institute of Engineering & Technology alongside national discipline & AI adoption certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Card Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all relative group">

              <div className="flex items-start justify-between pb-6 border-b border-sky-500/20 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono px-3 py-1 bg-[#050811] text-sky-300 border border-sky-500/30 uppercase tracking-wider font-bold rounded-full">
                    Bachelor of Technology (B.Tech)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white pt-2 group-hover:text-sky-300 transition-colors">
                    {education.institution}
                  </h3>
                  <p className="text-sm text-sky-300 font-mono">
                    Specialization: {education.specialization}
                  </p>
                </div>

                <div className="p-3 bg-[#050811] border border-sky-500/30 text-sky-400 rounded-xl shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              {/* Education Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-sky-500/20">
                <div className="space-y-1">
                  <span className="text-xs text-sky-400 font-mono uppercase flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    Duration
                  </span>
                  <p className="text-sm font-bold text-white font-mono">{education.duration}</p>
                  <p className="text-[10px] text-slate-400">Final-Year Student</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-sky-400 font-mono uppercase flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-sky-400" />
                    Academic CGPA
                  </span>
                  <p className="text-sm font-bold text-white font-mono">{education.cgpa}</p>
                  <p className="text-[10px] text-slate-400">Scale of 10.0</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-sky-400 font-mono uppercase flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    Location
                  </span>
                  <p className="text-xs font-bold text-slate-200">{education.location}</p>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="pt-4 space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block">
                  Curriculum & Specialization Alignment:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Combining AI & Data Science coursework with self-directed UI/UX product design methodologies, wireframing, and interactive prototyping.
                </p>
              </div>

            </div>
          </div>

          {/* Certifications Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <Award className="w-5 h-5 text-sky-400" />
              <span>Verified Certifications</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 bg-[#050811] text-sky-300 border border-sky-500/30 font-bold uppercase tracking-wider rounded-full">
                        {cert.badgeText}
                      </span>
                      <h4 className="text-base font-bold text-white pt-1">{cert.title}</h4>
                      <p className="text-xs text-sky-300 font-mono">{cert.issuer}</p>
                    </div>

                    <div className="p-2.5 bg-[#050811] border border-sky-500/30 text-sky-400 rounded-xl shrink-0">
                      {cert.id === 'ncc-c' ? <ShieldCheck className="w-5 h-5 text-sky-400" /> : <Cpu className="w-5 h-5 text-sky-400" />}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {cert.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono uppercase font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
