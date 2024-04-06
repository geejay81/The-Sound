import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/page/Navbar";
import GoogleAnalytics from "@/components/page/GoogleAnalytics";
import CookieBanner from "@/components/page/CookieBanner";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Sound",
  description: "Web projects, games, quizzes and fun.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9824524266019448" />
        <Suspense>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-DHN3V87D1E" />
        </Suspense>
      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <CookieBanner/>
      </body>
    </html>
  );
}
