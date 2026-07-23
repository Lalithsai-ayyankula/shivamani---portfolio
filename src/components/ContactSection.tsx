import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Sparkles, Copy, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const copyValue = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0B132B] border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-widest rounded-full">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Direct Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Impactful UI/UX Products Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Open for full-time UI/UX design roles, internships, design system projects, and creative collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white font-mono uppercase border-b border-sky-500/20 pb-4">
                Verified Contact Info
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 bg-[#050811] border border-sky-500/20 rounded-xl flex items-center justify-between group hover:border-sky-400/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#0B132B] border border-sky-500/30 text-sky-400 rounded-lg">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono uppercase">Email Address</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-white hover:text-sky-300 transition-colors font-mono">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyValue(personalInfo.email, 'Email')}
                    className="p-2 bg-[#0B132B] border border-sky-500/30 text-slate-300 hover:text-sky-400 rounded-lg transition-colors"
                    title="Copy Email"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 bg-[#050811] border border-sky-500/20 rounded-xl flex items-center justify-between group hover:border-sky-400/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#0B132B] border border-sky-500/30 text-sky-400 rounded-lg">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono uppercase">Phone Number</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs font-bold text-white hover:text-sky-300 transition-colors font-mono">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyValue(personalInfo.phone, 'Phone')}
                    className="p-2 bg-[#0B132B] border border-sky-500/30 text-slate-300 hover:text-sky-400 rounded-lg transition-colors"
                    title="Copy Phone"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 bg-[#050811] border border-sky-500/20 rounded-xl flex items-center gap-3">
                  <div className="p-2.5 bg-[#0B132B] border border-sky-500/30 text-sky-400 rounded-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono uppercase">Location</div>
                    <div className="text-xs font-bold text-white font-mono">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-sky-500/20 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block">Professional Profiles:</span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#050811] border border-sky-500/20 hover:border-sky-400/50 rounded-xl flex items-center justify-between text-xs font-mono uppercase tracking-wider text-white transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-sky-400" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300 transition-colors" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#050811] border border-sky-500/20 hover:border-sky-400/50 rounded-xl flex items-center justify-between text-xs font-mono uppercase tracking-wider text-white transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-sky-400" />
                      GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300 transition-colors" />
                  </a>
                </div>
              </div>

              {copiedField && (
                <div className="p-2.5 bg-[#050811] border border-sky-500/30 text-sky-300 text-xs text-center font-mono uppercase tracking-wider rounded-xl animate-pulse">
                  Copied {copiedField} to clipboard!
                </div>
              )}
            </div>
          </div>

          {/* Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white font-mono uppercase">Send Direct Message</h3>
                <p className="text-xs text-slate-400">Reach out directly to Shivamani regarding UI/UX opportunities</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#050811] border border-sky-500/30 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white font-mono uppercase">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Shivamani will respond to your inquiry at <span className="font-mono text-sky-300">{personalInfo.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-sky-400 font-medium block">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Hiring Manager / Founder"
                        className="w-full px-3.5 py-2.5 bg-[#050811] border border-sky-500/20 rounded-xl text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-sky-400 font-medium block">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-3.5 py-2.5 bg-[#050811] border border-sky-500/20 rounded-xl text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-sky-400 font-medium block">Subject / Role *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="UI/UX Designer Role / Figma Project Collaboration"
                      className="w-full px-3.5 py-2.5 bg-[#050811] border border-sky-500/20 rounded-xl text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-sky-400 font-medium block">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discussing opportunities, user experience case studies, or design systems..."
                      className="w-full px-3.5 py-2.5 bg-[#050811] border border-sky-500/20 rounded-xl text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Shivamani</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
