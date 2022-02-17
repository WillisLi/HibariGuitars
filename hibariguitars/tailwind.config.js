module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'top': '0 20px 45px -5px rgba(0, 0, 0, 0.3)',
        'cards': '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        slideUp: "slideUp 350ms forwards",
      },
      keyframes: {
        slideUp: {
          '0%': {
            opacity: '0.4',
            transform: 'translateY(50%);'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0);'
          }
        },
      }
    },
  },
  plugins: [],
}
