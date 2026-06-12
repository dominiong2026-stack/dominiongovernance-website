import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dominion Group',
  description: 'Independent business and AI governance reviews for stronger systems, clearer governance, and measurable performance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
