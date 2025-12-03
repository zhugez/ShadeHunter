import type { Metadata } from 'next';
import './globals.css';

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
