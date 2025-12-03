import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "ShadeHunter",
    description: "Invisible Defense. Instant Reaction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-deep-bg text-white selection:bg-neon-cyan/30 selection:text-neon-cyan`}>
                {children}
            </body>
        </html>
    );
}
