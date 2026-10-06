"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glassy-green";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#18B978] focus:ring-offset-2 focus:ring-offset-[#111111] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#18B978] text-[#111111] font-medium hover:bg-[#15a369] shadow-sm",
    secondary:
      "bg-[#171717] text-[#F5F5F5] border border-[#2A2A2A] hover:border-[#18B978] hover:text-[#18B978]",
    outline:
      "bg-transparent text-[#F5F5F5] border border-[#2A2A2A] hover:border-[#18B978] hover:text-[#18B978]",
    ghost: "bg-transparent text-[#A5A5A5] hover:text-[#F5F5F5]",
    "glassy-green":
      "bg-[#18B978]/90 text-[#111111] font-bold backdrop-blur-md border border-[#18B978] shadow-[0_0_15px_rgba(24,185,120,0.4)] hover:bg-[#18B978] hover:shadow-[0_0_20px_rgba(24,185,120,0.6)] active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
