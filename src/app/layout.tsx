
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://spidercraft.gdgoc.one'),
  title: `Spider Craft`,
  description: 'Fight. Solve. Win.',
  openGraph: {
    title: `Spider Craft`,
    description: 'Fight. Solve. Win.',
    url: 'https://spidercraft.gdgoc.one',
    images: [
      {
        url: '../public/gdglogos.png',
        width: 1200,
        height: 630,
        alt: 'GDG RBU | A community of developers',
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ColorSchemeScript />
      </head>
      <body
        className={`antialiased `}
        suppressHydrationWarning
      >
        <MantineProvider>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
