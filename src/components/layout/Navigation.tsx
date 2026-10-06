"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { PORTFOLIO_INFO } from "@/config/constants";
import { Menu, X } from "lucide-react";

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-md border-b border-[#2A2A2A] py-4"
          : "bg-transparent py-6 sm:py-8"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-[#18B978] p-1 rounded"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-[#18B978] transition-colors">
            {PORTFOLIO_INFO.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest font-mono text-[#A5A5A5]">
            {PORTFOLIO_INFO.role}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-8"
          aria-label="Main Navigation"
        >
          {PORTFOLIO_INFO.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[#A5A5A5] hover:text-[#18B978] transition-colors focus:outline-none focus:text-[#18B978]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F5F5F5] p-2 hover:text-[#18B978] focus:outline-none focus:ring-2 focus:ring-[#18B978]"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#2A2A2A] px-6 py-6 space-y-4">
          {PORTFOLIO_INFO.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-widest text-[#A5A5A5] hover:text-[#18B978] py-2 border-b border-[#2A2A2A]/40"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
