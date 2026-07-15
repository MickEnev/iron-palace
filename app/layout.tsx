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
      <body className="flex min-h-full flex-col">
        <div
          className="fixed inset-x-0 top-0 z-60 flex min-h-9 items-center justify-center bg-(--primary) px-4 py-2 text-center text-xs font-bold text-black sm:text-sm"
          role="note"
        >
          Demo only: membership, tour, and contact requests are not sent or
          processed.
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
