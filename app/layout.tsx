import type { Metadata } from 'next';

import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Roboto } from 'next/font/google';
import 'modern-normalize';
import './globals.css';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'A simple and efficient app for creating and organizing your notes.',
  openGraph: {
    title: 'NoteHub',
    description: 'A simple and efficient app for creating and organizing your notes.',
    url: `https://notehub.com`,
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub - A simple and efficient app for creating and organizing your notes.',
      },
    ],
  },
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: string;
  modal: any;
}>) {
  return (
    <html lang=""en"">
      <body className={roboto.variable}>
        <TanStackProvider>
          <AuthProvider>

            {children}
            {modal}

          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
