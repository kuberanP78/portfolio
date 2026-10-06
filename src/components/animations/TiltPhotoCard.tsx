"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface TiltPhotoCardProps {
  src: string;
  alt: string;
}

export const TiltPhotoCard: React.FC<TiltPhotoCardProps> = ({ src, alt }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics spring configuration
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  // Glow spotlight coordinates
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized mouse coordinates (-0.5 to 0.5)
    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative p-2.5 bg-[#171717] border border-[#2A2A2A] rounded-xl shadow-2xl transition-all duration-200 hover:border-[#18B978]/60 hover:shadow-[0_0_35px_rgba(24,185,120,0.2)] cursor-pointer group"
      >
        {/* Photo Container */}
        <div className="relative aspect-square w-full bg-[#111111] rounded-lg overflow-hidden border border-[#262626]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          {/* Dynamic Cursor Spotlight Overlay */}
          <motion.div
            style={{
              background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(24, 185, 120, 0.15), transparent 40%)`,
            }}
            className="absolute inset-0 pointer-events-none z-10"
          />

          {/* Top Left Badge */}
          <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-md border border-[#2A2A2A] px-2.5 py-1 rounded text-[10px] font-mono text-[#18B978] font-semibold flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#18B978] animate-pulse" />
            <span>TOPOLOGICAL MANIFOLD V4</span>
          </div>

          {/* Top Right Badge */}
          <div className="absolute top-3 right-3 bg-[#111111]/85 backdrop-blur-md border border-[#2A2A2A] px-2.5 py-1 rounded text-[10px] font-mono text-[#18B978] font-semibold z-20">
            NEURAL ARCH / PYTORCH
          </div>

          {/* Bottom Left Badge */}
          <div className="absolute bottom-3 left-3 bg-[#111111]/85 backdrop-blur-md border border-[#2A2A2A] px-2.5 py-1 rounded text-[10px] font-mono text-[#F5F5F5] font-semibold z-20">
            MODEL: PRECISION &amp; ETL
          </div>

          {/* Bottom Right Badge */}
          <div className="absolute bottom-3 right-3 bg-[#111111]/85 backdrop-blur-md border border-[#18B978] px-2.5 py-1 rounded text-[10px] font-mono text-[#18B978] font-semibold z-20">
            VECTOR INGESTION ACTIVE
          </div>
        </div>
      </motion.div>
    </div>
  );
};
