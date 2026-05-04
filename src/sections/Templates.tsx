"use client";

import React from "react";

const templates = [
  { id: 1, name: "Modern Minimalist", description: "Clean lines and ample white space.", color: "#2563eb", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=560&fit=crop" },
  { id: 2, name: "Executive Professional", description: "Traditional layout with a modern twist.", color: "#1e293b", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=560&fit=crop" },
  { id: 3, name: "Creative Bold", description: "Vibrant accents for creative roles.", color: "#ec4899", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=560&fit=crop" },
  { id: 4, name: "Tech Focused", description: "Optimized for software engineers.", color: "#10b981", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=560&fit=crop" },
];

export default function Templates() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Resume Templates</h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
          Select a template that best fits your professional goals and industry.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
        marginTop: '1rem'
      }}>
        {templates.map((template) => (
          <div key={template.id} className="template-card" style={{
            background: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              height: '360px',
              background: '#f8fafc',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img src={template.image} alt={template.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem'
              }}>
                <button className="btn btn-primary" style={{
                  width: '100%',
                  background: template.color,
                  border: 'none',
                  boxShadow: `0 4px 12px ${template.color}40`
                }}>
                  Preview Template
                </button>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>{template.name}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{template.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .template-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          border-color: var(--primary);
        }
      `}</style>
    </div>
  );
}
