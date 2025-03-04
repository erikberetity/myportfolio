import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const text = "FRONTEND DEVELOPER / UI DESIGNER / CREATIVE TECHNOLOGIST";
  const letters = Array.from(text);

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black text-white px-4 relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-50" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="text-neutral-400 tracking-widest text-sm mb-8">
            (01) INTRODUCTION
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter">
            Erik 
            
            <span className="text-neutral-400"> Beretity</span>
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight text-neutral-400"
        >
          Building digital
          <br />
          experiences that
          <br />
          <span className="text-white">matter.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="overflow-hidden whitespace-nowrap relative"
        >
          <div className="animate-marquee inline-block">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                className="text-neutral-400 text-lg tracking-wider"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="animate-marquee2 inline-block absolute top-0">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                className="text-neutral-400 text-lg tracking-wider"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-lg border-b-2 border-white pb-2 hover:text-neutral-400 hover:border-neutral-400 transition-colors duration-300"
          >
            Let's collaborate →
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-24 bg-white/20 relative">
          <motion.div
            animate={{
              y: [0, 100, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-1/3 bg-white absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
