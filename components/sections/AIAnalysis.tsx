'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export function AIAnalysis() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-violet/8 rounded-full blur-[60px]" />

            <Container className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Autonomous <span className="text-neon-violet">Neural Defense</span>
                </h2>

                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Behavioral Analysis", desc: "Learns normal traffic patterns to spot anomalies." },
                        { title: "Zero-Day Detection", desc: "Identifies never-before-seen exploits via heuristics." },
                        { title: "Automated Triage", desc: "Prioritizes threats based on potential impact." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm"
                        >
                            <div className="w-12 h-1 bg-gradient-to-r from-neon-violet to-transparent mb-4" />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

