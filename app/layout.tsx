import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Livnexa — Coming Soon",
  description:
    "Livnexa by VenomAI. AI-powered mobile app coming soon. Built by VENOMAI — We make IT happen.",
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
      <body className="min-h-full flex flex-col bg-[var(--venomai-background)]">
        {children}
      </body>
    </html>
  );
}
