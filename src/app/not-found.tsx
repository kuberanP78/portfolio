"use client";

import React, { useState } from "react";
import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight, Eye, Play, AlertCircle } from "lucide-react";

export default function NotFound() {
  const [transitionActive, setTransitionActive] = useState(false);

  const triggerTransition = () => {
    setTransitionActive(true);
    setTimeout(() => setTransitionActive(false), 1200);
  };

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
                404
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <FadeIn direction="up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded-full text-xs font-mono text-[#18B978]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                    <span>404 // DATA NOT FOUND</span>
                    <span className="text-[#6E6E6E]">• SYSTEM ANOMALY</span>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                  <h1 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
                    Looks Like This Data Point <br className="hidden sm:inline" />
                    <span className="text-[#18B978]">Doesn&apos;t Exist.</span>
                  </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                  <p className="text-sm sm:text-base text-[#A5A5A5] leading-relaxed font-light max-w-2xl">
                    The page or pipeline entity you&apos;re looking for couldn&apos;t be resolved in the current index. It may have been relocated, restructured, or exists outside the query boundary.
                  </p>
                </FadeIn>
              </div>

              {/* Right Diagnostic Telemetry Box */}
              <div className="lg:col-span-4 z-10">
                <FadeIn direction="up" delay={0.2}>
                  <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-5 font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#6E6E6E]">INCIDENT_ID</span>
                      <span className="text-[#F5F5F5]">#0x7FF404A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6E6E]">QUERY_STATUS</span>
                      <span className="text-[#a32a2a] font-bold">404_NULL_RESOLVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6E6E]">VECTOR_COORD</span>
                      <span className="text-[#A5A5A5]">[0.00, NaN, 1.00]</span>
                    </div>
                    <div className="flex justify-between border-t border-[#262626] pt-2">
                      <span className="text-[#6E6E6E]">LATENCY</span>
                      <span className="text-[#18B978]">0.08ms</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Telemetry Trace Visual Box */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#18B978]">
                  <AlertCircle size={16} />
                  <span>TELEMETRY TRACE // RUNTIME INGEST TO SINK</span>
                </div>
                <span className="text-[#6E6E6E]">SAMPLING RATE: 100%</span>
              </div>

              {/* Node Trace Flow */}
              <div className="p-6 bg-transparent border border-[#262626] rounded-lg relative space-y-8">
                
                {/* Connecting Wire */}
                <div className="hidden sm:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-[#18B978] via-[#18B978] to-[#a32a2a] -translate-y-1/2 z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative z-10">
                  {/* Node 01 */}
                  <div className="space-y-2 text-center sm:text-left bg-transparent sm:bg-transparent p-3 sm:p-0 rounded">
                    <div className="w-4 h-4 rounded-full bg-[#18B978] shadow-[0_0_10px_#18B978] mx-auto sm:mx-0" />
                    <span className="font-mono text-[10px] text-[#F5F5F5] font-bold block">NODE_01: INGEST</span>
                    <span className="font-mono text-[9px] text-[#18B978] block">HTTP_REQ: 200 OK</span>
                  </div>

                  {/* Node 02 */}
                  <div className="space-y-2 text-center sm:text-left bg-transparent sm:bg-transparent p-3 sm:p-0 rounded">
                    <div className="w-4 h-4 rounded-full bg-[#18B978] shadow-[0_0_10px_#18B978] mx-auto sm:mx-0" />
                    <span className="font-mono text-[10px] text-[#F5F5F5] font-bold block">NODE_02: PARSE</span>
                    <span className="font-mono text-[9px] text-[#18B978] block">ROUTER: COMPILED</span>
                  </div>

                  {/* Node 03 (Missing Error) */}
                  <div className="space-y-2 text-center sm:text-left bg-transparent sm:bg-transparent p-3 sm:p-0 rounded relative">
                    <span className="px-2 py-0.5 bg-[#a32a2a]/20 border border-[#a32a2a] font-mono text-[9px] text-[#a32a2a] rounded absolute -top-7 left-0 sm:left-auto">
                      MISSING // UNRESOLVED_VECTOR: 0x404
                    </span>
                    <div className="w-4 h-4 rounded-full bg-[#a32a2a] shadow-[0_0_10px_#a32a2a] mx-auto sm:mx-0" />
                    <span className="font-mono text-[10px] text-[#a32a2a] font-bold block">NODE_03: NULL / MISSING</span>
                    <span className="font-mono text-[9px] text-[#a32a2a] block">TARGET_ENTITY: NaN</span>
                  </div>

                  {/* Node 04 */}
                  <div className="space-y-2 text-center sm:text-left opacity-40 bg-transparent sm:bg-transparent p-3 sm:p-0 rounded">
                    <div className="w-4 h-4 rounded-full bg-[#6E6E6E] mx-auto sm:mx-0" />
                    <span className="font-mono text-[10px] text-[#F5F5F5] font-bold block">NODE_04: OUTPUT</span>
                    <span className="font-mono text-[9px] text-[#6E6E6E] block">DRAIN: UNREACHED</span>
                  </div>
                </div>
              </div>

              {/* Diagnostic Code Box */}
              <div className="p-3 bg-[#131313] border border-[#262626] rounded font-mono text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="text-[#A5A5A5]">
                  DIAGNOSTIC:{" "}
                  <span className="text-[#18B978] bg-transparent px-2 py-1 border border-[#262626] rounded">
                    Route &quot;/data-vector-null&quot; yielded 0 active records in metadata catalog
                  </span>
                </div>
                <span className="text-[#6E6E6E] text-[11px]">RETRY_BUDGET: 3 ATTEMPTS EXHAUSTED</span>
              </div>
            </div>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="btn-primary px-8 py-3.5 rounded-lg font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 bg-[#18B978] text-[#111111] hover:bg-[#15a369]"
              >
                <span>BACK TO HOME</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/projects"
                className="btn-ghost px-6 py-3.5 rounded-lg font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 border border-[#2A2A2A] text-[#F5F5F5] hover:border-[#18B978]"
              >
                <Eye size={14} />
                <span>VIEW PROJECTS (04)</span>
              </Link>

              <Link
                href="/resume"
                className="btn-ghost px-6 py-3.5 rounded-lg font-mono text-xs font-bold tracking-wider uppercase border border-[#2A2A2A] text-[#A5A5A5] hover:text-[#F5F5F5]"
              >
                SYSTEM DOSSIER
              </Link>
            </div>
          </FadeIn>

          {/* Section: System Protocols & Transition Architecture */}
          <div className="space-y-6 pt-6">
            <div className="border-b border-[#2A2A2A] pb-3 space-y-1">
              <span className="font-mono text-xs text-[#18B978] uppercase block">// SYSTEM PROTOCOLS</span>
              <h2 className="font-syne text-3xl font-bold text-[#F5F5F5]">
                Runtime State Behaviors &amp; Transition Architecture
              </h2>
              <p className="text-xs font-mono text-[#A5A5A5]">
                Designed for zero layout-shift and instant visual feedback. Explore how telemetry hydration and route dispatch are executed with sub-300ms latency.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Box 1: Hydrating Telemetry */}
              <div className="lg:col-span-6 bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#18B978] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                    STATE: HYDRATING TELEMETRY
                  </span>
                  <span className="px-2 py-0.5 bg-[#131313] border border-[#262626] text-[#18B978] rounded uppercase text-[10px]">
                    NON-BLOCKING
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-[#6E6E6E] uppercase block">SYNCHRONIZATION</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-syne text-5xl font-extrabold text-[#F5F5F5]">95.5%</span>
                    <span className="font-mono text-xs text-[#18B978]">• SYNTHESIS ACTIVE</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-[#A5A5A5] pt-2">
                    <span className="p-2 bg-[#131313] border border-[#262626] rounded text-center">• 01 COLLECT</span>
                    <span className="p-2 bg-[#131313] border border-[#262626] rounded text-center">• 02 ANALYZE</span>
                    <span className="p-2 bg-[#131313] border border-[#262626] rounded text-center">• 03 BUILD</span>
                  </div>
                </div>

                <div className="p-3 bg-transparent border border-[#262626] rounded space-y-2">
                  <div className="flex justify-between font-mono text-[10px] text-[#6E6E6E]">
                    <span>PACKET STREAM // INGRESS</span>
                    <span className="text-[#18B978]">4.8 MB/S</span>
                  </div>
                  <div className="flex gap-1.5 h-4">
                    <div className="bg-[#262626] flex-1 rounded-sm" />
                    <div className="bg-[#18B978] flex-1 rounded-sm" />
                    <div className="bg-[#262626] flex-1 rounded-sm" />
                    <div className="bg-[#18B978] flex-1 rounded-sm" />
                    <div className="bg-[#262626] flex-1 rounded-sm" />
                    <div className="bg-[#18B978] flex-1 rounded-sm" />
                    <div className="bg-[#262626] flex-1 rounded-sm" />
                  </div>
                </div>

                <p className="text-xs text-[#6E6E6E] font-mono">
                  Zero spinner convention. Asynchronous asset telemetry only. TARGET: &lt; 150MS
                </p>
              </div>

              {/* Box 2: Inter-Route Dynamics */}
              <div className="lg:col-span-6 bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#18B978]">🔄 INTER-ROUTE DYNAMICS // VELOCITY: 220MS</span>
                    <span className="text-[#6E6E6E]">GPU ACCELERATED</span>
                  </div>

                  <div className={`p-4 bg-transparent border border-[#262626] rounded-lg space-y-2 transition-all duration-300 ${transitionActive ? "border-[#18B978] bg-[#18B978]/10" : ""}`}>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-[#6E6E6E]">TARGET: /PORTFOLIO/PROJECTS</span>
                      <span className="text-[#18B978]">STATUS: PRE-RENDERED</span>
                    </div>
                    <h4 className="font-syne font-bold text-lg text-[#F5F5F5]">Data Pipelines &amp; Neural Models</h4>
                    <p className="text-xs text-[#A5A5A5]">Real-time metrics, warehouse orchestrations, and interactive model dashboards.</p>
                    <div className="flex justify-between font-mono text-[10px] text-[#6E6E6E] pt-2 border-t border-[#262626]">
                      <span>DISPATCH READY</span>
                      <span className="text-[#18B978]">FPS: 60.00</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#A5A5A5]">
                    Test the cinematic curtain dispatch in the sandbox.
                  </p>
                </div>

                <div>
                  <button
                    onClick={triggerTransition}
                    className="w-full py-3 bg-[#131313] border border-[#262626] rounded-lg font-mono text-xs font-bold text-[#F5F5F5] hover:border-[#18B978] hover:text-[#18B978] transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <Play size={14} className="fill-current" />
                    <span>TEST TRANSITION EFFECT</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Core Operational Doctrine Banner */}
          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#18B978] uppercase font-semibold">// CORE OPERATIONAL DOCTRINE</span>
              <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#F5F5F5]">
                THINK. ANALYZE. BUILD. IMPROVE.
              </h3>
              <p className="font-mono text-xs text-[#6E6E6E]">KUBERAN P // DATA INTELLIGENCE &amp; ML SYSTEMS</p>
            </div>

            <div className="font-mono text-xs space-y-1 text-right">
              <p className="text-[#6E6E6E]">INDEX_RESOLUTION: <span className="text-[#F5F5F5]">RECOVERY_READY</span></p>
              <p className="text-[#18B978]">INCIDENT_RESPONSE: INSTANT_RETURN</p>
            </div>
          </div>

          {/* Bottom Telemetry Footer */}
          <div className="pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#18B978]">
              <span className="w-2 h-2 rounded-full bg-[#18B978] animate-pulse" />
              <span>STATUS: SYSTEM OPERATIONAL / AVAILABLE FOR HIRE</span>
            </div>

            <div className="flex items-center gap-4 text-[#A5A5A5]">
              <span>DATA &rarr; ANALYSIS &rarr; INSIGHTS &rarr; BUILD</span>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
