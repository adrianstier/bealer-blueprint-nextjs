import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agency Growth & Retention System - Allstate Santa Barbara",
  description: "Strategic blueprint for scaling Allstate Santa Barbara & Goleta through AI-powered lead optimization, automated retention systems, and smart marketing automation.",
  openGraph: {
    title: "Agency Growth & Retention System",
    description: "Strategic blueprint for scaling Allstate Santa Barbara & Goleta",
    url: "https://bealer-blueprint-nextjs.vercel.app",
    siteName: "Agency Growth System",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Agency Growth & Retention System - Allstate Blueprint",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Growth & Retention System",
    description: "Strategic blueprint for scaling Allstate Santa Barbara & Goleta",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
