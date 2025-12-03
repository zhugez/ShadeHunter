import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Logo({ className, classNameText }) {
    return (
        <div className={twMerge("flex items-center gap-3", className)}>
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Outer Hexagon/Shield */}
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                >
                    <path
                        d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z"
                        fill="none"
                        stroke="url(#logo-gradient)"
                        strokeWidth="3"
                        className="animate-[pulse_4s_ease-in-out_infinite]"
                    />

                    {/* Inner Crosshair/Eye */}
                    <circle cx="50" cy="50" r="15" fill="none" stroke="#00E5FF" strokeWidth="2" className="opacity-80" />
                    <circle cx="50" cy="50" r="6" fill="#00E5FF" className="animate-pulse" />

                    {/* Scanning Lines */}
                    <path d="M20 50 L35 50" stroke="#5F5CFF" strokeWidth="2" strokeLinecap="round" />
                    <path d="M65 50 L80 50" stroke="#5F5CFF" strokeWidth="2" strokeLinecap="round" />
                    <path d="M50 20 L50 35" stroke="#5F5CFF" strokeWidth="2" strokeLinecap="round" />
                    <path d="M50 65 L50 80" stroke="#5F5CFF" strokeWidth="2" strokeLinecap="round" />

                    {/* Defs */}
                    <defs>
                        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00E5FF" />
                            <stop offset="100%" stopColor="#5F5CFF" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full -z-10" />
            </div>

            <div className={twMerge("flex flex-col", classNameText)}>
                <span className="text-xl font-bold tracking-wider leading-none text-white">
                    SHADE<span className="text-neon-cyan">HUNTER</span>
                </span>
                <span className="text-[0.6rem] text-gray-500 tracking-[0.2em] uppercase leading-none mt-1">
                    Stealth Defense
                </span>
            </div>
        </div>
    );
}
