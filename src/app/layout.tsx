import LiffProvider from '@/contexts/LiffContext';
import './globals.css';
import { IBM_Plex_Sans_Thai } from 'next/font/google';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
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
                className={`${ibmPlexSansThai.className} flex justify-center`}
            >
                <LiffProvider>
                    <div className="max-w-screen-sm w-full p-4">{children}</div>
                </LiffProvider>
            </body>
        </html>
    );
}
