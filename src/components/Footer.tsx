import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030712] border-t border-sky-500/20 py-12 relative text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sky-500/20">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white font-bold text-sm flex items-center justify-center font-mono shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              KS
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase">{personalInfo.fullName}</div>
              <div className="text-[11px] text-sky-400">UI/UX Designer & AI/DS Engineer</div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 uppercase tracking-wider text-[11px]">
            <a href="#strategy" className="hover:text-sky-300 transition-colors">Brand Strategy</a>
            <a href="#projects" className="hover:text-sky-300 transition-colors">Case Studies</a>
            <a href="#design-system" className="hover:text-sky-300 transition-colors">Design System</a>
            <a href="#skills" className="hover:text-sky-300 transition-colors">Skills</a>
            <a href="#education" className="hover:text-sky-300 transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0B132B] border border-sky-500/30 text-slate-300 hover:text-sky-400 rounded-xl transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0B132B] border border-sky-500/30 text-slate-300 hover:text-sky-400 rounded-xl transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 rounded-xl transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 uppercase">
          <div>
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with precision</span>
            <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400 inline" />
            <span>using React, Tailwind CSS, & Figma Tokens</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
