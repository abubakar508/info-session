import React from 'react'
import FlipClock from './Flipclock'
import BackgroundAnimation from './BackgroundAnimation'

const Hero = () => {
    return (
        <BackgroundAnimation>
        <div className=' flex flex-col items-center justify-center h-screen gap-[70px]'>
            <div className=' p-3 flex flex-col items-center justify-center font-black text-2xl lg:text-7xl'>
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
            <div>
                <FlipClock />
            </div>
            <div>
                <button className=' py-3 px-6 font-black bg-slate-950 text-neutral-100 rounded-md'>
                    Register Now
                </button>
            </div>
        </div>
        </BackgroundAnimation>
    )
}

export default Hero
