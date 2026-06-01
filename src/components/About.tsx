import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="text-neutral-400 tracking-widest text-sm mb-8">
            (02) ABOUT
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl font-light mb-8 leading-tight">
            Securing infrastructure. Engineering resilient networks. Staying ahead of threats.
            </h2>
            <div className="space-y-6 text-neutral-400">
              <p>
              As a cybersecurity and network engineer, I design and defend infrastructure,
              hardening systems against threats, architecting secure networks, and ensuring services stay resilient under pressure.
              </p>
              <p>
              With deep expertise across network security, system engineering, and threat mitigation,
               I build environments that are not just functional, but fortified.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-xl font-light mb-4">Experience</h3>
              <ul className="space-y-4 text-neutral-400">
                <li>
                  <span className="block text-white">Windows Server & Active Directory Administration</span>
                  <span className="text-sm">2+ years</span>
                </li>
                <li>
                  <span className="block text-white">Network Configuration & Troubleshooting (TCP/IP, DNS/DHCP, VLANs)</span>
                  <span className="text-sm">2+ years</span>
                </li>
                <li>
                  <span className="block text-white">IT Support & Ticketing Systems (1st/2nd Line)</span>
                  <span className="text-sm">2+ years</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Services</h3>
              <ul className="space-y-4 text-neutral-400">
                <li>
                  <span className="block text-white">System & Network Administration</span>
                  <span className="text-sm">Windows Server, AD, Group Policy, DNS/DHCP</span>
                </li>
                <li>
                  <span className="block text-white">VPN & Remote Access Solutions</span>
                  <span className="text-sm">Site‑to‑site, remote‑worker, MFA integration</span>
                </li>
                <li>
                  <span className="block text-white">Infrastructure Monitoring & Automation</span>
                  <span className="text-sm">PowerShell scripting, proactive maintenance, incident response</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <a href="#skills" className="text-white hover:text-neutral-400 transition-colors duration-300">
            <span className="block mb-4">Explore my skills</span>
            <svg 
              className="w-6 h-6 mx-auto animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
