import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      // Offset by 80px to account for the fixed navbar height
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-black/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="text-[#00f0ff] w-6 h-6" />
            <span className="font-bold text-xl tracking-wider text-gradient">SYSTEM.INIT</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-medium tracking-wide uppercase relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00f0ff] group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_10px_#00f0ff]"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
