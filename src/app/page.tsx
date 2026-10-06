"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { FadeIn, MotionCard } from "@/components/animations/FadeIn";
import { TiltPhotoCard } from "@/components/animations/TiltPhotoCard";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5] selection:bg-[#18B978] selection:text-[#111111] overflow-x-hidden">
      <HeaderNav />

      <main className="flex-1 pt-8 pb-20 relative">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Top Pill Badge */}
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#171717] border border-[#2A2A2A] rounded-md font-mono text-xs">
              <span className="flex items-center gap-1.5 text-[#18B978]">
                <span className="w-2 h-2 rounded-full bg-[#18B978] animate-pulse" />
                <span>KUBERAN P</span>
              </span>
              <span className="text-[#6E6E6E]">/</span>
              <span className="text-[#18B978]">AI &amp; DATA SCIENCE</span>
            </div>
          </FadeIn>

          {/* Main Hero Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Background Watermark Typography */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-10">
              <span className="font-syne text-[14vw] font-extrabold tracking-widest text-transparent stroke-text uppercase">
                DATA
              </span>
            </div>

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 z-10">
              <FadeIn direction="up" delay={0.1}>
                <h1 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F5F5F5] leading-none uppercase">
                  AI &amp; DATA SCIENCE <br />
                  <span className="text-[#18B978]">STUDENT.</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="space-y-3 max-w-2xl">
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F5F5] italic">
                    Aspiring Data Analyst
                  </h2>
                  <p className="text-base sm:text-lg text-[#A5A5A5] font-light leading-relaxed">
                    Turning data into meaningful insights. Synthesizing complex algorithmic patterns, statistical rigor, and structured intelligence to engineer high-utility analytical solutions.
                  </p>
                </div>
              </FadeIn>

              {/* Tag Pills */}
              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "DATA",
                    "INTELLIGENCE",
                    "PROBLEM SOLVING",
                    "INNOVATION"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 bg-[#171717] border border-[#2A2A2A] font-mono text-[11px] text-[#A5A5A5] uppercase tracking-wider rounded transition-colors hover:border-[#18B978] hover:text-[#18B978]"
                    >
                      <span className="text-[#18B978] mr-1.5">•</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* CTA Action Buttons */}
              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/projects"
                    className="btn-primary px-8 py-4 rounded-lg font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-3 bg-[#18B978] text-[#111111] hover:bg-[#15a369] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(24,185,120,0.3)]"
                  >
                    <span>VIEW MY PROJECTS</span>
                    <ArrowUpRight size={18} />
                  </Link>

                  <Link
                    href="/resume"
                    className="btn-ghost px-8 py-4 rounded-lg font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-3 border border-[#2A2A2A] text-[#F5F5F5] hover:border-[#18B978] hover:bg-[#18B978]/5 transition-all"
                  >
                    <Download size={16} />
                    <span>DOWNLOAD RESUME</span>
                  </Link>
                </div>
              </FadeIn>

              {/* Workflow Step Bar */}
              <FadeIn direction="up" delay={0.5}>
                <div className="pt-4 font-mono text-xs text-[#6E6E6E] flex items-center gap-2 tracking-wider">
                  <span>DATA</span>
                  <span className="text-[#18B978]">&rarr;</span>
                  <span>ANALYSIS</span>
                  <span className="text-[#18B978]">&rarr;</span>
                  <span>INSIGHTS</span>
                  <span className="text-[#18B978]">&rarr;</span>
                  <span className="text-[#18B978] font-bold">BUILD</span>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Interactive 3D Cursor Tilt Photo Overlay */}
            <div className="lg:col-span-5 z-10">
              <FadeIn direction="left" delay={0.3} scale>
                <TiltPhotoCard
                  src="/assets/images/kuberan-real-photo.jpg"
                  alt="Kuberan P Real Portrait"
                />
              </FadeIn>
            </div>

          </div>

          {/* Bottom 4-Column Metric / Domain Cards with MotionCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#2A2A2A]">
            
            <MotionCard delay={0.4}>
              <div className="bg-[#171717] border border-[#2A2A2A] p-6 rounded-xl space-y-3 relative overflow-hidden group hover:border-[#18B978]/50 transition-colors h-full">
                <div className="w-1 h-full bg-[#18B978] absolute left-0 top-0" />
                <h3 className="font-syne text-4xl font-extrabold text-[#F5F5F5]">01</h3>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#A5A5A5] uppercase tracking-wider block">DOMAIN EXPERTISE</span>
                  <p className="font-sans text-sm font-medium text-[#F5F5F5]">Applied Data Science</p>
                </div>
              </div>
            </MotionCard>

            <MotionCard delay={0.5}>
              <div className="bg-[#171717] border border-[#2A2A2A] p-6 rounded-xl space-y-3 relative overflow-hidden group hover:border-[#18B978]/50 transition-colors h-full">
                <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">SQL / Python</h3>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#A5A5A5] uppercase tracking-wider block">PRIMARY STACK</span>
                  <p className="font-sans text-sm font-medium text-[#A5A5A5]">Statistical Computation</p>
                </div>
              </div>
            </MotionCard>

            <MotionCard delay={0.6}>
              <div className="bg-[#171717] border border-[#2A2A2A] p-6 rounded-xl space-y-3 relative overflow-hidden group hover:border-[#18B978]/50 transition-colors h-full">
                <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">ETL &amp; BI</h3>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#A5A5A5] uppercase tracking-wider block">FOCUS PRACTICE</span>
                  <p className="font-sans text-sm font-medium text-[#A5A5A5]">Pipeline Optimization</p>
                </div>
              </div>
            </MotionCard>

            <MotionCard delay={0.7}>
              <div className="bg-[#171717] border border-[#2A2A2A] p-6 rounded-xl space-y-3 relative overflow-hidden group hover:border-[#18B978]/50 transition-colors h-full">
                <h3 className="font-syne text-2xl font-bold text-[#18B978]">Ready</h3>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#A5A5A5] uppercase tracking-wider block">CURRENT STATUS</span>
                  <p className="font-sans text-sm font-medium text-[#F5F5F5]">Analyst Roles &amp; Co-ops</p>
                </div>
              </div>
            </MotionCard>

          </div>

          {/* Bottom Telemetry Bar */}
          <div className="pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#A5A5A5]">
              <span>DATA</span>
              <span className="text-[#18B978]">&rarr;</span>
              <span>ANALYSIS</span>
              <span className="text-[#18B978]">&rarr;</span>
              <span>INSIGHTS</span>
              <span className="text-[#18B978]">&rarr;</span>
              <span className="text-[#18B978] font-bold">BUILD</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-[#171717] border border-[#2A2A2A] text-[#18B978] rounded">
                • OPEN TO OPPORTUNITIES
              </span>
              <span className="text-[#6E6E6E]">© 2025 Kuberan P. All rights reserved.</span>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
