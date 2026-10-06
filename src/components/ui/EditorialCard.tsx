"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface EditorialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const EditorialCard: React.FC<EditorialCardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-[#171717] border border-[#2A2A2A] p-6 sm:p-8 transition-all duration-300",
        hoverEffect && "hover:border-[#18B978]/50 hover:shadow-lg hover:shadow-[#18B978]/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
