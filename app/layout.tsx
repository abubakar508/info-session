import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INFO SESSION | UMMA TECH HUB",
  description: "Thursday 13th June 2024, Auditorium, Umma University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}</body>
    </html>
  );
}
