// src/components/ui/Typography.jsx
import React from 'react';
import clsx from 'clsx';

export const H1 = ({ children, className, color = 'text-ocean-dark', ...props }) => {
  return (
    <h1 
      className={clsx(
        'font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl',
        'tracking-header-tight leading-tight mb-4',
        color,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, color = 'text-ocean-dark', ...props }) => {
  return (
    <h2 
      className={clsx(
        'font-montserrat font-bold text-3xl md:text-4xl',
        'tracking-header-tight leading-tight mb-4',
        color,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, color = 'text-ocean-dark', ...props }) => {
  return (
    <h3 
      className={clsx(
        'font-montserrat font-bold text-2xl md:text-3xl',
        'tracking-header-tight leading-snug mb-3',
        color,
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className, color = 'text-ocean-dark', ...props }) => {
  return (
    <h4 
      className={clsx(
        'font-montserrat font-bold text-xl md:text-2xl',
        'tracking-header-tight leading-snug mb-2',
        color,
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

export const Body = ({ 
  children, 
  className, 
  color = 'text-gray-700', 
  size = 'base',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  return (
    <p 
      className={clsx(
        'font-inter font-light',
        'tracking-body-loose leading-relaxed mb-4',
        sizeClasses[size],
        color,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const Quote = ({ children, className, author, position, ...props }) => {
  return (
    <blockquote 
      className={clsx(
        'font-georgia italic text-lg md:text-xl',
        'leading-relaxed mb-4 relative',
        'pl-6 border-l-4 border-sunset-light',
        className
      )}
      {...props}
    >
      <p className="mb-2">{children}</p>
      {(author || position) && (
        <footer className="text-right font-inter not-italic text-base mt-2">
          {author && <span className="font-medium">{author}</span>}
          {author && position && <span>, </span>}
          {position && <span className="text-gray-600">{position}</span>}
        </footer>
      )}
    </blockquote>
  );
};

export const Badge = ({ children, className, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-ocean-light text-ocean-dark',
    secondary: 'bg-sand-medium text-gray-800',
    accent: 'bg-sunset-light text-sunset-deep',
    metric: 'bg-white/90 text-ocean-dark border border-ocean-light',
  };

  return (
    <span 
      className={clsx(
        'inline-block rounded-full px-3 py-1',
        'text-sm font-montserrat font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

// Additional text utilities
export const TextHighlight = ({ children, className, ...props }) => {
  return (
    <span 
      className={clsx(
        'font-medium text-sunset-deep',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};