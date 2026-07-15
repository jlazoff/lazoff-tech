'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = typeof window !== 'undefined' && localStorage.getItem('theme');
    const isDark = stored ? stored === 'dark' : true;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };
  return (
    <button onClick={toggle} aria-label="Toggle theme"
      style={{ background: 'none', border: '1px solid currentColor', borderRadius: 8, padding: '4px 10px', cursor: 'pointer', color: 'inherit', fontSize: 14 }}>
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
