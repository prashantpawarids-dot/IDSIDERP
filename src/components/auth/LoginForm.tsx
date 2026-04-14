'use client';

import { useState } from 'react';
import type { LoginCredentials } from '@/types';
import { authService } from '@/services/authService';

interface LoginFormProps {
  onLoginSuccess?: (user: any) => void;
}

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setCredentials((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      const response = await authService.login(credentials);
      if (response.success) {
        setSuccessMessage(response.message);
        setCredentials({ username: '', password: '' });
        setErrors({});
        setTimeout(() => {
          if (onLoginSuccess) onLoginSuccess(response.user);
        }, 1000);
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
      console.error('[v0] Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCredentials({ username: '', password: '' });
    setErrors({});
    setErrorMessage('');
    setSuccessMessage('');
  };

  /* ── Demo fill helper ── */
  const fillDemo = () => {
    setCredentials({ username: 'admin', password: 'admin123' });
    setErrors({});
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">

      {/* ── Success ── */}
      {successMessage && (
        <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 border border-green-200 text-sm">
          <span className="text-green-600 font-bold flex-shrink-0">✓</span>
          <p className="font-medium text-green-800">{successMessage}</p>
        </div>
      )}

      {/* ── Error ── */}
      {errorMessage && (
        <div className="flex items-center gap-3 rounded-lg bg-red-50 p-4 border border-red-200 text-sm">
          <span className="text-red-600 font-bold flex-shrink-0">!</span>
          <p className="font-medium text-red-800">{errorMessage}</p>
        </div>
      )}

      {/* ── User ID — floating label (MUI outlined style) ── */}
      <div className="relative">
        <input
          id="username"
          type="text"
          value={credentials.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          disabled={isLoading}
          placeholder=" "
          autoComplete="username"
          style={{ height: '54px', borderRadius: '8px', fontSize: '14px' }}
          className={`peer w-full border-2 px-4 pt-5 pb-2 bg-white focus:outline-none transition-colors
            ${errors.username
              ? 'border-red-400 focus:border-red-500'
              : credentials.username
                ? 'border-orange-400'
                : 'border-gray-300 focus:border-orange-400'
            }`}
        />
        {/* Floating label */}
        <label
          htmlFor="username"
          className={`absolute left-3 bg-white px-1 transition-all duration-150 pointer-events-none
            ${credentials.username
              ? 'top-[-9px] text-[11px] text-orange-500 font-medium'
              : `top-[16px] text-sm text-gray-400
                 peer-focus:top-[-9px] peer-focus:text-[11px] peer-focus:text-orange-500 peer-focus:font-medium`
            }`}
        >
          User id
        </label>
        {errors.username && (
          <p className="text-xs text-red-500 mt-1">{errors.username}</p>
        )}
      </div>

      {/* ── Password ── */}
      <div className="relative">
        <input
          id="password"
          type="password"
          value={credentials.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          disabled={isLoading}
          placeholder="Password"
          autoComplete="current-password"
          style={{ height: '54px', borderRadius: '8px', fontSize: '14px' }}
          className={`w-full border-2 px-4 bg-white placeholder:text-gray-400 focus:outline-none transition-colors
            ${errors.password
              ? 'border-red-400 focus:border-red-500'
              : credentials.password
                ? 'border-orange-400'
                : 'border-gray-300 focus:border-gray-400'
            }`}
        />
        {errors.password && (
          <p className="text-xs text-red-500 mt-1">{errors.password}</p>
        )}
      </div>

      {/* ── reCAPTCHA widget ── */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-gray-50"
        style={{ border: '1px solid #ccc', borderRadius: '4px' }}
      >
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="recaptcha"
            defaultChecked
            disabled={isLoading}
            style={{ width: '22px', height: '22px', cursor: 'pointer', accentColor: '#4285f4' }}
          />
          <label
            htmlFor="recaptcha"
            style={{ fontSize: '14px', color: '#333', cursor: 'pointer', userSelect: 'none' }}
          >
            I&apos;m not a robot
          </label>
        </div>

        {/* reCAPTCHA logo block */}
        <div className="flex flex-col items-center gap-0.5">
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="28" fill="#4285F4"/>
            <path d="M32 10 L50 22 L50 42 L32 54 L14 42 L14 22 Z" fill="white" opacity="0.85"/>
            <circle cx="32" cy="32" r="9" fill="#4285F4"/>
            <path d="M26 32 L30 36 L38 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{ fontSize: '10px', color: '#555', letterSpacing: '0.3px' }}>reCAPTCHA</span>
          <span style={{ fontSize: '9px', color: '#aaa' }}>Privacy · Terms</span>
        </div>
      </div>

      {/* ── Buttons ── */}
      <div className="flex gap-4 pt-1">
        <button
          type="submit"
          disabled={isLoading}
          style={{ height: '46px', borderRadius: '100px', border: '2px solid #888' }}
          className="flex-1 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 active:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Logging in…' : 'Login'}
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={isLoading}
          style={{ height: '46px', borderRadius: '100px', border: '2px solid #888' }}
          className="flex-1 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 active:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset
        </button>
      </div>

      {/* ── Forgot Password ── */}
      <div className="text-center pt-1">
        <a
          href="#"
          style={{ fontSize: '13px', color: '#1565c0', textDecoration: 'underline', fontWeight: 500 }}
        >
          Forgot Password
        </a>
      </div>

      {/* ── Demo Credentials (hardcoded) ── */}
      <div style={{ paddingTop: '12px', borderTop: '1px solid #eee' }}>
        <p style={{ fontSize: '11px', color: '#aaa', textAlign: 'center', marginBottom: '8px' }}>
          Demo credentials for testing
        </p>
        <div
          style={{
            background: '#f8f8f8',
            border: '1px solid #eee',
            borderRadius: '6px',
            padding: '10px 14px',
            fontSize: '12px',
            color: '#666',
          }}
        >
          <div style={{ marginBottom: '4px' }}>
            <strong style={{ color: '#444' }}>Username:</strong> admin
          </div>
          <div style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#444' }}>Password:</strong> admin123
          </div>
          <button
            type="button"
            onClick={fillDemo}
            style={{
              fontSize: '11px',
              color: '#1565c0',
              background: 'none',
              border: '1px solid #1565c0',
              borderRadius: '4px',
              padding: '3px 10px',
              cursor: 'pointer',
            }}
          >
            Use demo credentials
          </button>
        </div>
      </div>

    </form>
  );
}