import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlogFlow - Your Modern Blogging Platform",
  description:
    "Create, share, and discover amazing content with BlogFlow. The modern platform for writers and readers.",
  keywords: ["blog", "writing", "content", "publishing", "platform"],
  authors: [{ name: "BlogFlow Team" }],
  creator: "BlogFlow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogflow.com",
    title: "BlogFlow - Your Modern Blogging Platform",
    description: "Create, share, and discover amazing content with BlogFlow.",
    siteName: "BlogFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogFlow - Your Modern Blogging Platform",
    description: "Create, share, and discover amazing content with BlogFlow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#18191b]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
