import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aftsoftandlimited.com",
  ),
  applicationName: "AFT SOFT AND LIMITED",
  title: {
    default: "AFT SOFT AND LIMITED | Software, SaaS & IT Solutions",
    template: "%s | AFT SOFT AND LIMITED",
  },
  description:
    "AFT SOFT AND LIMITED builds SaaS products, websites, mobile apps, custom software, UI/UX design, digital marketing, and IT consulting solutions.",
  keywords: [
    "AFT SOFT AND LIMITED",
    "software company",
    "SaaS products",
    "web development",
    "mobile app development",
    "custom software",
    "HRM software",
    "e-commerce software",
    "Bangladesh software company",
  ],
  authors: [{ name: "AFT SOFT AND LIMITED" }],
  creator: "AFT SOFT AND LIMITED",
  publisher: "AFT SOFT AND LIMITED",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AFT SOFT AND LIMITED",
    title: "AFT SOFT AND LIMITED | Software, SaaS & IT Solutions",
    description:
      "Premium software, SaaS products, web development, mobile apps, and IT solutions for growing businesses.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "AFT SOFT AND LIMITED software and IT solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFT SOFT AND LIMITED | Software, SaaS & IT Solutions",
    description:
      "Premium software, SaaS products, web development, mobile apps, and IT solutions for growing businesses.",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body
        className={`${manrope.className} overflow-x-hidden bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
