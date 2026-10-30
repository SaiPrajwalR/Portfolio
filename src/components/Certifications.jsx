// src/components/Certifications.jsx
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Data Analyst Certification',
    issuer: 'Achievers IT',
    duration: 'Jun 2026 – Sep 2026',
    description:
      'Comprehensive 4-month certification covering Python (pandas, NumPy, Matplotlib), MySQL, Excel, and Power BI. Hands-on project analyzing 1,470 employee records for an HR Attrition dashboard.',
    skills: ['Python', 'MySQL', 'Power BI', 'Excel', 'Data Visualization'],
    color: 'from-emerald-500/20 to-teal-500/10',
    badgeColor: '#10b981',
    icon: '📊',
    link: 'https://drive.google.com/file/d/1sH0neDHFbXrbsnm7haaG3UYKmj6_H8vh/view?usp=drive_link',
  },
  {
    title: 'UI/UX Design Certification',
    issuer: 'Infotact Solutions',
    duration: 'Aug 2025 – Nov 2025',
    description:
      'End-to-end UI/UX design internship where I designed AR-based virtual try-on platform (TryItAR) and a Sustainability Dashboard (EcoTrace). Involved user research, wireframing, prototyping, and usability testing.',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'UI Design'],
    color: 'from-violet-500/20 to-purple-500/10',
    badgeColor: '#8b5cf6',
    icon: '🎨',
    link: 'https://drive.google.com/file/d/1kUgcuzzvW_3zKmlM0rtd3t4gtcx4UaWR/view?usp=drive_link',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
};

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="scroll-mt-24 py-10 md:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="mb-10">
        <p className="section-label mb-3">Certifications</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Credentials &{' '}
          <span className="gradient-text">Achievements</span>
        </h2>
      </motion.div>

      {/* Cert Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`cert-badge bg-gradient-to-br ${cert.color} flex flex-col justify-between`}
            style={{ flexDirection: 'column' }}
          >
            <div>
              {/* Top Row */}
              <div className="mb-4 flex items-start gap-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <span
                      className="flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-semibold"
                      style={{
                        background: `${cert.badgeColor}18`,
                        border: `1px solid ${cert.badgeColor}35`,
                        color: cert.badgeColor,
                      }}
                    >
                      <Award size={11} /> {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar size={11} /> {cert.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{cert.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, j) => (
                  <span key={j} className="skill-pill text-xs">{skill}</span>
                ))}
              </div>
            </div>

            {/* Certificate Link */}
            {cert.link && (
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-slate-400">Verified Credential</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: `${cert.badgeColor}18`,
                    border: `1px solid ${cert.badgeColor}40`,
                    color: cert.badgeColor,
                  }}
                >
                  <ExternalLink size={13} /> View Certificate
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
