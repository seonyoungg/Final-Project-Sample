import { ReactNode } from 'react';

export default function BasicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>헤더</header>
      <main>{children}</main>
      <footer>푸터</footer>
    </div>
  );
}
