"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  scale?: boolean;
  className?: string;
}

export const FadeIn: React.FC<MotionProps> = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  scale = false,
  className,
  ...props
}) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: scale ? 0.94 : 1,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Kinetic cubic-bezier spring transition
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MotionCard: React.FC<MotionProps> = ({
  children,
  className,
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
