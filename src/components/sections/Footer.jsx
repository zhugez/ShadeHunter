import React from 'react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-8">
            <Container>
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-gray-500 max-w-sm">
                            Next-generation intrusion detection system powered by advanced AI.
                            Protecting your infrastructure in the shadows.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors">Features</li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors">Integrations</li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors">Documentation</li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors">Pricing</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors">About</li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors">Blog</li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-600 text-sm">
                        © 2025 ShadeHunter Inc. All rights reserved.
                    </div>
                    <div className="flex gap-4">
                        <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            </Container>
        </footer>
    );
}
