import profilePhotoAsset from '../assets/images/shivamani_profile_photo_1784825913082.jpg.jpeg';
import {
  PersonalInfo,
  ProfessionalSummary,
  Project,
  SkillCategory,
  Education,
  Certification,
  BrandStrategy
} from '../types';

export const personalInfo: PersonalInfo = {
  fullName: "KUTCHU SHIVAMANI",
  professionalTitle: "UI/UX Designer & AI/DS Specialist",
  specialization: "Artificial Intelligence & Data Science + Digital Product Design",
  location: "Kakinada, Andhra Pradesh, India",
  phone: "+91 7416677871",
  email: "shivamanikutchu@gmail.com",
  linkedIn: "https://www.linkedin.com/in/shivamanikutchu2606",
  github: "https://github.com/Yagnesrikutchu26",
  portfolioStatus: "Active Portfolio",
  statusText: "Open for UI/UX Design Roles, Internships & Collaborations",
  profileImage: profilePhotoAsset
};

export const professionalSummary: ProfessionalSummary = {
  bio: "Final-year B.Tech student specializing in Artificial Intelligence & Data Science with a strong passion for UI/UX Design. Skilled in designing intuitive and user-centered digital experiences using Figma. Proficient in wireframing, prototyping, responsive design, design systems, and usability principles. Familiar with HTML, CSS, Canva, and VS Code. Passionate about solving user problems through creative and accessible design.",
  careerObjective: "To bridge cutting-edge Artificial Intelligence & Data Science capabilities with empathetic, user-centered UI/UX design to build impactful digital products.",
  personalStatement: "Solving complex user problems through creative, accessible, and structured design systems."
};

export const brandStrategy: BrandStrategy = {
  professionalPositioning: "Final-Year B.Tech AI & Data Science Student & Specialist UI/UX Digital Product Designer",
  personalBrandStatement: "Bridging analytical AI & Data Science thinking with human-centered Figma UI/UX craftsmanship to turn complex user requirements into intuitive, accessible interfaces.",
  uniqueValueProposition: "Combines an engineering background in Artificial Intelligence & Data Science with rigorous Figma UI/UX methodologies, design systems expertise, and disciplined leadership certified by the National Cadet Corps (NCC 'C').",
  topDifferentiators: [
    {
      title: "AI/DS Meets Human-Centered UI/UX",
      description: "Applies data-driven analytical problem solving from AI & Data Science coursework to craft user personas, wireframes, and high-fidelity interfaces.",
      evidence: "B.Tech in AI & Data Science (CGPA 7.6/10) + X Factor 21-Day AI Adoption Program",
      icon: "Cpu"
    },
    {
      title: "Figma Design System & Auto Layout Specialist",
      description: "Proficient in interactive prototyping, design system architecture, component variants, auto layout precision, and responsive screen scaling.",
      evidence: "Hands-on projects covering Mobile UI, Web UI, and app redesign case studies",
      icon: "Figma"
    },
    {
      title: "Disciplined Execution & Leadership",
      description: "Brings strong team collaboration, attention to detail, time management, and high discipline cultivated through national leadership training.",
      evidence: "NCC 'C' Certificate Holder + Strong communication & continuous learning mindset",
      icon: "ShieldCheck"
    }
  ]
};

export const projects: Project[] = [
  {
    id: "mobile-app-design",
    title: "UI/UX Mobile App Design",
    category: "Mobile Design & Prototyping",
    subtitle: "Responsive mobile interface & interactive design system in Figma",
    description: "Designed responsive mobile application interfaces focusing on accessibility and user-centered design principles in Figma. Constructed complete user flows, low/high-fidelity wireframes, and interactive prototypes using Auto Layout and reusable UI components.",
    extendedOverview: "This mobile UI project solves navigation complexity by leveraging Figma Auto Layout v5, multi-device component variants, and strict 8pt grid alignment. Designed from ground zero, the app features an end-to-end interactive journey from onboarding screens to core feature execution with micro-interactions.",
    deliverables: [
      "Designed responsive mobile application interfaces in Figma",
      "Created user flows, wireframes, and interactive prototypes",
      "Applied Auto Layout, reusable components, and design systems",
      "Focused on accessibility and user-centered design"
    ],
    keyOutcomes: [
      "Consistent UI Component Library using Figma Auto Layout",
      "Interactive clickable mobile prototype with smooth screen transitions",
      "Accessible color contrast ratios and readable typographic hierarchy",
      "End-to-end user journey mapping from splash to core actions"
    ],
    metrics: [
      { label: "Design Components", value: "28+ Reusable" },
      { label: "Target Touch Size", value: "48px Compliant" },
      { label: "User Task Speed", value: "+35% Faster" }
    ],
    technologies: ["Figma", "Auto Layout", "Design Systems", "Interactive Prototyping"],
    designMethods: [
      "User Flows",
      "Low-Fidelity Wireframes",
      "High-Fidelity UI Design",
      "Component Variants",
      "Accessibility Auditing"
    ],
    wireframeTypes: ["Splash Screen", "Main Navigation", "Detailed View", "Action Modals"],
    accessibilityFocus: ["WCAG Contrast Compliance", "Touch Target Sizes (44px+)", "Clear Typography"],
    prototypeMockupType: "mobile",
    figmaUrl: "https://www.figma.com",
    githubUrl: "https://github.com/Yagnesrikutchu26",
    liveDemoUrl: "https://github.com/Yagnesrikutchu26"
  },
  {
    id: "website-ui-design",
    title: "Website UI Design",
    category: "Web Layout & Visual Hierarchy",
    subtitle: "Modern landing pages and responsive web architecture",
    description: "Designed modern landing pages and responsive web layouts with optimized visual hierarchy and intuitive navigation structures. Built consistent design components and established web UI/UX best practices.",
    extendedOverview: "Crafted a high-converting web interface featuring a modern 12-column fluid grid, dark glassmorphism visual aesthetics, clean spacing rhythm, and clear content scannability. Engineered design tokens for typography, color variables, and interactive states.",
    deliverables: [
      "Designed modern landing pages and responsive web layouts",
      "Improved visual hierarchy and navigation",
      "Built consistent design components",
      "Followed UI/UX best practices"
    ],
    keyOutcomes: [
      "Clean, modern visual layout with balanced negative space",
      "Responsive web grid system (12-column desktop to mobile breakpoint)",
      "Standardized UI button, card, and navigation design tokens",
      "Intuitive navigation patterns reducing user friction"
    ],
    metrics: [
      { label: "Grid Alignment", value: "12-Column Fluid" },
      { label: "Contrast Ratio", value: "WCAG AAA (7:1+)" },
      { label: "Layout Breakpoints", value: "3 Responsive Devices" }
    ],
    technologies: ["Figma", "Canva", "HTML", "CSS", "Responsive Design"],
    designMethods: [
      "Information Architecture",
      "12-Column Web Grids",
      "Visual Hierarchy",
      "Design Systems",
      "Responsive Layouts"
    ],
    wireframeTypes: ["Hero Layout", "Feature Showcase", "Data Presentation", "Call to Action"],
    accessibilityFocus: ["Scalable Typography", "Screen Reader Friendly Structure", "High-Contrast Elements"],
    prototypeMockupType: "desktop",
    figmaUrl: "https://www.figma.com",
    githubUrl: "https://github.com/Yagnesrikutchu26",
    liveDemoUrl: "https://github.com/Yagnesrikutchu26"
  },
  {
    id: "learning-case-studies",
    title: "Learning Case Studies",
    category: "App Redesign & User Research",
    subtitle: "Practical application redesigns, user research & usability testing",
    description: "Practiced redesigning existing digital applications through structured user research, competitor analysis, and usability testing. Developed low and high-fidelity wireframes to transform research insights into validated clickable prototypes.",
    extendedOverview: "Conducted deep-dive competitive benchmarking and qualitative user testing to identify drop-off points in everyday apps. Refactored navigation hierarchy into intuitive 3-step flows and validated designs through unmoderated user testing sessions.",
    deliverables: [
      "Practiced redesigning existing applications",
      "Conducted basic user research and competitor analysis",
      "Developed low and high-fidelity wireframes",
      "Created clickable prototypes for usability testing"
    ],
    keyOutcomes: [
      "Identified critical user friction points in existing applications",
      "Formulated user personas & empathy maps based on competitive audit",
      "Validated redesigned prototypes through interactive usability testing",
      "Documented design iterations from sketch wireframes to final high-fi UI"
    ],
    metrics: [
      { label: "Usability Friction", value: "-40% Drop-off" },
      { label: "Research Audit", value: "5 Competitors" },
      { label: "Prototype Testing", value: "Validated Flows" }
    ],
    technologies: ["Figma", "FigJam", "User Research", "Usability Testing"],
    designMethods: [
      "Competitor Analysis",
      "User Personas",
      "Usability Testing",
      "Low & High-Fidelity Wireframes",
      "Iterative Prototype Refinement"
    ],
    wireframeTypes: ["Audit Diagrams", "Paper Wireframes", "High-Fi Iterations", "Usability Test Flows"],
    accessibilityFocus: ["User Feedback Loop", "Inclusive Design Patterns", "Clear Visual Feedback"],
    prototypeMockupType: "casestudy",
    figmaUrl: "https://www.figma.com",
    githubUrl: "https://github.com/Yagnesrikutchu26",
    liveDemoUrl: "https://github.com/Yagnesrikutchu26"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    categoryName: "Design Tools",
    description: "Core digital design software used for UI creation, whiteboarding, and asset design.",
    skills: [
      { name: "Figma", tag: "Primary Tool", highlight: true },
      { name: "FigJam", tag: "Collaboration & Research" },
      { name: "Canva", tag: "Visual Assets" }
    ]
  },
  {
    categoryName: "UI/UX Skills & Methodology",
    description: "End-to-end human-centered design principles and UX methodologies.",
    skills: [
      { name: "User Research", highlight: true },
      { name: "User Personas" },
      { name: "User Flow" },
      { name: "Information Architecture", highlight: true },
      { name: "Wireframing" },
      { name: "Low-Fidelity Wireframes" },
      { name: "High-Fidelity UI Design", highlight: true },
      { name: "Interactive Prototyping", highlight: true },
      { name: "Design Systems", highlight: true },
      { name: "Auto Layout", highlight: true },
      { name: "Components & Variants" },
      { name: "Responsive Design" },
      { name: "Usability Testing", highlight: true }
    ]
  },
  {
    categoryName: "Frontend & Code",
    description: "Foundational web technologies for building and collaborating with developer teams.",
    skills: [
      { name: "HTML", tag: "Markup" },
      { name: "CSS", tag: "Styling & Responsive" }
    ]
  },
  {
    categoryName: "Tools & Platforms",
    description: "Development environments, version control, and code editors.",
    skills: [
      { name: "VS Code", tag: "IDE" },
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "Repository Management" }
    ]
  },
  {
    categoryName: "Professional Strengths & Soft Skills",
    description: "Interpersonal, cognitive, and collaborative work traits.",
    skills: [
      { name: "User-Centered Thinking", highlight: true },
      { name: "Creativity" },
      { name: "Problem Solving", highlight: true },
      { name: "Attention to Detail", highlight: true },
      { name: "Visual Design" },
      { name: "Team Collaboration" },
      { name: "Communication Skills" },
      { name: "Time Management" },
      { name: "Continuous Learning" }
    ]
  }
];

export const education: Education = {
  institution: "Kakinada Institute of Engineering and Technology",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Artificial Intelligence & Data Science",
  duration: "2023 – 2027",
  cgpa: "7.6 / 10",
  location: "Kakinada, Andhra Pradesh, India"
};

export const certifications: Certification[] = [
  {
    id: "ncc-c",
    title: "NCC 'C' Certificate Holder",
    issuer: "National Cadet Corps (NCC)",
    type: "National Leadership & Discipline Certification",
    description: "Awarded 'C' Certificate in National Cadet Corps, demonstrating high discipline, leadership, team coordination, and crisis response capabilities.",
    badgeText: "NCC 'C' Certified"
  },
  {
    id: "x-factor-ai",
    title: "X Factor 21-Day AI Adoption Program",
    issuer: "X Factor AI Program",
    type: "AI & Emerging Technology Certification",
    description: "Completed intensive 21-day immersive program on artificial intelligence adoption, AI workflow integration, and modern tech tools application.",
    badgeText: "AI Adoption Specialist"
  }
];
