import React from 'react';
import { Container } from '../ui/Container';
import { Brain, Database, Zap, Bot, ScanEye, Lock } from 'lucide-react';

const techItems = [
    {
        icon: Brain,
        title: "AI-Enhanced Detection Engine",
        description: "ShadeHunter analyzes every event in real-time using hybrid AI models:",
        details: [
            "Statistical anomaly detection to catch deviations.",
            "Sequence-based ML models detect complex attack patterns.",
            "Contextual scoring combining system metadata and network flow.",
            "Lightweight inference optimizing latency."
        ],
        quote: "Goal: Detect even signature-less threats."
    },
    {
        icon: Database,
        title: "Multi-Layer Threat Intelligence Sync",
        description: "Automatically syncs and merges from multiple sources:",
        details: [
            "Signature feeds & IOC databases (IP, domain, hash)",
            "MITRE ATT&CK mappings",
            "Custom enterprise rules",
            "Engine automatically merges and normalizes data."
        ],
        quote: "Always updated: fresh threat intel → system reacts faster than attackers."
    },
    {
        icon: Zap,
        title: "Zero-Latency Event Pipeline",
        description: "High-speed streaming architecture:",
        details: [
            "Event collector captures raw log/network events in real-time",
            "Concurrent pipeline (Bun workers) for parallel processing",
            "Queue-less routing minimizes latency",
            "Adaptive batching optimized for high load"
        ],
        quote: "Result: Alerts appear instantly, no delay like traditional SIEMs."
    },
    {
        icon: Bot,
        title: "Automated Response Orchestrator",
        description: "Automated response system based on risk score:",
        details: [
            "Block connection / IP / Isolate endpoint",
            "Kill process / Trigger webhook (Slack, SIEM)",
            "Enforce Zero-Trust rules",
            "Policy engine: Rule-based, Behavior-based, AI-driven"
        ],
        quote: "Respond before the threat spreads."
    },
    {
        icon: ScanEye,
        title: "Stealth Monitoring Matrix (HUD Layer)",
        description: "Radar/HUD style display layer:",
        details: [
            "Real-time threat radar & Node activity heatmap",
            "Timeline anomaly spikes",
            "Live signature hit counter",
            "Risk propagation map"
        ],
        quote: "All updated in real-time → reacts like a 'defense console'."
    },
    {
        icon: Lock,
        title: "Security-First Architecture",
        description: "ShadeHunter is built with standards:",
        details: [
            "Zero Trust default",
            "Memory-safe modules",
            "Secure-by-design APIs",
            "Encrypted event transport (TLS 1.3)"
        ],
        quote: "Secure from the architectural layer, no patching later."
    }
];

export function Technology() {
    return (
        <section id="technology" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-indigo/5 blur-[60px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-cyan/5 blur-[60px] -z-10" />

            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-neon-cyan">Technology</span> Stack
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        What technology is ShadeHunter built with to react so fast?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techItems.map((item, index) => (
                        <div key={index} className="group relative p-6 bg-black/40 border border-white/10 hover:border-neon-cyan/50 transition-colors rounded-lg backdrop-blur-sm overflow-hidden">
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-neon-cyan transition-colors" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-neon-cyan transition-colors" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-neon-cyan transition-colors" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-neon-cyan transition-colors" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-6 text-neon-cyan group-hover:scale-110 transition-transform duration-300 border border-neon-cyan/20">
                                    <item.icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {item.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {item.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                                            <span className="text-neon-cyan mt-0.5 text-xs">▶</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-xs text-neon-indigo italic font-mono">
                                        {item.quote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
