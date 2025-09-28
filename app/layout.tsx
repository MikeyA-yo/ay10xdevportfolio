import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwatola Ayomide | Full-Stack & Blockchain Developer",
  description:
    "Oluwatola Ayomide is a creative full-stack and blockchain developer building scalable web apps, smart contracts, and cloud-powered solutions that solve real-world problems.",
  keywords: [
    "Oluwatola Ayomide",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Development",
    "Smart Contract Development",
    "Blockchain Development",
    "Cloud Computing",
    "Decentralized Applications",
    "Creative Developer",
  ],
  authors: [{ name: "Oluwatola Ayomide" }],
  creator: "Oluwatola Ayomide",
  publisher: "Oluwatola Ayomide",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ay10xdev.vercel.app",
    siteName: "Oluwatola Ayomide Portfolio",
    title: "Oluwatola Ayomide | Full-Stack & Blockchain Developer",
    description:
      "Explore the portfolio of Oluwatola Ayomide, a software engineer specializing in full-stack web development, blockchain, and cloud computing.",
    images: [
      {
        url: "/og2.svg", 
        width: 1200,
        height: 630,
        alt: "Oluwatola Ayomide - Full-Stack & Blockchain Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwatola Ayomide | Full-Stack & Blockchain Developer",
    description:
      "Creative developer building modern apps, smart contracts, and scalable cloud solutions.",
    creator: "@OluwatolaAyomi4", 
    images: ["/og2.svg"],
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
  themeColor: "#0f172a", // dark professional tone, tweak if you want
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
