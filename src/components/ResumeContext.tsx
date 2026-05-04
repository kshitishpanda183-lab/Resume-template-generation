"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
}

interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
}

interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  credentialUrl: string;
}

interface Project {
  id: string;
  name: string;
  role: string;
  link: string;
  technologies: string[];
  description: string;
}

interface SkillWithLevel {
  name: string;
  level: string;
}

interface ResumeData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  technicalSkills: SkillWithLevel[];
  softSkills: string[];
  languages: SkillWithLevel[];
}

interface ResumeContextType {
  data: ResumeData;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  addExperience: () => void;
  removeExperience: (id: string) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  addEducation: () => void;
  removeEducation: (id: string) => void;
  updateCertification: (id: string, cert: Partial<Certification>) => void;
  addCertification: () => void;
  removeCertification: (id: string) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  addProject: () => void;
  removeProject: (id: string) => void;
  updateTechnicalSkills: (skills: SkillWithLevel[]) => void;
  updateSoftSkills: (skills: string[]) => void;
  updateLanguages: (languages: SkillWithLevel[]) => void;
}

const defaultData: ResumeData = {
  personalInfo: {
    fullName: "Alex Rivera",
    jobTitle: "Senior Full Stack Engineer",
    email: "alex.rivera@example.co",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "github.com/arivera",
    summary: "Experienced Full Stack Engineer with 8+ years of expertise in building scalable web applications using React, Node.js, and AWS. Proven track record of leading cross-functional teams to deliver high-impact technical solutions on time and under budget.",
  },
  experiences: [
    {
      id: "1",
      jobTitle: "Senior Software Engineer",
      company: "Acme Corp",
      startDate: "May, 2020",
      endDate: "Present",
      current: true,
      description: "- Led migration of legacy monolith to microservices architecture, improving system scalability by 40%.\n- Mentored a team of 5 junior developers, establishing code review practices.\n- Implemented CI/CD pipelines reducing deployment time from hours to minutes.",
    },
  ],
  education: [
    {
      id: "1",
      school: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      startDate: "Sept 2018",
      endDate: "May 2022",
      current: false,
      location: "Seattle, WA",
    }
  ],
  certifications: [
    {
      id: "1",
      name: "Certified Kubernetes Administrator (CKA)",
      organization: "Cloud Native Computing Foundation",
      issueDate: "Jan 2023",
      expiryDate: "Jan 2026",
      credentialId: "CKA-12345",
      credentialUrl: "https://verify.cnc.io/12345",
    }
  ],
  projects: [
    {
      id: "1",
      name: "Fintech Fraud Detection Engine",
      role: "Lead Architect",
      link: "https://github.com/arivera/fraud-detection",
      technologies: ["Python", "TensorFlow", "AWS"],
      description: "- Architected and deployed a real-time machine learning pipeline processing 10k+ transactions per second with sub-50ms latency.\n- Reduced false-positive fraud flags by 34%, saving an estimated $2.1M annually in manual review costs.\n- Led a cross-functional team of 4 data scientists and 2 backend engineers through full SDLC from prototype to production.",
    }
  ],
  technicalSkills: [
    { name: "React.js", level: "EXPERT" },
    { name: "Node.js", level: "PROFICIENT" },
    { name: "AWS", level: "FAMILIAR" },
    { name: "Python", level: "EXPERT" },
  ],
  softSkills: ["Leadership", "Agile Methodology"],
  languages: [{ name: "English", level: "NATIVE" }],
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ResumeData>(defaultData);

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const updateExperience = (id: string, exp: Partial<Experience>) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) => (e.id === id ? { ...e, ...exp } : e)),
    }));
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      jobTitle: "New Role",
      company: "Company Name",
      startDate: "Date",
      endDate: "Date",
      current: false,
      description: "- Description goes here",
    };
    setData((prev) => ({
      ...prev,
      experiences: [newExp, ...prev.experiences],
    }));
  };

  const removeExperience = (id: string) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id),
    }));
  };

  const updateEducation = (id: string, edu: Partial<Education>) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...e, ...edu } : e)),
    }));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      school: "School / University",
      degree: "Degree & Major",
      startDate: "Start Date",
      endDate: "End Date",
      current: false,
      location: "Location",
    };
    setData((prev) => ({
      ...prev,
      education: [newEdu, ...prev.education],
    }));
  };

  const removeEducation = (id: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }));
  };

  const updateCertification = (id: string, cert: Partial<Certification>) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, ...cert } : c)),
    }));
  };

  const addCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: "Certification Name",
      organization: "Issuing Organization",
      issueDate: "Issue Date",
      expiryDate: "Expiration Date",
      credentialId: "",
      credentialUrl: "",
    };
    setData((prev) => ({
      ...prev,
      certifications: [newCert, ...prev.certifications],
    }));
  };

  const removeCertification = (id: string) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }));
  };

  const updateProject = (id: string, project: Partial<Project>) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...project } : p)),
    }));
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "Project Name",
      role: "Role / Contribution",
      link: "https://github.com/...",
      technologies: [],
      description: "- Description goes here",
    };
    setData((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects],
    }));
  };

  const removeProject = (id: string) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  const updateTechnicalSkills = (technicalSkills: SkillWithLevel[]) => {
    setData((prev) => ({ ...prev, technicalSkills }));
  };

  const updateSoftSkills = (softSkills: string[]) => {
    setData((prev) => ({ ...prev, softSkills }));
  };

  const updateLanguages = (languages: SkillWithLevel[]) => {
    setData((prev) => ({ ...prev, languages }));
  };

  return (
    <ResumeContext.Provider value={{ 
      data, 
      updatePersonalInfo, 
      updateExperience, 
      addExperience, 
      removeExperience, 
      updateEducation,
      addEducation,
      removeEducation,
      updateCertification,
      addCertification,
      removeCertification,
      updateProject,
      addProject,
      removeProject,
      updateTechnicalSkills,
      updateSoftSkills,
      updateLanguages
    }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
