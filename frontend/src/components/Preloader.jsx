import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable scrolling when booting
    document.body.style.overflow = 'hidden';

    const sequence = [
      { text: "> [OK] Initializing Node.js Runtime...", delay: 200 },
      { text: "> [OK] Establishing Secure HTTPS Handshake...", delay: 600 },
      { text: "> [OK] Connecting to MongoDB Cluster...", delay: 1100 },
      { text: "> [OK] Verifying Auth Tokens...", delay: 1500 },
      { text: "> SYSTEM ONLINE. Routing to interface.", delay: 2000 }
    ];

    sequence.forEach((item) => {
      setTimeout(() => {
        setLogs(prev => [...prev, item.text]);
      }, item.delay);
    });

    setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = 'unset';
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2800);
    
    // Fallback cleanup
    return () => { document.body.style.overflow = 'unset'; }
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, y: "-100vh" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center font-mono"
        >
          <div className="max-w-2xl w-full px-6">
            <Terminal className="text-[#00f0ff] w-12 h-12 mb-8 shadow-[0_0_15px_#00f0ff]" />
            <div className="space-y-4 text-sm md:text-base">
              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${index === logs.length - 1 ? 'text-[#00f0ff] font-bold mt-8 tracking-widest' : 'text-gray-400'}`}
                >
                  {log}
                </motion.div>
              ))}
              {logs.length < 5 && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-3 h-5 bg-[#00f0ff] inline-block ml-2 mt-2"
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
