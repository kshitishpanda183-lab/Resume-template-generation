"use client";

import React from "react";
import { useResume } from "./ResumeContext";

export default function ResumePreview() {
  const { data } = useResume();
  const { personalInfo, experiences, education, technicalSkills, projects } = data;

  const accentColor = "#2563eb"; // Professional blue from image

  return (
    <div className="resume-preview-container" style={{
      width: '100%',
      backgroundColor: 'white',
      minHeight: '842px', // A4 aspect ratio approximation
      padding: '40px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      fontFamily: 'Inter, system-ui, sans-serif',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      {/* Header */}
      <header style={{ marginBottom: '8px' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 800, 
          margin: 0, 
          color: '#111',
          letterSpacing: '-0.02em'
        }}>
          {personalInfo.fullName || "Alex Rivera"}
        </h1>
        <div style={{ 
          color: accentColor, 
          fontSize: '16px', 
          fontWeight: 600, 
          marginTop: '4px',
          marginBottom: '16px'
        }}>
          {personalInfo.jobTitle || "Senior Software Engineer (Fintech)"}
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '16px', 
          fontSize: '12px', 
          color: '#666',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {personalInfo.location || "New York, NY"}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            {personalInfo.email || "alex.rivera@example.com"}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {personalInfo.phone || "+1 (555) 019-2834"}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            {personalInfo.website || "linkedin.com/in/arivera"}
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #eee', marginTop: '16px' }} />
      </header>

      {/* Main Body Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '40px' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Professional Summary */}
          <section>
            <h2 style={{ 
              fontSize: '14px', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '12px',
              color: '#111'
            }}>
              Professional Summary
            </h2>
            <p style={{ 
              fontSize: '12px', 
              lineHeight: '1.6', 
              color: '#444',
              margin: 0
            }}>
              {personalInfo.summary || "Results-driven Senior Software Engineer with over 4 years of dedicated experience in the Financial Technology sector. Proven expertise in architecting and deploying high-frequency trading systems, securing complex payment gateways, and executing seamless blockchain integrations."}
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 style={{ 
              fontSize: '14px', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '20px',
              color: '#111'
            }}>
              Professional Experience
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
              {/* Vertical line for timeline */}
              <div style={{ 
                position: 'absolute', 
                left: '4px', 
                top: '8px', 
                bottom: '8px', 
                width: '1px', 
                backgroundColor: '#eee' 
              }}></div>

              {(experiences.length > 0 ? experiences : [{
                id: 'default',
                jobTitle: 'Lead Developer',
                company: 'FINSTREAM',
                startDate: '2022',
                endDate: 'Present',
                description: '- Architected and scaled core transaction processing microservices, accommodating a 300% increase in daily volume.\n- Optimized database indexing and caching strategies, successfully reducing end-to-end transaction latency by 40%.'
              }]).map((exp, index) => (
                <div key={exp.id} style={{ position: 'relative', paddingLeft: '24px' }}>
                  {/* Timeline Dot */}
                  <div style={{ 
                    position: 'absolute', 
                    left: '0', 
                    top: '6px', 
                    width: '9px', 
                    height: '9px', 
                    borderRadius: '50%', 
                    backgroundColor: index === 0 ? accentColor : '#ccc',
                    border: '2px solid white',
                    zIndex: 2
                  }}></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: '#111' }}>{exp.jobTitle}</div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: 600 }}>{exp.startDate} - {exp.endDate}</div>
                  </div>
                  
                  <div style={{ 
                    color: accentColor, 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    marginTop: '2px',
                    marginBottom: '8px'
                  }}>
                    {exp.company}
                  </div>
                  
                  <div style={{ 
                    fontSize: '11px', 
                    lineHeight: '1.6', 
                    color: '#555',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <h2 style={{ 
              fontSize: '14px', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '16px',
              color: '#111'
            }}>
              Key Projects
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(projects.length > 0 ? projects : [{
                id: 'default-p',
                name: 'Open-Source DeFi Protocol',
                role: 'GitHub',
                description: 'Core contributor to an open-source decentralized finance (DeFi) liquidity pool protocol. Authored pivotal smart contracts in Solidity and optimized Go-based relayer nodes.'
              }]).map((project) => (
                <div key={project.id} style={{ 
                  backgroundColor: '#f8fafc', 
                  border: '1px solid #eef2f6', 
                  borderRadius: '6px', 
                  padding: '16px' 
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '13px', color: '#111' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                      {project.name}
                    </div>
                    <div style={{ fontSize: '11px', color: accentColor, fontWeight: 600 }}>{project.role} ↗</div>
                  </div>
                  <div style={{ fontSize: '11px', lineHeight: '1.6', color: '#555' }}>
                    {project.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Competencies */}
          <section>
            <h2 style={{ 
              fontSize: '14px', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '16px',
              color: '#111'
            }}>
              Competencies
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {(technicalSkills.length > 0 ? technicalSkills.map(s => s.name) : ["Python", "Java", "Go", "Kubernetes", "AWS", "SQL", "CI/CD", "Blockchain", "HFT"]).map((skill, i) => (
                <div key={i} style={{ 
                  backgroundColor: '#f1f5f9', 
                  padding: '4px 10px', 
                  borderRadius: '4px', 
                  fontSize: '11px', 
                  fontWeight: 600, 
                  color: '#475569' 
                }}>
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 style={{ 
              fontSize: '14px', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '16px',
              color: '#111'
            }}>
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {(education.length > 0 ? education : [{
                id: 'default-e',
                degree: 'B.S. Computer Science',
                school: 'Top Tier University',
                endDate: 'GRADUATED CUM LAUDE'
              }]).map((edu) => (
                <div key={edu.id}>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#111', marginBottom: '2px' }}>{edu.degree}</div>
                  <div style={{ fontSize: '11px', color: '#666', marginBottom: '2px' }}>{edu.school}</div>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>{edu.endDate}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Proficiency */}
          <section>
            <h2 style={{ 
              fontSize: '14px', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '16px',
              color: '#111'
            }}>
              Proficiency
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {(technicalSkills.length > 0 ? technicalSkills.slice(0, 3) : [
                { name: 'Backend Architecture', level: 'EXPERT' },
                { name: 'Cloud Infrastructure', level: 'PROFICIENT' },
                { name: 'Data Engineering', level: 'PROFICIENT' }
              ]).map((skill, i) => {
                const percentage = skill.level === 'EXPERT' ? 95 : skill.level === 'PROFICIENT' ? 80 : 60;
                return (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      <span>{skill.name}</span>
                      <span>{percentage}%</span>
                    </div>
                    <div style={{ height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ 
                        width: `${percentage}%`, 
                        height: '100%', 
                        backgroundColor: accentColor,
                        borderRadius: '2px'
                      }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
