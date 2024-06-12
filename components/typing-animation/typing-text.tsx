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
    <p className={animationCompleted ? "animation-completed" : ""}>
      <motion.span>{displayText}</motion.span>
    </p>
  );
};

export default AnimatedText;
