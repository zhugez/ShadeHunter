import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Badge({ children, status = 'neutral', className }) {
    const colors = {
        safe: "text-status-safe border-status-safe/30 bg-status-safe/10",
        critical: "text-status-critical border-status-critical/30 bg-status-critical/10",
        neutral: "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10",
    };

    const dots = {
        safe: "bg-status-safe",
        critical: "bg-status-critical",
        neutral: "bg-neon-cyan",
    };

    return (
        <span className={twMerge(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wider",
            colors[status],
            className
        )}>
            <span className={twMerge("w-1.5 h-1.5 rounded-full animate-pulse", dots[status])} />
            {children}
        </span>
    );
}
