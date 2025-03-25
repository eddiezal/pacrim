// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

// Import the fonts in the main component
import './styles/fonts.css';

const HomePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

// Simple 404 page
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sand-light px-4 text-center">
      <h1 className="text-6xl font-montserrat font-bold text-ocean-dark mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page not found</p>
      <p className="text-gray-600 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a 
        href="/" 
        className="bg-sunset-gradient text-white py-2 px-6 rounded-md font-medium hover:opacity-90 transition-opacity"
      >
        Back to Home
      </a>
    </div>
  );
};

// App component with routing
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="/case-studies" element={<HomePage />} />
            <Route path="/testimonials" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;