import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "TruckSathi Backend System",
    description: [
      "Architected core backend infrastructure utilizing Node.js and Express.js.",
      "Engineered secure state management via JWT authentication frameworks.",
      "Implemented optimized MongoDB schemas for scalable REST API operations."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    gradient: "from-[#00f0ff]/20 to-transparent",
    githubLink: "https://github.com/Dipanshudk46/trucksathi-backend"
  },
  {
    title: "Netflix Clone (Frontend UI)",
    description: [
      "Developed an identical, responsive, and dynamic UI mimicking Netflix.",
      "Leveraged React to rapidly manage and propagate view states.",
      "Integrated modern CSS structures for optimal media presentation."
    ],
    tech: ["React.js", "HTML", "CSS"],
    gradient: "from-[#b026ff]/20 to-transparent",
    githubLink: "https://github.com/Dipanshudk46/Netflix-clone"
  },
  {
    title: "Secure Communications Portfolio",
    description: [
      "Engineered a full-stack, futuristic web portfolio demonstrating interactive GUI.",
      "Implemented a functional Nodemailer routing service for autonomous contact delivery.",
      "Deployed cohesive React states separating client design and backend processing."
    ],
    tech: ["React.js", "Express.js", "Nodemailer"],
    gradient: "from-[#00f0ff]/20 to-transparent",
    githubLink: "https://github.com/Dipanshudk46/portfolio-fullstack"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Featured Constructs</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
             <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel group rounded-2xl overflow-hidden relative flex flex-col h-full border border-white/10 hover:border-[#00f0ff]/50 transition-colors duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="p-8 relative z-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <ul className="text-gray-400 mb-6 flex-grow space-y-2 text-sm">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#00f0ff] mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-[#00f0ff] border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white">
                      <GithubIcon className="w-5 h-5 pointer-events-none" />
                    </a>
                  )}
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#00f0ff]/20 transition-colors text-white">
                    <ExternalLink className="w-5 h-5 pointer-events-none" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
