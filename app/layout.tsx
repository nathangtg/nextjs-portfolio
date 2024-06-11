"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (gradientRef.current) {
        gradientRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{(metadata.title || "Default Title").toString()}</title>
        <meta
          name="description"
          key={"description"}
          content={metadata.description || "Default description"}
        />
      </head>
      <body className={`${inter.className} gradient-bg`}>
        <div
          ref={gradientRef}
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background:
              "radial-gradient(600px at 1060px 233px, rgba(29, 78, 216, 0.15), transparent 80%)",
          }}
        ></div>

        {children}
      </body>
    </html>
  );
}
