import type { Metadata } from "next";
import "./globals.css";
import { robotoSlab } from "./ui/fonts";
import { Viewport } from "next";
import Head from "next/head";



export const metadata: Metadata = {
  title: "Love Letter",
  description: "Send a letter to loved one",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={robotoSlab.className}>{children}</body>
    </html>
  );
}
