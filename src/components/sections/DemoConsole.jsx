import React, { useEffect, useState, useRef } from 'react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { motion } from 'framer-motion';

const logs = [
    { type: 'info', msg: 'Initializing ShadeHunter Core v2.0.4...' },
    { type: 'info', msg: 'Connecting to global threat intelligence network...' },
    { type: 'success', msg: 'Connection established. Latency: 12ms.' },
    { type: 'info', msg: 'Starting packet inspection daemon...' },
    { type: 'warn', msg: 'Anomaly detected: Inbound traffic spike from IP 192.168.45.22' },
    { type: 'analysis', msg: 'Analyzing payload signature... [AI Heuristics]' },
    { type: 'critical', msg: 'THREAT IDENTIFIED: SQL Injection attempt (CVE-2024-8921)' },
    { type: 'action', msg: 'Blocking IP 192.168.45.22...' },
    { type: 'success', msg: 'Threat neutralized. IP added to global blocklist.' },
    { type: 'info', msg: 'Resuming normal monitoring...' },
];

export function DemoConsole() {
    const [visibleLogs, setVisibleLogs] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        let timeoutId;
        let currentIndex = 0;

        const addLog = () => {
            if (currentIndex < logs.length) {
                setVisibleLogs(prev => [...prev, logs[currentIndex]]);
                currentIndex++;
                timeoutId = setTimeout(addLog, 800);
            } else {
                // Wait before resetting
                timeoutId = setTimeout(() => {
                    setVisibleLogs([]);
                    currentIndex = 0;
                    timeoutId = setTimeout(addLog, 800);
                }, 3000);
            }
        };

        timeoutId = setTimeout(addLog, 800);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleLogs]);

    const getLogColor = (type) => {
        switch (type) {
            case 'info': return 'text-gray-400';
            case 'success': return 'text-status-safe';
            case 'warn': return 'text-yellow-400';
            case 'critical': return 'text-status-critical font-bold';
            case 'action': return 'text-neon-cyan';
            case 'analysis': return 'text-neon-violet';
            default: return 'text-gray-400';
        }
    };

    return (
        <section className="py-24 bg-black/50">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <Badge status="neutral" className="mb-4">Live Demonstration</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            See It in <span className="text-neon-cyan">Action</span>
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            ShadeHunter monitors your network in real-time, analyzing millions of packets per second.
                            Our AI engine identifies and neutralizes threats before they can execute.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-2xl font-mono font-bold text-white mb-1">0ms</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Dwell Time</div>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-2xl font-mono font-bold text-neon-cyan mb-1">99.9%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Accuracy</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="rounded-lg overflow-hidden border border-white/10 bg-[#050505] shadow-2xl font-mono text-sm relative">
                            {/* Terminal Header */}
                            <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="ml-4 text-xs text-gray-500">root@shade-hunter:~</div>
                            </div>

                            {/* Terminal Body */}
                            <div
                                ref={scrollRef}
                                className="p-4 h-[300px] overflow-y-auto font-mono text-xs md:text-sm space-y-2"
                            >
                                {visibleLogs.map((log, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex gap-3"
                                    >
                                        <span className="text-gray-600">[{new Date().toLocaleTimeString()}]</span>
                                        <span className={getLogColor(log.type)}>{log.msg}</span>
                                    </motion.div>
                                ))}
                                {visibleLogs.length < logs.length && (
                                    <div className="animate-pulse text-neon-cyan">_</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
