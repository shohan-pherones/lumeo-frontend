import { Header } from "@/components";
import { cn } from "@/lib/utils";
import ModalProvider from "@/providers/ModalProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumeo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <Header />
        <main className="container mx-auto max-w-7xl">{children}</main>
        <ModalProvider />
      </body>
    </html>
  );
}
