import { ReactNode } from 'react';

interface PProps {
  children: ReactNode;
}

export function P({ children }: PProps) {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>;
}
