// src/components/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  const { section: MotionSection, div: MotionDiv, span: MotionSpan } = motion;

  const skills = [
    "JavaScript", "Python", "React", "Node.js", "Next.js", 
    "Tailwind CSS", "C", "MySQL", "Unity (C#)", "Figma"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
  };

  return (
    <MotionSection
      id="about"
      className="scroll-mt-24 py-6 md:py-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      <MotionDiv variants={fadeUp} className="mb-5">
        <p className="text-sm font-semibold tracking-[0.14em] text-blue-600">About</p>
        <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
          A blend of engineering and product design.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-xl">
          I enjoy building fast, reliable web experiences with a strong focus on clean UI, thoughtful UX, and maintainable code.
        </p>
      </MotionDiv>

      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <MotionDiv variants={fadeUp} className="space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
          <p>
            I am a highly motivated and detail-oriented final-year Computer Science student at Dayananda Sagar University. I enjoy bridging the gap between engineering and design—combining my technical knowledge with a keen eye for user experience.
          </p>
          <p>
            Whether I am building a scalable web application, designing intuitive interfaces in Figma, or developing interactive 2D games in Unity, my goal is always to deliver efficient, user-centric solutions.
          </p>
        </MotionDiv>
        
        <MotionDiv variants={fadeUp}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <MotionSpan
                key={index}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-shadow hover:shadow-md"
              >
                {skill}
              </MotionSpan>
            ))}
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}