import './globals.css';
import LiffProvider from '@/contexts/LiffContext';
import { fahkwang } from '@/utils/fonts';

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
            <body className={`${fahkwang.className} flex justify-center`}>
                <LiffProvider>
                    <div className="absolute h-screen max-w-screen-sm w-full text-[#55160F]">
                        <div className="w-full h-full overflow-y-auto select-none">
                            {children}
                        </div>
                    </div>
                </LiffProvider>
            </body>
        </html>
    );
}
