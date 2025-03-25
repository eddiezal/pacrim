// src/components/sections/TestimonialsSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { H2, Quote } from '../ui/Typography';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "PacRim Labs transformed our approach to energy management. Their strategic insights saved us millions while accelerating our sustainability goals.",
      name: "Sarah Johnson",
      title: "Sustainability Director, Pacific Northwest Utilities",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "Working with the team at PacRim has been revolutionary for our municipal energy planning. Their veteran leadership brings a level of discipline and execution that's rare in the consulting world.",
      name: "Michael Chen",
      title: "City Manager, Coastal City Government",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "The renewable technology expertise at PacRim Labs helped us navigate complex decisions around our offshore wind development with confidence and precision.",
      name: "Emily Rodriguez",
      title: "Project Lead, GreenWind Energy",
      image: "/images/testimonial-3.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-ocean-dark to-ocean-DEFAULT text-white relative overflow-hidden">
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <H2 className="text-white mb-4">What Our Clients Say</H2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm p-8 md:p-12 shadow-lg">
                <Quote className="text-white mb-6 text-xl md:text-2xl">
                  "{testimonials[current].quote}"
                </Quote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display font-semibold">{testimonials[current].name}</p>
                    <p className="text-white/80 text-sm">{testimonials[current].title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full ${current === index ? 'bg-white' : 'bg-white/30'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={next}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;