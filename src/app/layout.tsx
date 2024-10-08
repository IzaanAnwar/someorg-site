import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'SomeOrg',
  description:
    'SomeOrg is a premier cybersecurity firm offering a comprehensive range of security services for businesses of all sizes. Our mission is to fortify your digital infrastructure against modern cyber threats while providing cost-effective, flexible, and high-quality solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        {children}
        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
