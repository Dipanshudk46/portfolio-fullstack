import { motion } from 'framer-motion';
import { Atom, Server, Terminal, Database } from 'lucide-react';

const skills = [
  { name: "MongoDB",gradient: "from-[#4db33d]/20 to-transparent", color: "#4db33d" },
  { name: "Express", gradient: "from-[#aaaaaa]/20 to-transparent", color: "#aaaaaa" },
  { name: "React",  gradient: "from-[#00d8ff]/20 to-transparent", color: "#00d8ff" },
  { name: "Node.js",gradient: "from-[#8cc84b]/20 to-transparent", color: "#8cc84b" }
];

const SkillVisualizer = ({ skillName }) => {
  if (skillName === "Express") {
    // API logic visualization
    return (
      <div className="flex-1 w-full flex flex-col items-center justify-center space-y-2 mt-4 text-[#aaaaaa]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-mono text-xs bg-black/60 p-3 rounded-lg border border-[#aaaaaa]/30 shadow-[0_0_15px_#aaaaaa30]"
        >
          <div className="flex flex-col space-y-1">
             <span className="text-white">app.<span className="text-blue-400">get</span>(<span className="text-green-400">"/api"</span>, (req, res) =&gt; {'{'}</span>
             <motion.div 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }} 
               transition={{ duration: 0.5, delay: 1 }}
               className="pl-4"
             >
                <span className="text-white">res.<span className="text-blue-400">json</span>({'{'} <span className="text-[#aaaaaa]">status: 200</span> {'}'});</span>
             </motion.div>
             <span className="text-white">{'}'});</span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (skillName === "React") {
    // Fundamentals on React
    return (
      <div className="flex-1 w-full flex items-center justify-center mt-2 h-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="relative flex items-center justify-center"
        >
          <Atom className="w-16 h-16 md:w-24 md:h-24 text-[#00d8ff]" style={{ filter: "drop-shadow(0 0 10px #00d8ff90)" }} />
          <motion.div 
             animate={{ scale: [1, 1.2, 1] }} 
             transition={{ duration: 2, repeat: Infinity }} 
             className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"
          ></motion.div>
        </motion.div>
      </div>
    );
  }

  if (skillName === "Node.js") {
    // a server should open up
    return (
      <div className="flex-1 w-full flex items-center justify-center mt-2 h-full">
        <motion.div
           initial={{ scaleY: 0, opacity: 0, y: 20 }}
           whileInView={{ scaleY: 1, opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
           className="relative bg-black/50 p-4 border border-[#8cc84b]/40 rounded-xl"
           style={{ transformOrigin: "bottom", boxShadow: "0 0 20px #8cc84b40" }}
        >
          <Server className="w-12 h-12 md:w-16 md:h-16 text-[#8cc84b]" strokeWidth={1.5} />
          {/* Server Lights */}
          <motion.div 
             animate={{ opacity: [0.2, 1, 0.2] }}
             transition={{ duration: 0.8, repeat: Infinity }}
             className="absolute top-[25%] right-[25%] w-2 h-2 bg-[#00f0ff] rounded-full shadow-[0_0_5px_#00f0ff]"
          ></motion.div>
           <motion.div 
             animate={{ opacity: [0.2, 1, 0.2] }}
             transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
             className="absolute bottom-[25%] right-[25%] w-2 h-2 bg-[#8cc84b] rounded-full shadow-[0_0_5px_#8cc84b]"
          ></motion.div>
        </motion.div>
      </div>
    );
  }

  if (skillName === "MongoDB") {
    // a database should open up
    return (
      <div className="flex-1 w-full flex flex-col items-center justify-center mt-6 h-full space-y-1 md:space-y-2">
        {[2, 1, 0].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 20 * (i + 1), opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15, type: "spring", stiffness: 120 }}
            className="w-16 h-6 md:w-20 md:h-8 border-2 border-[#4db33d] rounded-[50%] bg-gradient-to-b from-[#4db33d]/40 to-black relative"
            style={{ boxShadow: "0 0 15px #4db33d30", zIndex: 10 - i }}
          >
             <div className="absolute inset-0 border-t border-[#4db33d]/70 rounded-[50%]"></div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (skillName === "Python") {
    // Terminal algorithm
    return (
      <div className="flex-1 w-full flex items-center justify-center mt-2 h-full">
        <motion.div
           initial={{ scale: 0, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.7 }}
           className="relative bg-black/60 p-4 border border-[#ffdf76]/40 rounded-full"
           style={{ boxShadow: "0 0 20px #ffdf7640" }}
        >
          <Terminal className="w-12 h-12 md:w-16 md:h-16 text-[#ffdf76]" />
        </motion.div>
      </div>
    );
  }

  if (skillName === "PostgreSQL") {
    // Relational Tables
    return (
      <div className="flex-1 w-full flex items-center justify-center mt-2 h-full">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.7 }}
           className="relative"
        >
          <Database className="w-16 h-16 md:w-20 md:h-20 text-[#336791]" style={{ filter: "drop-shadow(0 0 10px #33679180)" }} />
        </motion.div>
      </div>
    );
  }

  return null;
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#b026ff]/10 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Backend Core Capabilities</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative h-72 rounded-2xl overflow-hidden glass-panel group shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/5"
            >
              {/* Internal Core (The Skill Vis) */}
              <motion.div 
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                className={`absolute inset-0 flex flex-col items-center justify-start p-6 bg-gradient-to-br ${skill.gradient} z-10`}
              >
                <div className="flex items-center space-x-3 bg-black/40 px-6 py-2 rounded-full border border-white/10 mb-2">
                  <span className="text-xl font-bold tracking-wider" style={{ color: skill.color, textShadow: `0 0 10px ${skill.color}80` }}>
                    {skill.name}
                  </span>
                </div>
                
                {/* Specific Visualizer based on instruction */}
                <SkillVisualizer skillName={skill.name} />
                
              </motion.div>

              {/* Top Door of the Box */}
              <motion.div 
                variants={{
                  hidden: { y: "0%" },
                  visible: { y: "-100%" }
                }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute top-0 left-0 w-full h-1/2 bg-[#111] border-b border-white/20 z-20 flex flex-col items-center justify-end pb-2 overflow-hidden shadow-lg"
              >
                <div className="w-1/3 h-[2px] bg-white/20 mb-1"></div>
                <div className="w-20 h-[4px] rounded-full" style={{ backgroundColor: skill.color }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
              </motion.div>

              {/* Bottom Door of the Box */}
              <motion.div 
                variants={{
                  hidden: { y: "0%" },
                  visible: { y: "100%" }
                }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute bottom-0 left-0 w-full h-1/2 bg-[#111] border-t border-white/20 z-20 flex flex-col items-center justify-start pt-2 overflow-hidden shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
              >
                <div className="w-20 h-[4px] rounded-full mb-1" style={{ backgroundColor: skill.color }}></div>
                <div className="w-1/3 h-[2px] bg-white/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
              </motion.div>
              
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] pointer-events-none z-30"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
