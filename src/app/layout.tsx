import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glidzr - Premium Home Organization Solutions | Shop on Amazon.ae",
  description: "Transform your home with Glidzr's premium organization products. From kitchen storage to makeup organizers, discover elegant solutions that bring order to your space. Shop our curated collection on Amazon.ae.",
  keywords: "home organization, storage solutions, kitchen organizers, makeup storage, drawer dividers, closet organization, Amazon.ae, UAE home products",
  authors: [{ name: "Glidzr" }],
  creator: "Glidzr",
  publisher: "Glidzr",
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icon.svg", color: "#3b82f6" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Glidzr",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://glidzr.com",
    title: "Glidzr - Premium Home Organization Solutions",
    description: "Transform your home with Glidzr's premium organization products. Shop our curated collection on Amazon.ae.",
    siteName: "Glidzr",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Glidzr - Premium Home Organization Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glidzr - Premium Home Organization Solutions",
    description: "Transform your home with Glidzr's premium organization products. Shop our curated collection on Amazon.ae.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://glidzr.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
