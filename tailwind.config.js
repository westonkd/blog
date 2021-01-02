module.exports = {
  // remove unused styles from pages and components
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
