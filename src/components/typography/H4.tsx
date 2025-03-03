import { ReactNode } from 'react';

interface H4Props {
  children: ReactNode;
}

export function H4({ children }: H4Props) {
  return (
    <h4 className='mt-6 scroll-m-20 text-xl font-semibold tracking-tight'>
      {children}
    </h4>
  );
}
