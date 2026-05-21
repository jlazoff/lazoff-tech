'use client';

import Particles from '@/components/Particles';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <a href="#main" className="skip-nav">Skip to main content</a>
      <Particles />

      {/* Theme toggle */}
      <div className="fixed top-0 right-0 z-50 px-6 py-4">
        <ThemeToggle />
      </div>

      {/* Single Panel */}
      <main id="main" className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-2xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">
            Lazoff Tech
          </h1>

          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300 text-left sm:text-center">
            <p className="text-slate-800 dark:text-slate-100 font-medium text-xl sm:text-2xl">
              Software engineering for companies that value craft.
            </p>

            <p>
              Since 2016, we&apos;ve built systems for teams that care about getting it right
              &mdash; from trade processing at Goldman Sachs to the infrastructure behind MetaMask.
            </p>

            <p>
              We work with a small number of clients at a time.
              Every project gets our full attention.
            </p>

            <p>
              Our current focus is{' '}
              <a
                href="https://digitaltwinpro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Digital Twin Pro
              </a>
              {' '}&mdash; private intelligence systems
              for executives who want their business to run itself.
            </p>

            <p className="pt-2">
              If you need something built well, we should talk.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="mailto:hello@lazoff.tech"
              className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              hello@lazoff.tech
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400 dark:text-slate-500">
            Cornell Engineering &middot; Miami
          </p>
        </div>
      </main>

      {/* Subtle footer links */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 py-4 text-center">
        <div className="flex items-center justify-center gap-3 text-xs text-slate-400 dark:text-slate-600">
          <a href="https://digitaltwinpro.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
            digitaltwinpro.com
          </a>
          <span className="opacity-40">|</span>
          <a href="https://joshualazoff.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
            joshualazoff.com
          </a>
          <span className="opacity-40">|</span>
          <a href="https://agentoito.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
            agentoito.com
          </a>
        </div>
      </footer>
    </div>
  );
}
