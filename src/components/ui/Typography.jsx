// src/components/ui/Typography.jsx
import React from 'react';

// Headings
export const H1 = ({children, className=""}) => (
  <h1 className={`font-display text-4xl md:text-5xl font-bold text-ocean-dark tracking-tight ${className}`}>
    {children}
  </h1>
);

export const H2 = ({children, className=""}) => (
  <h2 className={`font-display text-3xl md:text-4xl font-bold text-ocean-dark tracking-tight ${className}`}>
    {children}
  </h2>
);

export const H3 = ({children, className=""}) => (
  <h3 className={`font-display text-2xl md:text-3xl font-semibold text-ocean-dark tracking-tight ${className}`}>
    {children}
  </h3>
);

export const H4 = ({children, className=""}) => (
  <h4 className={`font-display text-xl md:text-2xl font-semibold text-ocean-dark tracking-tight ${className}`}>
    {children}
  </h4>
);

// Body text
export const Lead = ({children, className=""}) => (
  <p className={`font-sans text-xl md:text-2xl font-light text-gray-700 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Body = ({children, className=""}) => (
  <p className={`font-sans text-base text-gray-700 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const BodySmall = ({children, className=""}) => (
  <p className={`font-sans text-sm text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

// Special text styles
export const Quote = ({children, className=""}) => (
  <blockquote className={`font-serif text-lg md:text-xl italic text-gray-700 leading-relaxed ${className}`}>
    {children}
  </blockquote>
);

export const Highlight = ({children, className=""}) => (
  <span className={`font-sans font-semibold text-sunset-dark ${className}`}>
    {children}
  </span>
);

export const Caption = ({children, className=""}) => (
  <span className={`font-sans text-xs text-gray-500 ${className}`}>
    {children}
  </span>
);