import { Fahkwang } from 'next/font/google';
import localFont from 'next/font/local';

export const sovPoster = localFont({
    src: [
        {
            path: '../../public/fonts/SOV_poster.ttf',
            weight: '400',
        },
        {
            path: '../../public/fonts/SOV_poster-Bold.ttf',
            weight: '700',
        },
    ],
});

export const fahkwang = Fahkwang({
    subsets: ['thai'],
    weight: ['200', '300', '400', '500', '600', '700'],
});
