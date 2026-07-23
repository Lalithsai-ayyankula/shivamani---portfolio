import React from 'react';
import { personalInfo, professionalSummary, projects, skillCategories, education, certifications } from '../data/portfolioData';
import { X, Printer, Download, CheckCircle2, FileText, ExternalLink, ShieldCheck, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
      <div
        className="bg-[#050505] border border-[#1F1F22] w-full max-w-4xl max-h-[92vh] overflow-y-auto flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#050505] border-b border-[#1F1F22] p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-white" />
            <h2 className="text-base font-bold text-white font-mono uppercase">Extracted Resume Document (CV)</h2>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#0F0F10] text-[#71717A] border border-[#1F1F22] font-bold">
              100% Verified Truth
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0F0F10] border border-[#1F1F22] hover:bg-[#151518] text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-[#0F0F10] border border-[#1F1F22] text-[#71717A] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="p-8 sm:p-12 bg-white text-slate-900 space-y-8 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="text-center space-y-2 border-b border-slate-300 pb-6">
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-slate-900 font-mono">
              {personalInfo.fullName}
            </h1>
            <p className="text-sm text-slate-700 font-medium">
              {personalInfo.location} | {personalInfo.phone} | {personalInfo.email}
            </p>
            <div className="flex justify-center items-center gap-4 text-xs font-medium text-slate-600">
              <span>LinkedIn: {personalInfo.linkedIn}</span>
              <span>•</span>
              <span>GitHub: {personalInfo.github}</span>
            </div>
          </div>

          {/* Professional Summary Section */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-800 pb-1 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed">
              {professionalSummary.bio}
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-800 pb-1 font-mono">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
              <div>
                <span className="font-bold">Design Tools: </span>
                Figma, Canva, FigJam
              </div>
              <div>
                <span className="font-bold">UI/UX Skills: </span>
                User Research, User Personas, User Flow, Information Architecture, Wireframing, Low-Fidelity Wireframes, High-Fidelity UI Design, Interactive Prototyping, Design Systems, Auto Layout, Components & Variants, Responsive Design, Usability Testing
              </div>
              <div>
                <span className="font-bold">Frontend: </span>
                HTML, CSS
              </div>
              <div>
                <span className="font-bold">Tools: </span>
                VS Code, Git, GitHub
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-800 pb-1 font-mono">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-900 font-mono">{proj.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-800">
                    {proj.deliverables.map((deliv, idx) => (
                      <li key={idx}>{deliv}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-800 pb-1 font-mono">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <div className="font-bold text-slate-900">{education.institution}</div>
                <div className="text-slate-700">{education.degree} ({education.specialization})</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-slate-700">{education.duration}</div>
                <div className="font-bold text-slate-900">CGPA: {education.cgpa}</div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-800 pb-1 font-mono">
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-800">
              {certifications.map((cert) => (
                <li key={cert.id}>
                  <span className="font-bold">{cert.title}</span> — {cert.issuer} ({cert.type})
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths Section */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-800 pb-1 font-mono">
              Strengths
            </h2>
            <div className="grid grid-cols-3 gap-2 text-xs text-slate-800">
              <div>• User-Centered Thinking</div>
              <div>• Attention to Detail</div>
              <div>• Communication Skills</div>
              <div>• Creativity</div>
              <div>• Visual Design</div>
              <div>• Time Management</div>
              <div>• Problem Solving</div>
              <div>• Team Collaboration</div>
              <div>• Continuous Learning</div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#050505] border-t border-[#1F1F22] flex justify-between items-center text-xs text-[#71717A] font-mono uppercase">
          <span>Source: Document Attachment Audit for Shivamani</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};
