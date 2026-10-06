"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { DossierBadge } from "@/components/common/DossierBadge";
import { FadeIn } from "@/components/animations/FadeIn";

const experiences = [
  {
    role: "AI & Data Science Student Developer",
    organization: "Academic Projects & Research",
    period: "2023 — Present",
    details: "Architecting machine learning pipelines, exploratory data analysis suites, and interactive healthcare hardware-software systems."
  },
  {
    role: "Hackathon Competitor & Builder",
    organization: "National & Regional AI Hackathons",
    period: "2023 — 2024",
    details: "Designed telemetry data processing and prototype systems under tight timeline constraints."
  }
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5]">
      <HeaderNav />
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FadeIn direction="up">
            <DossierBadge label="DOSSIER 05 // EXPERIENCE & HACKATHONS" />
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight">
              Timeline &amp; Hackathon Experience
            </h1>
          </FadeIn>
          <div className="space-y-6 pt-8">
            {experiences.map((exp, idx) => (
              <FadeIn key={exp.role} direction="up" delay={0.1 * idx}>
                <div className="bg-[#171717] border border-[#2A2A2A] p-8 space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between gap-2">
                    <h2 className="font-syne text-2xl font-bold text-[#F5F5F5]">{exp.role}</h2>
                    <span className="font-mono text-xs text-[#18B978]">{exp.period}</span>
                  </div>
                  <p className="font-mono text-xs text-[#A5A5A5]">{exp.organization}</p>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed pt-2">{exp.details}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
