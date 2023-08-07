import { IQuest } from '@/interfaces/quest';
import Image from 'next/image';

interface QuestCardProps {
    quest: IQuest | null;
    setSelectedQuest: React.Dispatch<React.SetStateAction<IQuest | null>>;
}

export default function QuestCard({ quest, setSelectedQuest }: QuestCardProps) {
    return (
        <div
            onClick={() => {
                if (quest?.active) setSelectedQuest(quest);
            }}
            className={`aspect-square w-full bg-white border-black border-[7px] rounded-3xl overflow-hidden relative grid place-content-center`}
        >
            {!quest?.active && (
                <div className="z-20 font-bold text-xl text-black">
                    เควสหมดเวลา
                </div>
            )}

            <Image
                src={require(`@/public/images/quests/${quest?.image}`)}
                alt={quest?.title!}
                fill
                className={`absolute z-10 rounded-[20px] border-white border-[4px] ${
                    quest?.active ? 'opacity-100' : 'opacity-30'
                }`}
            />
        </div>
    );
}
