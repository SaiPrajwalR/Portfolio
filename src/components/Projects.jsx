// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';

export default function Projects() {
  const { section: MotionSection, div: MotionDiv } = motion;

  const projects = [
    {
      title: "Alumni Connect System",
      description: "A scalable full-stack web application designed to streamline communication between alumni and administrators. Features robust user authentication, dynamic event management, and an integrated AI chatbot for real-time engagement.",
      tech: ["React", "Node.js", "AI Integration", "JSON Storage"],
      github: "https://github.com/SaiPrajwalR",
      live: "#",
      type: "Full-Stack Development"
    },
    {
      title: "TryItAR & EcoTrace UI/UX",
      description: "End-to-end UI/UX design for an AR-based virtual try-on platform and a Sustainability Dashboard. Focused on user personas, high-fidelity wireframing, micro-interactions, and usability testing.",
      tech: ["Figma", "Prototyping", "Wireframing", "User Research"],
      github: null,
      live: "https://www.behance.net/saiprajwalr",
      type: "UI/UX Design"
    },
    {
      title: "2D Physics Games Engine",
      description: "Developed interactive 2D games including a Flappy Bird clone and Ping Pong. Implemented core mechanics like gravity physics, collision detection, game-over logic, and basic AI systems.",
      tech: ["Unity Engine", "C#", "Rigidbody2D", "WebGL"],
      github: "https://github.com/SaiPrajwalR",
      live: "#",
      type: "Game Development"
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
  };

  return (
    <MotionSection
      id="projects"
      className="scroll-mt-24 py-6 md:py-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      <MotionDiv variants={fadeUp} className="mb-5">
        <p className="text-sm font-semibold tracking-[0.14em] text-blue-600">Projects</p>
        <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
          Selected work with impact.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-xl">
          A mix of full-stack builds, product-focused UI/UX, and interactive systems—designed to be polished, scalable, and user-first.
        </p>
      </MotionDiv>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <MotionDiv 
            key={i}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
          >
            <p className="text-blue-600 text-sm font-semibold mb-2">{project.type}</p>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
            <p className="mb-6 flex-grow text-base leading-relaxed text-slate-600">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, j) => (
                <span key={j} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 border-t border-slate-200 pt-4">
              {project.github && (
                <a href={project.github} className="text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-2 text-sm font-medium">
                  <Github size={16} /> Code
                </a>
              )}
              <a href={project.live} className="text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-2 text-sm font-medium">
                {project.type === "UI/UX Design" ? <ExternalLink size={16} /> : <MonitorPlay size={16} />}
                {project.type === "UI/UX Design" ? "Behance" : "Demo"}
              </a>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}