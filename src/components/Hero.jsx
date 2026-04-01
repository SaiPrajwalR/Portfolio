// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';

export default function Hero() {
  const {
    div: MotionDiv,
    p: MotionP,
    h1: MotionH1,
    h2: MotionH2,
    a: MotionA,
  } = motion;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 18 },
    },
  };

  return (
    <section className="relative flex min-h-[45vh] flex-col justify-center py-8 md:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <MotionDiv variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <MotionP variants={item} className="mb-4 text-sm font-semibold tracking-wide text-blue-600">
          Hi, my name is
        </MotionP>

        <MotionH1 variants={item} className="mb-6 text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
          Sai Prajwal R.
        </MotionH1>

        <MotionH2 variants={item} className="mb-8 text-2xl font-semibold tracking-tight text-slate-700 md:text-4xl leading-tight">
          I build scalable solutions and design seamless experiences.
        </MotionH2>

        <MotionP variants={item} className="mb-10 text-base leading-relaxed text-slate-600 md:text-lg">
          Final-year B.Tech Computer Science student with a strong foundation in full-stack development, UI/UX design, and software optimization. Passionate about learning emerging technologies and solving real-world problems.
        </MotionP>

        <MotionDiv variants={item} className="flex flex-wrap items-center gap-3">
          <MotionA
            href="#projects"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            View Projects
          </MotionA>

          <MotionA
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:shadow-md"
          >
            <Download size={18} /> Resume
          </MotionA>

          <div className="flex items-center gap-2 md:ml-2">
            <MotionA
              href="https://github.com/SaiPrajwalR"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:shadow-md hover:text-blue-700"
            >
              <Github size={20} />
            </MotionA>
            <MotionA
              href="https://www.linkedin.com/in/sai-prajwal-r-4636292ba"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:shadow-md hover:text-blue-700"
            >
              <Linkedin size={20} />
            </MotionA>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}