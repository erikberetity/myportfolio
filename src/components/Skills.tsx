import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'React & TypeScript', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'Web Animation', level: 87 },
    { name: 'Responsive Design', level: 92 },
  ];

  return (
    <section id="skills" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="text-neutral-400 tracking-widest text-sm mb-8">
            (03) SKILLS
          </div>
          <h2 className="text-4xl font-light mb-12 leading-tight">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg">{skill.name}</span>
                <span className="text-neutral-400">{skill.level}%</span>
              </div>
              <div className="h-[1px] w-full bg-neutral-800 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="h-full bg-white absolute top-0 left-0"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
            Always learning and exploring new technologies to stay at the forefront of web development.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-white hover:text-neutral-400 transition-colors duration-300"
          >
            Let's work together
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
