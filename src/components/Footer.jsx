// src/components/Footer.jsx
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/8 py-10 text-center">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '400px', height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.4), transparent)',
        }}
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* Logo */}
        <div className="mb-6">
          <span className="text-2xl font-extrabold gradient-text">SPR.</span>
        </div>

        {/* Nav Links */}
        <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {['#about', '#experience', '#certifications', '#projects'].map((href, i) => (
            <a
              key={i}
              href={href}
              className="capitalize hover:text-indigo-400 transition-colors"
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-6 flex justify-center gap-3">
          <a
            href="mailto:saiprajwal08@gmail.com"
            aria-label="Email"
            className="btn-icon"
          >
            <Mail size={17} />
          </a>
          <a
            href="https://github.com/SaiPrajwalR"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="btn-icon"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-prajwal-r-4636292ba"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="btn-icon"
          >
            <Linkedin size={17} />
          </a>
        </div>

        {/* Copyright */}
        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-600">
          Designed &amp; Built with <Heart size={12} className="text-indigo-500" fill="currentColor" /> by Sai Prajwal R · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}