import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedTextProps {
  texts: string[];
  onComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    texts[currentIndex].slice(0, latest)
  );
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true); // State to control cursor visibility

  const textLengthRef = useRef(texts[currentIndex].length);

  useEffect(() => {
    const controls = animate(count, textLengthRef.current, {
      type: "tween",
      duration: 10,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === textLengthRef.current) {
          setAnimationCompleted(true);
        }
      },
    });

    return controls.stop;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev); // Toggle cursor visibility
    }, 500); // Blink interval in milliseconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (animationCompleted) {
      if (currentIndex < texts.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setAnimationCompleted(false);
        textLengthRef.current = texts[currentIndex + 1].length;
        animate(count, 0, {
          type: "tween",
          duration: 0,
        });
      } else if (onComplete) {
        onComplete();
      }
    }
  }, [animationCompleted, currentIndex, onComplete, texts, count]);

  return (
    <p className={animationCompleted ? "animation-completed, text-white" : "text-white"}>
      <motion.span className="text-white">{displayText}</motion.span>
      {cursorVisible && (
        <span className="cursor absolute w-1 h-5 bg-white"></span>
      )}
    </p>
  );
};

export default AnimatedText;
