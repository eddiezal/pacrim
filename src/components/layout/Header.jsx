// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 rounded-full bg-ocean-dark flex items-center justify-center text-white font-bold transition-all group-hover:bg-ocean-DEFAULT">
              PL
            </div>
            <div className="ml-3">
              <span className="text-lg font-display font-bold text-ocean-dark transition-colors group-hover:text-ocean-DEFAULT">
                PacRim Labs
              </span>
              <span className="block text-xs text-gray-500">Clean Energy Consulting</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `font-semibold transition-colors ${
                    isActive 
                      ? 'text-ocean-DEFAULT' 
                      : 'text-gray-700 hover:text-ocean-DEFAULT'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button 
              variant="primary" 
              size="md" 
              className="bg-sunset-DEFAULT hover:bg-sunset-dark"
              onClick={() => window.location.href = '/contact'}
            >
              Let's Talk
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-gray-800 transition-all transform ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block w-full h-0.5 bg-gray-800 transition-opacity ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block w-full h-0.5 bg-gray-800 transition-all transform ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `text-lg font-semibold py-2 transition-colors ${
                        isActive 
                          ? 'text-ocean-DEFAULT' 
                          : 'text-gray-700 hover:text-ocean-DEFAULT'
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="pt-4">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full bg-sunset-DEFAULT hover:bg-sunset-dark"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = '/contact';
                    }}
                  >
                    Let's Talk
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;