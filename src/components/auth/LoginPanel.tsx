'use client';

import { LoginForm } from './LoginForm';

export function LoginPanel() {
  const handleLoginSuccess = (user: any) => {
    console.log('[v0] User logged in:', user);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">

      {/* ═══════════════════════════════════════════
          LEFT PANEL — CAS Branding
      ═══════════════════════════════════════════ */}
      <div
        className="relative w-full md:w-[46%] flex-shrink-0 overflow-hidden min-h-[220px] md:min-h-screen"
        style={{ background: '#0c1f72' }}
      >
        {/* ── Large signature oval (the main design element) ── */}
        <div
          className="absolute"
          style={{
            width: '88%',
            height: '88%',
            top: '6%',
            right: '-18%',
            borderRadius: '50%',
            background: '#1e3891',
            zIndex: 1,
          }}
        />
        {/* Outer glow ring */}
        <div
          className="absolute"
          style={{
            width: '88%',
            height: '88%',
            top: '6%',
            right: '-18%',
            borderRadius: '50%',
            border: '12px solid rgba(140, 165, 230, 0.18)',
            zIndex: 2,
          }}
        />
        {/* Inner accent ring */}
        <div
          className="absolute"
          style={{
            width: '80%',
            height: '80%',
            top: '10%',
            right: '-14%',
            borderRadius: '50%',
            border: '2px solid rgba(160, 185, 245, 0.22)',
            zIndex: 2,
          }}
        />

        {/* ── MIT-WPU Logo Card ── */}
        <div
          className="absolute bg-white rounded-xl flex items-center gap-3 shadow-xl"
          style={{
            top: '10%',
            left: '6%',
            padding: '10px 14px 10px 12px',
            maxWidth: '260px',
            zIndex: 10,
          }}
        >
          {/* Dome building icon */}
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-lg"
            style={{ width: '52px', height: '52px', background: '#0c1f72' }}
          >
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Spire */}
              <rect x="19" y="2" width="2" height="5" fill="white"/>
              <polygon points="20,1 22.5,7 17.5,7" fill="white"/>
              {/* Dome */}
              <path d="M10 17 Q10 9 20 9 Q30 9 30 17 Z" fill="white" opacity="0.92"/>
              {/* Column base */}
              <rect x="8" y="17" width="24" height="3" rx="0.5" fill="white" opacity="0.85"/>
              {/* Columns */}
              <rect x="9"  y="20" width="2.5" height="10" fill="white" opacity="0.9"/>
              <rect x="13.5" y="20" width="2.5" height="10" fill="white" opacity="0.9"/>
              <rect x="18.5" y="20" width="3"   height="10" fill="white" opacity="0.9"/>
              <rect x="24" y="20" width="2.5" height="10" fill="white" opacity="0.9"/>
              <rect x="28.5" y="20" width="2.5" height="10" fill="white" opacity="0.9"/>
              {/* Steps */}
              <rect x="7"  y="30" width="26" height="2.5" rx="0.5" fill="white" opacity="0.88"/>
              <rect x="4"  y="32.5" width="32" height="3"   rx="0.5" fill="white"/>
            </svg>
          </div>

          {/* Text block */}
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontSize: '8.5px', color: '#888', letterSpacing: '0.2px' }}>
              Dr. Vishwanath Karad
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: 900, color: '#0c1f72', marginTop: '1px' }}>
              MIT WORLD PEACE
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: 900, color: '#0c1f72', display: 'flex', alignItems: 'center', gap: '6px' }}>
              UNIVERSITY
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#1e6fc8' }}>PUNE</span>
            </div>
            <div style={{ fontSize: '7px', color: '#aaa', marginTop: '2px', letterSpacing: '0.1px' }}>
              TECHNOLOGY, RESEARCH, SOCIAL INNOVATION &amp; PARTNERSHIPS
            </div>
          </div>
        </div>

        {/* ── System Title ── */}
        <div
          className="absolute text-white font-extrabold"
          style={{
            top: '42%',
            left: '6%',
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            lineHeight: 1.25,
            letterSpacing: '0.3px',
            zIndex: 10,
            maxWidth: '70%',
          }}
        >
          College Administration<br />System
        </div>

        {/* ── CAS ERP Metallic Badge — hidden on mobile to prevent overlap ── */}
        <div
          className="absolute hidden md:flex flex-col items-center justify-center select-none"
          style={{
            bottom: '10%',
            left: '8%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 32%, #8a9bb8 0%, #5a6e8a 50%, #3a4e6a 100%)',
            boxShadow: 'inset 0 3px 10px rgba(0,0,0,0.35), 0 6px 20px rgba(0,0,0,0.45)',
            border: '3px solid rgba(255,255,255,0.14)',
            zIndex: 10,
          }}
        >
          {/* Inner ring */}
          <div
            className="absolute"
            style={{
              inset: '8px',
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.2)',
            }}
          />
          <span
            className="text-white font-black leading-none"
            style={{ fontSize: '30px', letterSpacing: '3px', zIndex: 1 }}
          >
            CAS
          </span>
          <span
            className="font-semibold leading-none mt-1"
            style={{ fontSize: '12px', color: 'rgba(200,220,255,0.85)', letterSpacing: '4px', zIndex: 1 }}
          >
            ERP
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          RIGHT PANEL — Login Form
      ═══════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col bg-white min-h-screen">

        {/* IDSID PVT LTD branding — top bar */}
        <div
          className="flex items-center justify-end gap-2 px-6 py-3 border-b border-gray-100"
          style={{ background: '#fafafa' }}
        >
          {/* IDSID logo */}
          <img
            src="/logo-ids.png"
            alt="IDSID Pvt Ltd"
            style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '6px' }}
          />
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#0c1f72', lineHeight: 1.1 }}>
              IDSID PVT LTD
            </div>
            <div style={{ fontSize: '9px', color: '#888', letterSpacing: '0.5px' }}>
              Smart Solutions
            </div>
          </div>
        </div>

        {/* Form area — centered */}
        <div className="flex-1 flex items-center justify-center px-6 py-8 md:px-12">
          <div className="w-full max-w-[400px]">

            {/* Login heading */}
            <div className="mb-8 text-center">
              <h2
                className="font-extrabold"
                style={{ fontSize: '42px', color: '#e53935', lineHeight: 1.05, marginBottom: '6px' }}
              >
                Login
              </h2>
              <p style={{ fontSize: '14px', color: '#999', fontWeight: 400 }}>
                Please login to your Account
              </p>
            </div>

            {/* Login Form component */}
            <LoginForm onLoginSuccess={handleLoginSuccess} />

            {/* Copyright footer */}
            <div
              className="mt-8 pt-4 text-center"
              style={{ borderTop: '1px solid #eee', fontSize: '11px', color: '#bbb' }}
            >
              Copyright © 2026 IDSID Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}