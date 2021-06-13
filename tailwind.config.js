module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#FCFCFC',
      secondary: '#FFD166',
      white: '#ffffff',
      black: '#000000',
      red: '#DF2D16',
      blue: '#5386E4',
      green: '3E8914',
      yellow: "#FFD166",
      gray: {
        hero: '#030306',
        dark: '#141414',
        DEFAULT: '#16151a',
        light: '#1c1b21'
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Montserrat', 'serif']
    },
    extend: {
      width: {
        '240': '50rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
