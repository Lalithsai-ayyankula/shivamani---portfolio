import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import {
  Figma,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Eye,
  Smartphone,
  LayoutGrid,
  Search,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  BarChart3,
  Share2,
  Grid,
  List,
  Monitor,
  Zap,
  CheckCircle
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [activeScreenIndexMap, setActiveScreenIndexMap] = useState<Record<string, number>>({});

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyLink = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}#project-${project.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedId(project.id);
    showToast(`Copied link for "${project.title}" to clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (projectId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedCardId((prev) => (prev === projectId ? null : projectId));
  };

  const handleScreenChange = (projectId: string, screenIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveScreenIndexMap((prev) => ({ ...prev, [projectId]: screenIdx }));
  };

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeFilter === 'all' ||
      (activeFilter === 'mobile' && p.prototypeMockupType === 'mobile') ||
      (activeFilter === 'desktop' && p.prototypeMockupType === 'desktop') ||
      (activeFilter === 'casestudy' && p.prototypeMockupType === 'casestudy');

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.technologies.some((t) => t.toLowerCase().includes(query)) ||
      p.designMethods.some((m) => m.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const getScreenDetails = (project: Project, idx: number) => {
    const screens = [
      {
        name: 'Screen 01: Information Architecture & Flows',
        tag: 'User Flow',
        desc: 'Mapped high-level user goals, wireframe structures, and navigational entry points.'
      },
      {
        name: 'Screen 02: Auto Layout Grid & Variants',
        tag: 'Design System',
        desc: 'Standardized 8pt spatial grid, typography hierarchy, and flexible button component states.'
      },
      {
        name: 'Screen 03: High-Fidelity Clickable Prototype',
        tag: 'Micro-Interactions',
        desc: 'Interactive Figma prototype with instant feedback loops and accessibility contrast auditing.'
      }
    ];
    return screens[idx % screens.length];
  };

  return (
    <section id="projects" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Toast Notification Floating Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#0B132B] border border-sky-400/60 text-white font-mono text-xs rounded-xl shadow-[0_0_25px_rgba(56,189,248,0.4)] animate-bounce">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0B132B] border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-widest rounded-full">
              <Figma className="w-3.5 h-3.5 text-sky-400" />
              <span>Interactive UI/UX Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured UI/UX Projects
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore interactive Figma design systems, wireframes, and responsive product prototypes. Hover or click any card to reveal in-depth design metrics, live demos, and outcomes.
            </p>
          </div>

          {/* Search & View Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tools..."
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#0B132B] border border-sky-500/20 focus:border-sky-400 text-xs font-mono text-white placeholder-slate-500 rounded-xl outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-[#0B132B] border border-sky-500/20 rounded-xl shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-sky-300'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'compact'
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-sky-300'
                }`}
                title="Compact List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-sky-500/20">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono uppercase tracking-wider py-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-[#0B132B] text-slate-400 hover:text-sky-300 hover:bg-sky-500/10 border border-sky-500/20'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeFilter === 'mobile'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-[#0B132B] text-slate-400 hover:text-sky-300 hover:bg-sky-500/10 border border-sky-500/20'
              }`}
            >
              Mobile App
            </button>
            <button
              onClick={() => setActiveFilter('desktop')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeFilter === 'desktop'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-[#0B132B] text-slate-400 hover:text-sky-300 hover:bg-sky-500/10 border border-sky-500/20'
              }`}
            >
              Website UI
            </button>
            <button
              onClick={() => setActiveFilter('casestudy')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeFilter === 'casestudy'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-[#0B132B] text-slate-400 hover:text-sky-300 hover:bg-sky-500/10 border border-sky-500/20'
              }`}
            >
              Case Studies
            </button>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Showing <span className="text-sky-300 font-bold">{filteredProjects.length}</span> of {projects.length} project cards
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-[#0B132B]/60 border border-sky-500/20 rounded-2xl space-y-4">
            <Search className="w-8 h-8 text-sky-400 mx-auto opacity-60" />
            <h3 className="text-lg font-bold text-white">No matching projects found</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try adjusting your search keywords or switching category filters to discover Shivamani's UI/UX case studies.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-sky-500 text-white text-xs font-mono uppercase font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Cards Grid */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start'
              : 'space-y-6'
          }
        >
          {filteredProjects.map((project) => {
            const isExpanded = expandedCardId === project.id;
            const currentScreenIdx = activeScreenIndexMap[project.id] || 0;
            const activeScreen = getScreenDetails(project, currentScreenIdx);

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                onClick={() => toggleExpand(project.id)}
                className={`bg-[#0B132B]/90 backdrop-blur-xl border transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between relative ${
                  isExpanded
                    ? 'border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.3)] ring-1 ring-sky-400/50'
                    : 'border-sky-500/20 hover:border-sky-400/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.22)] hover:-translate-y-1'
                }`}
              >
                {/* Top Subtle Hover Banner */}
                <div className="px-6 pt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-sky-500/10 pb-3">
                  <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
                    <Zap className="w-3 h-3 text-sky-400" />
                    <span>{project.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline text-slate-500 group-hover:text-sky-300 transition-colors">
                      {isExpanded ? 'Click to collapse' : 'Click to inspect inline'}
                    </span>
                    <button
                      onClick={(e) => toggleExpand(project.id, e)}
                      className="p-1 bg-[#050811] text-sky-300 hover:text-white border border-sky-500/30 rounded-md transition-colors"
                      title={isExpanded ? 'Collapse Card' : 'Expand Card'}
                    >
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 space-y-4">
                  {/* Title & Category Badge */}
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <div className="p-2 bg-[#050811] text-sky-400 border border-sky-500/30 rounded-lg shrink-0">
                        {project.prototypeMockupType === 'mobile' ? (
                          <Smartphone className="w-4 h-4" />
                        ) : project.prototypeMockupType === 'desktop' ? (
                          <LayoutGrid className="w-4 h-4" />
                        ) : (
                          <Search className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Metrics Grid (Revealed on Hover/Always visible) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {project.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="p-2 bg-[#050811] border border-sky-500/20 rounded-lg text-center space-y-0.5 group-hover:border-sky-500/40 transition-colors"
                        >
                          <div className="text-[11px] font-bold text-white truncate">{m.value}</div>
                          <div className="text-[9px] text-slate-400 font-mono uppercase truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Deliverables List Preview */}
                  <div className="space-y-2 pt-3 border-t border-sky-500/20">
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider block font-semibold flex items-center justify-between">
                      <span>Verified Deliverables:</span>
                      <span className="text-[10px] text-slate-400 font-normal">{project.deliverables.length} items</span>
                    </span>
                    <ul className="space-y-1.5">
                      {project.deliverables.slice(0, isExpanded ? 6 : 3).map((deliv, idx) => (
                        <li key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inline Expanded Drawer Details */}
                  {isExpanded && (
                    <div
                      className="pt-4 border-t border-sky-500/30 space-y-5 animate-fadeIn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Extended Design Story */}
                      {project.extendedOverview && (
                        <div className="p-4 bg-[#050811] border border-sky-500/20 rounded-xl space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-sky-300 font-mono uppercase">
                            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                            <span>Design Rationale & Architecture</span>
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed font-sans">
                            {project.extendedOverview}
                          </p>
                        </div>
                      )}

                      {/* Mini Interactive Wireframe / Prototype Frame Switcher */}
                      <div className="p-4 bg-[#050811] border border-sky-500/20 rounded-xl space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-sky-300 uppercase">
                            Figma Component Interactive Frames
                          </span>
                          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Auto Layout Verified
                          </span>
                        </div>

                        {/* Screen Switcher Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono">
                          {[0, 1, 2].map((idx) => (
                            <button
                              key={idx}
                              onClick={(e) => handleScreenChange(project.id, idx, e)}
                              className={`px-3 py-1 rounded-md transition-all ${
                                currentScreenIdx === idx
                                  ? 'bg-sky-500 text-white font-bold'
                                  : 'bg-[#0B132B] text-slate-400 hover:text-sky-300 border border-sky-500/20'
                              }`}
                            >
                              Frame 0{idx + 1}
                            </button>
                          ))}
                        </div>

                        {/* Screen Frame Display */}
                        <div className="p-3 bg-[#0B132B] border border-sky-500/30 rounded-lg space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{activeScreen.name}</span>
                            <span className="px-2 py-0.5 bg-[#050811] text-sky-300 border border-sky-500/30 rounded text-[9px] font-mono uppercase">
                              {activeScreen.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300">{activeScreen.desc}</p>
                        </div>
                      </div>

                      {/* Key Outcomes Checklist */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider block font-semibold">
                          Key Impact & Measurable Outcomes:
                        </span>
                        <div className="space-y-1.5">
                          {project.keyOutcomes.map((outcome, idx) => (
                            <div key={idx} className="p-2 bg-[#050811] border border-sky-500/20 rounded-lg flex items-start gap-2 text-xs text-slate-200">
                              <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct External Action Bar */}
                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        {project.figmaUrl && (
                          <a
                            href={project.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#050811] hover:bg-[#121E42] border border-sky-500/30 hover:border-sky-400 text-sky-300 hover:text-white text-[11px] font-mono uppercase tracking-wider rounded-lg transition-colors"
                          >
                            <Figma className="w-3.5 h-3.5 text-sky-400" />
                            <span>Live Figma File</span>
                            <ExternalLink className="w-3 h-3 ml-0.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#050811] hover:bg-[#121E42] border border-sky-500/30 hover:border-sky-400 text-slate-300 hover:text-white text-[11px] font-mono uppercase tracking-wider rounded-lg transition-colors"
                          >
                            <Github className="w-3.5 h-3.5 text-sky-400" />
                            <span>GitHub Repo</span>
                            <ExternalLink className="w-3 h-3 ml-0.5" />
                          </a>
                        )}

                        <button
                          onClick={(e) => handleCopyLink(e, project)}
                          className="p-2 bg-[#050811] hover:bg-[#121E42] border border-sky-500/30 text-slate-300 hover:text-sky-300 rounded-lg transition-colors"
                          title="Copy Shareable Link"
                        >
                          {copiedId === project.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Tech & Primary CTA */}
                <div className="p-6 bg-[#050811] border-t border-sky-500/20 space-y-4 mt-auto">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#0B132B] border border-sky-500/20 text-slate-300 text-[10px] font-mono uppercase tracking-wider rounded-md group-hover:border-sky-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Primary CTA Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={(e) => toggleExpand(project.id, e)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#0B132B] hover:bg-[#121E42] border border-sky-500/30 text-slate-200 text-xs font-mono font-bold uppercase tracking-wider transition-all rounded-xl"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5 text-sky-400" />
                          <span>Collapse View</span>
                        </>
                      ) : (
                        <>
                          <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
                          <span>Quick Overview</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider transition-all rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Modal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

