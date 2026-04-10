import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronRight, Terminal, Cpu, Mail, Phone } from 'lucide-react';

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const contactLinks = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "dipanshudk46107@gmail.com", href: "mailto:dipanshudk46107@gmail.com" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "8219768534", href: "tel:8219768534" },
  { icon: <LinkedinIcon className="w-5 h-5" />, label: "LinkedIn", value: "Dipanshu", href: "https://www.linkedin.com/in/dipanshu-01b167260/" },
  { icon: <GithubIcon className="w-5 h-5" />, label: "GitHub", value: "Dipanshudk46", href: "https://github.com/Dipanshudk46" }
];

const InputField = ({ label, type, placeholder, isSubmitting, setTyped, value, onChange }) => (
  <div className="relative group w-full">
    {/* Decorative HUD corners */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f0ff] opacity-40 group-focus-within:opacity-100 transition-opacity z-10 pointer-events-none"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f0ff] opacity-40 group-focus-within:opacity-100 transition-opacity z-10 pointer-events-none"></div>
    
    <div className="absolute -top-3 left-4 bg-[#0a0a0a]/80 backdrop-blur-sm px-2 z-10 flex items-center space-x-1 border border-[#00f0ff]/20 rounded-full">
      <ChevronRight className="w-3 h-3 text-[#00f0ff]" />
      <span className="text-[10px] font-mono text-[#00f0ff] uppercase tracking-widest">{label}</span>
    </div>
    
    {type === 'textarea' ? (
      <textarea 
        required 
        disabled={isSubmitting} 
        rows="5"
        onChange={(e) => {
  setTyped(p => p + 1);
  onChange(e);
}}
value={value}
        className="w-full bg-black/60 border border-white/5 rounded-none px-5 py-5 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-[#00f0ff]/5 transition-all resize-none disabled:opacity-50 text-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] relative z-0 mt-1" 
        placeholder={placeholder}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
      ></textarea>
    ) : (
      <input 
        required 
        disabled={isSubmitting} 
        type={type} 
        onChange={(e) => {
  setTyped(p => p + 1);
  onChange(e);
}}
value={value}
        className="w-full bg-black/60 border border-white/5 rounded-none px-5 py-4 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-[#00f0ff]/5 transition-all disabled:opacity-50 text-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] relative z-0 tracking-wide mt-1" 
        placeholder={placeholder} 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
      />
    )}
  </div>
);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [typed, setTyped] = useState(0);
  const [stack, setStack] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
    });

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const sendData = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (!data.success) throw new Error(data.message);

    return true;

  } catch (error) {
    console.log("API Error:", error);
    return false;
  }
};
    // Real-time variance helper
    const executeDelay = (min = 200, max = 800) => 
      new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (max - min + 1)) + min));

    // JS Call Stack Simulation
    const runCallStack = async () => {
      setStack(['Global Context']);
      await executeDelay(200, 400); // Startup jitter
      
      setStack(p => ['handleSubmit(event)', ...p]);
      await executeDelay(250, 600); // Handler execution
      
      setStack(p => ['validatePayload(data)', ...p]);
      await executeDelay(150, 300); // Validation reads quickly
      
      setStack(p => ['fetch("/api/send")', ...p]);
      await executeDelay(700, 1400); // Simulated backend lag
      
      setStack(p => p.slice(1)); // pop fetch
      await executeDelay(150, 350);
      
      setStack(p => p.slice(1)); // pop validate
      await executeDelay(150, 350);
      
      setStack(p => p.slice(1)); // pop handler
      await executeDelay(150, 300);
      
      setStack([]); // pop global
      
      setIsSubmitting(false);
      setSubmitted(true);
    };

        const result = await sendData();

        if (result) {
          runCallStack(); // animation stays untouched
        } else {
          setIsSubmitting(false);
        }
  };

  return (
    <section id="contact" className="py-24 pb-32 relative">
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_30%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 relative z-10 pt-10">
          <motion.div initial={{ width: 0 }} whileInView={{ width: "100px" }} className="h-[2px] bg-[#00f0ff] mx-auto mb-6"></motion.div>
          <h2 className="text-5xl font-bold mb-4 tracking-tighter uppercase" style={{ textShadow: "0 0 20px rgba(0,240,255,0.3)" }}>
            Let's <span className="text-gradient hover:animate-pulse">Connect</span>
          </h2>
          <p className="text-[#00f0ff]/60 font-mono text-sm tracking-[0.4em] uppercase">Open For Opportunities</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#050505]/90 backdrop-blur-xl border border-[#00f0ff]/20 shadow-[0_0_50px_rgba(0,240,255,0.05)] grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden group"
          style={{ clipPath: 'polygon(0 30px, 30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
        >
          {/* Internal glowing ambiance */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#00f0ff]/5 to-transparent pointer-events-none z-0"></div>

          {/* Decorative left HUD bar */}
          <div className="hidden md:flex flex-col items-center py-8 border-r border-[#00f0ff]/10 bg-black/60 md:col-span-1 space-y-6 relative z-10">
            <Terminal className="w-5 h-5 text-[#00f0ff]" />
            <div className="w-[1px] h-32 bg-gradient-to-b from-[#00f0ff]/50 to-transparent"></div>
            <div className="text-[10px] text-[#00f0ff]/80 font-mono -rotate-90 tracking-widest whitespace-nowrap mt-20">CONTACT_PORTAL_v1.0</div>
          </div>

          <div className="p-6 md:p-14 md:col-span-8 relative z-10">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-16 flex flex-col items-center justify-center h-full"
              >
                {/* Landing Return Flight Animation */}
                <motion.div 
                  initial={{ x: -250, y: -250, opacity: 0, rotate: -45, scale: 0.2 }}
                  animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                  className="w-32 h-32 bg-[#00f0ff]/10 rounded-full flex items-center justify-center mb-8 border border-[#00f0ff]/40 shadow-[0_0_60px_rgba(0,240,255,0.3)] relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="absolute bottom-2 right-2 bg-[#00f0ff] rounded-full p-1.5 border-[3px] border-[#050505]"
                  >
                     <CheckCircle2 className="w-6 h-6 text-black" />
                  </motion.div>
                  <Send className="text-[#00f0ff] w-12 h-12 pointer-events-none drop-shadow-[0_0_15px_rgba(0,240,255,1)]" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-widest uppercase text-gradient">Message Sent</h3>
                <p className="text-[#00f0ff]/60 font-mono text-sm tracking-widest border border-[#00f0ff]/20 bg-[#00f0ff]/5 px-6 py-2 rounded-full">Thank you for reaching out</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <InputField 
                      label="Name"
                      type="text"
                      placeholder="Enter Name"
                      isSubmitting={isSubmitting}
                      setTyped={setTyped}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                 <InputField 
                      label="Email"
                      type="email"
                      placeholder="name@company.com"
                      isSubmitting={isSubmitting}
                      setTyped={setTyped}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <InputField 
                  label="Message"
                  type="textarea"
                  placeholder="Project details and inquiries..."
                  isSubmitting={isSubmitting}
                  setTyped={setTyped}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />

                <motion.button 
                  whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 text-[#00f0ff] py-5 font-bold flex items-center justify-center space-x-4 transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] disabled:opacity-50 disabled:cursor-wait group mt-8 h-[70px]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                  
                  <span className="relative z-10 tracking-[0.4em] uppercase text-sm">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  
                  <motion.div
                    animate={
                      isSubmitting 
                        ? { x: 300, y: -300, opacity: 0, scale: 0.5 } 
                        : { x: 0, y: 0, opacity: 1, scale: 1 }
                    }
                    transition={{ duration: 1.2, ease: "easeIn" }}
                    className="relative z-10"
                  >
                    <Send className={`w-5 h-5 transition-transform duration-300 ${!isSubmitting && 'group-hover:translate-x-2 group-hover:-translate-y-2'}`} />
                  </motion.div>
                </motion.button>
              </form>
            )}
          </div>

          {/* Right Side Info HUD - Data Diagnostics Panel (Now visible on mobile below form) */}
          <div className="col-span-1 md:col-span-3 bg-black/80 border-t mt-8 md:mt-0 md:border-t-0 md:border-l border-[#00f0ff]/10 p-8 relative overflow-hidden z-10">
            <div className="absolute opacity-5 -right-16 -bottom-16 pointer-events-none">
              <Cpu className="w-80 h-80 text-[#00f0ff]" />
            </div>
            
            <div className="relative z-10 space-y-10">
              <div>
                <h4 className="text-[#00f0ff]/80 font-mono text-[10px] tracking-[0.2em] uppercase mb-4 border-b border-[#00f0ff]/20 pb-2">User Diagnostics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                     <span className="text-gray-500">Status</span>
                     <span className="text-white">Active <span className="text-green-500 animate-pulse inline-block ml-1">●</span></span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-500">Latency</span>
                    <span className="text-white">12ms</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-500">Keystrokes</span>
                    <span className="text-[#00f0ff]">{typed}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-500">Encryption</span>
                    <span className="text-white">SHA-256</span>
                  </div>
                </div>
              </div>

              <div>
                 <h4 className="text-[#00f0ff]/80 font-mono text-[10px] tracking-[0.2em] uppercase mb-4 border-b border-[#00f0ff]/20 pb-2">Execution Stack</h4>
                 <div className="h-40 w-full bg-black/60 border border-white/5 relative overflow-hidden flex flex-col justify-end p-2 space-y-reverse space-y-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                    {stack.length === 0 && !submitted ? (
                       <div className="absolute inset-0 flex items-center justify-center">
                         <span className="text-gray-600 font-mono text-xs animate-pulse">Event Loop Idle</span>
                       </div>
                    ) : (
                       <AnimatePresence>
                         {stack.map((frame, index) => {
                            const isActive = index === 0;
                            return (
                               <motion.div
                                  key={frame}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 50 }}
                                  transition={{ duration: 0.2 }}
                                  className={`relative w-full font-mono text-[10px] py-2 px-2 text-center transition-all duration-300 ${
                                    isActive 
                                      ? 'bg-gradient-to-r from-[#b026ff]/20 to-[#00f0ff]/20 border border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] animate-pulse' 
                                      : 'bg-[#00f0ff]/5 border border-[#00f0ff]/20 text-[#00f0ff]/50'
                                  }`}
                               >
                                 {isActive && (
                                   <span className="absolute left-3 top-1/2 -translate-y-1/2 flex h-2 w-2">
                                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                                     <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
                                   </span>
                                 )}
                                 {frame}
                               </motion.div>
                            );
                         })}
                       </AnimatePresence>
                    )}
                 </div>
              </div>
            </div>
          </div>
          
        </motion.div>

        {/* Direct Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-8">
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.label === 'Email' || link.label === 'Phone' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel group relative overflow-hidden flex flex-col items-center justify-center py-8 px-6 text-center border border-white/5 bg-[#050505]/60 hover:bg-black hover:border-[#00f0ff]/40 transition-all rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-gray-500 group-hover:text-[#00f0ff] transition-colors mb-4 transform group-hover:scale-110 duration-300 drop-shadow-[0_0_10px_rgba(0,240,255,0)] group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                {link.icon}
              </div>
              <h5 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-2">{link.label}</h5>
              <span className="text-[#00f0ff]/70 font-mono text-[10px] break-all tracking-wider">{link.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
