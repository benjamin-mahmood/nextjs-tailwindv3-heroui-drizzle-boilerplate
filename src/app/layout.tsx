import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import { Providers } from './providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'NextJS Boilerplate',
  description: 'NextJS Boilerplate',
};

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--font-outfit',
  // weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='DE-de'
      className={`${outfit.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
