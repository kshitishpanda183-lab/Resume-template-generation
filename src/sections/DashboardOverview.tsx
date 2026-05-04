"use client";

import { useResume } from "@/components/ResumeContext";

export default function DashboardOverview() {
  const { data } = useResume();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Welcome back, {data.personalInfo.fullName.split(' ')[0]}</h1>
          <p style={{ color: 'var(--muted)' }}>Here is a quick overview of your current resume progress.</p>
        </div>
        <button className="btn btn-primary" style={{ background: '#000', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Create New Resume
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Progress Card */}
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>Current Resume Progress</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Senior Engineer 2024 Draft</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>75%</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.05em' }}>COMPLETE</div>
            </div>
          </div>

          <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', position: 'relative' }}>
            <div style={{ width: '75%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '1rem' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Profile Info</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Complete</div>
                </div>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Experience</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>3 Roles added</div>
                </div>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.5 }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px dashed var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Education</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Needs update</div>
                </div>
             </div>
          </div>
        </div>

        {/* Quick Edit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 600 }}>Quick Edit</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Experience', 'Skills', 'Education'].map((item) => (
              <a key={item} href={`/?section=${item.toLowerCase()}`} className="glass-card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ color: 'var(--muted)' }}>
                      {item === 'Experience' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>}
                      {item === 'Skills' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>}
                      {item === 'Education' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>}
                   </div>
                   <span style={{ fontWeight: 600 }}>{item}</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--muted)' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
        {/* Recent Activity */}
        <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
             <div style={{ position: 'absolute', left: '4px', top: '10px', bottom: '10px', width: '2px', background: '#f1f5f9' }}></div>
             
             {[
               { title: "Updated Skills Section", desc: "Added 'React.js' and 'Tailwind CSS'", time: "2 hours ago", active: true },
               { title: "Modified Experience", desc: "Edited bullet points for 'Senior Developer' role.", time: "Yesterday", active: false },
               { title: "Created Draft", desc: "Started 'Senior Engineer 2024' from Minimalist template.", time: "Oct 24, 2023", active: false }
             ].map((activity, i) => (
               <div key={i} style={{ paddingLeft: '2rem', position: 'relative' }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: '0', 
                    top: '6px', 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    background: activity.active ? 'var(--primary)' : '#cbd5e1',
                    border: '2px solid white'
                  }}></div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{activity.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>{activity.desc}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>{activity.time}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Suggested Templates */}
        <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3>Suggested Templates</h3>
            <a href="#" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
             <div>
                <div style={{ aspectRatio: '3/4', background: '#475569', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.2)' }}>
                   <div style={{ width: '100%', height: '100%', background: 'white', borderRadius: '2px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#eee' }}></div>
                      <div style={{ width: '60%', height: '4px', background: '#eee' }}></div>
                      <div style={{ width: '100%', height: '2px', background: '#f5f5f5' }}></div>
                      <div style={{ width: '100%', height: '20px', background: '#fafafa', marginTop: '0.5rem' }}></div>
                   </div>
                </div>
                <div style={{ marginTop: '0.75rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>The Executive</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Optimized for ATS</div>
                </div>
             </div>
             <div>
                <div style={{ aspectRatio: '3/4', background: '#94a3b8', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.1)' }}>
                   <div style={{ width: '100%', height: '100%', background: 'white', borderRadius: '2px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ width: '100%', height: '2px', background: '#eee', marginBottom: '1rem' }}></div>
                      <div style={{ width: '100%', height: '40px', background: '#fafafa' }}></div>
                      <div style={{ width: '40%', height: '4px', background: '#eee' }}></div>
                   </div>
                </div>
                <div style={{ marginTop: '0.75rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Modern Tech</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Clean & Information Dense</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
