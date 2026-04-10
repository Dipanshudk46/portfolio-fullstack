import { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'

function App() {
  const [booting, setBooting] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <CustomCursor />
      {booting && <Preloader onComplete={() => setBooting(false)} />}
      
      <div className={`bg-[#0a0a0a] text-gray-100 min-h-screen selection:bg-[#00f0ff]/30 ${booting ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
        <motion.div
           className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#b026ff] z-[100] origin-left shadow-[0_0_15px_#00f0ff]"
           style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
