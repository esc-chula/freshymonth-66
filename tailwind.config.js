/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                fahkwang: ['var(--font-fahkwang)'],
                sovPoster: ['var(--font-sov-poster)'],
            },
        },
    },
    plugins: [],
};
