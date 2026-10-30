// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  const roles = ['Data Analyst', 'Full-Stack Developer', 'UI/UX Designer'];

  return (
    <section className="relative flex min-h-screen flex-col justify-center py-16" id="top">
      {/* Centered hero glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px', height: '600px',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 65%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            Open to Opportunities · Bengaluru, India
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mb-4 text-6xl font-extrabold tracking-tight md:text-8xl"
        >
          <span className="gradient-text">Sai Prajwal R</span>
        </motion.h1>

        {/* Animated role subtitle */}
        <motion.div variants={item} className="mb-6">
          <RoleTyper roles={roles} />
        </motion.div>

        {/* Objective */}
        <motion.p
          variants={item}
          className="mb-10 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          Motivated Computer Science graduate with a recently completed 4-month Data Analyst certification
          covering Python, MySQL, Excel, and Power BI. Hands-on experience building an HR Attrition
          dashboard analyzing 1,470 employee records. Seeking a Data Analyst role to apply strong
          analytical, problem-solving, and data visualization skills.
        </motion.p>

        {/* Contact Info Row */}
        <motion.div variants={item} className="mb-10 flex flex-wrap gap-4 text-sm text-slate-500">
          <a href="mailto:saiprajwal08@gmail.com" className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
            <Mail size={14} /> saiprajwal08@gmail.com
          </a>
          <span className="flex items-center gap-1.5">
            <Phone size={14} /> +91 9019430575
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> Bengaluru-560068
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-glow inline-flex items-center gap-2 text-sm"
          >
            <span>View Projects</span>
          </motion.a>

          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            <Download size={16} /> Download Resume
          </motion.a>

          <div className="flex items-center gap-2 md:ml-1">
            <motion.a
              href="https://github.com/SaiPrajwalR"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn-icon"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sai-prajwal-r-4636292ba"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn-icon"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="mt-16 flex items-center gap-3 text-xs text-slate-600"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-600" />
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RoleTyper({ roles }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="flex items-center gap-3 h-10">
      <span className="text-slate-400 text-2xl font-semibold md:text-3xl">I build as a</span>
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold gradient-text md:text-3xl"
      >
        {roles[index]}
      </motion.span>
    </div>
  );
}
