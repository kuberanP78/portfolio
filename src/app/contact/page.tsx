"use client";

import React, { useState } from "react";
import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { DossierBadge } from "@/components/common/DossierBadge";
import { FadeIn } from "@/components/animations/FadeIn";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5]">
      <HeaderNav />
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FadeIn direction="up">
            <DossierBadge label="DOSSIER 07 // CONTACT & INQUIRIES" />
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight">
              Let&apos;s Connect
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
            <div className="space-y-6">
              <p className="text-lg text-[#A5A5A5] leading-relaxed">
                Currently open to Data Analyst roles, AI/Data Science internships, and collaborative data projects. Reach out via email or submit the form.
              </p>
              <div className="space-y-4 font-mono text-sm">
                <div className="p-4 bg-[#171717] border border-[#2A2A2A]">
                  <span className="text-[#18B978]">EMAIL:</span>{" "}
                  <a href="mailto:kuberanp78@gmail.com" className="hover:text-[#18B978] transition-colors">
                    kuberanp78@gmail.com
                  </a>
                </div>
                <div className="p-4 bg-[#171717] border border-[#2A2A2A]">
                  <span className="text-[#18B978]">LOCATION:</span> India &bull; Open to Remote &amp; On-Site
                </div>
                <div className="p-4 bg-[#171717] border border-[#2A2A2A]">
                  <span className="text-[#18B978]">LINKEDIN:</span>{" "}
                  <a href="https://www.linkedin.com/in/kuberan0002/" target="_blank" rel="noopener noreferrer" className="hover:text-[#18B978] transition-colors">
                    linkedin.com/in/kuberan0002
                  </a>
                </div>
                <div className="p-4 bg-[#171717] border border-[#2A2A2A]">
                  <span className="text-[#18B978]">GITHUB:</span>{" "}
                  <a href="https://github.com/kuberanP78" target="_blank" rel="noopener noreferrer" className="hover:text-[#18B978] transition-colors">
                    github.com/kuberanP78
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#171717] border border-[#2A2A2A] p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 size={48} className="text-[#18B978] mx-auto" />
                  <h2 className="font-syne text-2xl font-bold">Transmission Received</h2>
                  <p className="text-sm text-[#A5A5A5]">Thank you for reaching out. I will respond promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#A5A5A5] uppercase">Your Name</label>
                    <input required type="text" className="w-full bg-transparent border border-[#2A2A2A] p-3 text-sm focus:border-[#18B978] focus:outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#A5A5A5] uppercase">Email Address</label>
                    <input required type="email" className="w-full bg-transparent border border-[#2A2A2A] p-3 text-sm focus:border-[#18B978] focus:outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#A5A5A5] uppercase">Message</label>
                    <textarea required rows={4} className="w-full bg-transparent border border-[#2A2A2A] p-3 text-sm focus:border-[#18B978] focus:outline-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3.5 rounded-lg text-xs font-mono font-semibold flex items-center justify-center gap-2">
                    <span>TRANSMIT MESSAGE</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
