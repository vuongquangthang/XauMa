/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-green': '#195D3B',
        'leaf-green': '#438347',
        'fresh-green': '#91B34D',
        'kraft-beige': '#E8D5B5',
        'warm-cream': '#F8F5E9',
        'carrot-orange': '#DE8753',
      },
      fontFamily: {
        heading: ["'Be Vietnam Pro'", 'sans-serif'],
        body: ["'Be Vietnam Pro'", 'sans-serif'],
      },
      boxShadow: {
        'organic': '0 8px 30px -4px rgba(25, 93, 59, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'organic-lg': '0 20px 40px -8px rgba(25, 93, 59, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
