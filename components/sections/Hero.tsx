'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Shield, Terminal, AlertCircle, CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0e27_1px,transparent_1px),linear-gradient(to_bottom,#0a0e27_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Badge status="neutral" className="mb-6">v1.0.0 Stable Release</Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        Invisible Defense. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-indigo text-glow">
                            Instant Reaction.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                        AI-Enhanced Intrusion Detection & Real-Time Threat Prevention.
                        Detect anomalies before they become breaches.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" className="flex items-center gap-2">
                            <Terminal size={18} />
                            Start Hunting
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-2">
                            <Shield size={18} />
                            Live Demo
                        </Button>
                    </div>
                </motion.div>

                {/* HUD Visual - Advanced Radar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-square max-w-md mx-auto">
                        {/* Radar Grid Background */}
                        <div className="absolute inset-0 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm" />
                        <div className="absolute inset-[15%] rounded-full border border-white/5" />
                        <div className="absolute inset-[30%] rounded-full border border-white/5" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-[1px] bg-white/5" />
                            <div className="h-full w-[1px] bg-white/5 absolute" />
                        </div>

                        {/* Scanning Beam */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full"
                        >
                            <div className="w-1/2 h-1/2 bg-gradient-to-tl from-neon-cyan/20 to-transparent absolute top-0 left-0 rounded-tl-full origin-bottom-right transform translate-x-full translate-y-full" />
                        </motion.div>

                        {/* Central Core */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full animate-pulse" />
                                <div className="relative w-24 h-24 bg-black/40 border border-neon-cyan/30 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                                    <Shield className="w-10 h-10 text-neon-cyan" />
                                </div>
                            </div>
                        </div>

                        {/* Threat Nodes */}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="absolute top-[20%] right-[20%]"
                        >
                            <div className="relative group">
                                <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 border border-red-500/30 px-2 py-1 rounded text-[10px] text-red-400 font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                    MALWARE_SIG_detected
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                            className="absolute bottom-[30%] left-[25%]"
                        >
                            <div className="relative group">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 border border-yellow-500/30 px-2 py-1 rounded text-[10px] text-yellow-400 font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                    PORT_SCAN_active
                                </div>
                            </div>
                        </motion.div>

                        {/* Connection Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                            <motion.line
                                x1="50%" y1="50%" x2="80%" y2="20%"
                                stroke="#ef4444" strokeWidth="1"
                                strokeDasharray="4 4"
                                animate={{ strokeDashoffset: [0, -8] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.line
                                x1="50%" y1="50%" x2="25%" y2="70%"
                                stroke="#eab308" strokeWidth="1"
                                strokeDasharray="4 4"
                                animate={{ strokeDashoffset: [0, -8] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>

                        {/* Floating Status Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 left-0"
                        >
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                                <span className="text-xs font-mono text-neon-cyan">SYSTEM_ARMED</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 right-0"
                        >
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <AlertCircle size={12} className="text-red-400" />
                                <span className="text-xs font-mono text-red-400">2 THREATS BLOCKED</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

