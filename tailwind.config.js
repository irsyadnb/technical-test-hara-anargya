/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {},
      colors: {
        'clr-background-base-one': '#FFFFFF',
        'clr-background-base-two': '#FAFBFC',
        'clr-background-base-three': '#F7F8FA',
        'clr-text-primary': '#080808',
        'clr-text-secondary': '#7C7C7C',
        'clr-nav-selected': '#E3F2FD',
      },
      rotate: {
        '150': '150deg'
      }
    },
  },
  plugins: [],
};
