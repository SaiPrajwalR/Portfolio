// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { Github, ExternalLink, Database, Code2, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Alumni Connect',
    subtitle: 'Full-Stack Web Application',
    description:
      'Developed a full-stack alumni management platform with user authentication, alumni verification, and admin management features. Managed structured user data, documentation workflows, and system testing while ensuring accuracy, reliability, and smooth user experience.',
    tech: ['TypeScript', 'JavaScript', 'CSS'],
    github: 'https://github.com/SaiPrajwalR',
    live: null,
    icon: <Globe size={20} />,
    color: 'from-blue-500/15 to-indigo-500/10',
    accent: '#6366f1',
    tags: ['Full-Stack', 'Authentication', 'Admin Panel'],
  },
  {
    title: 'HR Workforce & Attrition Dashboard',
    subtitle: 'Data Analysis & Visualization',
    description:
      'Analyzed 1,470 employee records using MySQL to identify attrition trends, department-wise workforce patterns, and compensation factors. Developed interactive Excel and Power BI dashboards with KPIs, DAX measures, and visualizations to generate insights supporting employee retention strategies.',
    tech: ['MySQL', 'Excel', 'Power BI', 'DAX'],
    github: 'https://github.com/SaiPrajwalR/HR-Attrition-Analysis',
    githubLabel: 'Demo & Code',
    live: null,
    icon: <Database size={20} />,
    color: 'from-emerald-500/15 to-teal-500/10',
    accent: '#10b981',
    tags: ['Data Analysis', 'Power BI', 'MySQL', '1,470 Records'],
  },
  {
    title: 'TryItAR & EcoTrace UI/UX',
    subtitle: 'UI/UX Design',
    description:
      'End-to-end UI/UX design for an AR-based virtual try-on platform (TryItAR) and a Sustainability Dashboard (EcoTrace). Created user personas, low/high-fidelity wireframes, and interactive prototypes using Figma with a focus on usability and micro-interactions.',
    tech: ['Figma', 'Prototyping', 'Wireframing', 'User Research'],
    github: null,
    live: 'https://www.behance.net/saiprajwalr',
    icon: <Code2 size={20} />,
    color: 'from-violet-500/15 to-purple-500/10',
    accent: '#8b5cf6',
    tags: ['Figma', 'UI/UX', 'AR Platform', 'Dashboard'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-24 py-10 md:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="mb-10">
        <p className="section-label mb-3">Projects</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Selected work{' '}
          <span className="gradient-text">with impact</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          Full-stack builds, data dashboards, and product-focused UI/UX — all designed to be
          polished, scalable, and user-first.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`glass-card flex flex-col overflow-hidden bg-gradient-to-br ${project.color} p-6`}
            style={{ '--accent': project.accent }}
          >
            {/* Icon + Type */}
            <div className="mb-4 flex items-center justify-between">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `${project.accent}22`, color: project.accent }}
              >
                {project.icon}
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: `${project.accent}18`,
                  border: `1px solid ${project.accent}35`,
                  color: project.accent,
                }}
              >
                {project.subtitle}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>

            {/* Description */}
            <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span key={j} className="tech-tag">{tag}</span>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="rounded-md px-2 py-0.5 text-xs font-medium text-slate-500"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-auto flex gap-4 border-t border-white/8 pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                >
                  <Github size={15} /> {project.githubLabel || 'Code'}
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                >
                  <ExternalLink size={15} /> {project.liveLabel || 'View'}
                </a>
              )}
              {!project.github && !project.live && (
                <span className="text-xs text-slate-600 italic">Private / Internal Project</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}