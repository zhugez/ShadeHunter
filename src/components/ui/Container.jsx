import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Container({ children, className, ...props }) {
    return (
        <div className={twMerge("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>
            {children}
        </div>
    );
}
