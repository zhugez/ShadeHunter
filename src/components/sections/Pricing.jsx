import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Check, RefreshCw } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        description: "Perfect for small teams & labs.",
        features: [
            "Essential detection",
            "Basic automation"
        ],
        status: "Updating",
        priceText: "Pricing will be revealed soon."
    },
    {
        name: "Pro",
        description: "For growing teams, SOC pipelines & continuous monitoring.",
        features: [
            "Full AI engine",
            "Advanced response"
        ],
        status: "Updating",
        priceText: "Pricing will be announced in the next release.",
        highlight: true
    },
    {
        name: "Enterprise",
        description: "Designed for large-scale critical infrastructure.",
        features: [
            "Custom integrations",
            "SLAs & dedicated support"
        ],
        status: "Updating",
        priceText: "Enterprise pricing will be provided upon request."
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Flexible plans for <span className="text-neon-cyan">every scale</span>.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Pricing is currently being finalized. We’re calibrating the tiers to match real-world deployment needs and enterprise security workflows.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col h-full ${plan.highlight ? 'border-neon-cyan/40 bg-neon-cyan/5' : 'border-white/10'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
                            )}

                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                    <Badge status="neutral" className="animate-pulse">
                                        <RefreshCw size={12} className="mr-1 inline-block animate-spin" />
                                        {plan.status}
                                    </Badge>
                                </div>
                                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="flex-grow mb-8">
                                <div className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                                <Check size={12} className="text-neon-cyan" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 text-center">
                                <p className="text-neon-cyan font-mono text-sm tracking-wide">
                                    [{plan.priceText}]
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm max-w-xl mx-auto border border-white/5 rounded-full px-6 py-3 inline-block bg-black/40 backdrop-blur-sm">
                        <span className="text-neon-cyan mr-2">ℹ</span>
                        The pricing model is being optimized to ensure fairness, transparency, and scalability across all deployment sizes. Stay tuned for the official announcement.
                    </p>
                </div>
            </Container>
        </section>
    );
}
