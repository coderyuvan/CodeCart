import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeCart",
  description: "CodeCart is a cutting-edge, full-stack e-commerce platform built with Next.js, designed to provide a seamless shopping experience for both customers and store owners. Leveraging the power of server-side rendering and client-side interactions, CodeCart ensures blazing-fast page loads, optimized SEO, and dynamic, real-time updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>
              Copyright © 2023 - All right reserved by CodeCart
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
