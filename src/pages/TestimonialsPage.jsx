// src/pages/TestimonialsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Card, CardBody } from '../components/ui/Card';
import { H1, H2, Lead, Body, Quote, Highlight } from '../components/ui/Typography';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const TestimonialCard = ({ quote, name, title, company, image, projectType }) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full overflow-hidden shadow-lg">
        <CardBody className="p-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-ocean-light/20 text-ocean-dark rounded-full text-sm mb-4">
              {projectType}
            </span>
            <Quote className="text-lg md:text-xl">
              "{quote}"
            </Quote>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-display font-semibold text-ocean-dark">{name}</h4>
              <p className="text-gray-600">{title}</p>
              <p className="text-gray-500 text-sm">{company}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "PacRim Labs transformed our approach to energy management. Their strategic insights saved us millions while accelerating our sustainability goals. What impressed me most was their ability to translate complex technical concepts into actionable business strategies.",
      name: "Sarah Johnson",
      title: "Sustainability Director",
      company: "Pacific Northwest Utilities",
      image: "/images/testimonial-1.jpg",
      projectType: "Energy Strategy"
    },
    {
      quote: "Working with the team at PacRim has been revolutionary for our municipal energy planning. Their veteran leadership brings a level of discipline and execution that's rare in the consulting world. The detailed roadmap they created has become our blueprint for the next decade.",
      name: "Michael Chen",
      title: "City Manager",
      company: "Coastal City Government",
      image: "/images/testimonial-2.jpg",
      projectType: "Municipal Planning"
    },
    {
      quote: "The renewable technology expertise at PacRim Labs helped us navigate complex decisions around our offshore wind development with confidence and precision. Their analysis of marine conditions and regulatory requirements was instrumental in securing project approval.",
      name: "Emily Rodriguez",
      title: "Project Lead",
      company: "GreenWind Energy",
      image: "/images/testimonial-3.jpg",
      projectType: "Offshore Wind"
    },
    {
      quote: "PacRim's compliance team saved us countless hours and potential penalties by guiding us through the changing regulatory landscape. Their documentation was meticulous and their foresight in anticipating policy changes gave us a competitive advantage.",
      name: "James Wilson",
      title: "Chief Compliance Officer",
      company: "Western Energy Cooperative",
      image: "/images/testimonial-4.jpg",
      projectType: "Compliance & Reporting"
    },
    {
      quote: "As a manufacturing facility operating 24/7, we needed reliable energy solutions that wouldn't compromise production. PacRim delivered a microgrid system that not only increased our resilience but also reduced our carbon footprint by 45%. The ROI exceeded our expectations.",
      name: "Aisha Patel",
      title: "Operations Director",
      company: "NorthWest Manufacturing",
      image: "/images/testimonial-5.jpg",
      projectType: "Industrial Solutions"
    },
    {
      quote: "The data analytics capabilities that PacRim brought to our solar farm project were game-changing. Their predictive models for energy production accounting for local weather patterns have proven remarkably accurate, helping us optimize operations and increase output.",
      name: "Robert Tanaka",
      title: "VP of Renewable Energy",
      company: "SunPeak Innovations",
      image: "/images/testimonial-6.jpg",
      projectType: "Solar Implementation"
    },
    {
      quote: "Our university had ambitious sustainability goals but limited resources. PacRim Labs helped us identify grant opportunities and develop a phased approach that made our net-zero campus vision achievable. Their education-focused expertise was invaluable.",
      name: "Dr. Elena Vasquez",
      title: "Sustainability Chair",
      company: "Pacific Coast University",
      image: "/images/testimonial-7.jpg",
      projectType: "Education Sector"
    },
    {
      quote: "The battery storage solution designed by PacRim Labs completely transformed our energy usage patterns. We've reduced peak demand charges by 37% and created a more resilient system that supports our critical infrastructure even during grid outages.",
      name: "Thomas Wright",
      title: "Facilities Manager",
      company: "TechNova Data Centers",
      image: "/images/testimonial-8.jpg",
      projectType: "Battery Storage"
    }
  ];

  // Filter categories based on project types
  const categories = [...new Set(testimonials.map(item => item.projectType))];

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-ocean-dark to-ocean-DEFAULT text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <H1 className="text-white mb-6">Client Testimonials</H1>
            <Lead className="text-white/90 mb-6">
              Hear directly from our clients about their experiences working with
              PacRim Labs on clean energy transitions across the West Coast.
            </Lead>
            <Body className="text-white/80">
              These success stories reflect our commitment to delivering measurable
              results and building lasting partnerships with our clients.
            </Body>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 bg-sand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <Highlight className="text-4xl block mb-2">97%</Highlight>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
            <div>
              <Highlight className="text-4xl block mb-2">15+</Highlight>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div>
              <Highlight className="text-4xl block mb-2">200+</Highlight>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div>
              <Highlight className="text-4xl block mb-2">87%</Highlight>
              <p className="text-gray-700">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter section - placeholder for future filter functionality */}
      <section className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold">Filter by:</span>
            <button className="px-4 py-2 rounded-full bg-ocean-DEFAULT text-white">All</button>
            {categories.map((category, index) => (
              <button 
                key={index} 
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video testimonial section */}
      <section className="py-16 bg-ocean-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <H2 className="mb-4">Featured Client Stories</H2>
            <Lead className="max-w-2xl mx-auto">
              Watch our clients share their experiences working with PacRim Labs
            </Lead>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded mb-4 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  {/* Video placeholder */}
                  <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                    <div className="absolute inset-0 bg-ocean-dark/10 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-sunset-DEFAULT flex items-center justify-center cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">City of Portland Energy Transition</h3>
              <p className="text-gray-600">See how we helped Portland achieve their 2030 climate goals ahead of schedule</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded mb-4 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  {/* Video placeholder */}
                  <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                    <div className="absolute inset-0 bg-ocean-dark/10 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-sunset-DEFAULT flex items-center justify-center cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">West Coast Solar Farm Development</h3>
              <p className="text-gray-600">Explore our partnership with SunPeak to develop one of the largest solar installations in Oregon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-sand-light py-16">
        <div className="container mx-auto px-4 text-center">
          <H2 className="mb-6">Join Our Satisfied Clients</H2>
          <Lead className="mb-8 max-w-2xl mx-auto">
            Ready to transform your energy infrastructure with a trusted partner?
            Let's start a conversation about your clean energy goals.
          </Lead>
          <div 
            className="inline-flex bg-white p-1 rounded-lg shadow-md"
            onClick={() => window.location.href = '/contact'}
          >
            <button className="px-6 py-3 bg-sunset-DEFAULT hover:bg-sunset-dark text-white rounded font-semibold transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;