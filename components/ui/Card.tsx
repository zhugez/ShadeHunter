'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className, ...props }: CardProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={twMerge(
                "glass-panel p-6 rounded-lg relative overflow-hidden group",
                className
            )}
            {...props}
        >
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[2s]" />

            {children}
        </motion.div>
    );
}
