'use client';
import QuestCardOld from '@/components/QuestCardOld';
import QuestModalOld from '@/components/QuestModalOld';
import { IQuest } from '@/interfaces/quest';
import BackgroundImage from '@/public/images/background_dark.png';
import QuestTitleBackground from '@/public/images/paper_1.png';
import QuestsData from '@/constants/quests.json';
import { fahkwang, sovPoster } from '@/utils/fonts';
import Image from 'next/image';
import { useState } from 'react';

export default function Quest() {
    const quests = QuestsData as IQuest[];

    const [selectedQuest, setSelectedQuest] = useState<IQuest | null>(null);

    return (
        <>
            <QuestModalOld
                selectedQuest={selectedQuest}
                setSelectedQuest={setSelectedQuest}
            />

            <div
                className={`z-10 fixed top-0 left-0 right-0 h-44 ${fahkwang.className}`}
            >
                <div className="z-10 absolute grid place-content-center w-full h-full">
                    <h1
                        className={`text-8xl mb-10 tracking-wide ${sovPoster.className}`}
                    >
                        เควส
                    </h1>
                </div>
                <Image
                    src={QuestTitleBackground}
                    alt="Quest Title Background"
                    fill
                    className="select-none object-cover object-bottom"
                />
            </div>

            <div className="grid grid-cols-2 p-8 gap-10 mt-44 mb-4">
                {quests.map((quest, idx) => {
                    return (
                        <QuestCardOld
                            key={idx}
                            quest={quest}
                            setSelectedQuest={setSelectedQuest}
                        />
                    );
                })}
            </div>

            <Image
                src={BackgroundImage}
                alt="Background Image"
                fill
                className="-z-10 select-none object-cover"
            />
        </>
    );
}
