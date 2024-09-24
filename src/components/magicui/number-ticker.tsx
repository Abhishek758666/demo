"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  onComplete?: () => void;
}

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  onComplete,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const updateNumber = useCallback(() => {
    if (isInView) {
      const targetValue = direction === "down" ? 0 : value;
      motionValue.set(targetValue);
      console.log(motionValue);
    }
  }, [isInView, direction, value, motionValue]);

  useEffect(() => {
    const timer = setTimeout(updateNumber, delay * 1000);
    return () => clearTimeout(timer);
  }, [updateNumber, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const roundedValue = Math.round(latest);
        ref.current.textContent =
          Intl.NumberFormat("en-US").format(roundedValue);

        if (roundedValue === 100 && onComplete) {
          onComplete();
        }
      }
    });
    return () => unsubscribe();
  }, [springValue, onComplete]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
        className
      )}
      ref={ref}
    />
  );
}
