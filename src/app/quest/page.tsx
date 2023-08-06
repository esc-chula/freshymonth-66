'use client';
import { IQuest } from '@/interfaces/quest';
import BackgroundImage from '@/public/images/quest_background.svg';
import QuestsData from '@/constants/quests.json';
import Image from 'next/image';
import { useState } from 'react';
import QuestCard from '@/components/QuestCard';
import QuestModal from '@/components/QuestModal';
import QuestText from '@/vectors/QuestText';

export default function Quest() {
    const quests = QuestsData as IQuest[];

    const [selectedQuest, setSelectedQuest] = useState<IQuest | null>(null);

    return (
        <>
            <QuestModal
                selectedQuest={selectedQuest}
                setSelectedQuest={setSelectedQuest}
            />

            <div className="flex justify-center -mb-6 mt-3">
                <QuestText className="scale-[55%]" />
            </div>

            <div className="grid grid-cols-2 p-5 gap-5">
                {quests.map((quest, idx) => {
                    return (
                        <QuestCard
                            key={idx}
                            setSelectedQuest={setSelectedQuest}
                            title={quest.title}
                            slug={quest.slug}
                        />
                    );
                })}
            </div>

            {/* <div className="fixed top-0 bottom-0 left-0 right-0 border-black border-[19px] pointer-events-none"></div>
            <div className="fixed top-0 bottom-0 left-0 right-0 border-white border-[15px] pointer-events-none z-10"></div> */}
            <Image
                src={BackgroundImage}
                alt="Background Image"
                fill
                className="-z-10 select-none object-cover"
            />
        </>
    );
}
