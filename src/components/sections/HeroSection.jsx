// src/components/sections/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { H1, Body } from '../ui/Typography';
import Button from '../ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect for background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  return (
    <section 
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-hero-gradient z-10"></div>
        <img
          src="/src/assets/images/hero-coastal-wind.jpg" 
          alt="Coastal wind turbines" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <H1 color="text-white" className="mb-6">
            Empowering the Clean Energy Future
          </H1>
          
          <Body 
            color="text-white" 
            size="lg"
            className="mb-8 text-white/90"
          >
            Veteran-owned and West Coast rooted, delivering agile consulting for renewable energy projects
          </Body>
          
          <Button 
            variant="primary" 
            size="lg"
            href="#contact"
            className="shadow-lg"
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="flex flex-col items-center"
        >
          <span className="text-white/80 text-sm mb-2 font-inter">Scroll</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/80"
          >
            <path 
              d="M12 5L12 19M12 19L18 13M12 19L6 13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;