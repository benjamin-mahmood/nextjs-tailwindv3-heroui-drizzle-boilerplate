'use client';

import { Button } from '@heroui/react';

import { Blockquote } from '@/components/typography/Blockquote';
import { H1 } from '@/components/typography/H1';
import { H2 } from '@/components/typography/H2';
import { H3 } from '@/components/typography/H3';
import { H4 } from '@/components/typography/H4';
import { P } from '@/components/typography/P';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <H1>Hello world!</H1>
      <P>Das ist ein Paragraph p HTML Element</P>
      <H2>Das ist ein H2 Titel</H2>
      <P>Das ist ein Paragraph p HTML Element</P>
      <H3>Das ist ein H3 Titel</H3>
      <P>Das ist ein Paragraph p HTML Element</P>
      <H4>Das ist ein H4 Titel</H4>
      <P>Das ist ein Paragraph p HTML Element</P>
      <Blockquote>
        Das ist ein tolles Zitat, das dich ganz bestimmt sehr motiviert...
      </Blockquote>
      <Button color='primary'>HeroUI Button</Button>
    </main>
  );
}
