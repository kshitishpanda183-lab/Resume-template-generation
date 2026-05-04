"use client";

import React from "react";

export default function Support() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Support Center</h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
          We're here to help you build the best resume possible.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '3rem' }}>
        {/* FAQs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: "How do I download my resume?", a: "Click the 'Download PDF' button in the top right corner of the dashboard to export your resume." },
              { q: "Can I change the template later?", a: "Yes, you can switch between templates at any time from the 'Templates' tab without losing your data." },
              { q: "Is my data secure?", a: "We use industry-standard encryption and local storage to ensure your personal information remains private." },
              { q: "How many resumes can I create?", a: "With a Pro account, you can create and manage unlimited resume versions." }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid var(--border)'
              }}>
                <div style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>{faq.q}</div>
                <div style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact/Resources */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
            padding: '2rem',
            borderRadius: '24px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Need more help?</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.5' }}>
              Our support team is available 24/7 to assist you with any technical issues or resume questions.
            </p>
            <button className="btn" style={{ background: 'white', color: 'var(--primary)', width: '100%' }}>
              Contact Support
            </button>
          </div>

          <div style={{ 
            background: 'white',
            padding: '2rem',
            borderRadius: '24px',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Resources</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Video Tutorials ↗</a>
              <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Resume Writing Guide ↗</a>
              <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Job Search Strategy ↗</a>
              <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Community Forum ↗</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
