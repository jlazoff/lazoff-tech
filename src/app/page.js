'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '@/components/Logo';
import Particles from '@/components/Particles';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <a href="#main" className="skip-nav">Skip to content</a>
      <Particles />

      <main id="main" className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Logo />

          <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            LazoffTech
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-500 dark:text-slate-400" style={{ lineHeight: '1.7' }}>
            Software engineering for companies that value craft.
          </p>

          <p className="mt-8 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto" style={{ lineHeight: '1.8' }}>
            Since 2016, we have built systems for teams that care about getting it right — from trade processing infrastructure to the platforms behind products used by millions.
          </p>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto" style={{ lineHeight: '1.8' }}>
            We work with a small number of clients at a time. Every project gets our full attention.
          </p>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto" style={{ lineHeight: '1.8' }}>
            Our current focus is{' '}
            <a href="https://digitaltwinpro.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Digital Twin Pro
            </a>
            {' '}— private intelligence systems for people who want their business to run effortlessly.
          </p>

          <p className="mt-10 text-base text-slate-500 dark:text-slate-400">
            If you need something built well, we should talk.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:hello@lazoff.tech" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg">
              hello@lazoff.tech
            </a>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">·</span>
            <a href="https://www.linkedin.com/in/joshua-lazoff/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-400 dark:text-slate-500">
              <a href="https://joshualazoff.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Joshua Lazoff</a>
              {' · '}Cornell Engineering{' · '}Miami
            </p>
            <p className="mt-2 text-xs text-slate-300 dark:text-slate-600">
              © 2026 LazoffTech
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
