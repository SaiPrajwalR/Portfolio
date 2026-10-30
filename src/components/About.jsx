// src/components/About.jsx
import { motion } from 'framer-motion';
import { BarChart3, Code2, Database, LayoutDashboard, Wrench, Users } from 'lucide-react';

const skillGroups = [
  {
    icon: <BarChart3 size={18} />,
    label: 'Data Analysis',
    skills: [
      'Data Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Data Validation',
      'KPI Reporting',
      'Trend Analysis',
    ],
  },
  {
    icon: <Code2 size={18} />,
    label: 'Programming & Libraries',
    skills: ['Python (pandas, NumPy, Matplotlib)'],
  },
  {
    icon: <Database size={18} />,
    label: 'Databases',
    skills: ['SQL', 'MySQL'],
  },
  {
    icon: <LayoutDashboard size={18} />,
    label: 'Visualization & BI',
    skills: [
      'Power BI (DAX Measures, Interactive Dashboards)',
      'Microsoft Excel (Dashboards, KPIs)',
    ],
  },
  {
    icon: <Wrench size={18} />,
    label: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'Microsoft Office', 'AI-assisted development'],
  },
  {
    icon: <Users size={18} />,
    label: 'Soft Skills',
    skills: ['Problem-solving', 'Communication', 'Teamwork'],
  },
];

const languages = [
  { lang: 'Kannada', level: 'Native' },
  { lang: 'English', level: 'Professional' },
  { lang: 'Hindi', level: 'Basic' },
];

const stats = [
  { value: '2', label: 'Internships' },
  { value: '1,470', label: 'Records Analyzed' },
  { value: '2+', label: 'Projects Built' },
  { value: '2026', label: 'Graduating' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24 py-10 md:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="mb-10">
        <p className="section-label mb-3">About Me</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Engineering meets{' '}
          <span className="gradient-text">product design</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          Final-year B.Tech Computer Science student at Dayananda Sagar University, Bengaluru.
          I bridge the gap between engineering and design — combining technical depth with a keen
          eye for user experience.
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div variants={fadeUp} className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="stat-box">
            <p className="text-3xl font-extrabold gradient-text">{s.value}</p>
            <p className="mt-1 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div variants={fadeUp} className="mb-10">
        <h3 className="mb-5 text-lg font-bold text-white">Skills & Proficiencies</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card flex h-full flex-col p-5"
              whileHover={{ y: -4 }}
            >
              <div className="mb-3 flex items-center gap-2 text-indigo-400">
                {group.icon}
                <span className="text-sm font-semibold text-white">{group.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span key={j} className="skill-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education + Languages Row */}
      <motion.div variants={fadeUp} className="grid gap-6 md:grid-cols-2">
        {/* Education */}
        <div className="glass-card p-6">
          <h3 className="mb-5 text-lg font-bold text-white">Education</h3>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="timeline-dot mt-1" />
              <div>
                <p className="font-semibold text-white">Dayananda Sagar University, Bengaluru</p>
                <p className="text-sm text-indigo-400">B.Tech in Computer Science & Engineering</p>
                <p className="text-sm text-slate-500">2022 – 2026 · CGPA: 5.86</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="timeline-dot mt-1" />
              <div>
                <p className="font-semibold text-white">Krupanidhi PU College, Bengaluru</p>
                <p className="text-sm text-indigo-400">Pre-University in PCMC (DPUE)</p>
                <p className="text-sm text-slate-500">2020 – 2022 · 83.33%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="glass-card p-6">
          <h3 className="mb-5 text-lg font-bold text-white">Languages Known</h3>
          <div className="space-y-4">
            {languages.map((l, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-slate-300 font-medium">{l.lang}</span>
                <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}