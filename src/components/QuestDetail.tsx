import { tiger } from '@/utils/fonts';

interface QuestDetailProps {
    children: React.ReactNode;
    title: string;
}

export default function QuestDetail({ children, title }: QuestDetailProps) {
    return (
        <div className="bg-white border-4 border-black w-full py-4 px-6 rounded-2xl space-y-2">
            <h2 className={`text-2xl font-bold ${tiger.className}`}>{title}</h2>
            <div>{children}</div>
        </div>
    );
}
