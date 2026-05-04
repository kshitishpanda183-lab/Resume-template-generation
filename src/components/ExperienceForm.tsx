"use client";

import { useResume } from "./ResumeContext";
import { useState } from "react";

export default function ExperienceForm() {
  const { data, updateExperience, addExperience, removeExperience } = useResume();
  const [expandedId, setExpandedId] = useState<string | null>(data.experiences[0]?.id || null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1>Professional Experience</h1>
        <p style={{ color: 'var(--muted)' }}>
          Detail your work history, focusing on key achievements and technical impact.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
        {data.experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            {expandedId === exp.id ? (
              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid var(--primary)', background: 'white' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="label">Job Title</label>
                    <input 
                      type="text" 
                      className="input" 
                      value={exp.jobTitle} 
                      onChange={(e) => updateExperience(exp.id, { jobTitle: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label className="label">Company</label>
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        style={{ color: '#ef4444', cursor: 'pointer' }}
                        onClick={() => removeExperience(exp.id)}
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      className="input" 
                      value={exp.company} 
                      onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="label">Start Date</label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        className="input" 
                        style={{ width: '100%' }} 
                        value={exp.startDate} 
                        onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                      />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">End Date</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <input 
                        type="text" 
                        className="input" 
                        style={{ flex: 1, background: exp.current ? '#f9f9f9' : 'white' }} 
                        placeholder={exp.current ? "Present" : "--------, ----"}
                        value={exp.current ? "" : exp.endDate}
                        disabled={exp.current}
                        onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                      />
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--foreground)', cursor: 'pointer' }}>
                        <input 
                          type="checkbox" 
                          checked={exp.current} 
                          onChange={(e) => updateExperience(exp.id, { current: e.target.checked, endDate: e.target.checked ? "Present" : "" })}
                          style={{ accentColor: 'var(--primary)' }} 
                        />
                        CURRENT
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label className="label">Description & Achievements</label>
                    <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }} onClick={() => handleToggle(exp.id)} className="cursor-pointer">Collapse ▲</span>
                  </div>
                  <textarea 
                    className="input" 
                    rows={5} 
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                  />
                </div>
              </div>
            ) : (
              <div 
                className="glass-card" 
                style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', cursor: 'pointer' }}
                onClick={() => handleToggle(exp.id)}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{exp.jobTitle || "Untitled Role"}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{exp.company || "Company Name"} • {exp.startDate || "Start"} - {exp.current ? 'Present' : (exp.endDate || "End")}</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--muted)' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            )}
          </div>
        ))}

        {/* Add Button */}
        <button 
          className="btn" 
          onClick={addExperience}
          style={{ border: '1px dashed var(--border)', background: 'transparent', padding: '1rem', width: '100%', color: 'var(--muted)', cursor: 'pointer' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Another Experience
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <button className="btn" style={{ background: 'transparent', fontWeight: 600 }}>Save Draft</button>
          <a href="/?section=skills" className="btn btn-primary" style={{ background: '#000', padding: '0.75rem 2rem' }}>
            Next: Skills
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </>
  );
}
