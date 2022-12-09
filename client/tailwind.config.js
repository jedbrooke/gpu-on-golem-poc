/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      white: '#ffffff',
      blue: '#007dff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Inter', 'sans'],
      mono: ['Roboto Mono', 'mono'],
    },
    fontSize: {
      12: [
        '1.2rem',
        {
          lineHeight: '1.6rem',
          letterSpacing: '0.009rem',
          fontWeight: '500',
        },
      ],
      14: [
        '1.4rem',
        {
          lineHeight: '1.9rem',
          letterSpacing: '0.044rem',
          fontWeight: '500',
        },
      ],
      16: [
        '1.6rem',
        {
          lineHeight: '1.8rem',
          letterSpacing: '0.05rem',
          fontWeight: '700',
        },
      ],
      18: [
        '1.8rem',
        {
          lineHeight: '2.4rem',
          letterSpacing: '0.001rem',
          fontWeight: '500',
        },
      ],
      34: [
        '3.4rem',
        {
          lineHeight: '4.1rem',
          letterSpacing: '0.025rem',
          fontWeight: '700',
        },
      ],
      36: [
        '3.6rem',
        {
          lineHeight: '4.4rem',
          fontWeight: '500',
        },
      ],
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};