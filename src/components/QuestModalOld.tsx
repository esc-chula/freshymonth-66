import { IQuest } from '@/interfaces/quest';
import BackgroundImage from '@/public/images/background_light.png';
import CloseBackgroundImage from '@/public/images/paper_2.png';
import { sovPoster } from '@/utils/fonts';
import Image from 'next/image';

interface QuestModalProps {
    selectedQuest: IQuest | null;
    setSelectedQuest: React.Dispatch<React.SetStateAction<IQuest | null>>;
}

export default function QuestModalOld({
    selectedQuest,
    setSelectedQuest,
}: QuestModalProps) {
    return (
        <div
            className={`z-20 fixed top-0 bottom-0 left-0 right-0 duration-200 ease-in-out ${
                selectedQuest ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div
                onClick={() => setSelectedQuest(null)}
                className="z-20 absolute top-4 left-5 p-2 text-3xl cursor-pointer"
            >
                X
            </div>
            <div className="z-20 pt-14">
                <h2
                    className={`font-bold text-center text-7xl tracking-wide ${sovPoster.className}`}
                >
                    {selectedQuest?.title}
                </h2>
            </div>
            <Image
                src={CloseBackgroundImage}
                alt=""
                className="z-10 absolute -top-10 -left-6 w-28 rotate-45"
            />
            <Image
                src={BackgroundImage}
                alt="Background Image"
                fill
                className="select-none -z-10 object-cover"
            />
        </div>
    );
}
