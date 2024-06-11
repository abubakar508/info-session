import React from 'react';
import FlipClock from './Flipclock';
import BackgroundAnimation from './BackgroundAnimation';

const Hero = () => {
    return (
        <BackgroundAnimation>
            <div className='flex flex-col items-center justify-center h-screen gap-[70px] relative'>
                <div className='p-3 flex flex-col items-center justify-center font-black text-2xl lg:text-7xl z-10'>
                    <span className="text-neutral-100">
                        UMMA TECH HUB
                    </span>
                    <span>
                        INFO-SESSION
                    </span>
                    <span>
                        begins in
                    </span>
                </div>
                <div className="z-10">
                    <FlipClock />
                </div>
                <div className="z-10">
                    <a href="https://forms.office.com/r/NxWDQtC9qh" className='py-3 px-6 font-black bg-slate-950 text-neutral-100 rounded-md'>
                        Register Now
                    </a>
                </div>
            </div>
        </BackgroundAnimation>
    );
}

export default Hero;
