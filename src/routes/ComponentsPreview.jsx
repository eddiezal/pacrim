// src/routes/ComponentsPreview.jsx
import React from 'react';
import { H1, H2, H3, H4, Body, Lead, Quote } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/Card';
import { FormInput, TextArea } from '../components/ui/FormInput';

const ComponentsPreview = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <H1>Design System Components</H1>
      <Lead>Preview of all UI components for the PacRim Labs website</Lead>
      
      <section className="mt-12">
        <H2>Typography</H2>
        <div className="mt-4 space-y-4">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <Lead>Lead paragraph text</Lead>
          <Body>Regular body text</Body>
          <Quote>This is a quote in our special style</Quote>
        </div>
      </section>
      
      <section className="mt-12">
        <H2>Buttons</H2>
        <div className="mt-4 space-x-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="text">Text Button</Button>
        </div>
        <div className="mt-4 space-x-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>
      
      <section className="mt-12">
        <H2>Cards</H2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardBody>
              <H3>Basic Card</H3>
              <Body>Simple card with basic styling</Body>
            </CardBody>
          </Card>
          
          <Card variant="service">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-ocean-light rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </CardHeader>
            <CardBody>
              <H3 className="text-center">Service Card</H3>
              <Body>Card for showcasing services</Body>
            </CardBody>
          </Card>
          
          <Card variant="caseStudy">
            <div className="h-40 bg-ocean-DEFAULT"></div>
            <CardBody>
              <H3>Case Study Card</H3>
              <Body>Card for case studies with image</Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Results:</span>
                <span className="text-xl font-bold text-sunset-dark">40%</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <section className="mt-12">
        <H2>Form Controls</H2>
        <div className="mt-4 max-w-md">
          <FormInput 
            label="Name" 
            id="name" 
            placeholder="John Doe" 
          />
          <FormInput 
            label="Email" 
            id="email" 
            placeholder="john@example.com" 
            type="email"
          />
          <FormInput 
            label="Password with Error" 
            id="password" 
            type="password"
            error="Password must be at least 8 characters"
          />
          <TextArea 
            label="Message" 
            id="message" 
            placeholder="Enter your message here..."
            rows={4}
          />
          <Button className="mt-4">Submit Form</Button>
        </div>
      </section>
    </div>
  );
};

export default ComponentsPreview;