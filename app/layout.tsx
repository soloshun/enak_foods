import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Enak Foods — Crunchy Plantain Chips | Takoradi, Ghana",
  description:
    "More than just chips — it's a story in every crunch. Carefully made plantain chips from Takoradi, crafted with patience, quality, and love. Order now!",
  keywords: [
    "Enak Foods",
    "plantain chips",
    "Ghana snacks",
    "Takoradi",
    "crunchy plantain chips",
    "ripe plantain chips",
    "unripe plantain chips",
    "Ghanaian food",
  ],
  openGraph: {
    title: "Enak Foods — Crunchy Plantain Chips | Takoradi, Ghana",
    description:
      "Carefully made plantain chips from Takoradi, crafted with patience, quality, and love.",
    type: "website",
    locale: "en_GH",
    images: [{ url: "/p1.jpeg", width: 1200, height: 630, alt: "Enak Crunchy Plantain Chips" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enak Foods — Crunchy Plantain Chips",
    description: "More than just chips — it's a story in every crunch.",
    images: ["/p1.jpeg"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
