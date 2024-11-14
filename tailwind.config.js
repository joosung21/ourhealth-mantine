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
        h1: { fontSize: '3rem' },
        h2: { fontSize: '2.25rem', fontWeight: '700' },
        h3: { fontSize: '1.875rem' },
        h4: { fontSize: '1.5rem' },
        h5: { fontSize: '1.25rem' },
        h6: { fontSize: '1rem' },
        ol: { listStyleType: 'decimal' },
        ul: { listStyleType: 'disc' },
        li: { marginLeft: '1.5rem' },
      });
    }),
  ],
};
