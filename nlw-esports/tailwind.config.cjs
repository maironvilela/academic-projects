/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './index.html'
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            backgroundImage: {
                background_page:'url(\'/background.png\')',
            }
        },
    },
    plugins: [],
};
