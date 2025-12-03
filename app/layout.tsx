import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'ShadeHunter - Next-Gen IDS/IPS Platform',
  description: 'AI-Enhanced Intrusion Detection & Real-Time Threat Prevention. Detect anomalies before they become breaches.',
  icons: {
    icon: '/logo.svg',
  },
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
