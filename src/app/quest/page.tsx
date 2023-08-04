import QuestCard from '@/components/QuestCard';
import BackgroundImage from '@/public/images/background_dark.png';
import Image from 'next/image';

export default function Quest() {
    return (
        <>
            <div className="grid grid-cols-2 p-8 gap-10">
                <QuestCard />
                <QuestCard />
                <QuestCard />
                <QuestCard />
                <QuestCard />
                <QuestCard />
                <QuestCard />
                <QuestCard />
            </div>
            <Image
                src={BackgroundImage}
                alt="Background Image"
                fill
                className="select-none -z-10 object-cover"
            />
        </>
    );
}
