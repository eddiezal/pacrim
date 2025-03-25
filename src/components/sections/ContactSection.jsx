// src/components/sections/ContactFormSection.jsx
import React, { useRef, useState } from 'react';
import { H2, Body } from '../ui/Typography';
import Button from '../ui/Button';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setIsSuccess(true);
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-section bg-sand-light relative overflow-hidden"
      id="contact"
    >
      {/* Background Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-5">
        <div className="w-full h-full bg-wave-pattern bg-repeat-x bg-bottom"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <H2 className="text-ocean-dark">Let's Build Something Together</H2>
          <Body className="max-w-2xl mx-auto">
            Ready to accelerate your clean energy initiatives? Our team of experts is here to help.
          </Body>
        </div>
        
        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-white rounded-card shadow-form p-8">
            {isSuccess ? (
              <div className="text-center py-8">
                <svg 
                  className="w-16 h-16 text-green-500 mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <H2 className="text-ocean-dark mb-2">Thanks for reaching out!</H2>
                <Body>
                  We've received your message and will get back to you within 24 hours.
                </Body>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="form-group">
                    <label 
                      htmlFor="name" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.name 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300 focus:border-ocean-medium focus:ring-1 focus:ring-ocean-light'
                      }`}
                      placeholder="Your name"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div className="form-group">
                    <label 
                      htmlFor="email" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.email 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300 focus:border-ocean-medium focus:ring-1 focus:ring-ocean-light'
                      }`}
                      placeholder="your.email@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  {/* Organization Field */}
                  <div className="form-group">
                    <label 
                      htmlFor="organization" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-ocean-medium focus:ring-1 focus:ring-ocean-light"
                      placeholder="Your organization"
                      {...register('organization')}
                    />
                  </div>
                  
                  {/* Service Interest */}
                  <div className="form-group">
                    <label 
                      htmlFor="service" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-ocean-medium focus:ring-1 focus:ring-ocean-light"
                      {...register('service')}
                    >
                      <option value="">Select a service</option>
                      <option value="strategy">Strategy Consulting</option>
                      <option value="technology">Technology Integration</option>
                      <option value="compliance">Compliance & Reporting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="form-group mt-6">
                  <label 
                    htmlFor="message" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-300 focus:border-ocean-medium focus:ring-1 focus:ring-ocean-light'
                    }`}
                    placeholder="How can we help with your clean energy initiatives?"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                {/* Submit Button */}
                <div className="mt-8 text-right">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                  >
                    Get in Touch
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;