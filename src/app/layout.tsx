import LiffProvider from '@/contexts/LiffContext';
import './globals.css';
import { Fahkwang } from 'next/font/google';
import localFont from 'next/font/local';

const sovPoster = localFont({
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

const fahkwang = Fahkwang({
    subsets: ['thai'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata = {
    title: 'freshymonth 66',
    description: 'freshymonth 66',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="th">
            <body
                className={`${sovPoster.className} ${fahkwang.className} flex justify-center`}
            >
                <LiffProvider>
                    <div className="absolute top-0 bottom-0 max-w-screen-sm w-full text-[#55160F]">
                        <div className="w-full h-full overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </LiffProvider>
            </body>
        </html>
    );
}
