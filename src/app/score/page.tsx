import BackgroundImage from '@/public/images/background_light.png';
import Image from 'next/image';

export default function Score() {
    return (
        <>
            <Image
                src={BackgroundImage}
                alt="Background Image"
                fill
                objectFit="cover"
                className="select-none -z-10 object-cover"
            />
        </>
    );
}
