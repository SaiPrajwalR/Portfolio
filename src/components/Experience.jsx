// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'Hindustan Aeronautics Limited (HAL)',
    location: 'Bangalore',
    duration: 'Jan 2026 – Mar 2026',
    type: 'On-site',
    color: 'from-blue-500/20 to-indigo-500/10',
    accent: 'text-blue-400',
    details: [
      'Managed and verified structured data records with high accuracy while supporting application workflows and documentation processes.',
      'Coordinated cross-functional collaboration with teams to test system functionality, ensuring process accuracy, attention to detail, and efficient issue resolution through proactive troubleshooting.',
    ],
  },
  {
    role: 'UI/UX Design Intern',
    company: 'Infotact Solutions',
    location: 'Remote',
    duration: 'Aug 2025 – Nov 2025',
    type: 'Remote',
    color: 'from-violet-500/20 to-purple-500/10',
    accent: 'text-violet-400',
    details: [
      'Handled project documentation, organized user records, and ensured accurate implementation of project requirements.',
      'Conducted verification and usability checks, maintained detailed reports, and coordinated with teams in a professional remote environment.',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-24 py-10 md:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="mb-10">
        <p className="section-label mb-3">Experience</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Where I've{' '}
          <span className="gradient-text">made an impact</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-6 pl-8">
        <div className="timeline-line" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-8 flex items-center justify-center">
              <div className="timeline-dot" />
            </div>

            {/* Card */}
            <div className={`glass-card overflow-hidden bg-gradient-to-br ${exp.color} p-6 md:p-8`}>
              {/* Header row */}
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <Briefcase size={16} className={exp.accent} />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className={`font-semibold ${exp.accent}`}>{exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                    <Calendar size={11} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                    <MapPin size={11} /> {exp.location} · {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3">
                {exp.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                    <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${exp.accent.replace('text-', 'bg-')}`} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}