// src/components/sections/CaseStudiesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '../ui/Card';
import { H2, H3, Body, Lead, Highlight } from '../ui/Typography';
import { Button } from '../ui/Button';

const CaseStudyCard = ({ title, image, challenge, results }) => {
  return (
    <Card variant="caseStudy" className="h-full overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover filter brightness-90"
          style={{ 
            mixBlendMode: 'multiply', 
            backgroundColor: 'rgba(26, 115, 232, 0.2)'
          }}
        />
      </div>
      <CardBody>
        <H3 className="mb-4">{title}</H3>
        <div className="mb-6">
          <h4 className="font-display font-semibold text-ocean-DEFAULT mb-2">Challenge</h4>
          <Body>{challenge}</Body>
        </div>
        <div className="mb-4">
          <h4 className="font-display font-semibold text-ocean-DEFAULT mb-2">Results</h4>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {results.map((result, index) => (
              <div key={index} className="bg-sand-light p-4 rounded-lg text-center">
                <Highlight className="text-xl block">{result.value}</Highlight>
                <span className="text-sm text-gray-600">{result.label}</span>
              </div>
            ))}
          </div>
        </div>
        <Button variant="outline" className="w-full">View Case Study</Button>
      </CardBody>
    </Card>
  );
};

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Municipal Energy Transformation",
      image: "/images/case-study-1.jpg",
      challenge: "A mid-sized coastal city needed to reduce energy costs while meeting ambitious climate goals set by their city council.",
      results: [
        { value: "40%", label: "Energy Savings" },
        { value: "$2.3M", label: "Annual Cost Reduction" }
      ]
    },
    {
      title: "Offshore Wind Development",
      image: "/images/case-study-2.jpg",
      challenge: "A utility company sought to optimize their proposed offshore wind project to maximize output while mitigating environmental concerns.",
      results: [
        { value: "68%", label: "Time Savings" },
        { value: "850MW", label: "Clean Energy Capacity" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <H2 className="mb-4">Our Success Stories</H2>
          <Lead className="max-w-2xl mx-auto">
            See how we've helped organizations achieve meaningful results
            in their clean energy transitions.
          </Lead>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CaseStudyCard {...study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;