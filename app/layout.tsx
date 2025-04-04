import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import SplashCursor from "@/components/SplashCursor/SplashCursor";

export const metadata: Metadata = {
  title: "Emph-Voice",
  description: "A voice assitant with emphatic AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "flex flex-col min-h-screen"
        )}
      >
        
        <SplashCursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
