'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Activity, Brain, ShieldCheck, Zap, Globe, Scan } from 'lucide-react';

const features = [
    {
        icon: Activity,
        title: "Real-Time Intrusion Detection",
        description: "Detect attacks the moment they occur with high-speed streaming analytics.",
        details: [
            "Instant log + network flow analysis",
            "No-delay detection (zero buffering)",
            "Immediate anomaly alerting"
        ]
    },
    {
        icon: Brain,
        title: "AI-Driven Anomaly Detection",
        description: "Learns normal behavior to catch deviations and unknown threats.",
        details: [
            "Behavioral modeling & scoring",
            "Low-noise alerts (reduced false positives)",
            "Detects zero-day threats signatures miss"
        ]
    },
    {
        icon: ShieldCheck,
        title: "Hybrid Signature Engine",
        description: "Combines classic pattern matching with advanced AI for maximum precision.",
        details: [
            "Snort-like pattern matching",
            "IOC detection (IP/URL/Hash)",
            "MITRE ATT&CK framework mapping"
        ]
    },
    {
        icon: Zap,
        title: "Instant Automated Response",
        description: "Neutralize threats immediately without human intervention.",
        details: [
            "Block IPs & kill malicious processes",
            "Isolate compromised endpoints",
            "Trigger webhooks (Slack, SOAR, SIEM)"
        ]
    },
    {
        icon: Globe,
        title: "Threat Intelligence Sync",
        description: "Continuously updated global threat data for proactive immunity.",
        details: [
            "Real-time IOC feeds & CVE signatures",
            "Malware pattern synchronization",
            "Enterprise-custom threat intelligence"
        ]
    },
    {
        icon: Scan,
        title: "Stealth Monitoring HUD",
        description: "SOC-grade visualization interface for total situational awareness.",
        details: [
            "Live threat radar animation",
            "Activity heatmaps & timelines",
            "Real-time monitoring widgets"
        ]
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 relative">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        ShadeHunter <span className="text-neon-cyan">Core Features</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Invisible Defense. Instant Reaction.
                        See what ShadeHunter can do for your infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="group hover:border-neon-cyan/50 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/20 group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="w-6 h-6 text-neon-cyan" />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                                {feature.description}
                            </p>

                            <ul className="space-y-2 border-t border-white/5 pt-4">
                                {feature.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                                        <span className="text-neon-cyan mt-0.5">›</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}

