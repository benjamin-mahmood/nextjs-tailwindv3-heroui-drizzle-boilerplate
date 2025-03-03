'use client';

import dynamic from 'next/dynamic';
import { HeroUIProvider } from '@heroui/react';

// Dynamically import `ThemeProvider` with `ssr: false`
const NextThemesProvider = dynamic(
  () => import('next-themes').then((mod) => mod.ThemeProvider),
  { ssr: false } // Ensures it only renders on the client
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider locale='de-DE'>
      <NextThemesProvider
        attribute='class'
        defaultTheme='system'
      >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
