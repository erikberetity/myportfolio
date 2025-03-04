import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 font-bold text-xl"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  } hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700" />
            )}
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className={`md:hidden overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileTap={{ scale: 0.95 }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              } hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
