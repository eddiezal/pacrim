// src/components/ui/Button.jsx
import React from 'react';
import clsx from 'clsx';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-sans font-semibold rounded-lg transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-sunset-DEFAULT hover:bg-sunset-dark text-white',
    secondary: 'bg-ocean-light hover:bg-ocean-DEFAULT text-ocean-dark hover:text-white',
    outline: 'border-2 border-ocean-DEFAULT text-ocean-DEFAULT hover:bg-ocean-DEFAULT hover:text-white',
    text: 'text-ocean-DEFAULT hover:text-ocean-dark underline-offset-2 hover:underline'
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1 px-3',
    md: 'py-2 px-6',
    lg: 'text-lg py-3 px-8'
  };
  
  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};