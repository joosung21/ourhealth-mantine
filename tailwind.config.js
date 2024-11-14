/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: '2.5rem', fontWeight: '600', fontFamily: 'Roboto, sans-serif' },
        h2: { fontSize: '2.0rem', fontWeight: '600', fontFamily: 'Roboto, sans-serif' },
        h3: { fontSize: '1.75rem', fontWeight: '600', fontFamily: 'Roboto, sans-serif' },
        h4: { fontSize: '1.5rem', fontWeight: '700', fontFamily: 'Roboto, sans-serif' },
        h5: { fontSize: '1.25rem', fontWeight: '600', fontFamily: 'Roboto, sans-serif' },
        h6: { fontSize: '1rem', fontWeight: '700', fontFamily: 'Roboto, sans-serif' },
        ol: { listStyleType: 'decimal' },
        ul: { listStyleType: 'disc' },
        li: { marginLeft: '1.5rem' },
      });
    }),
  ],
};
