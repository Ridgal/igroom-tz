import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Igroom",
  description: "Igroom app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center min-h-screen bg-gray-100`}
      >
        <div className="w-full max-w-[400px] bg-white min-h-screen md:min-h-[90vh] md:rounded-xl md:shadow-lg">
          {children}
        </div>
      </body>
    </html>
  );
};
