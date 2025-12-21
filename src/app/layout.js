// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import NextUIProviderWrapper from "@/app/providers/NextUIProviderWrapper";

// Fonts
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

// Metadata
export const metadata = {
  title: "Laavanya Kushwaha | Portfolio",
  description: "Developer | AI & Web | Building Tech that Empowers Communities",
};

// ✅ Server Component (NO dynamic, NO ssr:false)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <NextUIProviderWrapper>
          {/* ✅ Client-only Navbar */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </NextUIProviderWrapper>
      </body>
    </html>
  );
}
