import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trials Next App',
  description: 'Minimal Next.js 14 + TS + Tailwind app for deployment pipeline testing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}


