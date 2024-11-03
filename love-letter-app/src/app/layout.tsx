import type { Metadata } from "next";
import "./globals.css";
import { robotoSlab } from "./ui/fonts";
import { Viewport } from "next";


export const metadata: Metadata = {
  title: "Love Letter",
  description: "Send a letter to loved one",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>{children}</body>
    </html>
  );
}
