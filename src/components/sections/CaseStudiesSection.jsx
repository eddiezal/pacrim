// src/components/sections/CaseStudiesSection.jsx
import React, { useRef } from 'react';
import { H2, Body } from '../ui/Typography';
import Card, { CardBody } from '../ui/Card';
import { motion, useInView } from 'framer-motion';

// Add the CaseStudyCard component
const CaseStudyCard = ({ title, imageSrc, imageAlt, challenge, results, className }) => {
  return (
    <Card variant="caseStudy" className={className}>
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          style={{ 
            mixBlendMode: 'multiply', 
            backgroundColor: 'rgba(26, 115, 232, 0.2)'
          }}
        />
      </div>
      
      {/* Content */}
      <CardBody>
        <h3 className="text-xl font-bold text-ocean-dark mb-4">{title}</h3>
        
        <div className="mb-4">
          <h4 className="font-semibold text-ocean-DEFAULT mb-2">The Challenge</h4>
          <p className="text-gray-700">{challenge}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-ocean-DEFAULT mb-2">Key Results</h4>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(results).map(([label, value], index) => (
              <div key={index} className="bg-sand-light p-3 rounded-lg text-center">
                <span className="block text-lg font-bold text-sunset-dark">{value}</span>
                <span className="text-sm text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const CaseStudiesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const caseStudies = [
    {
      title: "Municipal Energy Transformation",
      imageSrc: "/src/assets/images/case-study-municipal.jpg",
      imageAlt: "Smart city energy grid",
      challenge: "A coastal city needed to reduce carbon emissions by 45% while maintaining reliability during storm season and peak tourist months.",
      results: {
        "Energy Savings": "40%",
        "Cost Reduction": "$1.2M",
        "Carbon Offset": "3,200 tons",
        "Implementation": "14 months"
      }
    },
    {
      title: "Offshore Wind Development",
      imageSrc: "/src/assets/images/case-study-offshore.jpg",
      imageAlt: "Offshore wind turbines",
      challenge: "An energy provider needed to navigate complex regulatory requirements and community concerns for a new offshore wind project.",
      results: {
        "Time Savings": "68%",
        "Capacity": "340 MW",
        "Approval Rate": "100%",
        "ROI": "4.2 years"
      }
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-section bg-sand-light"
      id="case-studies"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <H2 className="text-ocean-dark">Our Success Stories</H2>
          <Body className="max-w-2xl mx-auto">
            See how we've helped organizations across the West Coast achieve their clean energy goals.
          </Body>
        </div>
        
        {/* Case Studies Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <CaseStudyCard 
                title={study.title}
                imageSrc={study.imageSrc}
                imageAlt={study.imageAlt}
                challenge={study.challenge}
                results={study.results}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;