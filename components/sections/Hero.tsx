'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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

                {/* HUD Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-square max-w-md mx-auto">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border border-neon-cyan/20 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-8 border border-neon-indigo/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-16 border border-neon-violet/20 rounded-full animate-[spin_20s_linear_infinite]" />

                        {/* Central Core */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-neon-cyan/5 rounded-full blur-2xl animate-pulse" />
                            <Shield className="w-16 h-16 text-neon-cyan relative z-10" />
                        </div>

                        {/* Orbiting Nodes */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3">
                            <Badge status="safe">SYSTEM SECURE</Badge>
                        </div>
                        <div className="absolute bottom-1/4 right-0 translate-x-4">
                            <Badge status="neutral">SCANNING...</Badge>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

