'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield,
    Activity,
    Globe,
    Lock,
    AlertTriangle,
    CheckCircle,
    Terminal,
    Cpu,
    Wifi,
    Search
} from 'lucide-react';

type LogType = 'info' | 'success' | 'warn' | 'critical' | 'action' | 'analysis';

interface Log {
    id: string;
    type: LogType;
    msg: string;
    timestamp: string;
}

const initialLogs: Omit<Log, 'id' | 'timestamp'>[] = [
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
    const [visibleLogs, setVisibleLogs] = useState<Log[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeThreats, setActiveThreats] = useState(0);
    const [packetsAnalyzed, setPacketsAnalyzed] = useState(843291);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let currentIndex = 0;

        const addLog = () => {
            if (currentIndex < initialLogs.length) {
                const newLog: Log = {
                    ...initialLogs[currentIndex],
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: new Date().toLocaleTimeString('en-US', { hour12: false })
                };

                setVisibleLogs(prev => [...prev, newLog]);

                if (newLog.type === 'critical') setActiveThreats(prev => prev + 1);
                if (newLog.type === 'success' && newLog.msg.includes('neutralized')) setActiveThreats(prev => Math.max(0, prev - 1));

                currentIndex++;
                timeoutId = setTimeout(addLog, 800 + Math.random() * 500);
            } else {
                timeoutId = setTimeout(() => {
                    setVisibleLogs([]);
                    currentIndex = 0;
                    setActiveThreats(0);
                    timeoutId = setTimeout(addLog, 800);
                }, 5000);
            }
        };

        timeoutId = setTimeout(addLog, 800);

        // Packet counter simulation
        const intervalId = setInterval(() => {
            setPacketsAnalyzed(prev => prev + Math.floor(Math.random() * 50));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleLogs]);

    const getLogIcon = (type: LogType) => {
        switch (type) {
            case 'info': return <Terminal size={14} className="text-gray-500" />;
            case 'success': return <CheckCircle size={14} className="text-status-safe" />;
            case 'warn': return <AlertTriangle size={14} className="text-yellow-500" />;
            case 'critical': return <AlertTriangle size={14} className="text-status-critical" />;
            case 'action': return <Shield size={14} className="text-neon-cyan" />;
            case 'analysis': return <Search size={14} className="text-neon-violet" />;
        }
    };

    const getLogColor = (type: LogType): string => {
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
        <section className="py-24 bg-black/50 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <Badge status="neutral" className="mb-4">Live Demonstration</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Command & Control <br />
                                <span className="text-neon-cyan">For Modern Defense</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Experience the power of ShadeHunter's real-time threat neutralization engine.
                                Watch as it identifies, analyzes, and blocks malicious traffic instantly.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan group-hover:scale-110 transition-transform">
                                        <Activity size={20} />
                                    </div>
                                    <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">Latency</span>
                                </div>
                                <div className="text-2xl font-mono font-bold text-white">12<span className="text-sm text-gray-500 ml-1">ms</span></div>
                            </div>
                            <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-neon-violet/10 text-neon-violet group-hover:scale-110 transition-transform">
                                        <Shield size={20} />
                                    </div>
                                    <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">Protection</span>
                                </div>
                                <div className="text-2xl font-mono font-bold text-white">99.9<span className="text-sm text-gray-500 ml-1">%</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Console */}
                    <div className="flex-1 w-full max-w-2xl">
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl font-mono text-sm relative group">
                            {/* Header Bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/30" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/30" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/30" />
                                    </div>
                                    <div className="text-xs text-gray-500 flex items-center gap-2">
                                        <Lock size={12} />
                                        root@shade-hunter:~
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-neon-cyan/10 border border-neon-cyan/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                                        <span className="text-[10px] text-neon-cyan font-bold">LIVE</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Console Area */}
                            <div className="grid grid-cols-1 md:grid-cols-3 h-[400px]">
                                {/* Logs Section */}
                                <div className="md:col-span-2 border-r border-white/5 flex flex-col">
                                    <div
                                        ref={scrollRef}
                                        className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                                    >
                                        <AnimatePresence mode='popLayout'>
                                            {visibleLogs.map((log) => (
                                                <motion.div
                                                    key={log.id}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex gap-3 items-start group/log hover:bg-white/5 p-1.5 rounded transition-colors"
                                                >
                                                    <span className="text-gray-600 text-[10px] mt-0.5 min-w-[50px]">{log.timestamp}</span>
                                                    <div className="mt-0.5">{getLogIcon(log.type)}</div>
                                                    <span className={`text-xs md:text-sm ${getLogColor(log.type)} break-words flex-1`}>
                                                        {log.msg}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                        {visibleLogs.length < initialLogs.length && (
                                            <div className="animate-pulse text-neon-cyan pl-[74px]">_</div>
                                        )}
                                    </div>
                                </div>

                                {/* Sidebar Stats */}
                                <div className="hidden md:flex flex-col bg-white/[0.02]">
                                    <div className="p-4 border-b border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">System Load</div>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between text-xs mb-1 text-gray-400">
                                                    <span className="flex items-center gap-1"><Cpu size={10} /> CPU</span>
                                                    <span>12%</span>
                                                </div>
                                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-neon-cyan w-[12%] rounded-full" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-xs mb-1 text-gray-400">
                                                    <span className="flex items-center gap-1"><Activity size={10} /> MEM</span>
                                                    <span>45%</span>
                                                </div>
                                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-neon-violet w-[45%] rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border-b border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Network</div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Wifi size={14} className="text-neon-cyan" />
                                            <span className="text-lg font-bold text-white">1.2<span className="text-xs text-gray-500 ml-1">Gbps</span></span>
                                        </div>
                                        <div className="text-[10px] text-gray-500">Inbound Traffic</div>
                                    </div>

                                    <div className="p-4 flex-1">
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Packets Analyzed</div>
                                        <div className="text-xl font-bold text-white font-mono">
                                            {packetsAnalyzed.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Status */}
                            <div className="px-4 py-2 bg-white/5 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${activeThreats > 0 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                                    {activeThreats > 0 ? `${activeThreats} THREATS DETECTED` : 'SYSTEM SECURE'}
                                </div>
                                <div>SH-CORE: ONLINE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
