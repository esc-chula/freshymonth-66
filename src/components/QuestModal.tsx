import { IQuest } from '@/interfaces/quest';
import BackgroundImage from '@/public/images/quest_detail_background.png';
import { tiger } from '@/utils/fonts';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import QuestDetail from './QuestDetail';

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
            <div className="w-full h-full overflow-y-auto px-4 space-y-6 text-black">
                <div className="pt-14 h-28 flex justify-center">
                    <h1
                        className={`absolute z-10 text-center text-5xl font-bold text-white ${tiger.className}`}
                        style={{
                            WebkitTextStroke: '8px #000',
                            paintOrder: 'stroke',
                        }}
                    >
                        {selectedQuest?.title}
                    </h1>
                    <h1
                        className={`absolute z-0 text-center text-5xl font-bold text-white ${tiger.className}`}
                        style={{
                            WebkitTextStroke: '8px #000',
                            paintOrder: 'stroke',
                        }}
                    >
                        {selectedQuest?.title}
                    </h1>
                </div>
                <QuestDetail title="วิธีเล่น">
                    <p>
                        สัตว์หนึ่งขา สัตว์สองขา สัตว์สามขา สัตว์สี่ขา สัตว์ห้าขา
                        สัตว์หกขา
                    </p>
                </QuestDetail>
                <QuestDetail title="สถานที่">
                    <p>สัตว์หนึ่งขา</p>
                </QuestDetail>
                <QuestDetail title="เกณฑ์การให้คะแนน">
                    <p>สัตว์สองขา</p>
                </QuestDetail>
                <QuestDetail title="ระยะเวลา">
                    <p>สัตว์ร้อยขา</p>
                </QuestDetail>
            </div>

            {/* close button */}
            <div
                onClick={() => setSelectedQuest(null)}
                className="absolute top-5 left-5 p-2 text-3xl text-black"
            >
                <FiX />
            </div>

            <Image
                src={BackgroundImage}
                alt="Background Image"
                fill
                className="select-none -z-20 object-cover"
            />
        </div>
    );
}
