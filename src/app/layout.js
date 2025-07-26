// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { Suspense } from "react";
import NextUIProviderWrapper from "@/app/providers/NextUIProviderWrapper";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata for SEO and tab info
export const metadata = {
  title: "Laavanya Kushwaha | Portfolio",
  description: "Developer | AI & Web | Building Tech that Empowers Communities",
};

// Root layout for all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        suppressHydrationWarning={true} // Also suppress mismatches inside <body>
      >
        <NextUIProviderWrapper>
          <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
            {/* Navbar is client-only, but wrapped in Suspense for SSR fallback */}
            <Navbar />
          </Suspense>
          <main className="min-h-screen">{children}</main>
        </NextUIProviderWrapper>
      </body>
    </html>
  );
}
