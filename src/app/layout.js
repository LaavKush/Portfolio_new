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
  description: "Software Developer & AI Engineer | Building Tech that Empowers Communities",
  icons: {
    icon: [
      { url: "/logo_web.png" },
      { url: "/logo_web.png", type: "image/png" },
    ],
    shortcut: "/logo_web.png",
    apple: "/logo_web.png",
  },
};

// Server Component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <NextUIProviderWrapper>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </NextUIProviderWrapper>
      </body>
    </html>
  );
}