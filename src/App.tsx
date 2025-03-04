import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
//import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <LayoutGroup>
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default App;
