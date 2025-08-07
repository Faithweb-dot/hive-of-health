module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4A574", // honey-gold
          50: "#FBF8F4", // honey-gold-50
          100: "#F5EEDF", // honey-gold-100
          200: "#EBDCC0", // honey-gold-200
          300: "#E1CAA1", // honey-gold-300
          400: "#D7B882", // honey-gold-400
          500: "#D4A574", // honey-gold-500
          600: "#C19660", // honey-gold-600
          700: "#A67F4F", // honey-gold-700
          800: "#8B683E", // honey-gold-800
          900: "#70512D", // honey-gold-900
        },
        secondary: {
          DEFAULT: "#8B4513", // earth-brown
          50: "#F7F3F0", // earth-brown-50
          100: "#EDE4DC", // earth-brown-100
          200: "#DBC8B8", // earth-brown-200
          300: "#C9AC94", // earth-brown-300
          400: "#B79070", // earth-brown-400
          500: "#A5744C", // earth-brown-500
          600: "#935828", // earth-brown-600
          700: "#8B4513", // earth-brown-700
          800: "#6F3610", // earth-brown-800
          900: "#53270C", // earth-brown-900
        },
        accent: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0F8F0", // forest-green-50
          100: "#D4F1D4", // forest-green-100
          200: "#A9E3A9", // forest-green-200
          300: "#7ED57E", // forest-green-300
          400: "#53C753", // forest-green-400
          500: "#228B22", // forest-green-500
          600: "#1E7D1E", // forest-green-600
          700: "#1A6F1A", // forest-green-700
          800: "#166116", // forest-green-800
          900: "#125312", // forest-green-900
        },
        background: "#FEFEFE", // pure-white
        surface: "#F8F6F3", // warm-white
        text: {
          primary: "#2C1810", // rich-brown
          secondary: "#6B5B4F", // soft-brown
        },
        success: "#32CD32", // lime-green
        warning: "#FF8C00", // dark-orange
        error: "#CD5C5C", // indian-red
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        warm: '0 4px 12px rgba(212, 165, 116, 0.15)',
        subtle: '0 2px 8px rgba(212, 165, 116, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}