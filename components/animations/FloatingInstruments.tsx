"use client";

import { motion } from "framer-motion";

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [-5, 5, -5],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

interface FloatingInstrumentsProps {
  show?: boolean;
}

export function FloatingInstruments({ show = true }: FloatingInstrumentsProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Drum - upper right */}
      <motion.div
        className="absolute top-20 right-10 text-6xl opacity-5"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "0s" }}
      >
        🥁
      </motion.div>

      {/* Trumpet - lower left */}
      <motion.div
        className="absolute bottom-40 left-10 text-6xl opacity-5"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        🎺
      </motion.div>

      {/* Guitar - upper left */}
      <motion.div
        className="absolute top-40 left-20 text-6xl opacity-5"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
      >
        🎸
      </motion.div>

      {/* Additional floating music notes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-3"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        >
          {["♩", "♪", "♫", "♬"][i % 4]}
        </motion.div>
      ))}
    </div>
  );
}
