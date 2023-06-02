import './styles/globals.css';
import { Noto_Sans } from 'next/font/google';
import React, {JSX} from 'react';

const notoSans = Noto_Sans({ weight: ['300', '400', '500', '700'], preload: false, subsets: ['latin'] });

export const metadata = {
  title: 'Top App',
  description: 'Learning project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
