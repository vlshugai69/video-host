/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  extend: {},
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
   'green': {
        '50': '#effef4',
        '100': '#d9ffe7',
        '200': '#b5fdcf',
        '300': '#7cf9ab',
        '400': '#20e96d',
        '500': '#13d45e',
        '600': '#09b04a',
        '700': '#0b8a3c',
        '800': '#0f6c34',
        '900': '#0e592d',
        '950': '#002611',
    },
    'black': {
      'full':'#000000',
      '900': '#181C14',
      '800':'#0C2112'
    },
   'white':{
    'full':'#F5F7F8',
    '200': '#71717a'
   }
  
  },
   fontFamily: {
      sans: ['var(--font-red-hat-display)', 'sans-serif'],
  },
  fontSize: {
    xs: '0.8rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    'xl': '1.563rem',
    '2xl': '2.25rem',
    '3xl': '2.441rem',
    '4xl': '3.052rem',
  }
};
export const plugins = [];