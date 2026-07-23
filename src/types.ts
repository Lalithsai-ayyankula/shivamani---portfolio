export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  specialization: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  github: string;
  portfolioStatus: string;
  statusText: string;
  profileImage?: string;
}

export interface ProfessionalSummary {
  bio: string;
  careerObjective: string;
  personalStatement: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  extendedOverview?: string;
  deliverables: string[];
  keyOutcomes: string[];
  metrics?: ProjectMetric[];
  technologies: string[];
  designMethods: string[];
  wireframeTypes: string[];
  accessibilityFocus: string[];
  prototypeMockupType: 'mobile' | 'desktop' | 'casestudy';
  liveDemoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: { name: string; tag?: string; highlight?: boolean }[];
}

export interface Education {
  institution: string;
  degree: string;
  specialization: string;
  duration: string;
  cgpa: string;
  location: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: string;
  description: string;
  badgeText: string;
}

export interface BrandStrategy {
  professionalPositioning: string;
  personalBrandStatement: string;
  uniqueValueProposition: string;
  topDifferentiators: {
    title: string;
    description: string;
    evidence: string;
    icon: string;
  }[];
}
