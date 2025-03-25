// src/components/ui/Card.jsx
import React from 'react';
import clsx from 'clsx';

export const Card = ({
  children,
  variant = 'basic',
  className = '',
  ...props
}) => {
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
};

// Card subcomponents for structured content
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