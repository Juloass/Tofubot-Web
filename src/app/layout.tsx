import React from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tofuxia - Collection",
  description: "Votre collection de cartes Tofuxia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </>
  );
}
