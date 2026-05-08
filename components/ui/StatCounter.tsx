"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string | number;
  label: string;
  delay?: number;
}

export function StatCounter({ value, label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  const numericValue = typeof value === "number" ? value : parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = typeof value === "string" ? value.replace(/[\d]/g, "") : "";
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const transformedValue = useTransform(springValue, (latest) => {
    const formatted = typeof value === "string" && value.includes("+") 
      ? Math.floor(latest) + "+" 
      : Math.floor(latest) + suffix;
    return formatted;
  });
  
  useEffect(() => {
    const unsubscribe = transformedValue.on("change", (v) => setDisplayValue(v as string));
    return () => unsubscribe();
  }, [transformedValue]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.span
        ref={ref}
        className="font-display text-5xl md:text-6xl text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        {displayValue}
      </motion.span>
      <motion.span
        className="font-retro text-xs text-text-secondary tracking-wider"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {label}
      </motion.span>
    </div>
  );
}
