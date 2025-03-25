// src/pages/HomePage.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;