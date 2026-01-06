"use client";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ClickSparkle from "@/components/ClickSparkle"; // Import ClickSparkle
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setIsLoading(false); // Komentari ini karena sekarang loading via tombol
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="bg-black antialiased">
        <AnimatePresence>
          {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}
        </AnimatePresence>
        
        {!isLoading && (
          <>
            <CustomCursor />
            <ClickSparkle /> {/* Pasang di sini */}
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </>
        )}
      </body>
    </html>
  );
}