"use client";
import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export default function FlipClock() {
    const [targetTime, setTargetTime] = useState(null);
    const [countdownFinished, setCountdownFinished] = useState(false);

    useEffect(() => {
        const now = new Date();
        const targetDate = new Date('2024-06-12T07:00:00');

        const timeDifference: any = targetDate.getTime() - now.getTime();

        setTargetTime(now.getTime() + timeDifference);
    }, []);

    if (!targetTime) {
        return null;
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            {!countdownFinished ? (
                <FlipClockCountdown
                    to={targetTime}
                    labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                    labelStyle={{ fontSize: 15, fontWeight: 700, textTransform: 'uppercase' }}
                    digitBlockStyle={{ width: 'clamp(40px, 10vw, 80px)', height: 'clamp(60px, 15vw, 120px)' }}
                    dividerStyle={{ color: '', height: 1 }}
                    separatorStyle={{ color: 'skyblue', size: '10px' }}
                    duration={0.5}
                    onComplete={() => setCountdownFinished(true)}
                    className="flip-clock"
                />
            ) : (
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                    The info-session starts in a few!
                </div>
            )}
        </div>
    );
}
