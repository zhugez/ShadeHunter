'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield,
    Activity,
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

const LogIcon = ({ type }: { type: LogType }) => {
    const iconMap = {
        info: <Terminal size={14} className="text-gray-500" />,
        success: <CheckCircle size={14} className="text-status-safe" />,
        warn: <AlertTriangle size={14} className="text-status-warn" />,
        critical: <AlertTriangle size={14} className="text-status-critical" />,
        action: <Shield size={14} className="text-neon-cyan" />,
        analysis: <Search size={14} className="text-neon-violet" />,
    };
    return iconMap[type];
};

const getLogColor = (type: LogType): string => {
    const colorMap: Record<LogType, string> = {
        info: 'text-gray-400',
        success: 'text-status-safe text-glow-green',
        warn: 'text-status-warn',
        critical: 'text-status-critical font-semibold text-glow-red',
        action: 'text-neon-cyan text-glow-cyan',
        analysis: 'text-neon-violet',
    };
    return colorMap[type];
};

const LogEntry = ({ log }: { log: Log }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex gap-2.5 items-start group/log hover:bg-white/[0.03] p-1.5 rounded transition-colors cursor-default"
    >
        <span className="text-gray-600 text-[11px] mt-0.5 min-w-[55px] font-terminal tabular-nums">
            {log.timestamp}
        </span>
        <div className="mt-0.5 opacity-80 group-hover/log:opacity-100 transition-opacity">
            <LogIcon type={log.type} />
        </div>
        <span className={`text-[13px] font-terminal ${getLogColor(log.type)} break-words flex-1 min-w-0 leading-relaxed`}>
            {log.msg}
        </span>
    </motion.div>
);

const StatCard = ({ 
    icon: Icon, 
    label, 
    value, 
    unit, 
    color 
}: { 
    icon: React.ElementType; 
    label: string; 
    value: string | number; 
    unit: string;
    color: string;
}) => (
    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/10 transition-all duration-200 cursor-pointer group">
        <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${color} group-hover:scale-105 transition-transform duration-200`}>
                <Icon size={20} />
            </div>
            <span className="text-[10px] text-gray-500 font-hud uppercase tracking-widest">{label}</span>
        </div>
        <div className="text-2xl font-hud font-bold text-white">
            {value}<span className="text-sm text-gray-500 ml-1">{unit}</span>
        </div>
    </div>
);

const ProgressBar = ({ 
    label, 
    value, 
    icon: Icon, 
    color 
}: { 
    label: string; 
    value: number; 
    icon: React.ElementType;
    color: string;
}) => (
    <div>
        <div className="flex justify-between text-xs mb-1.5 text-gray-400">
            <span className="flex items-center gap-1.5 font-hud">
                <Icon size={10} className="opacity-70" />
                {label}
            </span>
            <span className="font-terminal tabular-nums">{value}%</span>
        </div>
        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`h-full ${color} rounded-full`}
                style={{ boxShadow: `0 0 10px ${color === 'bg-neon-cyan' ? 'rgba(0,229,255,0.5)' : 'rgba(138,79,255,0.5)'}` }}
            />
        </div>
    </div>
);

export function DemoConsole() {
    const [visibleLogs, setVisibleLogs] = useState<Log[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeThreats, setActiveThreats] = useState(0);
    const [packetsAnalyzed, setPacketsAnalyzed] = useState(843291);
    const [cpuLoad] = useState(12);
    const [memLoad] = useState(45);

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
                if (newLog.type === 'success' && newLog.msg.includes('neutralized')) {
                    setActiveThreats(prev => Math.max(0, prev - 1));
                }

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

    const formattedPackets = useMemo(() => 
        packetsAnalyzed.toLocaleString(), 
        [packetsAnalyzed]
    );

    const statusIndicator = useMemo(() => ({
        color: activeThreats > 0 ? 'bg-status-critical' : 'bg-status-safe',
        pulse: activeThreats > 0,
        text: activeThreats > 0 ? `${activeThreats} ACTIVE THREAT${activeThreats > 1 ? 'S' : ''}` : 'SYSTEM SECURE'
    }), [activeThreats]);

    return (
        <section className="py-24 bg-black/50 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-matrix-green/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <div>
                            <Badge status="neutral" className="mb-4">Live Demonstration</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Command & Control <br />
                                <span className="text-neon-cyan text-glow-cyan">For Modern Defense</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Experience the power of ShadeHunter&apos;s real-time threat neutralization engine.
                                Watch as it identifies, analyzes, and blocks malicious traffic instantly.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <StatCard
                                icon={Activity}
                                label="Latency"
                                value="12"
                                unit="ms"
                                color="bg-neon-cyan/10 text-neon-cyan"
                            />
                            <StatCard
                                icon={Shield}
                                label="Protection"
                                value="99.9"
                                unit="%"
                                color="bg-neon-violet/10 text-neon-violet"
                            />
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-2xl">
                        <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-terminal-bg shadow-2xl font-terminal text-sm relative crt-curve terminal-glow">
                            <div className="scanline-overlay opacity-30" />
                            
                            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.05] relative z-20">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors cursor-pointer" />
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors cursor-pointer" />
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors cursor-pointer" />
                                    </div>
                                    <div className="text-xs text-gray-500 flex items-center gap-2 font-hud">
                                        <Lock size={11} className="opacity-60" />
                                        <span>root@shade-hunter:~</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-status-safe/10 border border-status-safe/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-status-safe animate-pulse" />
                                        <span className="text-[10px] text-status-safe font-hud font-bold tracking-wider">LIVE</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col h-[450px] relative z-20">
                                <div className="grid grid-cols-1 md:grid-cols-3 flex-1 min-h-0 overflow-hidden">
                                    <div className="md:col-span-2 border-r border-white/[0.04] flex flex-col min-h-0">
                                        <div
                                            ref={scrollRef}
                                            className="flex-1 p-3 overflow-y-auto space-y-0.5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent min-h-0"
                                        >
                                            <AnimatePresence mode='popLayout'>
                                                {visibleLogs.map((log) => (
                                                    <LogEntry key={log.id} log={log} />
                                                ))}
                                            </AnimatePresence>
                                            {visibleLogs.length < initialLogs.length && (
                                                <div className="text-matrix-green pl-[70px] text-lg cursor-blink">_</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="hidden md:flex flex-col bg-white/[0.015] min-h-0 overflow-hidden">
                                        <div className="p-4 border-b border-white/[0.04]">
                                            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-hud">System Load</div>
                                            <div className="space-y-4">
                                                <ProgressBar 
                                                    label="CPU" 
                                                    value={cpuLoad} 
                                                    icon={Cpu} 
                                                    color="bg-neon-cyan" 
                                                />
                                                <ProgressBar 
                                                    label="MEM" 
                                                    value={memLoad} 
                                                    icon={Activity} 
                                                    color="bg-neon-violet" 
                                                />
                                            </div>
                                        </div>

                                        <div className="p-4 border-b border-white/[0.04]">
                                            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-hud">Network</div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Wifi size={14} className="text-neon-cyan" />
                                                <span className="text-lg font-bold text-white font-hud">
                                                    1.2<span className="text-xs text-gray-500 ml-1">Gbps</span>
                                                </span>
                                            </div>
                                            <div className="text-[10px] text-gray-500 font-hud">Inbound Traffic</div>
                                        </div>

                                        <div className="p-4 flex-1">
                                            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-hud">Packets Analyzed</div>
                                            <div className="text-xl font-bold text-white font-terminal tabular-nums text-glow-green">
                                                {formattedPackets}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.04] flex items-center justify-between text-[10px] font-hud relative z-20 flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${statusIndicator.color} ${statusIndicator.pulse ? 'animate-pulse' : ''}`} />
                                        <span className={statusIndicator.pulse ? 'text-status-critical' : 'text-gray-500'}>
                                            {statusIndicator.text}
                                        </span>
                                    </div>
                                    <div className="text-gray-600 tracking-wider">SH-CORE: ONLINE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
