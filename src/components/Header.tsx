import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Sparkles, Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
  photoUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, photoUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Strategy', href: '#strategy' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Figma Inspector', href: '#design-system' },
    { name: 'Skills', href: '#skills' },
    { name: 'Credentials', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060D1F]/85 backdrop-blur-xl border-b border-sky-500/20 shadow-2xl shadow-sky-950/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0B132B] border border-sky-500/30 overflow-hidden flex items-center justify-center text-white font-mono font-bold text-sm shrink-0 rounded-lg">
              {photoUrl || personalInfo.profileImage ? (
                <img
                  src={photoUrl || personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                'KS'
              )}
            </div>
            <a href="#" className="flex flex-col group">
              <span className="text-white font-bold text-sm tracking-tight group-hover:text-sky-300 transition-colors">
                {personalInfo.fullName}
              </span>
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse inline-block shadow-[0_0_8px_#38BDF8]" />
                UI/UX & AI/DS
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0B132B]/80 backdrop-blur-md px-3 py-1.5 border border-sky-500/20 rounded-full shadow-lg shadow-sky-950/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-sky-300 hover:bg-sky-500/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0B132B] hover:bg-[#121E42] border border-sky-500/25 hover:border-sky-400 text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 rounded-lg shadow-sm"
              title="View Extracted CV & Print"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume PDF</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-[#0B132B] text-white border border-sky-500/30 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5 text-sky-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070D1E] border-b border-sky-500/20 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slate-200 bg-[#0B132B] border border-sky-500/20 hover:border-sky-400 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-sky-500/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0B132B] border border-sky-500/30 text-white text-xs font-mono uppercase tracking-wider rounded-lg"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Extracted Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-lg"
            >
              <span>Contact Shivamani</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
