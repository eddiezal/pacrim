// src/components/ui/Button.jsx
import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  to,
  disabled,
  isLoading,
  type = 'button',
  ...props
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-sunset-gradient text-white hover:opacity-90 shadow-md',
    secondary: 'bg-white text-ocean-dark border border-ocean-light hover:bg-sand-light shadow-sm',
    outlined: 'bg-transparent border-2 border-ocean-medium text-ocean-medium hover:bg-ocean-medium/5',
    text: 'bg-transparent text-ocean-medium hover:underline',
  };

  // Size styles
  const sizes = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-2.5 px-6',
  };

  // Base button styles
  const baseStyles = clsx(
    'inline-flex items-center justify-center',
    'font-montserrat font-medium rounded-md',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-sunset-light focus:ring-opacity-50',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    variants[variant],
    sizes[size],
    className
  );

  // Loading state
  const loadingIndicator = (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      ></circle>
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  // Handle conditional rendering based on if it's a link or button
  if (to) {
    return (
      <Link 
        to={to} 
        className={baseStyles}
        {...props}
      >
        {isLoading && loadingIndicator}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={baseStyles}
        {...props}
      >
        {isLoading && loadingIndicator}
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className={baseStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && loadingIndicator}
      {children}
    </button>
  );
};

export default Button;