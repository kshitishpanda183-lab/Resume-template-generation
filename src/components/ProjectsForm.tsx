"use client";

import { useResume } from "./ResumeContext";
import { useState } from "react";

export default function ProjectsForm() {
  const { data, updateProject, addProject, removeProject } = useResume();
  const [editingId, setEditingId] = useState<string | null>(data.projects[0]?.id || null);
  const [techInput, setTechInput] = useState("");

  const handleTechKeyDown = (e: React.KeyboardEvent, projectId: string) => {
    if (e.key === "Enter" && techInput.trim()) {
      e.preventDefault();
      const currentProject = data.projects.find(p => p.id === projectId);
      if (currentProject && !currentProject.technologies.includes(techInput.trim())) {
        updateProject(projectId, { 
          technologies: [...currentProject.technologies, techInput.trim()] 
        });
      }
      setTechInput("");
    }
  };

  const removeTech = (projectId: string, tech: string) => {
    const currentProject = data.projects.find(p => p.id === projectId);
    if (currentProject) {
      updateProject(projectId, { 
        technologies: currentProject.technologies.filter(t => t !== tech) 
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1>Projects & Portfolio</h1>
        <p style={{ color: 'var(--muted)' }}>
          Highlight your key technical projects and contributions.
        </p>
      </div>

      {/* Added Projects List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
           Added Projects
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {data.projects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card" 
              style={{ 
                padding: '1rem 1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                cursor: 'pointer',
                background: editingId === project.id ? 'white' : '#f8fafc',
                border: editingId === project.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                minWidth: '200px'
              }}
              onClick={() => setEditingId(project.id)}
            >
              <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '6px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{project.name || "Project Name"}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{project.role || "Role"}</div>
              </div>
            </div>
          ))}
          <button 
            className="btn" 
            style={{ border: '1px dashed var(--border)', background: 'transparent', padding: '0.5rem 1.5rem', borderRadius: '12px' }}
            onClick={() => {
               addProject();
               // New project will be at the end, usually we'd set editingId to it
            }}
          >
            + Add Project
          </button>
        </div>
      </div>

      {/* Edit Form */}
      {editingId && (
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.25rem' }}>{data.projects.find(p => p.id === editingId)?.name || "New Project"}</h2>
            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '4px', fontWeight: 600 }}>Editing</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="label">PROJECT NAME</label>
              <input 
                type="text" 
                className="input" 
                placeholder="e.g. Core Banking Platform" 
                value={data.projects.find(p => p.id === editingId)?.name || ""}
                onChange={(e) => updateProject(editingId, { name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="label">ROLE / CONTRIBUTION</label>
              <input 
                type="text" 
                className="input" 
                placeholder="e.g. Lead Architect" 
                value={data.projects.find(p => p.id === editingId)?.role || ""}
                onChange={(e) => updateProject(editingId, { role: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label">PROJECT LINK (Optional)</label>
            <div style={{ position: 'relative' }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
               <input 
                  type="text" 
                  className="input" 
                  style={{ paddingLeft: '2.5rem' }}
                  placeholder="https://github.com/yourusername/project" 
                  value={data.projects.find(p => p.id === editingId)?.link || ""}
                  onChange={(e) => updateProject(editingId, { link: e.target.value })}
                />
            </div>
          </div>

          <div className="form-group">
            <label className="label">TECHNOLOGIES USED</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: '#fcfcfc' }}>
               {data.projects.find(p => p.id === editingId)?.technologies.map((tech) => (
                 <span key={tech} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                    {tech}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => removeTech(editingId, tech)}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                 </span>
               ))}
               <input 
                  type="text" 
                  style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontSize: '0.875rem' }} 
                  placeholder="Type and press Enter..." 
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={(e) => handleTechKeyDown(e, editingId)}
                />
            </div>
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <label className="label">DESCRIPTION & KEY ACHIEVEMENTS</label>
               <span style={{ fontSize: '0.65rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  Markdown Supported
               </span>
            </div>
            <textarea 
              className="input" 
              rows={6} 
              placeholder="- Architected a scalable microservices backend..."
              value={data.projects.find(p => p.id === editingId)?.description || ""}
              onChange={(e) => updateProject(editingId, { description: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
             <button className="btn" style={{ background: 'transparent' }} onClick={() => setEditingId(null)}>Cancel</button>
             <button className="btn btn-primary" style={{ background: '#000' }} onClick={() => setEditingId(null)}>Save Project</button>
             <button className="btn" style={{ background: '#fee2e2', color: '#ef4444' }} onClick={() => {
                removeProject(editingId);
                setEditingId(null);
             }}>Delete Project</button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <a href="/?section=certifications" style={{ color: 'var(--muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back
        </a>
        <button className="btn btn-primary" style={{ background: '#0f172a', padding: '0.75rem 2rem' }}>
          Final Review
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  );
}
