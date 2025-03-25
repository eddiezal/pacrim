// src/components/sections/TestimonialsSection.jsx
// src/components/sections/TestimonialsSection.jsx
import React, { useState, useRef, useEffect } from 'react'; // Add useEffect here
import Card from '../ui/Card';
import { H2 } from '../ui/Typography';
import { motion, useInView, AnimatePresence } from 'framer-motion'; // Add AnimatePresence here

// Add the TestimonialCard component
const TestimonialCard = ({ quote, name, title, company, image, isActive }) => {
  return (
    <Card className={`bg-white/10 backdrop-blur-sm p-6 md:p-8 shadow-lg transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 absolute'}`}>
      <blockquote className="font-serif text-xl text-white italic mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-display font-semibold text-white">{name}</p>
          <p className="text-white/80 text-sm">{title}</p>
          {company && <p className="text-white/60 text-xs">{company}</p>}
        </div>
      </div>
    </Card>
  );
};

// Rest of your TestimonialsSection component goes here
// Make sure it uses TestimonialCard correctly in its render method

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const testimonials = [
    {
      quote: "PacRim Labs transformed our approach to energy management. Their team's strategic insight and technical expertise helped us exceed our sustainability targets two years ahead of schedule.",
      author: "Sarah Johnson",
      position: "Director of Sustainability, Pacific Northwest Utilities",
      imageSrc: "/src/assets/images/testimonial-1.jpg"
    },
    {
      quote: "Working with PacRim's veteran-led team was a game-changer for our wind farm development. Their regulatory expertise and community engagement strategies turned potential roadblocks into opportunities.",
      author: "Michael Chen",
      position: "Project Manager, Coastal Energy Partners",
      imageSrc: "/src/assets/images/testimonial-2.jpg"
    },
    {
      quote: "The PacRim team delivered beyond our expectations. Their detailed analytics and custom technology solutions have allowed us to optimize our grid performance while reducing operational costs.",
      author: "Lisa Rodriguez",
      position: "CTO, Western Municipal Power",
      imageSrc: "/src/assets/images/testimonial-3.jpg"
    }
  ];
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-section bg-ocean-gradient text-white relative overflow-hidden"
      id="testimonials"
    >
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-wave-pattern bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <H2 color="text-white">What Our Clients Say</H2>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <TestimonialCard
                quote={testimonials[currentIndex].quote}
                author={testimonials[currentIndex].author}
                position={testimonials[currentIndex].position}
                imageSrc={testimonials[currentIndex].imageSrc}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 right-0 -mt-6 flex justify-between pointer-events-none">
            <button 
              onClick={prevTestimonial}
              className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full shadow hover:bg-white/30 transition-colors pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full shadow hover:bg-white/30 transition-colors pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;