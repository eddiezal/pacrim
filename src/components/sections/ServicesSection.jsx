// src/components/sections/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { H2, H3, Body } from '../ui/Typography';

const ServiceCard = ({ title, description, icon, metrics }) => {
  return (
    <Card 
      variant="service" 
      className="h-full"
    >
      <CardHeader className="flex flex-col items-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center text-ocean-DEFAULT">
          {icon}
        </div>
        <H3 className="text-center mb-2">{title}</H3>
        <div className="w-12 h-1 bg-sunset-DEFAULT rounded-full"></div>
      </CardHeader>
      <CardBody>
        <ul className="space-y-3 mb-6">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-sunset-DEFAULT mr-2">•</span>
              <Body>{item}</Body>
            </li>
          ))}
        </ul>
        {metrics && (
          <div className="bg-ocean-light/20 p-3 rounded-lg text-center">
            <span className="font-display font-bold text-lg text-ocean-dark">{metrics}</span>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Energy Strategy",
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V5M5.63604 5.63604L7.05025 7.05025M3 12H5M5.63604 18.364L7.05025 16.9497M12 19V21M16.9497 16.9497L18.364 18.364M19 12H21M16.9497 7.05025L18.364 5.63604M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      description: [
        "Comprehensive energy assessments",
        "Net-zero roadmap planning",
        "Policy compliance auditing",
        "Strategic carbon reduction"
      ],
      metrics: "+32% Efficiency Improvement"
    },
    {
      title: "Renewable Technology",
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V9M12 12V12.01M3 10L3 14L12 20L21 14V10L12 4L3 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      description: [
        "Solar/wind feasibility studies",
        "System design and integration",
        "Battery storage solutions",
        "Microgrid architecture"
      ],
      metrics: "45% Cost Recovery"
    },
    {
      title: "Compliance & Reporting",
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>,
      description: [
        "Regulatory compliance documentation",
        "Carbon credit certification",
        "ESG reporting frameworks",
        "Performance benchmarking"
      ],
      metrics: "100% Compliance Success"
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/pattern.svg')]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <H2 className="text-ocean-DEFAULT mb-4">Driving Net-Zero Initiatives</H2>
          <Body className="max-w-2xl mx-auto">
            Our comprehensive suite of services helps businesses and municipalities
            transition to clean energy with practical, results-driven approaches.
          </Body>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;