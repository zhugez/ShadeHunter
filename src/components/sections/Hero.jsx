import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Shield, Terminal } from 'lucide-react';

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

                {/* Advanced Stealth Radar Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-square max-w-lg mx-auto">
                        {/* Hexagonal Grid Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />

                        {/* Radar Scanner */}
                        <div className="absolute inset-0 rounded-full border border-neon-cyan/10 overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] bg-gradient-to-br from-neon-cyan/20 to-transparent origin-top-left animate-[spin_4s_linear_infinite]" />
                        </div>

                        {/* Concentric Hexagons (simulated with circles for smooth animation, could be SVGs) */}
                        <div className="absolute inset-0 border border-neon-cyan/20 rounded-full" />
                        <div className="absolute inset-12 border border-neon-cyan/10 rounded-full border-dashed" />
                        <div className="absolute inset-24 border border-neon-cyan/5 rounded-full" />

                        {/* Central Core */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-neon-cyan blur-xl opacity-20 animate-pulse" />
                                <div className="w-20 h-20 bg-black/50 backdrop-blur-md border border-neon-cyan/50 rounded-full flex items-center justify-center relative z-10">
                                    <Shield className="w-10 h-10 text-neon-cyan" />
                                </div>
                                {/* Spinning Ring */}
                                <div className="absolute -inset-2 border-2 border-neon-cyan/30 rounded-full border-t-transparent animate-[spin_3s_linear_infinite]" />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        {/* Threat Neutralized */}
                        <motion.div
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1.2] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            className="absolute top-1/4 right-1/4"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                                <div className="px-2 py-1 bg-red-500/10 border border-red-500/30 rounded text-[10px] text-red-400 font-mono">
                                    INTRUSION BLOCKED
                                </div>
                            </div>
                        </motion.div>

                        {/* System Scan */}
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute bottom-1/3 left-10"
                        >
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                                    <span className="text-xs text-neon-cyan font-mono">PACKET_ANALYSIS</span>
                                </div>
                                <div className="w-24 h-1 bg-neon-cyan/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-neon-cyan w-2/3 animate-[shimmer_2s_infinite]" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Active Protection */}
                        <div className="absolute top-10 left-1/2 -translate-x-1/2">
                            <Badge status="safe" className="animate-pulse">
                                SHIELD ACTIVE
                            </Badge>
                        </div>

                        {/* Data Stream Decoration */}
                        <div className="absolute bottom-10 right-10 text-[10px] font-mono text-neon-cyan/40 leading-none">
                            <div>0x4F 0x9A 0x1B</div>
                            <div>0x2C 0x8D 0x4E</div>
                            <div>0x1A 0x5F 0x9C</div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
