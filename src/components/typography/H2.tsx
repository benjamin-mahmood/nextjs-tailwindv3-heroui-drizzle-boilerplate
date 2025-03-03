import { ReactNode } from 'react';

interface H1Props {
  children: ReactNode;
}

export function H2({ children }: H1Props) {
  return (
    <h2 className='mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
      {children}
    </h2>
  );
}
