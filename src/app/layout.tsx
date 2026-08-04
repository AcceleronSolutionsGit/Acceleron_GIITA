import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "GIITA – Gainwell Institute of Integrated Talent Advancement",
  description: "GIITA is an institute designed for talent advancement for the Gainwell Group to build a future-ready workforce through world-class training programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable}`}>
      <body className={`antialiased ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
