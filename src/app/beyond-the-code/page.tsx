"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";

export default function BeyondTheCodePage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5] selection:bg-[#18B978] selection:text-[#111111] overflow-x-hidden">
      <HeaderNav />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header & Watermark Section */}
          <div className="relative pt-4">
            {/* Background Watermark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-10">
              <span className="font-syne text-[13vw] font-extrabold tracking-widest text-transparent stroke-text uppercase">
                CURIOUS
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <FadeIn direction="up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded-full text-xs font-mono text-[#18B978]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                    <span>BEYOND THE CODE</span>
                    <span className="text-[#6E6E6E]">// DOSSIER 10</span>
                    <span className="text-[#6E6E6E]">// COGNITIVE DIMENSIONS</span>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                  <h1 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
                    Curious <span className="text-[#18B978]">beyond data.</span>
                  </h1>
                </FadeIn>
              </div>

              <div className="lg:col-span-4 z-10 space-y-3">
                <FadeIn direction="up" delay={0.2}>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                    The disciplines, pursuits, and tactical environments outside technology that shape how I strategize, compete, deconstruct complexity, and keep learning.
                  </p>

                  <div className="pt-2 font-mono text-[10px] text-[#6E6E6E] space-y-0.5">
                    <p>INDEX: 03 / EXPLORATIONS</p>
                    <p>DOMAIN: <span className="text-[#18B978]">STRATEGIC &amp; SYSTEMIC</span></p>
                    <p>SYNTHESIS: v1.8 PERSONAL TAXONOMY</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Section 01: Chess (Strategic Patterns & Systems) */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#18B978]/60 transition-colors">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-[16/10] w-full bg-transparent rounded-lg overflow-hidden border border-[#262626]">
                  <Image
                    src="/assets/images/chess-king-real.png"
                    alt="Chess Tactical Position Analysis"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay Labels from Stitch */}
                  <div className="absolute top-3 left-3 bg-transparent/85 backdrop-blur-md border border-[#2A2A2A] px-2.5 py-1 rounded text-[10px] font-mono text-[#18B978]">
                    FILE: E4-E5 // EVAL: +0.43 &nbsp;|&nbsp; PATTERN RECOGNITION: ACTIVE
                  </div>
                  <div className="absolute bottom-3 right-3 bg-transparent/85 backdrop-blur-md border border-[#18B978] px-2.5 py-1 rounded text-[10px] font-mono text-[#18B978] font-bold">
                    POSITIONAL DEPTH ANALYSIS
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#18B978]">01 // STRATEGIC PATTERNS &amp; SYSTEMS</span>
                  <h2 className="font-syne text-4xl font-extrabold text-[#F5F5F5]">CHESS</h2>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                    A relentless pursuit of structured foresight, spatial advantage, and pattern calculation. Chess reflects data modeling at its purest: navigating probabilistic outcomes, evaluating long-range compound risk, and exploiting minute structural asymmetries.
                  </p>
                </div>

                <div className="p-4 bg-[#131313] border border-[#262626] rounded-lg flex items-start gap-3">
                  <Quote size={18} className="text-[#18B978] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#F5F5F5] font-serif italic leading-relaxed">
                    &quot;Calculated foresight, dynamic tension, and uncovering hidden advantage within complex, static positional structures.&quot;
                  </p>
                </div>

                <div className="pt-2 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[#6E6E6E] text-[10px] block">FAVORITE GRANDMASTER</span>
                    <span className="font-bold text-[#F5F5F5]">Magnus Carlsen</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#18B978] text-[10px] block">🏆 WORLD NO. 1</span>
                    <span className="text-[#A5A5A5]">PEAK RATING 2882</span>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* Section 02 & 03: Cricket & Video Games (2-Column Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 02 Cricket */}
            <div className="lg:col-span-7 bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors">
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#18B978]">02 // TEAMWORK, RESILIENCE &amp; DECISION TIMING</span>
                <h3 className="font-syne text-3xl font-bold text-[#F5F5F5]">CRICKET</h3>
                <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                  A dynamic crucible demanding collective synchronization, situational adaptability, and split-second tactical calibration under high atmospheric pressure.
                </p>

                <div className="relative aspect-[16/9] w-full bg-transparent rounded-lg overflow-hidden border border-[#262626]">
                  <Image
                    src="/assets/images/cricket-trajectory-real.png"
                    alt="Cricket Trajectory Analytics"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-transparent/85 backdrop-blur-md border border-[#2A2A2A] px-2.5 py-1 rounded text-[10px] font-mono text-[#18B978]">
                    TRAJECTORY ANALYSIS &nbsp;|&nbsp; TACTICAL TEMPO
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Team Dynamics", "High-Pressure Execution", "Tactical Patience", "Situational Adaptability"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#131313] border border-[#262626] font-mono text-xs text-[#F5F5F5] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[#6E6E6E] text-[10px] block">FAVORITE CRICKETER &amp; LEADER</span>
                  <span className="font-bold text-[#F5F5F5]">MS Dhoni</span>
                </div>
                <div className="text-right">
                  <span className="text-[#18B978] text-[10px] block">07 LEGACY</span>
                  <span className="text-[#18B978]">• CALM UNDER PRESSURE // FINISHER MINDSET</span>
                </div>
              </div>
            </div>

            {/* 03 Video Games / Spatial Engine */}
            <div className="lg:col-span-5 bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors">
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#18B978]">03 // VIRTUAL SPATIAL ARCHITECTURE</span>
                <h3 className="font-syne text-3xl font-bold text-[#F5F5F5]">VIDEO GAMES</h3>
                <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                  A fascination with sophisticated simulated ecosystems, game loop logic, emergent complexity, and immersive algorithmic spatial mechanics.
                </p>

                <div className="relative aspect-[16/9] w-full bg-transparent rounded-lg overflow-hidden border border-[#262626]">
                  <Image
                    src="/assets/images/3d-spatial-mesh.jpg"
                    alt="3D Spatial Mesh Environment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-transparent/40 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-mono text-[10px] text-[#18B978] tracking-widest uppercase">BEYOND THE CODE</span>
                    <span className="font-syne font-bold text-lg text-[#F5F5F5]">SYSTEM: 3D SPATIAL ENGINE</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-[#A5A5A5]">
                  {["Complex Systems", "Iterative Problem Solving", "Interactive Worlds", "Spatial Exploration"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-[#131313] border border-[#262626] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#131313] border border-[#262626] rounded font-mono text-xs text-[#18B978] flex items-center justify-between">
                <span>🎮 COGNITIVE IMPACT: SIMULATION INTUITION</span>
              </div>
            </div>

          </div>

          {/* Bottom Section: Operational Principles (How I Think) */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <div>
                <span className="font-mono text-xs text-[#18B978] uppercase block">// OPERATIONAL PRINCIPLES</span>
                <h2 className="font-syne text-3xl font-bold text-[#F5F5F5]">HOW I THINK</h2>
              </div>
              <span className="font-mono text-xs text-[#6E6E6E]">SYSTEMIC COGNITIVE ARCHITECTURE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* 01 */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <span className="font-mono text-lg font-bold text-[#18B978]">01 //</span>
                <h3 className="font-syne font-bold text-lg text-[#F5F5F5]">STAY CURIOUS</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  Never settle for surface-level answers. Dissect first principles, question anomalies, and explore the underlying mechanics behind every output.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#18B978] flex justify-between border-t border-[#262626]">
                  <span>METHOD</span>
                  <span>EXPLORE()</span>
                </div>
              </div>

              {/* 02 */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <span className="font-mono text-lg font-bold text-[#18B978]">02 //</span>
                <h3 className="font-syne font-bold text-lg text-[#F5F5F5]">THINK ANALYTICALLY</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  Deconstruct sprawling ambiguity into structured, solvable components. Eliminate noise to extract true signal and causal pathways.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#18B978] flex justify-between border-t border-[#262626]">
                  <span>METHOD</span>
                  <span>DECOMPOSE()</span>
                </div>
              </div>

              {/* 03 */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <span className="font-mono text-lg font-bold text-[#18B978]">03 //</span>
                <h3 className="font-syne font-bold text-lg text-[#F5F5F5]">BUILD PRACTICALLY</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  Ground intellectual theories in tangible artifacts. True insight earns its validation through real-world deployment, speed, and functional utility.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#18B978] flex justify-between border-t border-[#262626]">
                  <span>METHOD</span>
                  <span>DEPLOY()</span>
                </div>
              </div>

              {/* 04 */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <span className="font-mono text-lg font-bold text-[#18B978]">04 //</span>
                <h3 className="font-syne font-bold text-lg text-[#F5F5F5]">KEEP IMPROVING</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  Commit to relentless micro-iteration, rapid feedback consumption, and the compounding returns of lifelong disciplined mastery.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#18B978] flex justify-between border-t border-[#262626]">
                  <span>METHOD</span>
                  <span>ITERATE()</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Banner: THINK • ANALYZE • BUILD • IMPROVE */}
          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="space-y-2">
                <h3 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
                  THINK. • ANALYZE. • BUILD. • <span className="text-[#18B978]">IMPROVE.</span>
                </h3>
                <p className="font-mono text-xs text-[#A5A5A5]">CURIOUS + STRATEGIC + ANALYTICAL + CREATIVE</p>
              </div>

              <Link
                href="/projects"
                className="btn-ghost px-6 py-3.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase inline-flex items-center gap-2 border border-[#2A2A2A] text-[#F5F5F5] hover:border-[#18B978]"
              >
                <span>EXPLORE FULL DOSSIER</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
              <span className="text-[#6E6E6E]">2025 KUBERAN P. // BEYOND THE CODE</span>
              <span className="text-[#18B978]">● COGNITIVE ARCHITECTURE &amp; APPLIED DISCIPLINE</span>
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
                • SYSTEM OPERATIONAL // AVAILABLE FOR HIRE
              </span>
              <span className="text-[#6E6E6E]">© 2025 Kuberan P. Data Architecture &amp; ML Lab</span>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
