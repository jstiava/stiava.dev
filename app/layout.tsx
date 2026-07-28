
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SessionContextWrapper>
      <html lang="en">
        
        <body
          className={`${youtubeSans.variable} antialiased`}
        >
          <div className="flex justify-center bg-border">
            <div className="flex flex-col w-full max-w-[80rem] min-h-screen bg-background">
              <Header />
              <div className="flex flex min-h-screen">
                {children}
              </div>
              <Footer />
            </div>
          </div>

        </body>
      </html>
    </SessionContextWrapper>
  );
}

export const metadata: Metadata = {
  title: "Jeremy Stiava",
  description: "Software Developer from Chicago",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};


const youtubeSans = localFont({
  src: [
    {
      path: "../public/fonts/YTSans-Light-v1-1.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YTSans-Medium-v1-1.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/YTSans-Bold-v1-1.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-youtube-sans",
  display: "swap",
});

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
// @ts-ignore
import "./globals.css";
import Header from "@/components/Header"; import SessionContextWrapper from "./SessionContext";
import Footer from "@/components/Footer";
import { RouteLoader } from "@/components/RouterLoader";

