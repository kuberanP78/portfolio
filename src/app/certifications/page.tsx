"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Clock, Building2, GraduationCap, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5] selection:bg-[#18B978] selection:text-[#111111] overflow-x-hidden">
      <HeaderNav />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Header Row */}
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] sm:text-xs tracking-wider">
              <div className="flex items-center gap-2 text-[#18B978] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                <span>CERTIFICATIONS & ACHIEVEMENTS <span className="text-[#6E6E6E]">/ DOSSIER 06</span></span>
              </div>
              <div className="text-[#6E6E6E] uppercase">
                <span className="text-[#A5A5A5]">RECORD STATUS: AUDITED & ACTIVE</span> | INDEX: KP-DS-06
              </div>
            </div>
          </FadeIn>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-4 relative">
            
            {/* Background Watermark */}
            <div className="absolute inset-0 top-10 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-[0.03]">
              <span className="font-syne text-[14vw] font-extrabold tracking-widest text-transparent stroke-text uppercase">
                LEARN
              </span>
            </div>

            <div className="lg:col-span-7 z-10">
              <FadeIn direction="up" delay={0.1}>
                <h1 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] uppercase">
                  <span className="text-[#F5F5F5]">ALWAYS LEARNING.</span><br />
                  <span className="text-[#18B978]">ALWAYS IMPROVING.</span>
                </h1>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 z-10 space-y-8 pt-2 lg:pt-4">
              <FadeIn direction="up" delay={0.2}>
                <p className="text-sm sm:text-base text-[#A5A5A5] leading-relaxed font-light">
                  A growing collection of learning credentials, technical certifications, and experiences that reflect continuous development and systematic domain curiosity.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-8 font-mono">
                  <div className="space-y-1">
                    <div className="text-3xl text-[#F5F5F5] font-bold">06</div>
                    <div className="text-[10px] text-[#A5A5A5] tracking-wider">CREDENTIALS</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl text-[#F5F5F5] font-bold">01</div>
                    <div className="text-[10px] text-[#A5A5A5] tracking-wider">HACKATHON SPRINT</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl text-[#18B978] font-bold">IIT-M</div>
                    <div className="text-[10px] text-[#A5A5A5] tracking-wider">FOUNDATIONAL</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Hackathon Sprint Section */}
          <FadeIn direction="up" delay={0.4}>
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden mt-8 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Side */}
                <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-[#2A2A2A] flex flex-col justify-between space-y-12 relative z-10 bg-[#171717]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#18B978] tracking-widest uppercase">
                      <Clock size={12} />
                      <span>COLLABORATIVE SPRINT // PRESSURE TESTING</span>
                    </div>
                    
                    <div>
                      <div className="font-syne text-7xl font-bold leading-none tracking-tighter">
                        <span className="text-[#F5F5F5]">24</span>
                        <span className="text-[#18B978]">H</span>
                      </div>
                      <div className="font-mono text-[10px] text-[#A5A5A5] uppercase tracking-widest mt-3">
                        CONTINUOUS ARCHITECTURAL ITERATION
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-2 gap-4 border-b border-[#2A2A2A] pb-3">
                      <span className="text-[#6E6E6E]">EXECUTION TYPE:</span>
                      <span className="text-[#F5F5F5] text-right">Synchronous Sprint</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <span className="text-[#6E6E6E]">ENVIRONMENT:</span>
                      <span className="text-[#F5F5F5] text-right">Data & AI Systems</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-8 p-8 flex flex-col justify-between space-y-8 relative z-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#262626] text-[#F5F5F5] font-mono text-[10px] uppercase tracking-wider rounded-sm">
                        NATIONAL LEVEL COMPETITION
                      </span>
                      <span className="px-3 py-1 bg-transparent border border-[#18B978]/30 text-[#18B978] font-mono text-[10px] uppercase tracking-wider rounded-sm">
                        RAPID PROTOTYPING
                      </span>
                    </div>

                    <div>
                      <h2 className="font-syne text-4xl sm:text-5xl font-bold text-[#F5F5F5] uppercase tracking-tight">
                        NATIONAL LEVEL <br />
                        HACKATHON
                      </h2>
                      <div className="flex items-center gap-2 text-[#A5A5A5] font-sans text-sm mt-3">
                        <Building2 size={16} />
                        <span>K Ramakrishna college</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-5 rounded-lg space-y-2">
                      <div className="font-mono text-[10px] text-[#6E6E6E] tracking-wider uppercase">SQUAD IDENTIFIER</div>
                      <div className="font-syne font-bold text-[#F5F5F5] flex items-center gap-2">
                        <span>Team: PANDAS</span>
                        <span className="text-xl">🐼</span>
                      </div>
                      <p className="text-xs text-[#A5A5A5] leading-relaxed pt-1">
                        Cross-functional collaborative technical unit resolving constraints under rapid timelines.
                      </p>
                    </div>

                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-5 rounded-lg space-y-2">
                      <div className="font-mono text-[10px] text-[#6E6E6E] tracking-wider uppercase">ASSIGNED DESIGNATION</div>
                      <div className="font-syne font-bold text-[#F5F5F5] flex items-center gap-2">
                        <span>Role: Team Member</span>
                        <span className="text-xl">👨‍💻</span>
                      </div>
                      <p className="text-xs text-[#A5A5A5] leading-relaxed pt-1">
                        Guided technical direction, task allocation, code integration, and solution pitch delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[9px] text-[#6E6E6E] uppercase tracking-widest pt-4 border-t border-[#2A2A2A]">
                    <CheckCircle2 size={10} className="text-[#6E6E6E]" />
                    <span>VERIFIED INSTITUTIONAL PARTICIPATION • NATIONAL INSTITUTE OF TECHNOLOGY TIRUCHIRAPPALLI</span>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* Curated Pedagogical Index Header */}
          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-16 pb-4 border-b border-[#2A2A2A] font-mono text-[10px] uppercase tracking-widest text-[#A5A5A5]">
              <div className="text-[#F5F5F5]">
                <span className="text-[#18B978]">[03]</span> CURATED PEDAGOGICAL INDEX
              </div>
              <div>RECORDS SORTED BY RIGOR & RELEVANCE</div>
            </div>
          </FadeIn>

          {/* Grid Layout for Certs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Featured IITM Certificate (Left Column) */}
            <div className="lg:col-span-7 h-full">
              <FadeIn direction="up" delay={0.6} className="h-full">
                <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden h-full group">
                  {/* Decorative Background Elements */}
                  <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[1px] border-[#2A2A2A] rounded-full opacity-30 pointer-events-none group-hover:border-[#18B978]/20 transition-colors duration-700" />
                  <div className="absolute -bottom-12 -right-12 w-72 h-72 border-[1px] border-[#2A2A2A] rounded-full opacity-30 pointer-events-none group-hover:border-[#18B978]/20 transition-colors duration-700" />
                  <div className="absolute bottom-12 right-12 w-24 h-24 border-[1px] border-[#2A2A2A] opacity-30 pointer-events-none rotate-45 group-hover:border-[#18B978]/20 transition-colors duration-700" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-[10px] text-[#18B978] tracking-widest uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#18B978] rounded-full" />
                        <span>01 // PRIMARY ACADEMIC CREDENTIAL</span>
                      </div>
                      <div className="bg-[#262626] text-[#A5A5A5] font-mono text-[9px] px-2 py-1 rounded-sm uppercase tracking-wider">
                        TIER-1 INSTITUTE
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-syne text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.1]">
                        IIT Madras BS in Data Science Foundation Certificate
                      </h2>
                      <div className="flex items-center gap-2 text-[#18B978] font-sans text-sm font-medium">
                        <GraduationCap size={18} />
                        <span>Indian Institute of Technology Madras (IIT Madras)</span>
                      </div>
                    </div>

                    <div className="border border-[#2A2A2A] rounded-lg p-5 bg-[#141414] mt-6">
                      <div className="flex justify-between items-center mb-3">
                        <div className="font-mono text-[9px] text-[#6E6E6E] uppercase tracking-widest">
                          CURRICULUM ARCHITECTURE
                        </div>
                        <div className="font-mono text-[9px] text-[#18B978] uppercase tracking-widest">
                          FOUNDATIONAL LEVEL
                        </div>
                      </div>
                      <div className="font-syne font-bold text-[#F5F5F5] text-sm mb-2">
                        ACADEMIC FOUNDATION // RIGOROUS CURRICULUM
                      </div>
                      <p className="text-xs text-[#A5A5A5] leading-relaxed">
                        Comprehensive training grounded in computational problem-solving, structural mathematics, and hands-on algorithmic data science under premier national faculty guidance.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#2A2A2A] relative z-10 flex flex-col justify-between gap-6 h-full">
                    <div>
                      <div className="font-mono text-[9px] text-[#6E6E6E] uppercase tracking-widest mb-4">
                        KEY COMPETENCY DOMAINS
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Foundational Data Science", "Mathematical Foundations", "Computational Thinking"].map((domain) => (
                          <div key={domain} className="bg-transparent border border-[#2A2A2A] px-3 py-1.5 rounded text-xs font-mono text-[#A5A5A5] flex items-center gap-1.5">
                            <span className="text-[#18B978]">•</span>
                            {domain}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141414] p-4 rounded-lg border border-[#2A2A2A]">
                      <div>
                        <div className="font-mono text-[9px] text-[#6E6E6E] uppercase tracking-widest mb-1">
                          AUTHENTICATION MATRIX
                        </div>
                        <div className="font-mono text-xs text-[#F5F5F5] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#18B978] rounded-full shadow-[0_0_8px_#18B978]" />
                          IITM_DS_FDN_AUTHENTICATED
                        </div>
                      </div>
                      <button className="bg-[#18B978] hover:bg-[#15a369] text-[#111111] px-4 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                        <span>VERIFY CREDENTIAL</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>

                </div>
              </FadeIn>
            </div>

            {/* List Certificates (Right Column) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {[
                { id: "02", category: "CONTINUOUS LEARNING", title: "NPTEL Certificate", issuer: "National Programme on Technology Enhanced Learning (NPTEL)" },
                { id: "03", category: "PROGRAMMING & SCRIPTING", title: "Python Certificate", issuer: "EC-Council" },
                { id: "04", category: "SYSTEMS & INFRASTRUCTURE", title: "Network Basics / Networking Fundamentals", issuer: "Cyfoxgen" },
                { id: "05", category: "ENVIRONMENTS & OS", title: "Linux Fundamentals", issuer: "Cyfoxgen" },
                { id: "06", category: "SYSTEM OPERATIONS", title: "Windows Fundamentals", issuer: "TryHackMe" },
              ].map((cert, i) => (
                <FadeIn key={cert.id} direction="left" delay={0.7 + i * 0.1} className="h-full">
                  <div className="group bg-[#171717] border border-[#2A2A2A] hover:border-[#18B978]/50 p-5 rounded-lg flex items-center justify-between transition-colors cursor-pointer h-[120px]">
                    <div className="flex gap-4 items-start h-full">
                      <div className="font-syne text-2xl font-bold text-[#18B978]">{cert.id}</div>
                      <div className="flex flex-col justify-between h-full space-y-1 py-0.5">
                        <div className="bg-[#262626] text-[#A5A5A5] font-mono text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider inline-block w-fit">
                          {cert.category}
                        </div>
                        <div>
                          <div className="font-syne text-lg font-bold text-[#F5F5F5] group-hover:text-[#18B978] transition-colors leading-tight">
                            {cert.title}
                          </div>
                          <div className="text-xs text-[#A5A5A5] mt-1">{cert.issuer}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#6E6E6E] group-hover:text-[#F5F5F5] transition-colors self-start mt-1">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>

          {/* Bottom Telemetry Bar */}
          <FadeIn direction="up" delay={0.8}>
            <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#A5A5A5]">
                <span className="text-[#18B978]">LEARNING</span>
                <span className="text-[#6E6E6E]">&rarr;</span>
                <span className="text-[#F5F5F5]">CREDENTIALS</span>
                <span className="text-[#6E6E6E]">&rarr;</span>
                <span className="text-[#F5F5F5]">EXPERIENCE</span>
                <span className="text-[#6E6E6E]">&rarr;</span>
                <span className="text-[#18B978]">CONTINUOUS IMPROVEMENT</span>
              </div>

              <div className="flex items-center gap-2 text-[#A5A5A5] uppercase tracking-widest text-[10px]">
                <span className="text-[#18B978]">•</span>
                <span>SYS_INDEX.06 // VERIFIED ACADEMIC & TECHNICAL RECORDS</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}
