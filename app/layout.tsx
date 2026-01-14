import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BSO Latin Dance | Master Bachata in Orlando",
  description: "Learn to dance Bachata Sensual in Orlando and Central Florida. Progressive programs, group classes for all levels. No partner necessary!",
  keywords: ["bachata", "salsa", "dance classes", "Orlando", "latin dance", "bachata sensual"],
  openGraph: {
    title: "BSO Latin Dance | Master Bachata in Orlando",
    description: "Progressive programs. No partner needed. Real results in weeks.",
    type: "website",
    locale: "en_US",
    siteName: "BSO Latin Dance",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSO Latin Dance | Master Bachata in Orlando",
    description: "Progressive programs. No partner needed. Real results in weeks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
