import React, { useState } from 'react';
import { Figma, Layers, Sliders, Type, Palette, LayoutGrid, CheckCircle2, Copy, Sparkles, Smartphone, Monitor } from 'lucide-react';

export const DesignSystemInspector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'autolayout' | 'variants'>('tokens');
  const [selectedVariant, setSelectedVariant] = useState<'primary' | 'secondary' | 'outline' | 'ghost'>('primary');
  const [selectedState, setSelectedState] = useState<'default' | 'hover' | 'active' | 'disabled'>('default');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colorPalette = [
    { name: 'Electric Cyan', hex: '#38BDF8', class: 'bg-sky-400', use: 'Primary UI Highlights & Accents' },
    { name: 'Deep Navy Surface', hex: '#0B132B', class: 'bg-[#0B132B]', use: 'Card & Container Surfaces' },
    { name: 'Midnight Background', hex: '#030712', class: 'bg-[#030712]', use: 'Canvas Base Background' },
    { name: 'Emerald Success', hex: '#10B981', class: 'bg-emerald-500', use: 'Status & Verification Badges' },
    { name: 'Slate Border', hex: '#1E293B', class: 'bg-slate-800', use: 'Glassmorphism Subtle Lines' },
  ];

  const typographyScale = [
    { level: 'Display Hero', size: '36px / 2.25rem', weight: '800 Bold', sample: 'Empathetic UI/UX Design' },
    { level: 'Heading H1', size: '24px / 1.5rem', weight: '700 Bold', sample: 'Figma Auto Layout Component' },
    { level: 'Heading H2', size: '18px / 1.125rem', weight: '600 SemiBold', sample: 'User Flow & Wireframes' },
    { level: 'Body Text', size: '14px / 0.875rem', weight: '400 Regular', sample: 'Human-centered digital experience' },
    { level: 'Caption / Micro', size: '12px / 0.75rem', weight: '500 Medium', sample: 'WCAG 2.1 AA Contrast Verified' },
  ];

  const autoLayoutRules = [
    { property: 'Padding X (Horizontal)', value: '16px (1rem)', note: 'Strict 2x vertical padding rule' },
    { property: 'Padding Y (Vertical)', value: '8px (0.5rem)', note: 'Consistent baseline touch target' },
    { property: 'Gap / Item Spacing', value: '12px (0.75rem)', note: 'Auto Layout hug-contents setting' },
    { property: 'Corner Radius', value: '12px (0.75rem)', note: 'Balanced inner/outer curve' },
  ];

  return (
    <section id="design-system" className="py-24 bg-[#050811] border-y border-sky-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0B132B] border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-widest rounded-full">
              <Figma className="w-3.5 h-3.5 text-sky-400" />
              <span>Interactive Figma Inspector</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Design Systems & Auto Layout Sandbox
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Explore Shivamani's Figma component tokens, variant architecture, Auto Layout specifications, and typographic hierarchy.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#0B132B] border border-sky-500/30 text-xs font-mono text-sky-300 rounded-full">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38BDF8]" />
            <span>Figma Tokens Live Demo</span>
          </div>
        </div>

        {/* Inspector Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0B132B]/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-3 space-y-4 border-b lg:border-b-0 lg:border-r border-sky-500/20 pb-6 lg:pb-0 lg:pr-6">
            <div className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold px-2">
              Design System Layers
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('tokens')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'tokens'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                    : 'text-slate-400 hover:text-sky-300 hover:bg-sky-500/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Color Palette Tokens
                </span>
                <span className="font-mono text-[10px] opacity-75">5 Tokens</span>
              </button>

              <button
                onClick={() => setActiveTab('components')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'components'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                    : 'text-slate-400 hover:text-sky-300 hover:bg-sky-500/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Typography Scale
                </span>
                <span className="font-mono text-[10px] opacity-75">5 Scales</span>
              </button>

              <button
                onClick={() => setActiveTab('autolayout')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'autolayout'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                    : 'text-slate-400 hover:text-sky-300 hover:bg-sky-500/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4" />
                  Auto Layout Rules
                </span>
                <span className="font-mono text-[10px] opacity-75">4 Specs</span>
              </button>

              <button
                onClick={() => setActiveTab('variants')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'variants'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                    : 'text-slate-400 hover:text-sky-300 hover:bg-sky-500/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  Component Variants
                </span>
                <span className="font-mono text-[10px] opacity-75">4 Variants</span>
              </button>
            </nav>

            <div className="pt-4 border-t border-sky-500/20 space-y-2 text-xs text-slate-400">
              <div className="font-bold font-mono text-white uppercase">Design System Guarantee</div>
              <p className="text-[11px] leading-relaxed">
                All components use standard Auto Layout rules, reusable component properties, and WCAG AA accessible contrast.
              </p>
            </div>
          </div>

          {/* Right Inspector Workspace View */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Color Palette Tokens Tab */}
            {activeTab === 'tokens' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-sky-500/20 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-white">Color System Tokens</h3>
                    <p className="text-xs text-slate-400">Click any color card to copy token hex value</p>
                  </div>
                  {copiedToken && (
                    <span className="text-xs text-sky-400 font-mono font-bold flex items-center gap-1 animate-pulse">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Copied {copiedToken}!
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {colorPalette.map((col) => (
                    <div
                      key={col.name}
                      onClick={() => copyToClipboard(col.hex)}
                      className="p-4 bg-[#050811] border border-sky-500/20 rounded-xl hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all cursor-pointer space-y-3 group"
                    >
                      <div className={`h-16 ${col.class} border border-sky-500/20 rounded-lg flex items-end justify-end p-2`}>
                        <Copy className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between font-mono">
                          <span className="text-xs font-bold text-white">{col.name}</span>
                          <span className="text-xs text-sky-400 font-bold">{col.hex}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{col.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Typography Scale Tab */}
            {activeTab === 'components' && (
              <div className="space-y-4">
                <div className="border-b border-sky-500/20 pb-3">
                  <h3 className="text-base font-bold text-white">Typographic Hierarchy</h3>
                  <p className="text-xs text-slate-400">Standardized body and display font sizes with 1.33 step ratio</p>
                </div>

                <div className="space-y-3">
                  {typographyScale.map((scale) => (
                    <div key={scale.level} className="p-4 bg-[#050811] border border-sky-500/20 rounded-xl space-y-2 hover:border-sky-400/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
                        <span className="text-sky-300 font-bold">{scale.level}</span>
                        <span>{scale.size} • {scale.weight}</span>
                      </div>
                      <div className="text-white tracking-tight font-sans truncate" style={{ fontSize: scale.size.split(' / ')[0] }}>
                        {scale.sample}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Auto Layout Rules Tab */}
            {activeTab === 'autolayout' && (
              <div className="space-y-4">
                <div className="border-b border-sky-500/20 pb-3">
                  <h3 className="text-base font-bold text-white">Auto Layout & Padding Math</h3>
                  <p className="text-xs text-slate-400">Strict mathematical spacing rules applied in Figma frames</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {autoLayoutRules.map((rule) => (
                    <div key={rule.property} className="p-5 bg-[#050811] border border-sky-500/20 rounded-xl space-y-2 hover:border-sky-400/40 transition-colors">
                      <div className="text-xs font-mono text-sky-400 uppercase">{rule.property}</div>
                      <div className="text-lg font-bold text-white font-mono">{rule.value}</div>
                      <div className="text-xs text-slate-300">{rule.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Component Variants Sandbox Tab */}
            {activeTab === 'variants' && (
              <div className="space-y-6">
                <div className="border-b border-sky-500/20 pb-3">
                  <h3 className="text-base font-bold text-white">Figma Variant & Property Matrix</h3>
                  <p className="text-xs text-slate-400">Test component state property changes live</p>
                </div>

                {/* Variant Selector Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-sky-400 font-semibold block uppercase">Variant Style:</label>
                    <div className="flex flex-wrap gap-2">
                      {(['primary', 'secondary', 'outline', 'ghost'] as const).map((v) => (
                        <button
                          key={v}
                          onClick={() => setSelectedVariant(v)}
                          className={`px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                            selectedVariant === v ? 'bg-sky-500 text-white shadow-[0_0_12px_rgba(56,189,248,0.4)]' : 'bg-[#050811] text-slate-400 border border-sky-500/20'
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-sky-400 font-semibold block uppercase">Interactive State:</label>
                    <div className="flex flex-wrap gap-2">
                      {(['default', 'hover', 'active', 'disabled'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedState(s)}
                          className={`px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                            selectedState === s ? 'bg-sky-500 text-white shadow-[0_0_12px_rgba(56,189,248,0.4)]' : 'bg-[#050811] text-slate-400 border border-sky-500/20'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Render Preview */}
                <div className="p-8 bg-[#050811] border border-sky-500/20 rounded-xl flex flex-col items-center justify-center space-y-4 min-h-[160px]">
                  <div className="text-xs text-sky-400 font-mono uppercase">Figma Live Component Output:</div>
                  
                  <button
                    disabled={selectedState === 'disabled'}
                    className={`px-6 py-3 font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all ${
                      selectedVariant === 'primary'
                        ? selectedState === 'hover'
                          ? 'bg-sky-400 text-black shadow-[0_0_20px_rgba(56,189,248,0.6)]'
                          : selectedState === 'active'
                          ? 'bg-sky-500 text-white scale-95'
                          : selectedState === 'disabled'
                          ? 'bg-[#0B132B] text-slate-500 border border-slate-800 cursor-not-allowed'
                          : 'bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                        : selectedVariant === 'secondary'
                        ? selectedState === 'hover'
                          ? 'bg-[#121E42] text-white border border-sky-400'
                          : selectedState === 'active'
                          ? 'bg-[#121E42] text-white border border-sky-400 scale-95'
                          : selectedState === 'disabled'
                          ? 'bg-[#0B132B] text-slate-500 border border-slate-800 cursor-not-allowed'
                          : 'bg-[#0B132B] text-white border border-sky-500/30'
                        : selectedVariant === 'outline'
                        ? selectedState === 'hover'
                          ? 'bg-sky-500 text-white'
                          : selectedState === 'disabled'
                          ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                          : 'border border-sky-400 text-sky-400'
                        : selectedState === 'hover'
                        ? 'bg-[#0B132B] text-sky-300'
                        : selectedState === 'disabled'
                        ? 'text-slate-600 cursor-not-allowed'
                        : 'text-slate-300'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 inline-block mr-2" />
                    <span>
                      {selectedVariant.toUpperCase()} • {selectedState.toUpperCase()}
                    </span>
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
