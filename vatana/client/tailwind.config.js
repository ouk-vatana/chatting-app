/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',  
  theme: {
    extend: {
      fontSize: {
        small: '0.875rem',  // 14px
        normal: '1rem',     // 16px
        large: '1.25rem',   // 20px
      },
    },
  },
  plugins: [],
};
