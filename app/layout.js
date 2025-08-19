import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hidemeplease.vercel.app"),
  title: "하이드미플리즈",
  description:
    "리뷰, 쿠폰 없이 가장 간편하게 받는 맛집 혜택. NFC 태그 한 번으로 매장에서 바로 혜택을 받으세요.",
  openGraph: {
    title: "하이드미플리즈",
    description:
      "리뷰, 쿠폰 없이 가장 간편하게 받는 맛집 혜택. NFC 태그 한 번으로 매장에서 바로 혜택을 받으세요.",
    url: "/",
    siteName: "하이드미플리즈",
    images: ["/logo.png"],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "하이드미플리즈",
    description:
      "리뷰, 쿠폰 없이 가장 간편하게 받는 맛집 혜택. NFC 태그 한 번으로 매장에서 바로 혜택을 받으세요.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* Simple Analytics - privacy-first analytics */}
        <Script
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-black text-white px-3 py-2 rounded"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
