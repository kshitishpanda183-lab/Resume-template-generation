"use client";

import { useResume } from "./ResumeContext";
import { useState } from "react";

export default function CertificationForm() {
  const { data, updateCertification, addCertification, removeCertification } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(editingId === id ? null : id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
        <h1>Add Certification</h1>
        <p style={{ color: 'var(--muted)' }}>
          Highlight professional licenses or certifications that validate your expertise.
        </p>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem', overflowY: 'auto', paddingRight: '1rem', maxWidth: '800px' }}>
        {/* Form to Add / Edit */}
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', border: '1px solid var(--border)' }}>
          <div className="form-group">
            <label className="label">Certification Name</label>
            <input 
              type="text" 
              className="input" 
              placeholder="e.g. AWS Certified Solutions Architect"
              value={editingId ? data.certifications.find(c => c.id === editingId)?.name : ""}
              onChange={(e) => editingId && updateCertification(editingId, { name: e.target.value })}
              disabled={!editingId}
            />
          </div>

          <div className="form-group">
            <label className="label">Issuing Organization</label>
            <input 
              type="text" 
              className="input" 
              placeholder="e.g. Amazon Web Services"
              value={editingId ? data.certifications.find(c => c.id === editingId)?.organization : ""}
              onChange={(e) => editingId && updateCertification(editingId, { organization: e.target.value })}
              disabled={!editingId}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="label">Issue Date</label>
              <input 
                type="text" 
                className="input" 
                placeholder="MM, YYYY"
                value={editingId ? data.certifications.find(c => c.id === editingId)?.issueDate : ""}
                onChange={(e) => editingId && updateCertification(editingId, { issueDate: e.target.value })}
                disabled={!editingId}
              />
            </div>
            <div className="form-group">
              <label className="label">Expiration Date (Optional)</label>
              <input 
                type="text" 
                className="input" 
                placeholder="MM, YYYY"
                value={editingId ? data.certifications.find(c => c.id === editingId)?.expiryDate : ""}
                onChange={(e) => editingId && updateCertification(editingId, { expiryDate: e.target.value })}
                disabled={!editingId}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label">Credential ID (Optional)</label>
            <input 
              type="text" 
              className="input" 
              placeholder="e.g. AZ-900-12345"
              value={editingId ? data.certifications.find(c => c.id === editingId)?.credentialId : ""}
              onChange={(e) => editingId && updateCertification(editingId, { credentialId: e.target.value })}
              disabled={!editingId}
            />
          </div>

          <div className="form-group">
            <label className="label">Credential URL (Optional)</label>
            <input 
              type="text" 
              className="input" 
              placeholder="https://..."
              value={editingId ? data.certifications.find(c => c.id === editingId)?.credentialUrl : ""}
              onChange={(e) => editingId && updateCertification(editingId, { credentialUrl: e.target.value })}
              disabled={!editingId}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button className="btn" style={{ background: 'transparent' }} onClick={() => setEditingId(null)}>Cancel</button>
            {!editingId ? (
              <button className="btn btn-primary" style={{ background: '#000' }} onClick={() => {
                addCertification();
                // We'll set editing to the newly created one in a real app, but here we just show the form
              }}>Add New</button>
            ) : (
              <button className="btn btn-primary" style={{ background: '#000' }} onClick={() => setEditingId(null)}>Save Certification</button>
            )}
          </div>
        </div>

        {/* Saved Certifications List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <h3>Saved Certifications</h3>
          <div style={{ 
            maxHeight: '300px', 
            overflowY: 'auto', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem',
            paddingRight: '0.5rem',
            scrollbarWidth: 'thin'
          }}>
            {data.certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="glass-card" 
                style={{ 
                  padding: '1rem 1.5rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  background: editingId === cert.id ? '#f0f9ff' : 'white',
                  border: editingId === cert.id ? '1px solid var(--primary)' : '1px solid var(--border)'
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{cert.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{cert.organization} • Issued {cert.issueDate}</div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer', color: 'var(--muted)' }} onClick={() => setEditingId(cert.id)}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer', color: '#ef4444' }} onClick={() => removeCertification(cert.id)}><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingBottom: '2rem' }}>
          <a href="/?section=education" style={{ color: 'var(--muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back
          </a>
          <button className="btn btn-primary" style={{ background: '#0f172a', padding: '0.75rem 2rem' }}>
            Review Final Draft
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
