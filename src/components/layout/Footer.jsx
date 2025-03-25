// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-ocean-dark to-ocean-DEFAULT text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ocean-dark font-bold mr-3">
                PL
              </div>
              <span className="text-xl font-display font-bold">PacRim Labs</span>
            </div>
            <p className="text-white/80 mb-6">
              Veteran-owned clean energy consultancy driving sustainable solutions across the West Coast.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/pacrimlabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/pacrimlabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Contact Us</h3>
            <address className="not-italic text-white/80">
              <p className="mb-3">123 Pacific Avenue</p>
              <p className="mb-3">Portland, OR 97204</p>
              <p className="mb-3">
                <a href="mailto:info@pacrimlabs.com" className="hover:text-sand-light transition-colors">
                  info@pacrimlabs.com
                </a>
              </p>
              <p>
                <a href="tel:+15035551234" className="hover:text-sand-light transition-colors">
                  (503) 555-1234
                </a>
              </p>
            </address>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">VO</span>
                </div>
                <span className="text-white/80">Veteran-Owned Business</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">DOE</span>
                </div>
                <span className="text-white/80">DOE Partner</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">ISO</span>
                </div>
                <span className="text-white/80">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-3">
              <Link to="/" className="text-white/80 hover:text-sand-light transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-white/80 hover:text-sand-light transition-colors">
                Services
              </Link>
              <Link to="/case-studies" className="text-white/80 hover:text-sand-light transition-colors">
                Case Studies
              </Link>
              <Link to="/testimonials" className="text-white/80 hover:text-sand-light transition-colors">
                Testimonials
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-sand-light transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom footer with copyright and legal links */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} PacRim Labs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/60 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;