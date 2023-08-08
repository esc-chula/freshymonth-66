import BackgroundImage from '@/public/images/quest_detail_background.png';
import CalendarImage from '@/public/images/calendar.png';
import Image from 'next/image';

export default function Calendar() {
    return (
        <>
            <div className="flex justify-center items-center w-full h-full bg-black">
                <Image src={CalendarImage} alt="Calendar" />
            </div>
        </>
    );
}
