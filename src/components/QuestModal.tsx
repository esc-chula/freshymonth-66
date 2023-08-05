import { IQuest } from '@/interfaces/quest';
import BackgroundImage from '@/public/images/quest_detail_background.png';
import { tiger } from '@/utils/fonts';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';

interface QuestModalProps {
    selectedQuest: IQuest | null;
    setSelectedQuest: React.Dispatch<React.SetStateAction<IQuest | null>>;
}

export default function QuestModal({
    selectedQuest,
    setSelectedQuest,
}: QuestModalProps) {
    return (
        <div
            className={`z-20 fixed top-0 bottom-0 left-0 right-0 duration-200 ease-in-out ${
                selectedQuest ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="pt-20">
                <h1
                    className={`text-center text-5xl font-bold text-white ${tiger.className}`}
                    style={{
                        WebkitTextStroke: '8px #000',
                        paintOrder: 'stroke fill',
                    }}
                >
                    {selectedQuest?.title}
                </h1>
            </div>

            {/* close button */}
            <div
                onClick={() => setSelectedQuest(null)}
                className="absolute top-7 left-7 p-2 text-3xl text-black"
            >
                <FiX />
            </div>

            {/* background */}
            <div className="-z-10 absolute top-4 bottom-4 left-4 right-4 bg-[#f0e3d5]/70 rounded-2xl"></div>
            <Image
                src={BackgroundImage}
                alt="Background Image"
                fill
                className="select-none -z-20 object-cover"
            />
        </div>
    );
}
