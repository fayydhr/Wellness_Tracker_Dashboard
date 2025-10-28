import { defineConfig } from 'vite-plugin-windicss';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryRed: '#C21224',
        secondaryBlack: '#1B1B1B',
        accentGray: '#E6E6E6',
        bgWhite: '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
