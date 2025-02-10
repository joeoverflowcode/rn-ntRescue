/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito-Regular', 'sans-serif'],
        "nunito-bold": ["Nunito-Bold", "sans-serif"],
        "nunito-extra-bold": ["Nunito-ExtraBold", "sans-serif"],
        "nunito-medium": ["Nunito-Medium", "sans-serif"],
        "nunito-semi-bold": ["Nunito-SemiBold", "sans-serif"],
        "nunito-light": ["Nunito-Light", "sans-serif"]
      },
      colors: {
        "primary": {
          100: '#0075DB2A',
          200: '#0075DB66',
          300: '#0075DB'
        },
        accent: {
          100: '#FBFBFB',
        },
        black: {
          default: '#000000',
          100: '#8C8E98',
          200: '#666876',
          300: '8C8E98'
        },
        danger: '#F75555'
      }
    },
  },
  plugins: [],
}