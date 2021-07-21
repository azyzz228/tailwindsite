module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false, //true for production build
    content: [
      '../**/templates/*.html',
      '../**/templates/**/*.html'
    ]
  },
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      }
    },

    fontFamily: {
      Poppings: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: "1124px",
        "2xl": '1124px'
      }
    },

  },
  variants: {},
  plugins: [],
}