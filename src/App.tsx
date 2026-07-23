import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandStrategy } from './components/BrandStrategy';
import { ProjectsSection } from './components/ProjectsSection';
import { DesignSystemInspector } from './components/DesignSystemInspector';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const photoUrl = personalInfo.profileImage || '';

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-sky-500 selection:text-white antialiased relative overflow-x-hidden">
      {/* Background Ambient Electric Blue Glows */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-60" />

      {/* Fixed Navigation Header */}
      <Header
        onOpenResume={() => setResumeModalOpen(true)}
        photoUrl={photoUrl}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          photoUrl={photoUrl}
        />
        <BrandStrategy />
        <ProjectsSection />
        <DesignSystemInspector />
        <SkillsSection />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Document Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
