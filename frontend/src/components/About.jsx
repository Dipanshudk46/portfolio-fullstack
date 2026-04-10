import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-[80px]"></div>
          
          <h2 className="text-3xl font-bold mb-6">Sys.Log({`"About"`})</h2>
          
          <div className="text-lg text-gray-300 space-y-6 max-w-3xl leading-relaxed">
            <p>
              I am a backend-focused full-stack developer specializing in Node.js, Express, and MongoDB. 
              My expertise lies in designing robust server-side architectures, processing complex data, 
              and establishing secure infrastructure.
            </p>
            <p>
              With real-world experience developing platforms like TruckSathi and integrating JWT authentication, 
              I prioritize scalability and problem-solving over superficial design. While my core strength is 
              backend engineering, I seamlessly bridge the gap with React to deliver complete, optimized systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
