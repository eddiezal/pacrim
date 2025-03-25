// src/pages/CaseStudiesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Card, CardBody } from '../components/ui/Card';
import { H1, H2, H3, Body, Lead, Highlight } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

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

const CaseStudyCard = ({ 
  title, 
  image, 
  clientType, 
  location, 
  challenge, 
  approach, 
  results,
  slug
}) => {
  return (
    <motion.div variants={itemVariants}>
      <Card variant="caseStudy" className="h-full overflow-hidden">
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            style={{ 
              mixBlendMode: 'multiply', 
              backgroundColor: 'rgba(26, 115, 232, 0.2)'
            }}
          />
        </div>
        <CardBody>
          <div className="mb-4 flex items-center">
            <span className="bg-sand-light px-3 py-1 rounded-full text-sm text-gray-700 mr-2">{clientType}</span>
            <span className="bg-sand-light px-3 py-1 rounded-full text-sm text-gray-700">{location}</span>
          </div>
          
          <H3 className="mb-4">{title}</H3>
          
          <div className="mb-4">
            <h4 className="font-display font-semibold text-ocean-DEFAULT mb-2">The Challenge</h4>
            <Body className="mb-4">{challenge}</Body>
          </div>
          
          <div className="mb-4">
            <h4 className="font-display font-semibold text-ocean-DEFAULT mb-2">Our Approach</h4>
            <Body className="mb-4">{approach}</Body>
          </div>
          
          <div className="mb-6">
            <h4 className="font-display font-semibold text-ocean-DEFAULT mb-2">Key Results</h4>
            <div className="grid grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div key={index} className="bg-sand-light p-4 rounded-lg text-center">
                  <Highlight className="text-xl block">{result.value}</Highlight>
                  <span className="text-sm text-gray-600">{result.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.location.href = `/case-studies/${slug}`}
          >
            View Full Case Study
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

const CaseStudiesPage = () => {
  // Case studies data
  const caseStudies = [
    {
      title: "Municipal Energy Transformation",
      slug: "municipal-energy-transformation",
      image: "/images/case-study-1.jpg",
      clientType: "Municipal",
      location: "Pacific Northwest",
      challenge: "A mid-sized coastal city needed to reduce energy costs while meeting ambitious climate goals set by their city council, facing budget constraints and outdated infrastructure.",
      approach: "Our team conducted a comprehensive energy audit, identified key improvement areas, and developed a phased implementation plan that prioritized high-impact, cost-effective solutions.",
      results: [
        { value: "40%", label: "Energy Savings" },
        { value: "$2.3M", label: "Annual Cost Reduction" },
        { value: "15kT", label: "CO₂ Reduction" },
        { value: "3.2 Yrs", label: "Investment Payback" }
      ]
    },
    {
      title: "Offshore Wind Development",
      slug: "offshore-wind-development",
      image: "/images/case-study-2.jpg",
      clientType: "Utility",
      location: "West Coast",
      challenge: "A utility company sought to optimize their proposed offshore wind project to maximize output while mitigating environmental concerns and navigating complex regulatory requirements.",
      approach: "We deployed advanced modeling techniques to optimize turbine placement, conducted comprehensive environmental impact assessments, and facilitated stakeholder engagement throughout the process.",
      results: [
        { value: "68%", label: "Time Savings" },
        { value: "850MW", label: "Clean Energy Capacity" },
        { value: "30%", label: "Cost Optimization" },
        { value: "325K", label: "Homes Powered" }
      ]
    },
    {
      title: "Corporate Sustainability Transition",
      slug: "corporate-sustainability-transition",
      image: "/images/case-study-3.jpg",
      clientType: "Corporate",
      location: "San Francisco Bay Area",
      challenge: "A Fortune 500 tech company needed to transform its energy infrastructure to meet ambitious net-zero commitments while maintaining reliability for critical operations.",
      approach: "We developed a comprehensive renewable energy roadmap, combining on-site solar, off-site PPAs, and energy efficiency measures into a cohesive strategy aligned with business objectives.",
      results: [
        { value: "87%", label: "Renewable Energy" },
        { value: "$4.1M", label: "Tax Incentives" },
        { value: "45%", label: "Carbon Footprint Reduction" },
        { value: "12MW", label: "Solar Capacity" }
      ]
    },
    {
      title: "Industrial Microgrid Implementation",
      slug: "industrial-microgrid-implementation",
      image: "/images/case-study-4.jpg",
      clientType: "Manufacturing",
      location: "Oregon",
      challenge: "A manufacturing facility required uninterrupted power supply while reducing energy costs and emissions in a region prone to weather-related grid disruptions.",
      approach: "We designed and implemented a resilient microgrid solution combining solar, battery storage, and advanced control systems to optimize energy use and provide backup power capabilities.",
      results: [
        { value: "99.99%", label: "Uptime Achieved" },
        { value: "28%", label: "Energy Cost Reduction" },
        { value: "100%", label: "Critical Load Coverage" },
        { value: "8hrs", label: "Backup Duration" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-ocean-light/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <H1 className="mb-6">Our Success Stories</H1>
            <Lead className="mb-6">
              Discover how PacRim Labs has helped organizations across the West Coast
              achieve meaningful results in their clean energy transitions.
            </Lead>
            <Body>
              Each case study demonstrates our commitment to practical, data-driven
              solutions that deliver measurable impact for our clients.
            </Body>
          </div>
        </div>
      </section>

      {/* Filter section - placeholder for future filter functionality */}
      <section className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold">Filter by:</span>
            <button className="px-4 py-2 rounded-full bg-ocean-DEFAULT text-white">All</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">Municipal</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">Utility</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">Corporate</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">Manufacturing</button>
          </div>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-sand-light py-16">
        <div className="container mx-auto px-4 text-center">
          <H2 className="mb-6">Ready to Create Your Success Story?</H2>
          <Lead className="mb-8 max-w-2xl mx-auto">
            Partner with PacRim Labs to develop innovative energy solutions
            tailored to your unique challenges and goals.
          </Lead>
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-sunset-DEFAULT hover:bg-sunset-dark"
            onClick={() => window.location.href = '/contact'}
          >
            Start the Conversation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;