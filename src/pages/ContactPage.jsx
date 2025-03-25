// src/pages/ContactPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Card, CardBody } from '../components/ui/Card';
import { H1, H2, H3, Lead, Body } from '../components/ui/Typography';
import { FormInput, TextArea } from '../components/ui/FormInput';
import { Button } from '../components/ui/Button';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to your backend
  };

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

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-ocean-dark to-ocean-DEFAULT text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <H1 className="text-white mb-6">Let's Build Something Together</H1>
            <Lead className="text-white/90 mb-4">
              Ready to accelerate your clean energy transition? 
              Our team of experts is here to help.
            </Lead>
            <Body className="text-white/80">
              Whether you have a specific project in mind or just want to explore 
              possibilities, we're eager to connect and discuss how we can support 
              your renewable energy goals.
            </Body>
          </div>
        </div>
      </section>

      {/* Contact form and info section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact information */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                <H2 className="mb-6">Get in Touch</H2>
                <Body className="mb-8">
                  Fill out the form or reach out to us directly using the contact 
                  information below.
                </Body>
                
                <div className="space-y-6">
                  <div>
                    <H3 className="text-lg mb-2">Office Location</H3>
                    <address className="not-italic">
                      <p className="mb-1">123 Pacific Avenue</p>
                      <p className="mb-1">Portland, OR 97204</p>
                      <p>United States</p>
                    </address>
                  </div>
                  
                  <div>
                    <H3 className="text-lg mb-2">Contact Information</H3>
                    <p className="mb-1">
                      <strong>Email:</strong>{' '}
                      <a 
                        href="mailto:info@pacrimlabs.com" 
                        className="text-ocean-DEFAULT hover:underline"
                      >
                        info@pacrimlabs.com
                      </a>
                    </p>
                    <p className="mb-1">
                      <strong>Phone:</strong>{' '}
                      <a 
                        href="tel:+15035551234" 
                        className="text-ocean-DEFAULT hover:underline"
                      >
                        (503) 555-1234
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <H3 className="text-lg mb-2">Office Hours</H3>
                    <p className="mb-1">Monday - Friday: 8:00 AM - 5:00 PM PT</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
                
                {/* Social media links */}
                <div className="mt-8">
                  <H3 className="text-lg mb-4">Connect With Us</H3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/company/pacrimlabs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-ocean-light/20 flex items-center justify-center text-ocean-DEFAULT hover:bg-ocean-light/40 transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com/pacrimlabs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-ocean-light/20 flex items-center justify-center text-ocean-DEFAULT hover:bg-ocean-light/40 transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact form */}
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="shadow-xl">
                <CardBody className="p-8">
                  <H2 className="mb-6">Contact Form</H2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <FormInput
                          label="First Name"
                          id="firstName"
                          placeholder="Enter your first name"
                          error={errors.firstName?.message}
                          {...register("firstName", { 
                            required: "First name is required" 
                          })}
                        />
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <FormInput
                          label="Last Name"
                          id="lastName"
                          placeholder="Enter your last name"
                          error={errors.lastName?.message}
                          {...register("lastName", { 
                            required: "Last name is required" 
                          })}
                        />
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <motion.div variants={itemVariants}>
                        <FormInput
                          label="Email"
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          error={errors.email?.message}
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                        />
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <FormInput
                          label="Phone (optional)"
                          id="phone"
                          placeholder="Enter your phone number"
                          {...register("phone")}
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div variants={itemVariants} className="mt-4">
                      <FormInput
                        label="Company"
                        id="company"
                        placeholder="Enter your company name"
                        error={errors.company?.message}
                        {...register("company", { 
                          required: "Company name is required" 
                        })}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="mt-4">
                      <FormInput
                        label="Subject"
                        id="subject"
                        placeholder="What is your inquiry about?"
                        error={errors.subject?.message}
                        {...register("subject", { 
                          required: "Subject is required" 
                        })}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="mt-4">
                      <TextArea
                        label="Message"
                        id="message"
                        placeholder="Tell us about your project or inquiry"
                        rows={6}
                        error={errors.message?.message}
                        {...register("message", { 
                          required: "Message is required",
                          minLength: {
                            value: 20,
                            message: "Message must be at least 20 characters"
                          }
                        })}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="mt-6">
                      <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-ocean-light"
                            {...register("privacy", { 
                              required: "You must agree to our privacy policy" 
                            })}
                          />
                        </div>
                        <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                          I agree to the{" "}
                          <a href="/privacy" className="text-ocean-DEFAULT hover:underline">
                            privacy policy
                          </a>{" "}
                          and consent to being contacted regarding my inquiry.
                        </label>
                      </div>
                      {errors.privacy && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.privacy.message}
                        </p>
                      )}
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="mt-4">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg"
                        className="w-full bg-sunset-DEFAULT hover:bg-sunset-dark"
                      >
                        Submit Message
                      </Button>
                    </motion.div>
                  </form>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-sand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <H2 className="mb-4">Visit Our Office</H2>
            <Lead className="max-w-2xl mx-auto">
              Our headquarters is conveniently located in downtown Portland,
              with easy access to public transportation.
            </Lead>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200">
            {/* This would be replaced with an actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-ocean-light/20">
              <div className="text-center">
                <p className="text-gray-700 mb-2">Map placeholder</p>
                <p className="text-ocean-DEFAULT">123 Pacific Avenue, Portland, OR 97204</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <H2 className="mb-4">Frequently Asked Questions</H2>
            <Lead className="max-w-2xl mx-auto">
              Get quick answers to common questions about working with PacRim Labs
            </Lead>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-display font-semibold text-lg text-ocean-dark mb-2">
                  What industries do you serve?
                </h3>
                <Body>
                  We primarily work with municipal governments, utilities, educational institutions, 
                  manufacturing facilities, and corporations across the Western United States who are 
                  looking to transition to cleaner energy solutions or optimize their existing renewable 
                  infrastructure.
                </Body>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-display font-semibold text-lg text-ocean-dark mb-2">
                  What is your typical project timeline?
                </h3>
                <Body>
                  Project timelines vary significantly based on scope and complexity. Small consulting 
                  engagements may take as little as 4-6 weeks, while comprehensive energy transitions 
                  can span 12-18 months. During our initial consultation, we'll provide a detailed timeline 
                  specific to your project needs.
                </Body>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-display font-semibold text-lg text-ocean-dark mb-2">
                  Do you offer ongoing support after project completion?
                </h3>
                <Body>
                  Yes, we offer various support packages tailored to your needs. These can include 
                  regular performance monitoring, compliance updates, system optimization, and 
                  staff training. Many clients choose our quarterly review option to ensure long-term 
                  success of their energy initiatives.
                </Body>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-display font-semibold text-lg text-ocean-dark mb-2">
                  How do you handle confidential information?
                </h3>
                <Body>
                  We take data security seriously. All client information is protected under strict 
                  confidentiality agreements. Our team follows industry-standard security protocols 
                  for handling sensitive information, and we're happy to accommodate any additional 
                  security requirements your organization may have.
                </Body>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;