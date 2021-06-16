module.exports = {
  purge: [
    './components/**/*.tsx',
    './components/**/**/*.tsx',
    './components/**/**/**/*.tsx',
    './pages/**/*.tsx',
    './pages/*.tsx',
    './layouts/**/*.tsx'
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#1e1e24',
      secondary: '#fb9f89',
      white: '#ffffff',
      black: '#000000',
      red: '#DF2D16',
      blue: '#5386E4',
      green: '3E8914',
      yellow: '#FFD166',
      gray: {
        hero: '#030306',
        dark: '#141414',
        DEFAULT: '#16151a',
        light: '#1c1b21'
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
      pop: ['Poppins', 'sans-serif']
    },
    extend: {
      width: {
        240: '50rem'
      },
      backgroundImage: theme => ({
        homeBack: "url('/img/dance_stage.webp')"
        // 'footer-texture': "url('/img/footer-texture.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
