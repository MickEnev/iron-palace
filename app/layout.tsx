import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Iron Palace | Luxury Gym Concept",
    template: "%s | Iron Palace",
  },
  description:
    "A fictional premium gym concept featuring memberships, day passes, coaches, events, tours, and training facilities.",
  metadataBase: new URL("https://iron-palace-henna.vercel.app/"),
  openGraph: {
    title: "Iron Palace",
    description: "A fictional premium gym concept website.",
    url: "https://iron-palace-henna.vercel.app/",
    siteName: "Iron Palace",
    images: ["/opengraph-image.png"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
