import Image from 'next/image';
import BackgroundImage from '@/public/images/quest_detail_background.png';
import { badaboom } from '@/utils/fonts';

export default function Loading() {
    return (
        <>
            <div className="relative flex justify-center items-center h-full">
                <span
                    className={`absolute z-10 font-bold text-7xl text-white text-center ${badaboom.className}`}
                >
                    Loading
                </span>
                <span
                    className={`absolute z-0 font-bold text-7xl text-white text-center ${badaboom.className}`}
                    style={{
                        WebkitTextStroke: '13px #000',
                        // paintOrder: 'stroke',
                    }}
                >
                    Loading
                </span>
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
