"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navData from "@/data/navigation.json";
import { User, Download } from "lucide-react";

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111111]/90 backdrop-blur-md border-b border-[#2A2A2A] py-3">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brandmark */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="font-syne text-xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-[#18B978] transition-colors">
            KUBERAN P
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#18B978] shadow-[0_0_8px_#18B978]" />
        </Link>

        {/* Center Nav Box */}
        <nav className="hidden lg:flex items-center space-x-1 border border-[#2A2A2A] bg-[#171717] px-3 py-1.5 rounded-lg shadow-inner">
          {navData.map((item) => {
            const isActive = pathname === item.route;
            return (
              <Link
                key={item.id}
                href={item.route}
                className={`px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase transition-all rounded ${
                  isActive
                    ? "bg-[#262626] text-[#F5F5F5] font-bold border border-[#3A3A3A] shadow-sm"
                    : "text-[#A5A5A5] hover:text-[#F5F5F5] hover:bg-[#202020]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Download Resume Glassy Green Button & Profile Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/resume"
            className="px-4 py-2 rounded-lg text-[11px] font-mono font-bold tracking-wider text-[#111111] bg-[#18B978]/90 hover:bg-[#18B978] backdrop-blur-md border border-[#18B978] shadow-[0_0_15px_rgba(24,185,120,0.4)] hover:shadow-[0_0_20px_rgba(24,185,120,0.6)] transition-all flex items-center gap-2 active:scale-95"
          >
            <span>DOWNLOAD RESUME</span>
            <Download size={14} strokeWidth={2.5} />
          </Link>
          <div className="w-9 h-9 rounded-full bg-[#18B978] text-[#111111] flex items-center justify-center font-bold shadow-[0_0_12px_rgba(24,185,120,0.4)]">
            <User size={18} />
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg border border-[#2A2A2A] bg-[#171717] text-[#F5F5F5] hover:border-[#18B978] transition-colors focus:ring-2 focus:ring-[#18B978]"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-[#2A2A2A] px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navData.map((item) => (
              <Link
                key={item.id}
                href={item.route}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-mono uppercase tracking-wider transition-colors ${
                  pathname === item.route ? "text-[#18B978] font-semibold" : "text-[#A5A5A5]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-[#2A2A2A]">
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-center font-mono font-bold text-xs text-[#111111] bg-[#18B978] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(24,185,120,0.4)]"
            >
              <span>DOWNLOAD RESUME</span>
              <Download size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
