/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1'
      },
      borderRadius: {
        'card': '4.5rem'
      },
      animation: {
        'scale-slow': 'grow 5s linear  infinite'
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      dropShadow: {
        'basic-shine': '0px 0px 5px #5555dd',
        'basic-white-shine': '0px 0px 10px #ffffff'
      },
      height: {
        '6/8': 'auto',
        '1/8': '70px',
      },
      backgroundImage: {
        'Basic': 'url("../public/Images/BackGround.jpg")'
      },
      backdropBlur: {
        'full': '30px'
      }
    }
  },
  plugins: [],
}

