import React from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  const { isDarkMode, toggleDarkMode, language, toggleLanguage, translations } = useStore();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
    }`}>
      <nav className="fixed w-full backdrop-blur-lg bg-light-card/80 dark:bg-dark-card/80 border-b border-light-border dark:border-dark-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <a
                href="/"
                className={`nav-link inline-flex items-center text-sm font-medium ${
                  currentPage === 'home' ? 'active text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                {translations.nav.home}
              </a>
              <a
                href="/services"
                className={`nav-link inline-flex items-center text-sm font-medium ${
                  currentPage === 'services' ? 'active text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                {translations.nav.services}
              </a>
              <a
                href="/contact"
                className={`nav-link inline-flex items-center text-sm font-medium ${
                  currentPage === 'contact' ? 'active text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                {translations.nav.contact}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-bg transition-colors duration-200"
                aria-label="Toggle Language"
              >
                <Languages className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-bg transition-colors duration-200"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-primary-400" />
                ) : (
                  <Moon className="h-5 w-5 text-primary-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 90 }}
          transition={{ duration: 0.5 }}
          className="pt-16"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};