import type { Metadata } from "next";
import "./globals.css";
import { robotoSlab } from "./ui/fonts";


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
      <body className={robotoSlab.className}>{children}</body>
    </html>
  );
}
