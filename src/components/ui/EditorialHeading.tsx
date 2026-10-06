"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface EditorialHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  subtitle?: string;
  accent?: string;
}

export const EditorialHeading: React.FC<EditorialHeadingProps> = ({
  as: Component = "h2",
  children,
  subtitle,
  accent,
  className,
  ...props
}) => {
  return (
    <div className="space-y-3">
      {subtitle && (
        <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#18B978]">
          {subtitle}
        </span>
      )}
      <Component
        className={cn(
          "font-serif tracking-tight text-[#F5F5F5] font-normal leading-tight",
          Component === "h1" && "text-4xl sm:text-6xl md:text-7xl lg:text-8xl",
          Component === "h2" && "text-3xl sm:text-5xl md:text-6xl",
          Component === "h3" && "text-2xl sm:text-3xl md:text-4xl",
          Component === "h4" && "text-xl sm:text-2xl",
          className
        )}
        {...props}
      >
        {children}
        {accent && <span className="text-[#18B978]"> {accent}</span>}
      </Component>
    </div>
  );
};
