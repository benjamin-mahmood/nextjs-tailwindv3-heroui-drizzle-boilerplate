'use client';

import { Button } from '@heroui/react';

import { H1 } from '@/components/typography/H1';
import { H2 } from '@/components/typography/H2';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <H1>Hello world!</H1>
      <H2>Das ist ein H2 Titel</H2>
      <Button color='primary'>HeroUI Button</Button>
    </main>
  );
}
