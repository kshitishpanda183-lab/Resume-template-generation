"use client";

import { useResume } from "./ResumeContext";
import { useState } from "react";

export default function SkillsForm() {
  const { data, updateTechnicalSkills, updateSoftSkills, updateLanguages } = useResume();
  
  const [techName, setTechName] = useState("");
  const [techLevel, setTechLevel] = useState("EXPERT");
  
  const [softName, setSoftName] = useState("");
  
  const [langName, setLangName] = useState("");
  const [langLevel, setLangLevel] = useState("NATIVE");

  const addTechSkill = () => {
    if (techName.trim()) {
      updateTechnicalSkills([...data.technicalSkills, { name: techName.trim(), level: techLevel }]);
      setTechName("");
    }
  };

  const addSoftSkill = () => {
    if (softName.trim()) {
      updateSoftSkills([...data.softSkills, softName.trim()]);
      setSoftName("");
    }
  };

  const addLanguage = () => {
    if (langName.trim()) {
      updateLanguages([...data.languages, { name: langName.trim(), level: langLevel }]);
      setLangName("");
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1>Skills & Proficiencies</h1>
        <p style={{ color: 'var(--muted)' }}>
          Add your technical, soft skills, and languages to highlight your strengths.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px' }}>
        
        {/* Technical Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3>Technical Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {data.technicalSkills.map((skill, i) => (
              <div key={i} className="glass-card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <span style={{ fontWeight: 600 }}>{skill.name}</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', opacity: 0.8 }}>• {skill.level}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer', color: 'var(--muted)' }} onClick={() => updateTechnicalSkills(data.technicalSkills.filter((_, idx) => idx !== i))}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.5fr auto', gap: '1rem', alignItems: 'flex-end' }}>
            <div className="form-group">
              <label className="label">Add Technical Skill</label>
              <input type="text" className="input" placeholder="e.g. TypeScript" value={techName} onChange={(e) => setTechName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="label">Level</label>
              <select className="input" value={techLevel} onChange={(e) => setTechLevel(e.target.value)}>
                <option>EXPERT</option>
                <option>PROFICIENT</option>
                <option>FAMILIAR</option>
              </select>
            </div>
            <button className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }} onClick={addTechSkill}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add
            </button>
          </div>
        </div>

        {/* Soft Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3>Soft Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {data.softSkills.map((skill, i) => (
              <div key={i} className="glass-card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <span style={{ fontWeight: 600 }}>{skill}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer', color: 'var(--muted)' }} onClick={() => updateSoftSkills(data.softSkills.filter((_, idx) => idx !== i))}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'flex-end' }}>
            <div className="form-group">
              <label className="label">Add Soft Skill</label>
              <input type="text" className="input" placeholder="e.g. Communication" value={softName} onChange={(e) => setSoftName(e.target.value)} />
            </div>
            <button className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }} onClick={addSoftSkill}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add
            </button>
          </div>
        </div>

        {/* Languages */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3>Languages</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {data.languages.map((lang, i) => (
              <div key={i} className="glass-card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <span style={{ fontWeight: 600 }}>{lang.name}</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', opacity: 0.8 }}>• {lang.level}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer', color: 'var(--muted)' }} onClick={() => updateLanguages(data.languages.filter((_, idx) => idx !== i))}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.5fr auto', gap: '1rem', alignItems: 'flex-end' }}>
            <div className="form-group">
              <label className="label">Language</label>
              <input type="text" className="input" placeholder="e.g. Spanish" value={langName} onChange={(e) => setLangName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="label">Proficiency</label>
              <select className="input" value={langLevel} onChange={(e) => setLangLevel(e.target.value)}>
                <option>NATIVE</option>
                <option>FLUENT</option>
                <option>PROFICIENT</option>
                <option>BASIC</option>
              </select>
            </div>
            <button className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }} onClick={addLanguage}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
          <a href="/?section=experience" style={{ color: 'var(--muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back
          </a>
          <a href="/?section=education" className="btn btn-primary" style={{ background: '#0f172a', padding: '0.75rem 2rem' }}>
            Next: Education
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </>
  );
}
