/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#FAF5EF', // Light beige for the background
        primary: '#8B5E3C', // Warm wooden brown
        secondary: '#4B5563', // Muted gray (for modern touches)
        accent: '#4CAF50', // Subtle green for highlights (optional)
        textPrimary: '#1F2937', // Dark gray for text
        textSecondary: '#374151', // Medium gray for secondary text
      },
    },
  },
  plugins: [],
};
