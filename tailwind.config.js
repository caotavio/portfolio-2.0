module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'serif': ['Lora', 'serif'],
      'mono': ['"Space Mono"', 'monospace']
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      colors: {
        main: '#050823',
        dark: '#070c34',
        deep: '#233753',
        tardis: '#00203c',
        lightsaberdark: '#FF0000',
        lightsaberlight: '#6BE044',
        matrix: '#008f11',
      },
      height: {
        'saber': '2.5px'
      },
      opacity: {
        '99': '.99'
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      }
    },
  },
  variants: {
    animation: ['responsive', 'hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    margin: ['responsive', 'hover']
  },
  plugins: [],
}
