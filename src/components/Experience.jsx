// src/components/Experience.jsx
import { motion } from 'framer-motion';

export default function Experience() {
  const { section: MotionSection, div: MotionDiv } = motion;

  const experiences = [
    {
      role: "Software Development Intern",
      company: "Hindustan Aeronautics Limited (HAL)",
      duration: "3 Months",
      details: [
        "Redesigned and optimized an existing desktop application lacking structured UI/UX and modular architecture.",
        "Enhanced interface using Python (Tkinter & ttk) with modern styling, fonts, and color schemes.",
        "Refactored codebase to improve readability, maintainability, and performance efficiency."
      ]
    },
    {
      role: "UI/UX Design Intern",
      company: "Infotact Solutions",
      duration: "3 Months (Remote)",
      details: [
        "Designed end-to-end UI/UX for an AR-based virtual try-on platform (TryItAR).",
        "Developed a Sustainability Dashboard (EcoTrace) with data visualization and user engagement features.",
        "Created user personas, low/high-fidelity wireframes, and interactive prototypes using Figma."
      ]
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
  };

  return (
    <MotionSection
      id="experience"
      className="scroll-mt-24 py-6 md:py-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      <MotionDiv variants={fadeUp} className="mb-5">
        <p className="text-sm font-semibold tracking-[0.14em] text-blue-600">Experience</p>
        <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
          Roles where I shipped real outcomes.
        </h2>
      </MotionDiv>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <MotionDiv 
            key={i}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg md:p-8"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{exp.role}</h3>
                <p className="text-blue-600 font-semibold">{exp.company}</p>
              </div>
              <p className="text-slate-500 text-sm mt-2 md:mt-0 font-medium">{exp.duration}</p>
            </div>
            <ul className="ml-4 list-outside list-disc space-y-2 text-base leading-relaxed text-slate-600">
              {exp.details.map((detail, j) => (
                <li key={j}>{detail}</li>
              ))}
            </ul>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}