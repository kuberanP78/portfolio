"use client";

import React from "react";
import { PORTFOLIO_INFO } from "@/config/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#2A2A2A] bg-[#111111] py-8 mt-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Telemetry / Status Indicator */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18B978] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#18B978]"></span>
          </span>
          <span className="font-mono text-xs text-[#A5A5A5] uppercase tracking-wider">
            SYSTEM OPERATIONAL // AVAILABLE FOR HIRE
          </span>
        </div>

        {/* Contact Email Link */}
        <div className="text-xs text-[#A5A5A5] font-mono">
          EMAIL:{" "}
          <a href={`mailto:${PORTFOLIO_INFO.email}`} className="text-[#F5F5F5] hover:text-[#18B978] transition-colors">
            {PORTFOLIO_INFO.email}
          </a>
        </div>

        {/* Identity & Copyright */}
        <div className="text-xs text-[#6E6E6E] font-mono">
          © {new Date().getFullYear()} KUBERAN P. ARCHITECTURE &amp; INTERFACE DOSSIER.
        </div>
      </div>
    </footer>
  );
};
