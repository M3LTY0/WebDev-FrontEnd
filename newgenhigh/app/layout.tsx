import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export default function RootLayout ({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/*navbar at the top */}
        <Navbar/> 

        <main className="flex-1 px-6 py-8 max-w-5xl mx-auto">
          {/*this is where StudentPortal goes */}
        </main>
        <Footer />


      </body>
    </html>
  );
}