// src/components/ui/Card.jsx - Check the export style
import React from 'react';
import clsx from 'clsx';

// Option 1: Change to default export if you want to import without curly braces
export default function Card({
  children,
  variant = 'basic',
  className = '',
  ...props
}) {
  const baseStyles = 'rounded-lg transition-all duration-200';
  
  const variantStyles = {
    basic: 'bg-white shadow-md',
    service: 'bg-gradient-to-b from-white to-blue-50 shadow-md',
    caseStudy: 'bg-white shadow-md overflow-hidden',
  };
  
  return (
    <div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Keep these as named exports
export const CardHeader = ({ children, className = '', ...props }) => (
  <div 
    className={clsx('p-6 border-b border-gray-100 bg-blue-50/50', className)} 
    {...props}
  >
    {children}
  </div>
);

export const CardBody = ({ children, className = '', ...props }) => (
  <div className={clsx('p-6', className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={clsx('p-4 bg-gray-50', className)} {...props}>
    {children}
  </div>
);