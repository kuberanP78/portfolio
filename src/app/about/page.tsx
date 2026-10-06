"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5] selection:bg-[#18B978] selection:text-[#111111]">
      <HeaderNav />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Eyebrow badge & Hero Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded-full text-xs font-mono text-[#18B978]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
              <span>ABOUT ME</span>
              <span className="text-[#6E6E6E]">DOSSIER // 02</span>
            </div>

            <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] leading-tight max-w-5xl">
              I&apos;m Kuberan P, an{" "}
              <span className="text-[#18B978] underline decoration-[#18B978]/40 underline-offset-8">
                AI &amp; Data Science
              </span>{" "}
              Student.
            </h1>
          </div>

          {/* Grid Layout: Left Neural Practice Block & Right Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Neural Wave Card & Metric Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Practice Neural Card */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl overflow-hidden p-4 space-y-4">
                <div className="relative aspect-[4/3] w-full bg-[#131313] rounded-lg overflow-hidden border border-[#262626]">
                  <Image
                    src="/assets/images/neural-wave-practice.svg"
                    alt="Neural Wave Data Stream"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="bg-[#1c1b1b] border border-[#2A2A2A] p-4 rounded-lg flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#6E6E6E] uppercase tracking-wider block">
                      DOMAIN ARCHITECTURE
                    </span>
                    <h3 className="font-syne font-bold text-sm text-[#F5F5F5] uppercase">
                      STATISTICAL RIGOR &amp; COMPUTATION
                    </h3>
                  </div>
                  <Cpu className="text-[#18B978]" size={20} />
                </div>

                <div className="flex items-center justify-between font-mono text-[11px] text-[#6E6E6E] px-1">
                  <span>LATENCY: 0.084 MS</span>
                  <span className="flex items-center gap-1 text-[#18B978]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                    STATUS: ACTIVE
                  </span>
                </div>
              </div>

              {/* Analytics Core & Methodology Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#171717] border border-[#2A2A2A] p-5 rounded-xl space-y-2">
                  <span className="font-mono text-[10px] text-[#6E6E6E] uppercase block">ANALYTICS CORE</span>
                  <h4 className="font-syne text-2xl font-bold text-[#F5F5F5]">SQL / PY</h4>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Quantitative modeling &amp; extraction
                  </p>
                </div>

                <div className="bg-[#171717] border border-[#2A2A2A] p-5 rounded-xl space-y-2">
                  <span className="font-mono text-[10px] text-[#6E6E6E] uppercase block">METHODOLOGY</span>
                  <h4 className="font-syne text-2xl font-bold text-[#F5F5F5]">E2E</h4>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Raw ingestion to interactive build
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Overview, Academic Foundation & Career Vector */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Section 01 Overview */}
              <div className="bg-[#171717] border border-[#2A2A2A] p-6 sm:p-8 rounded-xl space-y-6">
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
                  <span className="font-mono text-xs text-[#18B978] font-semibold tracking-wider">
                    DATA-FOCUSED TECHNOLOGY BUILDER
                  </span>
                  <span className="font-mono text-xs text-[#6E6E6E]">SEC: 01 // OVERVIEW</span>
                </div>

                <p className="text-sm sm:text-base text-[#A5A5A5] leading-relaxed font-light">
                  I&apos;m an Artificial Intelligence and Data Science student passionate about working with data, technology, and real-world problems. My primary career direction is Data Analytics, with interests spanning Data Science, Machine Learning, AI, Python, SQL, visualization, and web development.
                </p>

                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[10px] text-[#6E6E6E] uppercase tracking-wider block">
                    ANALYTICAL WORKFLOW PIPELINE
                  </span>
                  <div className="p-3 bg-[#131313] border border-[#262626] rounded-lg font-mono text-xs text-[#18B978] tracking-widest uppercase">
                    COLLECT &rarr; CLEAN &rarr; ANALYZE &rarr; VISUALIZE &rarr; INSIGHTS &rarr; BUILD
                  </div>
                </div>
              </div>

              {/* Academic Foundation */}
              <div className="bg-[#171717] border border-[#2A2A2A] p-6 sm:p-8 rounded-xl space-y-6">
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
                  <h2 className="font-syne text-lg font-bold text-[#F5F5F5] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                    ACADEMIC FOUNDATION
                  </h2>
                  <span className="font-mono text-xs text-[#6E6E6E]">INSTITUTIONS // ACCREDITED</span>
                </div>

                <div className="space-y-4">
                  {/* Institution 01 */}
                  <div className="p-5 bg-[#131313] border border-[#262626] rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-[#18B978]">01 // UNDERGRADUATE</span>
                      <h3 className="font-syne font-bold text-lg text-[#F5F5F5]">Artificial Intelligence and Data Science</h3>
                      <p className="text-xs text-[#A5A5A5]">Sudharsan Engineering College</p>
                    </div>
                    <span className="px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded font-mono text-[10px] text-[#18B978] uppercase">
                      🎓 ENGINEERING DEGREE
                    </span>
                  </div>

                  {/* Institution 02 */}
                  <div className="p-5 bg-[#131313] border border-[#262626] rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-[#18B978]">02 // DEGREE PROGRAM</span>
                      <h3 className="font-syne font-bold text-lg text-[#F5F5F5]">BS in Data Science</h3>
                      <p className="text-xs text-[#A5A5A5]">IIT Madras</p>
                    </div>
                    <span className="px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded font-mono text-[10px] text-[#18B978] uppercase">
                      📊 DATA SCIENCE DEGREE
                    </span>
                  </div>
                </div>
              </div>

              {/* Career Vector Target Spec */}
              <div className="bg-[#171717] border border-[#2A2A2A] p-6 sm:p-8 rounded-xl space-y-6">
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
                  <span className="font-mono text-xs text-[#6E6E6E]">CAREER VECTOR</span>
                  <span className="font-mono text-xs text-[#18B978]">TARGET SPEC</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-syne text-3xl font-bold text-[#F5F5F5]">Data Analytics</h3>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed">
                    Building practical skills in data analysis, visualization, SQL, Python, and problem solving while expanding into Data Science, Machine Learning, and AI.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "SQL QUERYING",
                      "PYTHON (PANDAS / NUMPY)",
                      "DATA VISUALIZATION",
                      "EXPLORATORY ANALYSIS",
                      "APPLIED MACHINE LEARNING"
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#131313] border border-[#262626] font-mono text-[10px] text-[#18B978] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Telemetry Navigation Footer */}
          <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#A5A5A5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
              <span>IDENTITY VERIFIED // KUBERAN P</span>
            </div>

            <Link href="/skills" className="flex items-center gap-2 text-[#18B978] hover:underline">
              <span>DATA PIPELINE: NORMALIZED &nbsp;|&&nbsp; NEXT: TECHNICAL SKILLS &amp; REPOSITORIES</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
