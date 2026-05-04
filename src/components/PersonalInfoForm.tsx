"use client";

import { useResume } from "./ResumeContext";

export default function PersonalInfoForm() {
  const { data, updatePersonalInfo } = useResume();
  const info = data.personalInfo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1>Personal Information</h1>
        <p style={{ color: 'var(--muted)' }}>
          Provide your fundamental contact details and a brief professional summary to establish your document's identity.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '800px' }}>
        <div className="form-group">
          <label className="label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="input"
            value={info.fullName}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="form-group">
            <label className="label">Target Job Title</label>
            <input
              type="text"
              name="jobTitle"
              className="input"
              value={info.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              className="input"
              value={info.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="form-group">
            <label className="label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="input"
              value={info.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input"
              value={info.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="label">Website / Portfolio Link</label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', fontSize: '0.9rem' }}>https://</span>
            <input
              type="text"
              name="website"
              className="input"
              style={{ paddingLeft: '4.5rem', width: '100%' }}
              value={info.website}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className="label">Professional Summary</label>
          </div>
          <textarea
            name="summary"
            className="input"
            rows={6}
            style={{ resize: 'vertical' }}
            value={info.summary}
            onChange={handleChange}
          />
          <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textAlign: 'right' }}>{info.summary.length} / 500 characters</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <button className="btn" style={{ background: 'transparent', fontWeight: 600 }}>Save Draft</button>
          <a href="/?section=experience" className="btn btn-primary" style={{ background: '#000', padding: '0.75rem 2rem' }}>
            Next: Experience
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </>
  );
}
