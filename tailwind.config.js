/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        brand: {
          50: '#f8fafc',
          100: '#eef2ff',
          200: '#e0e7ff',
          300: '#c7d2fe',
          400: '#a5b4fc',
          500: '#818cf8',
          600: '#6366f1',
          700: '#4f46e5',
          800: '#4338ca',
          900: '#3730a3'
        }
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: [],
};
