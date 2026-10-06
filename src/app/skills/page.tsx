"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5] selection:bg-[#18B978] selection:text-[#111111] overflow-x-hidden">
      <HeaderNav />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header & Watermark Section */}
          <div className="relative pt-4">
            {/* Background Watermark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-10">
              <span className="font-syne text-[14vw] font-extrabold tracking-widest text-transparent stroke-text uppercase">
                SKILLS
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <FadeIn direction="up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded-full text-xs font-mono text-[#18B978]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                    <span>WHAT I WORK WITH</span>
                    <span className="text-[#6E6E6E]">// DOSSIER 03</span>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                  <h1 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
                    Skills that turn data <br className="hidden sm:inline" />
                    into decisive action.
                  </h1>
                </FadeIn>
              </div>

              <div className="lg:col-span-4 z-10">
                <FadeIn direction="up" delay={0.2}>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                    A disciplined technical toolkit centered on data intelligence, statistical reasoning, visualization architectures, and practical software implementation.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Grid Layout: Card 02 (Data Analytics Highlighted) & Card 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            
            {/* Card 02: Data Analytics (Featured / Core Direction) */}
            <div className="lg:col-span-8 bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6 relative overflow-hidden group hover:border-[#18B978]/60 transition-colors">
              <div className="h-1 w-full bg-[#18B978] absolute top-0 left-0" />
              
              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#18B978] font-bold text-lg">02</span>
                  <span className="text-[#6E6E6E]">// PRIMARY VECTOR</span>
                </div>
                <span className="px-3 py-1 bg-[#131313] border border-[#262626] text-[#18B978] rounded font-semibold uppercase text-[10px]">
                  CORE CAREER DIRECTION
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-syne text-3xl sm:text-4xl font-bold text-[#F5F5F5]">Data Analytics</h2>
                <p className="text-sm text-[#A5A5A5] leading-relaxed max-w-2xl">
                  Core analytical practice translating raw complex datasets into verifiable intelligence, operational efficiencies, and strategic business clarity.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#2A2A2A]">
                <span className="font-mono text-[10px] text-[#6E6E6E] uppercase tracking-wider block">
                  CORE TECHNICAL COMPETENCIES &amp; METHODOLOGY
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis", "Applied Statistics", "Data Interpretation"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-transparent border border-[#262626] font-mono text-xs text-[#F5F5F5] rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 01: Python & Programming */}
            <div className="lg:col-span-4 bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#F5F5F5] font-bold text-lg">01</span>
                  <span className="text-[#6E6E6E]">FOUNDATION</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">Python &amp; Programming</h3>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Software foundations, programmatic logic, and data structuring with an uncompromising center on modern Python.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2A2A2A]">
                {["Python", "C", "Java", "JavaScript"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-transparent border border-[#262626] font-mono text-xs text-[#18B978] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Cards 03, 04, 05 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 03: SQL & Databases */}
            <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#F5F5F5] font-bold text-lg">03</span>
                  <span className="text-[#6E6E6E]">PERSISTENCE</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">SQL &amp; Databases</h3>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Engineering performant queries, schema structuring, relational normalization, and database governance.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2A2A2A]">
                {["SQL", "PostgreSQL", "DBMS", "Query Optimization"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-transparent border border-[#262626] font-mono text-[11px] text-[#A5A5A5] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 04: Machine Learning */}
            <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#F5F5F5] font-bold text-lg">04</span>
                  <span className="text-[#6E6E6E]">INTELLIGENCE</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">Machine Learning</h3>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Mathematical modeling, algorithmic evaluation, feature selection, and supervised predictive pipelines.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2A2A2A]">
                {["Regression", "Classification", "Decision Trees", "SVM", "Ensemble Learning"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-transparent border border-[#262626] font-mono text-[11px] text-[#A5A5A5] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 05: Data Visualization */}
            <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#F5F5F5] font-bold text-lg">05</span>
                  <span className="text-[#6E6E6E]">NARRATIVE</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">Data Visualization</h3>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Constructing intuitive graphical narratives, exploratory distributions, and executive dashboard surfaces.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2A2A2A]">
                {["Matplotlib", "Seaborn", "Power BI", "Microsoft Excel"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-transparent border border-[#262626] font-mono text-[11px] text-[#A5A5A5] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Card 06: Development & Tools */}
          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-[#F5F5F5] font-bold">06</span>
                  <span className="text-[#6E6E6E]">ECOSYSTEM</span>
                </div>
                <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">Development &amp; Tools</h3>
                <p className="text-xs text-[#A5A5A5]">
                  Reproducible workflows, source control, modular design, and developer operations.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "Jupyter", "Web Development", "REST APIs"].map((tool) => (
                  <span key={tool} className="px-3.5 py-1.5 bg-transparent border border-[#262626] font-mono text-xs text-[#18B978] rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Operational Methodology Box */}
          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-[#18B978] uppercase font-semibold">
                OPERATIONAL METHODOLOGY
              </span>

              <h3 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] flex flex-wrap items-center gap-3">
                <span>LEARN</span>
                <span className="text-[#18B978]">&rarr;</span>
                <span>ANALYZE</span>
                <span className="text-[#18B978]">&rarr;</span>
                <span>BUILD</span>
                <span className="text-[#18B978]">&rarr;</span>
                <span>IMPROVE</span>
              </h3>

              <p className="text-sm text-[#A5A5A5] leading-relaxed">
                I focus on understanding the problem first, working with the data, extracting useful insights, and building practical solutions.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#131313] border border-[#262626] p-6 rounded-lg space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#18B978]">01</span>
                <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">Deconstruct Context</h4>
                <p className="text-xs text-[#A5A5A5]">Clarify assumptions and outline business constraints prior to computation.</p>
              </div>

              <div className="space-y-1 pt-2 border-t border-[#262626]">
                <span className="font-mono text-[10px] text-[#18B978]">02</span>
                <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">Empirical Validation</h4>
                <p className="text-xs text-[#A5A5A5]">Clean, profile, and transform structured data to verify hypotheses.</p>
              </div>

              <div className="space-y-1 pt-2 border-t border-[#262626]">
                <span className="font-mono text-[10px] text-[#18B978]">03</span>
                <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">Pragmatic Deployment</h4>
                <p className="text-xs text-[#A5A5A5]">Deliver dashboards, clean scripts, or models ready for operational use.</p>
              </div>
            </div>

          </div>

          {/* Bottom Telemetry Footer */}
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
