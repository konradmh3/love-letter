import type { Metadata } from "next";
import "./globals.css";
import { robotoSlab } from "./ui/fonts";


export const metadata: Metadata = {
  title: "Love Letter",
  description: "Send a letter to loved one",
  viewport: "width=device-width, initial-scale=1.0",
};

{/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}



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
