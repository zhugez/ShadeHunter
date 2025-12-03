import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ children, className, variant = 'primary', ...props }) {
    const baseStyles = "relative px-6 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

    const variants = {
        primary: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] focus:ring-neon-cyan",
        secondary: "border-neon-indigo text-neon-indigo hover:bg-neon-indigo/10 hover:shadow-[0_0_20px_rgba(95,92,255,0.5)] focus:ring-neon-indigo",
        ghost: "border-transparent text-gray-400 hover:text-white hover:bg-white/5",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-50" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-50" />
        </motion.button>
    );
}
