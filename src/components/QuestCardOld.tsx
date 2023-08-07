import { IQuest } from '@/interfaces/quest';
import { sovPoster } from '@/utils/fonts';
import PaperGrainedImage from '@/public/images/paper_grained.png';
import Image from 'next/image';

interface QuestCardProps {
    quest: IQuest | null;
    setSelectedQuest: React.Dispatch<React.SetStateAction<IQuest | null>>;
}

export default function QuestCardOld({
    quest,
    setSelectedQuest,
}: QuestCardProps) {
    return (
        <div
            onClick={() => {
                setSelectedQuest(quest);
            }}
            className="relative bg-[#E9DDC7] aspect-[9/14] rounded-xl shadow-xl p-1.5 cursor-pointer"
        >
            <div className="w-full h-full rounded-lg border-[#8C7D6A]/70 border-[3px]">
                <div className="w-full h-[60%]"></div>
                <div className="text-center text-4xl">
                    <h3 className={`${sovPoster.className}`}>{quest?.title}</h3>
                </div>
            </div>
            <Image
                src={PaperGrainedImage}
                alt=""
                fill
                className="object-contain"
            />
        </div>
    );
}
