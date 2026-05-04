"use client";

import { useResume } from "./ResumeContext";
import { useState } from "react";

export default function EducationForm() {
  const { data, updateEducation, addEducation, removeEducation } = useResume();
  const [expandedId, setExpandedId] = useState<string | null>(data.education[0]?.id || null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1>Education</h1>
        <p style={{ color: 'var(--muted)' }}>
          Add your academic background, degrees, and notable achievements.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
        {data.education.map((edu) => (
          <div key={edu.id} className="education-item">
            {expandedId === edu.id ? (
              <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid var(--primary)', background: 'white' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Add Education</h3>
                
                <div className="form-group">
                  <label className="label">School / University</label>
                  <input 
                    type="text" 
                    className="input" 
                    value={edu.school} 
                    onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="label">Degree & Major</label>
                  <input 
                    type="text" 
                    className="input" 
                    value={edu.degree} 
                    onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="label">Start Date</label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        className="input" 
                        style={{ width: '100%' }} 
                        value={edu.startDate} 
                        onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                      />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">End Date (or Expected)</label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        className="input" 
                        style={{ width: '100%' }} 
                        value={edu.endDate} 
                        onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                      />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    <input 
                      type="checkbox" 
                      checked={edu.current} 
                      onChange={(e) => updateEducation(edu.id, { current: e.target.checked })}
                      style={{ accentColor: 'var(--primary)' }} 
                    />
                    I currently attend here
                  </label>
                </div>

                <div className="form-group">
                  <label className="label">Location</label>
                  <input 
                    type="text" 
                    className="input" 
                    value={edu.location} 
                    onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                   <button className="btn" onClick={() => handleToggle(edu.id)}>Done</button>
                </div>
              </div>
            ) : (
              <div 
                className="glass-card" 
                style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', color: 'var(--muted)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{edu.school}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{edu.degree}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer', color: 'var(--muted)' }} onClick={() => handleToggle(edu.id)}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer', color: '#ef4444' }} onClick={() => removeEducation(edu.id)}><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
              </div>
            )}
          </div>
        ))}

        <button 
          className="btn" 
          onClick={addEducation}
          style={{ border: '1px dashed var(--border)', background: 'transparent', padding: '1rem', width: '100%', color: 'var(--muted)', cursor: 'pointer' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Another Education
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
          <a href="/?section=skills" style={{ color: 'var(--muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back
          </a>
          <a href="/?section=certifications" className="btn btn-primary" style={{ background: '#0f172a', padding: '0.75rem 2rem' }}>
            Next: Certifications
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </>
  );
}
