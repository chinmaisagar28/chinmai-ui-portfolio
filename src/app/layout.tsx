import type { Metadata, Viewport } from "next";
import { Syne, Instrument_Serif, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Chinmai Sagar A.V — Creative Technologist & Designer",
  description:
    "Zoho developer by experience, creative technologist by curiosity. Visual, interactive and useful digital work — designed and built end-to-end by Chinmai Sagar A.V.",
  keywords: [
    "Chinmai Sagar",
    "Creative Technologist",
    "Graphic Designer Internship",
    "Visual Design",
    "Figma",
    "Canva",
    "Zoho Developer",
    "Portfolio",
  ],
  authors: [{ name: "Chinmai Sagar A.V" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Chinmai Sagar A.V — Creative Technologist & Designer",
    description:
      "Zoho developer by experience, creative technologist by curiosity. An editorial portfolio of designed, built and shipped work.",
    images: ["/images/projects/portfolio.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrument.variable} ${grotesk.variable} ${plex.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
