import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul's Blog - Personal Tech Blog",
  description:
    "A modern, responsive personal tech blog built with Next.js, TypeScript, and Tailwind CSS. Share technical insights, coding tutorials, and creative content.",
  keywords: [
    "tech blog",
    "programming",
    "software development",
    "Next.js",
    "TypeScript",
    "React",
    "web development",
    "coding tutorials",
    "personal blog",
  ],
  authors: [{ name: "Rahul Paul" }],
  creator: "Rahul Paul",
  publisher: "Paul's Blog",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"), // Update this with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Update this with your actual domain
    title: "Paul's Blog - Personal Tech Blog",
    description:
      "A modern, responsive personal tech blog built with Next.js, TypeScript, and Tailwind CSS. Share technical insights, coding tutorials, and creative content.",
    siteName: "Paul's Blog",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Paul's Blog - Personal Tech Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul's Blog - Personal Tech Blog",
    description:
      "A modern, responsive personal tech blog built with Next.js, TypeScript, and Tailwind CSS. Share technical insights, coding tutorials, and creative content.",
    images: ["/profile.png"],
    creator: "@Mr-Rahul-Paul", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/profile.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/profile.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/profile.png" />
        <link rel="apple-touch-icon" href="/profile.png" />
        <meta name="msapplication-TileImage" content="/profile.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
