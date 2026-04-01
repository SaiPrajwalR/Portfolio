// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="bg-orb bg-orb--1" />
        <div className="bg-orb bg-orb--2" />
        <div className="bg-orb bg-orb--3" />
        <div className="bg-grid-mask" />
      </div>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <a href="#top" className="group inline-flex items-baseline gap-1">
            <span className="text-lg font-semibold tracking-tight text-slate-900">SPR</span>
            <span className="text-lg font-semibold tracking-tight text-blue-600">.</span>
            <span className="sr-only">Go to top</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          </div>
        </div>
      </nav>
      <main id="top" className="space-y-6 px-4 pt-24 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;