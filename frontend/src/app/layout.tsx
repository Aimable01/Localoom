import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";

// The app's metadata
export const metadata: Metadata = {
  title: "LocaLoom",
  description:
    "A site that brings to you all the local businesses in an area that you are new to.",
};

// The font family
const quicksand = Quicksand({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  );
}
