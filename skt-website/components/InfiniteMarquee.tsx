"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
}

export default function InfiniteMarquee({ children, direction = "left", speed = 40 }: InfiniteMarqueeProps) {
  const isLeft = direction === "left";
  
  return (
    <div className="w-full flex overflow-hidden group py-4">
      <motion.div
        className="flex gap-6 pr-6 shrink-0"
        animate={{
          x: isLeft ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex gap-6 pr-6 shrink-0"
        animate={{
          x: isLeft ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
