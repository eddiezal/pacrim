// src/components/layout/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import clsx from 'clsx';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on location change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <nav 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300 ease-in-out',
        'bg-white shadow-nav',
        isScrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-ocean-dark flex items-center justify-center text-white font-montserrat font-bold">
              PL
            </div>
            <span className="ml-2 text-ocean-dark font-montserrat font-bold text-xl">PacRim Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => clsx(
                  'font-inter text-base font-medium transition-colors',
                  isActive 
                    ? 'text-ocean-dark border-b-2 border-sunset-light' 
                    : 'text-gray-600 hover:text-ocean-medium'
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <Button variant="primary" to="/contact">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-ocean-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => clsx(
                    'font-inter text-base py-2 transition-colors',
                    isActive 
                      ? 'text-ocean-dark font-medium' 
                      : 'text-gray-600 hover:text-ocean-medium'
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <Button variant="primary" to="/contact" className="mt-2 w-full">
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;