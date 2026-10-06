"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { Download, Printer, Award, ExternalLink, Code2, Database, Brain, BarChart3, Wrench, CheckCircle2 } from "lucide-react";

export default function ResumePage() {
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
                RESUME
              </span>
            </div>

            <div className="relative z-10 space-y-4">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded-full text-xs font-mono text-[#18B978]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                  <span>CAREER PROFILE</span>
                  <span className="text-[#6E6E6E]">// DOSSIER 08</span>
                  <span className="text-[#6E6E6E]">// CURATED SYNTHESIS</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="font-syne text-5xl sm:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-none uppercase">
                  BUILDING SKILLS. <br />
                  <span className="text-[#18B978]">CREATING IMPACT.</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-base sm:text-lg text-[#A5A5A5] font-light max-w-3xl leading-relaxed">
                  A concise overview of my education, technical capabilities, experience, projects, and career direction.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Top Row: Executive Summary & Curriculum Dossier Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
            
            {/* Executive Summary */}
            <div className="lg:col-span-7 bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#6E6E6E] uppercase block">// EXECUTIVE SUMMARY</span>
                <p className="text-sm sm:text-base text-[#F5F5F5] font-light leading-relaxed">
                  Kuberan P is an Artificial Intelligence and Data Science student focused on developing practical skills in Data Analytics, Data Science, Machine Learning, Python, SQL, visualization, and software development.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#2A2A2A]">
                <span className="px-3 py-1 bg-[#131313] border border-[#262626] font-mono text-[10px] text-[#18B978] rounded uppercase">
                  • TRAJECTORY: PRIMARY CAREER DIRECTION: DATA ANALYST
                </span>
                <span className="px-3 py-1 bg-[#131313] border border-[#262626] font-mono text-[10px] text-[#A5A5A5] rounded uppercase">
                  STATUS: READY FOR DEPLOYMENT
                </span>
              </div>
            </div>

            {/* Curriculum Dossier Download Action Box */}
            <div className="lg:col-span-5 bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#6E6E6E] uppercase block">// RECRUITER ACTION</span>
                <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">CURRICULUM DOSSIER</h3>
                <p className="text-xs text-[#A5A5A5]">
                  Verified analytical dossier formatted for technical evaluation and executive screening.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="/assets/resume/kuberan-p-resume.pdf"
                  download
                  className="btn-primary w-full py-3.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 bg-[#18B978] text-[#111111] hover:bg-[#15a369]"
                >
                  <Download size={16} />
                  <span>DOWNLOAD RESUME</span>
                </a>

                <button
                  onClick={() => window.print()}
                  className="w-full py-2.5 bg-[#131313] border border-[#262626] rounded-lg font-mono text-xs text-[#A5A5A5] hover:text-[#F5F5F5] hover:border-[#18B978] transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Printer size={14} />
                  <span>PRINT / ARCHIVE SUMMARY</span>
                </button>
              </div>
            </div>

          </div>

          {/* Section 01: Education & Experience */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <h2 className="font-syne text-2xl font-bold text-[#F5F5F5] flex items-center gap-3">
                <span className="text-[#18B978] font-mono text-lg">01</span>
                <span>EDUCATION &amp; EXPERIENCE</span>
              </h2>
              <span className="font-mono text-xs text-[#6E6E6E]">// ACADEMIC &amp; PRACTICUM</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Education (Left) */}
              <div className="lg:col-span-6 bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between font-mono text-xs border-b border-[#2A2A2A] pb-3">
                  <span className="text-[#18B978] font-semibold">🎓 EDUCATION</span>
                  <span className="text-[#6E6E6E]">2 INSTITUTIONS</span>
                </div>

                <div className="space-y-6">
                  {/* Inst 01 */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#18B978]">01</span>
                      <span className="px-2 py-0.5 bg-[#131313] border border-[#262626] font-mono text-[9px] text-[#A5A5A5] uppercase">
                        DEGREE CANDIDATE
                      </span>
                    </div>
                    <h3 className="font-syne text-lg font-bold text-[#F5F5F5]">ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</h3>
                    <p className="text-xs font-mono text-[#A5A5A5]">Sudharsan Engineering College</p>
                    <p className="text-xs text-[#6E6E6E] font-mono">DISCIPLINE: Computational Systems &amp; AI Algorithms</p>
                  </div>

                  {/* Inst 02 */}
                  <div className="space-y-2 pt-4 border-t border-[#262626]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#18B978]">02</span>
                      <span className="px-2 py-0.5 bg-[#131313] border border-[#262626] font-mono text-[9px] text-[#A5A5A5] uppercase">
                        NATIONAL INSTITUTION
                      </span>
                    </div>
                    <h3 className="font-syne text-lg font-bold text-[#F5F5F5]">BS IN DATA SCIENCE</h3>
                    <p className="text-xs font-mono text-[#A5A5A5]">Indian Institute of Technology Madras (IIT Madras)</p>
                    <p className="text-xs text-[#6E6E6E] font-mono">DISCIPLINE: Mathematical Statistics &amp; Large-Scale Analytics</p>
                  </div>
                </div>
              </div>

              {/* Experience (Right) */}
              <div className="lg:col-span-6 bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs border-b border-[#2A2A2A] pb-3">
                    <span className="text-[#18B978] font-semibold">💼 EXPERIENCE</span>
                    <span className="text-[#6E6E6E]">VERIFIED INTERNSHIP</span>
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-[#18B978]">ROLE SPECIFICATION</span>
                    <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">DATA SCIENCE / DATA ANALYSIS INTERN</h3>
                    <p className="font-mono text-xs text-[#A5A5A5]">DURATION: May — June 2024</p>
                    <p className="font-mono text-xs text-[#18B978]">VERIFICATION: CERTIFICATE ISSUED MS/INT/2024</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[10px] text-[#6E6E6E] uppercase block">CORE OPERATIONAL FOCUS</span>
                    <div className="flex flex-wrap gap-2 font-mono text-xs text-[#F5F5F5]">
                      {["Data Analysis", "Data Processing", "Visualization", "Analytical Techniques"].map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-transparent border border-[#262626] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2A2A] flex items-center gap-2 font-mono text-[11px] text-[#18B978]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                  <span>ACADEMICALLY SPONSORED &amp; CERTIFIED PRACTICUM</span>
                </div>
              </div>

            </div>
          </div>

          {/* Section 02: Technical Profile & Matrix */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <h2 className="font-syne text-2xl font-bold text-[#F5F5F5] flex items-center gap-3">
                <span className="text-[#18B978] font-mono text-lg">02</span>
                <span>TECHNICAL PROFILE &amp; MATRIX</span>
              </h2>
              <span className="font-mono text-xs text-[#6E6E6E]">// DOMAIN CAPABILITIES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 01 Programming */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#18B978]">01 // CORE</span>
                  <Code2 size={16} className="text-[#6E6E6E]" />
                </div>
                <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">PROGRAMMING</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">Foundational syntax, algorithmic structures, and production scripting languages.</p>
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                  {["Python", "SQL", "C", "Java", "JavaScript"].map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-transparent border border-[#262626] text-[#F5F5F5] rounded">{s}</span>
                  ))}
                </div>
              </div>

              {/* 02 Data & Analytics */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#18B978]">02 // COMPUTATION</span>
                  <BarChart3 size={16} className="text-[#6E6E6E]" />
                </div>
                <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">DATA &amp; ANALYTICS</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">Data wrangling pipelines, exploratory data analysis, and mathematical modeling.</p>
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                  {["Pandas", "NumPy", "Data Cleaning", "EDA", "Statistics", "Data Interpretation"].map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-transparent border border-[#262626] text-[#F5F5F5] rounded">{s}</span>
                  ))}
                </div>
              </div>

              {/* 03 Visualization */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#18B978]">03 // VISUALS</span>
                  <BarChart3 size={16} className="text-[#6E6E6E]" />
                </div>
                <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">VISUALIZATION</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">Interactive dashboards, statistical graphics, and decision intelligence summaries.</p>
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                  {["Matplotlib", "Seaborn", "Excel", "Power BI"].map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-transparent border border-[#262626] text-[#F5F5F5] rounded">{s}</span>
                  ))}
                </div>
              </div>

              {/* 04 Machine Learning */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#18B978]">04 // INTELLIGENCE</span>
                  <Brain size={16} className="text-[#6E6E6E]" />
                </div>
                <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">MACHINE LEARNING</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">Supervised algorithmic architectures and predictive evaluation modeling.</p>
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                  {["Regression", "Classification", "Decision Trees", "SVM", "Ensemble Learning"].map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-transparent border border-[#262626] text-[#F5F5F5] rounded">{s}</span>
                  ))}
                </div>
              </div>

              {/* 05 Tools & Pipeline */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#18B978]">05 // WORKFLOW</span>
                  <Wrench size={16} className="text-[#6E6E6E]" />
                </div>
                <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">TOOLS &amp; PIPELINE</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">Version control, notebook environments, and distributed repository workflows.</p>
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                  {["Git", "GitHub", "VS Code", "Jupyter"].map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-transparent border border-[#262626] text-[#F5F5F5] rounded">{s}</span>
                  ))}
                </div>
              </div>

              {/* 06 Databases */}
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4 hover:border-[#18B978]/50 transition-colors">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#18B978]">06 // STORAGE</span>
                  <Database size={16} className="text-[#6E6E6E]" />
                </div>
                <h3 className="font-syne text-xl font-bold text-[#F5F5F5]">DATABASES</h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">Relational database systems, normalization, and complex querying.</p>
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                  {["PostgreSQL", "DBMS", "Relational Schemas"].map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-transparent border border-[#262626] text-[#F5F5F5] rounded">{s}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Section 03: Projects & Milestones */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <h2 className="font-syne text-2xl font-bold text-[#F5F5F5] flex items-center gap-3">
                <span className="text-[#18B978] font-mono text-lg">03</span>
                <span>PROJECTS &amp; MILESTONES</span>
              </h2>
              <span className="font-mono text-xs text-[#6E6E6E]">// PROVEN BUILDS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Selected Projects Stack */}
              <div className="lg:col-span-7 bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-4">
                <span className="font-mono text-xs text-[#6E6E6E] uppercase block">// SELECTED PROJECT INDEX</span>
                
                <div className="space-y-3">
                  {[
                    { id: "01", name: "MediKiosk", desc: "AI-Powered Healthcare Kiosk", tag: "AI / HEALTH" },
                    { id: "02", name: "Toyota Corolla Data Analysis", desc: "Python Data Analysis Project", tag: "DATA ANALYTICS" },
                    { id: "03", name: "FlowFi", desc: "Personal Finance / Expense Tracking Concept", tag: "FINTECH / ARCH" },
                    { id: "04", name: "NeoClean", desc: "AI Cleaning Robot Concept", tag: "ROBOTICS / AI" },
                  ].map((p) => (
                    <div key={p.id} className="p-3.5 bg-[#131313] border border-[#262626] rounded-lg flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[#18B978]">{p.id}</span>
                          <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">{p.name}</h4>
                        </div>
                        <p className="text-xs text-[#A5A5A5]">{p.desc}</p>
                      </div>
                      <span className="px-2.5 py-1 bg-[#171717] border border-[#2A2A2A] font-mono text-[9px] text-[#18B978] rounded uppercase">
                        {p.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hackathon Milestone Box */}
              <div className="lg:col-span-5 bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#18B978] font-semibold">🏆 COMPETITIVE MILESTONE</span>
                    <span className="text-[#6E6E6E]">YEAR 2024</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-syne text-4xl font-extrabold text-[#F5F5F5]">
                      24H <span className="text-xl font-normal text-[#A5A5A5]">NATIONAL HACKATHON</span>
                    </h3>
                    <h4 className="font-syne text-lg font-bold text-[#18B978]">24-HOUR NATIONAL LEVEL HACKATHON 2026</h4>
                    <p className="text-xs text-[#A5A5A5] font-mono">Organized by: K. Ramakrishnan College</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-[#131313] border border-[#262626] rounded space-y-1">
                      <span className="font-mono text-[9px] text-[#6E6E6E] block">TEAM</span>
                      <p className="font-syne font-bold text-sm text-[#F5F5F5]">PANDAS</p>
                    </div>
                    <div className="p-3 bg-[#131313] border border-[#262626] rounded space-y-1">
                      <span className="font-mono text-[9px] text-[#6E6E6E] block">ROLE</span>
                      <p className="font-syne font-bold text-sm text-[#18B978]">Team Member</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-[#A5A5A5] pt-4 border-t border-[#2A2A2A]">
                  <span>HIGH-INTENSITY SPRINT</span>
                  <span className="text-[#18B978] flex items-center gap-1">
                    <CheckCircle2 size={12} /> VERIFIED PARTICIPANT
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Section 04: Verified Certifications */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <h2 className="font-syne text-2xl font-bold text-[#F5F5F5] flex items-center gap-3">
                <span className="text-[#18B978] font-mono text-lg">04</span>
                <span>VERIFIED CERTIFICATIONS</span>
              </h2>
              <span className="font-mono text-xs text-[#6E6E6E]">// CONTINUOUS RIGOR</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: "01", name: "IIT Madras BS in Data Science Foundation Certificate", issuer: "IIT MADRAS" },
                { id: "02", name: "NPTEL Certificate", issuer: "NATIONAL PROGRAMME ON TECHNOLOGY ENHANCED LEARNING" },
                { id: "03", name: "Python Certificate", issuer: "GUVI / GUVI-GEEK" },
                { id: "04", name: "Network Basics / Networking Fundamentals", issuer: "CISCO NETACAD" },
                { id: "05", name: "Linux Fundamentals", issuer: "CISCO NETACAD" },
                { id: "06", name: "Windows Fundamentals", issuer: "TRYHACKME" },
              ].map((c) => (
                <div key={c.id} className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-5 space-y-2 hover:border-[#18B978]/50 transition-colors">
                  <span className="font-mono text-[10px] text-[#18B978] block">{c.id}</span>
                  <h3 className="font-syne font-bold text-sm text-[#F5F5F5]">{c.name}</h3>
                  <p className="font-mono text-[10px] text-[#A5A5A5]">{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner: From Raw Records to Impact */}
          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="font-mono text-xs text-[#18B978] uppercase font-semibold">// SYNTHESIS &amp; DIRECTION</span>
                <h3 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
                  FROM RAW RECORDS TO <br />
                  <span className="text-[#18B978]">IMPACT</span>
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm text-[#A5A5A5] leading-relaxed">
                  Building toward a career in Data Analytics while continuously expanding into Data Science, Machine Learning, and AI.
                </p>
              </div>
            </div>

            {/* Stage Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-[#2A2A2A]">
              <div className="bg-[#131313] border border-[#262626] p-4 rounded text-center space-y-1">
                <span className="font-mono text-[9px] text-[#6E6E6E] block">STAGE 01</span>
                <p className="font-mono text-xs font-bold text-[#F5F5F5]">DATA</p>
              </div>
              <div className="bg-[#131313] border border-[#262626] p-4 rounded text-center space-y-1">
                <span className="font-mono text-[9px] text-[#6E6E6E] block">PIPELINE</span>
                <p className="font-mono text-xs font-bold text-[#F5F5F5]">ANALYSIS</p>
              </div>
              <div className="bg-[#131313] border border-[#262626] p-4 rounded text-center space-y-1">
                <span className="font-mono text-[9px] text-[#6E6E6E] block">PATTERN</span>
                <p className="font-mono text-xs font-bold text-[#F5F5F5]">INSIGHTS</p>
              </div>
              <div className="bg-[#131313] border border-[#262626] p-4 rounded text-center space-y-1">
                <span className="font-mono text-[9px] text-[#6E6E6E] block">STRATEGY</span>
                <p className="font-mono text-xs font-bold text-[#F5F5F5]">DECISIONS</p>
              </div>
              <div className="bg-[#18B978]/15 border border-[#18B978] p-4 rounded text-center space-y-1 col-span-2 sm:col-span-1">
                <span className="font-mono text-[9px] text-[#18B978] block">OUTCOME</span>
                <p className="font-mono text-xs font-bold text-[#18B978]">IMPACT</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[#2A2A2A] font-mono text-xs">
              <span className="text-[#A5A5A5]">WHO I AM • WHAT I KNOW • WHAT I HAVE BUILT — READY FOR RECORD</span>
              <a
                href="/assets/resume/kuberan-p-resume.pdf"
                download
                className="btn-primary px-6 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 bg-[#18B978] text-[#111111]"
              >
                <Download size={14} />
                <span>DOWNLOAD RESUME</span>
              </a>
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
