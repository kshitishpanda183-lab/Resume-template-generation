"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ResumeProvider, useResume } from "@/components/ResumeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import ResumePreview from "@/components/ResumePreview";

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const currentSection = searchParams.get("section") || "overview";
  const { data } = useResume();

  const getNavItemClass = (section: string) => {
    return currentSection === section ? "nav-item active" : "nav-item";
  };

  const showPreview = !["overview", "templates", "tips", "support"].includes(currentSection);

  return (
    <div className="dashboard-container" style={{ gridTemplateColumns: '280px 1fr' + (showPreview ? ' 550px' : '') }}>
      {/* Top Header */}
      <header className="dashboard-header" style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>ResumePro</div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="/?section=overview" className={currentSection === 'overview' ? "nav-item active" : "nav-item"} style={{ padding: '0.5rem 0', fontWeight: 600 }}>Dashboard</a>
            <a href="/?section=templates" className={currentSection === 'templates' ? "nav-item active" : "nav-item"} style={{ padding: '0.5rem 0', fontWeight: 600 }}>Templates</a>
            <a href="/?section=tips" className={currentSection === 'tips' ? "nav-item active" : "nav-item"} style={{ padding: '0.5rem 0', fontWeight: 600 }}>Tips</a>
            <a href="/?section=support" className={currentSection === 'support' ? "nav-item active" : "nav-item"} style={{ padding: '0.5rem 0', fontWeight: 600 }}>Support</a>
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button className="btn btn-primary" style={{ background: '#000', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download PDF
          </button>
          <button className="btn" style={{ background: 'transparent', padding: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#eee', overflow: 'hidden', border: '2px solid white', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="User" />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', background: '#f8fafc', padding: '1rem', borderRadius: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Current Draft</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Senior Engineer 2024</div>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href="/?section=personal" className={getNavItemClass('personal')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            Personal Info
          </a>
          <a href="/?section=experience" className={getNavItemClass('experience')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            Experience
          </a>
          <a href="/?section=skills" className={getNavItemClass('skills')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
            Skills
          </a>
          <a href="/?section=education" className={getNavItemClass('education')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            Education
          </a>
          <a href="/?section=certifications" className={getNavItemClass('certifications')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Certifications
          </a>
          <a href="/?section=projects" className={getNavItemClass('projects')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            Projects
          </a>
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Upgrade Card */}
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Unlock Premium Templates</div>
            <button className="btn btn-primary" style={{ width: '100%', background: 'var(--primary)', padding: '0.6rem', fontSize: '0.8rem' }}>Upgrade to Pro</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button className="nav-item" style={{ background: 'transparent', border: 'none', justifyContent: 'flex-start', width: '100%' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              Settings
            </button>
            <button className="nav-item" style={{ background: 'transparent', border: 'none', justifyContent: 'flex-start', width: '100%', color: '#64748b' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main" style={{ padding: '3rem' }}>
        {children}
      </main>

      {/* Live Preview Sidebar (Optional) */}
      {showPreview && (
        <aside className="dashboard-preview" style={{ padding: '2rem', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
              Live Preview
            </h3>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>100%</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
          </div>

          <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center', width: '100%' }}>
            <ResumePreview />
          </div>
        </aside>
      )}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ResumeProvider>
          <Suspense fallback={<div>Loading dashboard...</div>}>
            <DashboardLayoutContent>
              {children}
            </DashboardLayoutContent>
          </Suspense>
        </ResumeProvider>
      </body>
    </html>
  );
}
