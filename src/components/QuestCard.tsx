import { IQuest } from '@/interfaces/quest';

interface QuestCardProps {
    setSelectedQuest: React.Dispatch<React.SetStateAction<IQuest | null>>;
    title: string;
    slug: string;
}

export default function QuestCard({
    setSelectedQuest,
    title,
    slug,
}: QuestCardProps) {
    return (
        <div
            onClick={() => {
                setSelectedQuest({
                    title: title,
                    slug: slug,
                });
            }}
            className="aspect-square w-full bg-white border-black border-[5px] rounded-3xl"
        ></div>
    );
}
