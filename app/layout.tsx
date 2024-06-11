"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ! Sticky cursor
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("sticky-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{(metadata.title || "Default Title").toString()}</title>{" "}
        <meta
          name="description"
          content={metadata.description || "Default description"}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const __client = true;
