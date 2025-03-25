// src/pages/NotFoundPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { H1, Lead, Body } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="py-32 md:py-40 bg-gradient-to-b from-sand-light to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            {/* Large 404 number */}
            <div className="relative mb-8">
              <div className="text-[180px] md:text-[240px] font-display font-bold text-ocean-light/30 leading-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className="w-40 h-40 text-ocean-DEFAULT/20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M10 3V5M3 10H5M12 19V21M19 12H21M5.63604 5.63604L7.05025 7.05025M5.63604 18.364L7.05025 16.9497M18.364 5.63604L16.9497 7.05025M18.364 18.364L16.9497 16.9497M10 12C10 13.6569 8.65685 15 7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C8.65685 9 10 10.3431 10 12ZM20 12C20 13.6569 18.6569 15 17 15C15.3431 15 14 13.6569 14 12C14 10.3431 15.3431 9 17 9C18.6569 9 20 10.3431 20 12Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            <H1 className="mb-6">Page Not Found</H1>
            
            <Lead className="mb-6">
              We couldn't find the page you're looking for. It might have been moved, 
              renamed, or may not exist.
            </Lead>
            
            <Body className="mb-10">
              Let's get you back on track. You can return to our homepage or check out 
              our services to find what you're looking for.
            </Body>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-ocean-DEFAULT hover:bg-ocean-dark"
                onClick={() => window.location.href = '/'}
              >
                Back to Homepage
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Quick links section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl text-ocean-dark">
              Popular Pages
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/services" 
              className="p-6 rounded-lg border border-gray-100 hover:border-ocean-light hover:bg-sand-light/30 transition-colors"
            >
              <h3 className="font-display font-semibold text-lg text-ocean-DEFAULT mb-2">
                Our Services
              </h3>
              <p className="text-gray-600">
                Explore our comprehensive clean energy consulting services
              </p>
            </Link>
            
            <Link 
              to="/case-studies" 
              className="p-6 rounded-lg border border-gray-100 hover:border-ocean-light hover:bg-sand-light/30 transition-colors"
            >
              <h3 className="font-display font-semibold text-lg text-ocean-DEFAULT mb-2">
                Case Studies
              </h3>
              <p className="text-gray-600">
                See how we've helped organizations achieve their energy goals
              </p>
            </Link>
            
            <Link 
              to="/contact" 
              className="p-6 rounded-lg border border-gray-100 hover:border-ocean-light hover:bg-sand-light/30 transition-colors"
            >
              <h3 className="font-display font-semibold text-lg text-ocean-DEFAULT mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600">
                Get in touch with our team of clean energy experts
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;