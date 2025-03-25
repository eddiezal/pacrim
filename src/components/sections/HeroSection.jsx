// src/components/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { H1, Lead } from '../ui/Typography';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/images/hero-bg.jpg')", 
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/70 to-transparent z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white"
        >
          <H1 className="text-white mb-6">
            Empowering the Clean Energy Future
          </H1>
          <Lead className="text-white/90 mb-8">
            Veteran-owned and West Coast rooted, delivering agile consulting for renewable energy projects
          </Lead>
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-sunset-DEFAULT hover:bg-sunset-dark"
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5 
        }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;