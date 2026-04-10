import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b026ff]/20 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00f0ff]/20 rounded-full blur-[80px] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#00f0ff] font-mono mb-4 block tracking-widest text-sm uppercase">Dipanshu — Backend-Focused Full Stack Developer</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I Engineer <span className="text-gradient">Systems</span>,<br />
            Not Just Interfaces.
          </h1>
        </motion.div>

        <motion.p 
          className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Architecting robust REST APIs, secure authentication, and scalable database schemas. 
          Focused on solving complex data challenges while delivering seamless functional execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <span>Explore My Work</span>
            <ArrowRight className="w-5 h-5 pointer-events-none" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
