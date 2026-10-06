"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const selectedProjects = [
  {
    id: "01",
    title: "MediKiosk Healthcare Kiosk",
    category: "IoT & CLINICAL WORKFLOWS",
    badge: "FEATURED CASE STUDY",
    description: "Automated triage & vital metrics gathering kiosk designed for healthcare intake optimization, real-time sensor processing, and EHR telemetry synchronization.",
    tags: ["PYTHON", "HARDWARE SENSORS", "IOT TELEMETRY", "SQL DATABASE", "PATIENT FLOW"],
    image: "/assets/images/medikiosk-mockup.svg",
    link: "/projects/medikiosk",
    featured: true
  },
  {
    id: "02",
    title: "Toyota Price Prediction EDA",
    category: "DATA ANALYSIS & ML",
    badge: "REGRESSION MODEL",
    description: "Comprehensive Exploratory Data Analysis (EDA) and predictive regression modeling for used vehicle valuation based on mileage, engine specs, and historical trends.",
    tags: ["PYTHON", "PANDAS", "NUMPY", "SEABORN", "SCIKIT-LEARN"],
    image: "/assets/images/toyota-eda-viz.svg",
    link: "#",
    featured: false
  },
  {
    id: "03",
    title: "FlowFi Financial Dashboard",
    category: "ANALYTICS & VISUALIZATION",
    badge: "PREDICTIVE CASHFLOW",
    description: "Real-time interactive dashboard visualizing corporate liquidity, cashflow projections, and risk metric telemetry for executive decision-making.",
    tags: ["POWER BI", "EXCEL", "DATA MODELING", "FINANCIAL METRICS"],
    image: "/assets/images/flowfi-mockup.svg",
    link: "#",
    featured: false
  },
  {
    id: "04",
    title: "NeoClean Robotics Telemetry",
    category: "SYSTEMS & DATA STREAMS",
    badge: "AUTONOMOUS IOT",
    description: "Sensor stream telemetry processing and coverage optimization algorithm for autonomous industrial cleaning robotics.",
    tags: ["PYTHON", "TELEMETRY", "ALGORITHMIC EFFICIENCY", "LOG RETRIEVAL"],
    image: "/assets/images/hero-neural-viz.svg",
    link: "#",
    featured: false
  }
];

export default function ProjectsPage() {
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
                WORK
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <FadeIn direction="up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded-full text-xs font-mono text-[#18B978]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                    <span>SELECTED REPOSITORIES</span>
                    <span className="text-[#6E6E6E]">// DOSSIER 04</span>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                  <h1 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
                    Engineering intelligence <br className="hidden sm:inline" />
                    into real-world systems.
                  </h1>
                </FadeIn>
              </div>

              <div className="lg:col-span-4 z-10">
                <FadeIn direction="up" delay={0.2}>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                    A curated selection of technical case studies, data pipelines, predictive models, and interactive dashboard architectures.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Featured Hero Project (Card 01: MediKiosk) */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-8 relative overflow-hidden group hover:border-[#18B978]/60 transition-colors">
              <div className="h-1 w-full bg-[#18B978] absolute top-0 left-0" />

              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#18B978] font-bold text-lg">{selectedProjects[0].id}</span>
                  <span className="text-[#6E6E6E]">// {selectedProjects[0].category}</span>
                </div>
                <span className="px-3 py-1 bg-[#131313] border border-[#262626] text-[#18B978] rounded font-semibold uppercase text-[10px]">
                  {selectedProjects[0].badge}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-syne text-3xl sm:text-4xl font-bold text-[#F5F5F5]">
                    {selectedProjects[0].title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#A5A5A5] leading-relaxed font-light">
                    {selectedProjects[0].description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProjects[0].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-transparent border border-[#262626] font-mono text-xs text-[#F5F5F5] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={selectedProjects[0].link}
                      className="btn-primary px-6 py-3 rounded-lg text-xs font-mono font-semibold inline-flex items-center gap-2"
                    >
                      <span>EXPLORE DEEP CASE STUDY</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full bg-transparent rounded-lg overflow-hidden border border-[#262626]">
                    <Image
                      src={selectedProjects[0].image}
                      alt={selectedProjects[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Projects Grid: Cards 02, 03, 04 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedProjects.slice(1).map((proj) => (
              <FadeIn key={proj.id} direction="up" delay={0.4}>
                <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#F5F5F5] font-bold text-lg">{proj.id}</span>
                      <span className="text-[#6E6E6E]">{proj.category}</span>
                    </div>

                    <div className="relative aspect-[16/10] w-full bg-transparent rounded-lg overflow-hidden border border-[#262626]">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-2 pt-2">
                      <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">{proj.title}</h3>
                      <p className="text-xs text-[#A5A5A5] leading-relaxed">{proj.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#2A2A2A]">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-transparent border border-[#262626] font-mono text-[10px] text-[#18B978] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={proj.link} className="inline-flex items-center gap-1.5 text-xs font-mono text-[#18B978] hover:underline pt-1">
                      <span>VIEW DETAILS</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bottom Execution Standards Box */}
          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-[#18B978] uppercase font-semibold">
                SYSTEM ARCHITECTURE STANDARDS
              </span>

              <h3 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] flex flex-wrap items-center gap-3">
                <span>INGEST</span>
                <span className="text-[#18B978]">&rarr;</span>
                <span>MODEL</span>
                <span className="text-[#18B978]">&rarr;</span>
                <span>VALIDATE</span>
                <span className="text-[#18B978]">&rarr;</span>
                <span>DEPLOY</span>
              </h3>

              <p className="text-sm text-[#A5A5A5] leading-relaxed">
                Every project follows strict technical hygiene: modular code structuring, reproducible notebooks, clean schema design, and operational deployment metrics.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#131313] border border-[#262626] p-6 rounded-lg space-y-4">
              <div className="space-y-1 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#18B978] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">Verifiable Computation</h4>
                  <p className="text-xs text-[#A5A5A5]">Statistical rigor backed by structured data validation and reproducible code.</p>
                </div>
              </div>

              <div className="space-y-1 pt-3 border-t border-[#262626] flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#18B978] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">Executive Readability</h4>
                  <p className="text-xs text-[#A5A5A5]">Clear dashboard interfaces designed for rapid decision-making.</p>
                </div>
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
