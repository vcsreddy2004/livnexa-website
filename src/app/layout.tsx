import type { Metadata, Viewport } from "next";
import { Inter, Rajdhani, Oxanium } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const oxanium = Oxanium({
  variable: "--font-alt-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000"
).replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LivNexa: PG management without spreadsheet chaos",
  description:
    "Manage PGs, hostels, residents and rent in one simple app. Set up rooms and beds, track dues, approve payment proof and keep residents informed with LivNexa.",
  openGraph: {
    title: "LivNexa: PG management without spreadsheet chaos",
    description:
      "One simple app for property setup, resident records, rent tracking and payment approvals.",
    type: "website",
    siteName: "LivNexa",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 449,
        alt: "LivNexa: PG management without spreadsheet chaos",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1B5E20",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rajdhani.variable} ${oxanium.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
