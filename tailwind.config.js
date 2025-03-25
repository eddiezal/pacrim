/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // Explicitly define default fonts
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'ui-serif', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      // Custom font families
      montserrat: ['Montserrat', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      georgia: ['Georgia', 'serif'],
    },
    extend: {
      colors: {
        // Primary: Ocean blues (60%)
        ocean: {
          light: '#73c2fb',
          medium: '#1a73e8',
          dark: '#0d4b9e',
        },
        // Secondary: Sand tones (30%)
        sand: {
          light: '#f7f3ea',
          medium: '#f0e6d2',
          dark: '#d9bc95',
        },
        // Accent: Sunset oranges (10%)
        sunset: {
          light: '#ffb347',
          deep: '#e67700',
        },
      },
      letterSpacing: {
        'header-tight': '-0.01em',
        'body-loose': '0.01em',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
        'ocean-gradient': 'linear-gradient(to right, #0d4b9e, #1a73e8)',
        'sunset-gradient': 'linear-gradient(to right, #ffb347, #e67700)',
        'wave-pattern': "url('/src/assets/patterns/wave-pattern.svg')",
        'topo-pattern': "url('/src/assets/patterns/topo-pattern.svg')",
      },
      borderRadius: {
        'card': '8px',
      },
      boxShadow: {
        'nav': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'form': '0 2px 8px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        'section': '5rem',
      },
      opacity: {
        '3': '0.03',
        '5': '0.05',
      }
    },
  },
  plugins: [],
}