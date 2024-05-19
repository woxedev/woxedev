/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './**/*.vue',
   ],
   theme: {
      extends: {
      },
      fontFamily: {
         sans: ['Space Grotesk', 'sans-serif'],
         serif: ['Space Grotesk', 'serif'],
      },
   }
   ,
   plugins: [
      require('@tailwindcss/typography'),
   ],

}