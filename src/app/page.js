'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faRocket, faHistory, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/components/Logo';
import Particles from '@/components/Particles';

const timeline = [
  {
    year: "2015-2020",
    title: "Lazoff Tech Founded",
    description: "Custom software engineering and web development for businesses"
  },
  {
    year: "2021-2023",
    title: "AI Exploration",
    description: "Deep dive into machine learning, knowledge graphs, and agentic systems"
  },
  {
    year: "2024-Present",
    title: "Digital Twin Pro",
    description: "Full pivot to AI-first company building digital twin platforms and agentic AI"
  }
];

const legacyServices = [
  {
    title: "Web & Mobile Apps",
    description: "User-centric, responsive designs",
    icon: faLightbulb
  },
  {
    title: "Custom Software",
    description: "Innovative, business-focused solutions",
    icon: faHistory
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Particles />

      {/* Hero Section */}
      <header className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Lazoff Tech
          </h1>

          <div className="inline-block px-6 py-3 mb-8 bg-blue-100 dark:bg-blue-900 rounded-full">
            <p className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-100">
              Now Part of Digital Twin Pro
            </p>
          </div>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Founded by <a href="https://joshualazoff.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Joshua Lazoff</a>, Lazoff Tech evolved from traditional software engineering
            into AI research and development, culminating in the creation of Digital Twin Pro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://digitaltwinpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Visit Digital Twin Pro
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </a>

            <a
              href="https://globalknowledgegraph.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-900 dark:text-white font-semibold rounded-lg transition-all"
            >
              Global Knowledge Graph Network
            </a>
          </div>
        </div>
      </header>

      {/* Timeline Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FontAwesomeIcon icon={faRocket} className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Evolution
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The journey from traditional software engineering to cutting-edge AI research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((period, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-slate-900 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="absolute -top-4 left-6 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full">
                  {period.year}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">
                  {period.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {period.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FontAwesomeIcon icon={faHistory} className="w-12 h-12 text-slate-600 dark:text-slate-400 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Legacy Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              What Lazoff Tech built before the AI pivot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {legacyServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 text-center"
              >
                <FontAwesomeIcon icon={service.icon} className="w-10 h-10 text-slate-600 dark:text-slate-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our AI Journey Continues
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore the next chapter at Digital Twin Pro, where we&apos;re building
            the future of agentic AI systems and digital twin platforms.
          </p>
          <a
            href="https://digitaltwinpro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            Visit Digital Twin Pro
            <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-100 dark:bg-slate-900 py-12 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Lazoff Tech. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@lazoff.tech"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              contact@lazoff.tech
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a
              href="https://www.linkedin.com/in/joshua-lazoff/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              LinkedIn
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a
              href="https://github.com/jlazoff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a
              href="https://joshualazoff.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              joshualazoff.com
            </a>
          </div>
          <div className="pt-4 space-y-2">
            <a
              href="https://digitaltwinpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Now: Digital Twin Pro
            </a>
            <a
              href="https://globalknowledgegraph.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
            >
              Part of the Global Knowledge Graph Network
            </a>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-500 pt-4">
            Research and engineering by{" "}
            <a href="https://joshualazoff.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Joshua Lazoff
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
