import {
    Fahkwang,
    IBM_Plex_Sans_Thai,
    IBM_Plex_Sans_Thai_Looped,
} from 'next/font/google';
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

export const badaboom = localFont({
    src: [
        {
            path: '../../public/fonts/Badaboom.ttf',
            weight: '400',
        },
    ],
});

export const obelixPro = localFont({
    src: [
        {
            path: '../../public/fonts/ObelixPro.ttf',
            weight: '400',
        },
        {
            path: '../../public/fonts/ObelixPro-Bold.ttf',
            weight: '700',
        },
    ],
});

export const tiger = localFont({
    src: [
        {
            path: '../../public/fonts/TIGER-Thin.ttf',
            weight: '200',
        },
        {
            path: '../../public/fonts/TIGER-Regular.ttf',
            weight: '400',
        },
        {
            path: '../../public/fonts/TIGER-Bold.ttf',
            weight: '600',
        },
        {
            path: '../../public/fonts/TIGER-Black.ttf',
            weight: '700',
        },
    ],
});

export const fahkwang = Fahkwang({
    subsets: ['thai'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

export const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});
