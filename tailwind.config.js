// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        // nothing here
      }
    },
    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.bg-gradient-radial': {
            'background-image': 'radial-gradient(var(--tw-gradient-stops))',
          },
          '.bg-gradient-conic': {
            'background-image': 'conic-gradient(var(--tw-gradient-stops))',
          },
        })
      }
    ]
  }
  