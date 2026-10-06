"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  clean = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
