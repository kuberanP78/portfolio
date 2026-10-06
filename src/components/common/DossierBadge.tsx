import React from "react";

interface DossierBadgeProps {
  label: string;
}

export function DossierBadge({ label }: DossierBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#2A2A2A] bg-[#171717] rounded-full text-xs font-mono text-[#18B978]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
      <span>{label}</span>
    </div>
  );
}
