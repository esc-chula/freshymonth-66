import BackgroundImage from '@/public/images/leaderboard_background.png';
import GroupScoreData from '@/constants/group-score.json';
import { badaboom, ibmPlexSansThai, tiger } from '@/utils/fonts';
import Image from 'next/image';
import LeaderBoardText from '@/vectors/LeaderBoardText';

export default function Leaderboard() {
    return (
        <>
            <div className="flex flex-col w-full p-8 space-y-4 mb-4">
                <div className="flex justify-center">
                    <LeaderBoardText className="scale-90" />
                </div>
                {/* <h1
                    className={`text-6xl text-white text-center py-4 ${badaboom.className}`}
                    style={{
                        WebkitTextStroke: '8px #000',
                        paintOrder: 'stroke fill',
                    }}
                >
                    Leaderboard
                </h1> */}
                {GroupScoreData.sort((a, b) => b.score - a.score).map(
                    (item, idx) => (
                        <div
                            key={idx}
                            className={`h-20 w-full bg-white border-4 border-black flex items-center px-5 space-x-5`}
                        >
                            <h3
                                className={`font-bold text-4xl text-white w-7 text-center ${badaboom.className}`}
                                style={{
                                    WebkitTextStroke: '8px #000',
                                    paintOrder: 'stroke fill',
                                }}
                            >
                                {idx + 1}
                            </h3>
                            <p
                                className={`text-black text-3xl font-semibold ${tiger.className}`}
                            >
                                กรุ้ป {item.name}
                            </p>
                        </div>
                    )
                )}
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
