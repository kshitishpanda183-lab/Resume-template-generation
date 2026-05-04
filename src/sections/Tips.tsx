"use client";

import React from "react";

const tips = [
  {
    category: "Professional Summary",
    title: "The 6-Second Rule",
    description: "Recruiters spend an average of 6 seconds on their initial scan. Make your summary punchy and highlight your biggest wins first.",
    icon: "⏱️"
  },
  {
    category: "Experience",
    title: "Use Action Verbs",
    description: "Start bullet points with strong verbs like 'Spearheaded', 'Optimized', or 'Orchestrated' instead of 'Responsible for'.",
    icon: "🚀"
  },
  {
    category: "Formatting",
    title: "Keep it to 2 Pages",
    description: "Unless you have 15+ years of experience, stick to one or two pages. Quality over quantity is key.",
    icon: "📄"
  },
  {
    category: "ATS Optimization",
    title: "Keyword Matching",
    description: "Tailor your skills and experience keywords to match the specific job description to pass automated filters.",
    icon: "🔍"
  },
  {
    category: "Impact",
    title: "Quantify Your Wins",
    description: "Use numbers! 'Increased sales by 20%' is much more powerful than 'Improved sales performance'.",
    icon: "📈"
  },
  {
    category: "Contact Info",
    title: "Professional Email",
    description: "Use a clean email address (e.g., firstname.lastname@email.com) and ensure your LinkedIn profile is up to date.",
    icon: "📧"
  }
];

export default function Tips() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Expert Resume Tips</h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
          Industry-leading advice to help you land your dream job.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '1.5rem',
        marginTop: '1rem'
      }}>
        {tips.map((tip, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)'
          }} className="tip-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                color: 'var(--primary)',
                background: 'var(--primary-light)',
                padding: '0.25rem 0.75rem',
                borderRadius: '100px'
              }}>
                {tip.category}
              </span>
              <span style={{ fontSize: '1.5rem' }}>{tip.icon}</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{tip.title}</h3>
            <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.6' }}>{tip.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tip-card:hover {
          border-color: var(--primary);
          transform: scale(1.02);
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
        }
      `}</style>
    </div>
  );
}
