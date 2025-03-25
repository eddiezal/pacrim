// src/components/ui/FormInput.jsx
import React from 'react';
import clsx from 'clsx';

export const FormInput = ({
  label,
  error,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-gray-700 font-semibold mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          'w-full px-4 py-2 rounded-md focus:outline-none transition-colors',
          error ? 'bg-red-50 border border-red-500 focus:ring-2 focus:ring-red-200' : 
                 'bg-gray-50 border border-gray-300 focus:border-ocean-DEFAULT focus:ring-2 focus:ring-ocean-light/50',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const TextArea = ({
  label,
  error,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-gray-700 font-semibold mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={clsx(
          'w-full px-4 py-2 rounded-md focus:outline-none transition-colors',
          error ? 'bg-red-50 border border-red-500 focus:ring-2 focus:ring-red-200' : 
                 'bg-gray-50 border border-gray-300 focus:border-ocean-DEFAULT focus:ring-2 focus:ring-ocean-light/50',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};