// src/components/sections/ContactSection.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { H2, Lead } from '../ui/Typography';
import { FormInput, TextArea } from '../ui/FormInput';
import { Button } from '../ui/Button';

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to your backend
  };

  return (
    <section className="py-20 bg-sand-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <H2 className="mb-4">Let's Build Something Together</H2>
          <Lead className="max-w-2xl mx-auto">
            Ready to accelerate your clean energy transition? 
            Get in touch with our team of experts.
          </Lead>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="First Name"
                  id="firstName"
                  placeholder="Enter your first name"
                  error={errors.firstName?.message}
                  {...register("firstName", { 
                    required: "First name is required" 
                  })}
                />
                
                <FormInput
                  label="Last Name"
                  id="lastName"
                  placeholder="Enter your last name"
                  error={errors.lastName?.message}
                  {...register("lastName", { 
                    required: "Last name is required" 
                  })}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
                
                <FormInput
                  label="Phone (optional)"
                  id="phone"
                  placeholder="Enter your phone number"
                  {...register("phone")}
                />
              </div>
              
              <div className="mt-4">
                <FormInput
                  label="Company"
                  id="company"
                  placeholder="Enter your company name"
                  error={errors.company?.message}
                  {...register("company", { 
                    required: "Company name is required" 
                  })}
                />
              </div>
              
              <div className="mt-4">
                <TextArea
                  label="Message"
                  id="message"
                  placeholder="Tell us about your project or inquiry"
                  rows={5}
                  error={errors.message?.message}
                  {...register("message", { 
                    required: "Message is required",
                    minLength: {
                      value: 20,
                      message: "Message must be at least 20 characters"
                    }
                  })}
                />
              </div>
              
              <div className="mt-8">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full bg-sunset-DEFAULT hover:bg-sunset-dark"
                >
                  Get in Touch
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;