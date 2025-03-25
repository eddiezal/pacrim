/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#73c2fb',
          DEFAULT: '#1a73e8',
          dark: '#0d4b9e',
        },
        sand: {
          light: '#f7f3ea',
          DEFAULT: '#f0e6d2',
          dark: '#d9bc95',
        },
        sunset: {
          light: '#ffb347',
          DEFAULT: '#ff9e2c',
          dark: '#e67700',
        }
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        looser: '0.05em',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'card': '8px',
      },
    },
  },
  plugins: [],
}