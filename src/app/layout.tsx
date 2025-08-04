import { QueryProvider } from "@/shared/providers/QueryProvider";
import { BottomNavigation } from "@/widgets/bottom-navigation/ui";
import { Header } from "@/widgets/header/ui";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap'
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Igroom",
  description: "Igroom app",
};

function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} antialiased h-full bg-gray-100`}
      >
        <div className="flex justify-center h-full">
          <main className="flex flex-col h-full w-full max-w-[400px] bg-white md:rounded-xl md:shadow-lg relative">
            <div className="fixed top-0 w-full max-w-[400px] z-50">
              <Header />
            </div>
            <div className="flex-1 pt-10">
              <QueryProvider>{children}</QueryProvider>
            </div>
            <BottomNavigation />
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;