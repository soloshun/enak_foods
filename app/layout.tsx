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

const siteUrl = "https://enakfoods.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enak Foods — Crunchy Plantain Chips | Takoradi, Ghana",
    template: "%s | Enak Foods Ghana",
  },
  description:
    "Premium crunchy plantain chips made in Takoradi, Ghana. 100% natural — just plantain, salt & vegetable oil. No preservatives, no artificial colors. FDA approved (FDA/Rt 24-167). Order via WhatsApp.",
  keywords: [
    "Enak Foods",
    "Enak Foods Ghana",
    "plantain chips",
    "plantain chips Ghana",
    "crunchy plantain chips",
    "ripe plantain chips",
    "unripe plantain chips",
    "Ghana snacks",
    "Takoradi",
    "Ghanaian food",
    "African snacks",
    "natural chips",
    "no preservatives chips",
    "FDA approved snacks Ghana",
    "buy plantain chips online",
    "plantain chips Takoradi",
    "healthy snacks Ghana",
  ],
  authors: [{ name: "Enak Foods", url: siteUrl }],
  creator: "Enak Foods Ghana",
  publisher: "Enak Foods",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Enak Foods — Crunchy Plantain Chips | Takoradi, Ghana",
    description:
      "Premium crunchy plantain chips, 100% natural. Made in Takoradi with just plantain, salt & vegetable oil. FDA approved. Order now!",
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: "Enak Foods",
    images: [
      {
        url: "/p3_2.png",
        width: 1216,
        height: 873,
        alt: "Enak Crunchy Plantain Chips — Ripe and Unripe jar display, made in Ghana",
        type: "image/png",
      },
      {
        url: "/p1.jpeg",
        width: 1200,
        height: 630,
        alt: "Enak Crunchy Plantain Chips — Ripe and Unripe varieties",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enak Foods — Crunchy Plantain Chips",
    description:
      "100% natural plantain chips from Takoradi, Ghana. No preservatives, no artificial colors. FDA approved. Order via WhatsApp!",
    images: [
      {
        url: "/p3_2.png",
        width: 1216,
        height: 873,
        alt: "Enak Crunchy Plantain Chips — Ripe and Unripe jars",
      },
    ],
    creator: "@enakfoods",
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
  category: "Food & Beverage",
};

function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Enak Foods",
    alternateName: "Enak Foods Ghana",
    description:
      "Premium crunchy plantain chips made in Takoradi, Ghana. 100% natural ingredients — plantain, salt, and vegetable oil. FDA approved.",
    url: siteUrl,
    logo: `${siteUrl}/enak_logo_2.jpeg`,
    image: `${siteUrl}/p3_2.png`,
    telephone: ["+233558283738", "+233247861005"],
    email: "enakfoods23@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Takoradi",
      addressRegion: "Western Region",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.8918,
      longitude: -1.755,
    },
    sameAs: [
      "https://www.instagram.com/enakfoods",
      "https://www.facebook.com/enakfoods",
      "https://www.tiktok.com/@enakfoods",
    ],
    priceRange: "$$",
    servesCuisine: "Ghanaian",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Enak Crunchy Plantain Chips",
    description:
      "Freshly made crunchy plantain chips from Takoradi, Ghana. Available in Ripe and Unripe flavors. 100% natural — plantain, salt, and vegetable oil.",
    image: [
      `${siteUrl}/p3_2.png`,
      `${siteUrl}/p1.jpeg`,
      `${siteUrl}/p2.jpeg`,
      `${siteUrl}/p3.jpeg`,
    ],
    brand: {
      "@type": "Brand",
      name: "Enak Foods",
      logo: `${siteUrl}/enak_logo_2.jpeg`,
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "GHS",
      offerCount: 4,
    },
    category: "Snacks",
    countryOfOrigin: {
      "@type": "Country",
      name: "Ghana",
    },
    material: "Plantain, Salt, Vegetable Oil",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "FDA Registration",
        value: "FDA/Rt 24-167",
      },
      {
        "@type": "PropertyValue",
        name: "Preservatives",
        value: "None",
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

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
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
