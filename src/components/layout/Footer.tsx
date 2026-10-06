"use client";

import React from "react";
import { Container } from "./Container";
import { PORTFOLIO_INFO } from "@/config/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#171717] border-t border-[#2A2A2A] py-12 sm:py-16 text-[#A5A5A5] text-xs">
      <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <p className="font-serif text-lg text-[#F5F5F5] font-normal">
            {PORTFOLIO_INFO.name}
          </p>
          <p className="font-mono text-[11px] text-[#A5A5A5]">
            {PORTFOLIO_INFO.title} &bull; {PORTFOLIO_INFO.role}
          </p>
        </div>

        <div className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-widest text-[#A5A5A5]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#18B978] transition-colors focus:outline-none focus:text-[#18B978]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#18B978] transition-colors focus:outline-none focus:text-[#18B978]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@kuberan.dev"
            className="hover:text-[#18B978] transition-colors focus:outline-none focus:text-[#18B978]"
          >
            Email
          </a>
        </div>

        <div className="text-right font-mono text-[10px] text-[#A5A5A5]">
          &copy; {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
