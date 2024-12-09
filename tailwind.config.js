/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  extend: {
  
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
   'main': {
        '50': 'hsl(var(--main-50))',
        '100': 'hsl(var(--main-100))',
        '200': 'hsl(var(--main-200))',
        '300': 'hsl(var(--main-300))',
        '400': 'hsl(var(--main-400))',
        '500': 'hsl(var(--main-500))',
        '600': 'hsl(var(--main-600))',
        '700': 'hsl(var(--main-700))',
        '800': 'hsl(var(--main-800))',
        '900': 'hsl(var(--main-900))',
        '950': 'hsl(var(--main-950))',
    },
    'primary': 'hsl(var(--primary))',
    'main-bg': 'hsl(var(--main-bg))',
    'card': 'hsl(var(--card))',
    'nav-text': 'hsl(var(--nav-text))',
    'text': 'hsl(var(--text))',
    'error': 'hsl(var(--error))',
    'black': {
      'full': 'hsl(var(--black-full))',
      '900': 'hsl(var(--main-bg))',
      '800': 'hsl(var(--card))'
    },
   'white':{
    'full': 'hsl(var(--text))',
    '200': 'hsl(var(--white-200))',
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