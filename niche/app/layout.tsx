import "./globals.css";
import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
        <Navigation />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}