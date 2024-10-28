/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js"
      ],
      theme: {
        extend: {
            fontFamily: {
                'press-start': ['"Press Start 2P"', 'cursive'],
            },
        },
      },
      plugins: [
          require('flowbite/plugin')
      ],
    }
