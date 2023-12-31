import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Bar from "@/components/layout/bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBnB Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <span>
          <NavBar />
          <Bar />
          {children}
          <Footer />
        </span>
      </body>
    </html>
  );
}
