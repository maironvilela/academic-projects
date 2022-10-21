/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],

    theme: {
        fontSize: {
            xs: 14,
            sn: 16,
            md: 18,
            lg: 20,
            xl: 24,
            '2xl': 32
        },
        colors:{
            'gray-100': '#E1E1E6',
            'gray-200': '#C4C4CC',
            'gray-500': '#7C7C7C',
            'gray-600': '#7C7C8A',
            'gray-800': '#202024',
            'gray-900': '#1A1A1A',

            'cyan-100': '#93DDF1',
            'cyan-300': '#61DAFB',

        },
        extend: {
            fontFamily:{
                sans: 'Inter, sans-serif'
            }
        },
    },
    plugins: [],
};
