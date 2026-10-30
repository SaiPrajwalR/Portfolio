// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
];

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Animated canvas background */}
      <AnimatedBackground />

      {/* Orb overlays */}
      <div className="orb-layer" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Grid & noise overlays */}
      <div className="grid-overlay" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <a href="#top" className="group inline-flex items-baseline gap-0.5">
            <span className="text-xl font-extrabold text-white">SPR</span>
            <span className="text-xl font-extrabold text-indigo-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:saiprajwal08@gmail.com"
            className="btn-outline hidden text-sm md:inline-flex items-center gap-2"
            style={{ padding: '8px 20px', borderRadius: '10px' }}
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Main content — sits above all backgrounds */}
      <main
        id="top"
        className="relative z-10 space-y-2 px-4 pt-20 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20"
      >
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;