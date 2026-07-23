import React, { useState } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Layers, Smartphone, Monitor, Figma, Eye, ArrowRight, ShieldCheck, Sparkles, ExternalLink, Github, BarChart3 } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'wireframes' | 'prototype' | 'outcomes'>('overview');
  const [prototypeScreen, setPrototypeScreen] = useState<number>(0);

  const mobileScreens = [
    { name: '01. Onboarding & User Persona Flow', bg: 'from-sky-950 to-slate-900', label: 'User Persona Context & Goals' },
    { name: '02. Wireframe & Auto Layout Grid', bg: 'from-blue-950 to-slate-900', label: 'Responsive Mobile Grid System' },
    { name: '03. Interactive Prototype State', bg: 'from-slate-900 to-sky-950', label: 'Clickable Micro-Interactions' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-lg animate-fadeIn">
      <div
        className="bg-[#0B132B] border border-sky-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col relative shadow-[0_0_50px_rgba(56,189,248,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#0B132B]/95 backdrop-blur-md border-b border-sky-500/20 p-5 sm:p-6 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-0.5 bg-[#050811] text-sky-300 border border-sky-500/30 rounded-full font-bold">
                {project.category}
              </span>
              <span className="text-xs text-sky-400 font-mono">Figma Case Study</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{project.title}</h2>
            <p className="text-xs text-slate-300">{project.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#050811] hover:bg-[#121E42] border border-sky-500/30 text-sky-300 text-xs font-mono uppercase rounded-lg transition-colors"
                title="Open Figma File"
              >
                <Figma className="w-3.5 h-3.5" />
                <span>Figma</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#050811] hover:bg-[#121E42] border border-sky-500/30 text-slate-300 text-xs font-mono uppercase rounded-lg transition-colors"
                title="Open GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 bg-[#050811] border border-sky-500/30 text-slate-300 hover:text-sky-300 rounded-xl transition-colors"
              aria-label="Close Case Study Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Sub-Navigation */}
        <div className="bg-[#050811] px-6 py-2.5 border-b border-sky-500/20 flex items-center gap-2 overflow-x-auto text-xs font-mono uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'overview'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            Overview & Metrics
          </button>
          <button
            onClick={() => setActiveTab('wireframes')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'wireframes'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            Design Methods & Wireframes
          </button>
          <button
            onClick={() => setActiveTab('prototype')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'prototype'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            Interactive Prototype Simulator
          </button>
          <button
            onClick={() => setActiveTab('outcomes')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'outcomes'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            Key Outcomes & Accessibility
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 space-y-6">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 bg-[#050811] border border-sky-500/20 rounded-xl space-y-1">
                      <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase">
                        <span>{m.label}</span>
                        <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
                      </div>
                      <div className="text-lg font-bold text-white font-mono">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 font-mono">Case Study Description</h3>
                <p className="text-slate-200 text-sm leading-relaxed bg-[#050811] p-4 border border-sky-500/20 rounded-xl">
                  {project.description}
                </p>
              </div>

              {project.extendedOverview && (
                <div>
                  <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>In-Depth Design Rationale</span>
                  </h3>
                  <p className="text-slate-200 text-xs leading-relaxed bg-[#050811] p-4 border border-sky-500/20 rounded-xl">
                    {project.extendedOverview}
                  </p>
                </div>
              )}

              {/* Exact Extracted Deliverables */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Exact Deliverables Audit</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-[#050811] border border-sky-500/20 rounded-xl flex items-start gap-3">
                      <span className="p-1 bg-[#0B132B] border border-sky-500/30 text-sky-300 text-xs font-mono rounded">0{idx + 1}</span>
                      <p className="text-xs text-slate-200 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">Tools & Techniques Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#050811] text-slate-200 text-xs font-mono uppercase tracking-wider border border-sky-500/20 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wireframes' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">Design Methodology</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {project.designMethods.map((method, idx) => (
                    <div key={idx} className="p-3 bg-[#050811] border border-sky-500/20 rounded-xl flex items-center gap-2 text-xs text-slate-200 font-mono uppercase">
                      <Layers className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{method}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">Wireframe Structures</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.wireframeTypes.map((type, idx) => (
                    <div key={idx} className="p-4 bg-[#050811] border border-sky-500/20 rounded-xl space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-white uppercase font-mono">
                        <span>{type}</span>
                        <span className="text-[10px] text-sky-400">Figma Frame</span>
                      </div>
                      <p className="text-xs text-slate-400">Low & High-Fidelity wireframe structure crafted using Auto Layout and reusable components.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'prototype' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Figma Prototype Simulation</h3>
                  <p className="text-xs text-slate-400">Interactive frame switcher reflecting Figma component states</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#050811] border border-sky-500/30 text-sky-300 text-xs font-mono uppercase rounded-full">
                  <Figma className="w-3.5 h-3.5 text-sky-400" />
                  <span>Figma Interactive Preview</span>
                </span>
              </div>

              {/* Interactive Prototype Mockup Simulator */}
              <div className="p-6 bg-[#050811] border border-sky-500/20 rounded-2xl space-y-4">
                <div className="flex gap-2 border-b border-sky-500/20 pb-3 font-mono text-xs uppercase">
                  {mobileScreens.map((scr, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPrototypeScreen(idx)}
                      className={`px-3.5 py-1.5 rounded-lg transition-all ${
                        prototypeScreen === idx
                          ? 'bg-sky-500 text-white font-bold shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                          : 'bg-[#0B132B] text-slate-400 border border-sky-500/20 hover:text-sky-300'
                      }`}
                    >
                      Screen {idx + 1}
                    </button>
                  ))}
                </div>

                <div className="p-8 bg-[#0B132B] border border-sky-500/30 rounded-xl text-center space-y-4 min-h-[220px] flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="p-3 bg-[#050811] border border-sky-500/30 text-sky-400 rounded-xl">
                    {project.prototypeMockupType === 'mobile' ? <Smartphone className="w-8 h-8" /> : <Monitor className="w-8 h-8" />}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">{mobileScreens[prototypeScreen].name}</h4>
                    <p className="text-xs text-slate-400">{mobileScreens[prototypeScreen].label}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-[#050811] border border-sky-500/20 px-3 py-1 font-mono uppercase rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Auto Layout & Responsive Component Verified</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'outcomes' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">Key Project Outcomes</h3>
                <div className="space-y-2.5">
                  {project.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="p-3.5 bg-[#050811] border border-sky-500/20 rounded-xl flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">Accessibility & UI Principles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.accessibilityFocus.map((acc, idx) => (
                    <div key={idx} className="p-3 bg-[#050811] border border-sky-500/20 rounded-xl flex items-center gap-2 text-xs text-slate-200 font-mono uppercase">
                      <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{acc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#050811] border-t border-sky-500/20 flex items-center justify-between rounded-b-2xl">
          <span className="text-xs text-slate-400 font-mono">Source: Extracted Resume Document for Shivamani</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
