"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import { metadata } from "./metadata";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAnimationComplete) {
      setIsLoading(false);
    }
  }, [isAnimationComplete]);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
          setIsAnimationComplete(true);
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <html lang="en">
      <head>
        <title>{(metadata.title || "Default Title").toString()}</title>
        <meta
          name="description"
          key="description"
          content={metadata.description || "Default description"}
        />
        <link rel="icon" sizes="180x180" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} gradient-bg overflow-x-hidden`}>
        <div
          ref={gradientRef}
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background:
              "radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)",
          }}
        ></div>

        <AnimatePresence>
          {isLoading && !isAnimationComplete && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-40 bg-black text-purple-500 overflow-x-hidden"
              key="splash-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 50 }}
              transition={{ duration: 0.75 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: "center" }}
              >
                <motion.div className="text-4xl font-sans flex items-center relative">
                  <motion.span
                    initial={{ x: 0 }}
                    animate={progress >= 80 ? { x: "-100%" } : {}}
                    transition={{
                      duration: 1.2, // Increased duration from 0.4 to 1.2 seconds
                      delay: progress >= 80 ? 0.8 : 0, // Increased delay from 0.4 to 0.8 seconds
                    }}
                  >
                    N
                  </motion.span>
                  {progress < 80 && <span>{`${progress}%`}</span>}
                  {progress >= 80 && (
                    <motion.span
                      initial={{ x: "100%" }}
                      animate={{ x: "-60%" }}
                      transition={{ duration: 0.2 }} // Increased duration from 0.4 to 1.2 seconds
                      className="absolute left-2"
                    >
                      DONE
                    </motion.span>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && children}
      </body>
    </html>
  );
}
