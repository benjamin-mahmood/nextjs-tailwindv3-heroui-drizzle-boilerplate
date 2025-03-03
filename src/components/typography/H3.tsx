import { ReactNode } from 'react';

interface H3Props {
  children: ReactNode;
}

export function H3({ children }: H3Props) {
  return (
    <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>
      {children}
    </h3>
  );
}
