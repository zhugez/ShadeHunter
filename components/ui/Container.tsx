'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className, ...props }: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={twMerge("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>
            {children}
        </div>
    );
}
