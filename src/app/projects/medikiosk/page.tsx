"use client";

import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

export default function MediKioskPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5] selection:bg-[#18B978] selection:text-[#111111] overflow-x-hidden">
      <HeaderNav />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Eyebrow & Headline Section */}
          <div className="relative pt-4 border-b border-[#2A2A2A] pb-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-10">
              <span className="font-syne text-[13vw] font-extrabold tracking-widest text-transparent stroke-text uppercase">
                MEDIKIOSK
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <FadeIn direction="up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2A2A2A] rounded-full text-xs font-mono text-[#18B978]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B978]" />
                    <span>SELECTED PROJECT REPORT</span>
                    <span className="text-[#6E6E6E]">// CASE STUDY // HEALTHCARE INFRASTRUCTURE</span>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                  <h1 className="font-syne text-5xl sm:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-none">
                    MediKiosk
                  </h1>
                  <h2 className="font-syne text-2xl sm:text-4xl font-bold text-[#18B978] pt-2">
                    AI-Powered Healthcare Kiosk
                  </h2>
                </FadeIn>
              </div>

              <div className="lg:col-span-4 z-10">
                <FadeIn direction="up" delay={0.2}>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                    A healthcare kiosk concept designed to simplify patient intake triage and provide doctors with structured, contextual information prior to consultation.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 font-mono text-xs text-[#A5A5A5]">
              <div className="p-3 bg-[#171717] border border-[#2A2A2A] rounded">
                <span className="text-[#6E6E6E] text-[10px] block">CLASSIFICATION</span>
                <span className="text-[#F5F5F5] font-semibold">DIRECT / PROTOTYPE</span>
              </div>
              <div className="p-3 bg-[#171717] border border-[#2A2A2A] rounded">
                <span className="text-[#6E6E6E] text-[10px] block">TARGET DOMAIN</span>
                <span className="text-[#F5F5F5] font-semibold">HEALTHCARE AI &amp; CLINIC</span>
              </div>
              <div className="p-3 bg-[#171717] border border-[#2A2A2A] rounded">
                <span className="text-[#6E6E6E] text-[10px] block">CONTEXT</span>
                <span className="text-[#F5F5F5] font-semibold">PATIENT INTAKE HARDWARE</span>
              </div>
              <div className="p-3 bg-[#171717] border border-[#2A2A2A] rounded">
                <span className="text-[#6E6E6E] text-[10px] block">SYSTEM STYLE</span>
                <span className="text-[#18B978] font-semibold">+ KIOSK ARCHITECTURE</span>
              </div>
            </div>
          </div>

          {/* Hero Stand Photo Feature */}
          <FadeIn direction="up" delay={0.3}>
            <div className="relative aspect-[16/9] w-full bg-[#171717] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/medikiosk-kiosk-stand.png"
                alt="MediKiosk Physical Kiosk Stand System"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-transparent/85 backdrop-blur-md border border-[#2A2A2A] px-3 py-1.5 rounded font-mono text-xs text-[#18B978] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#18B978]" />
                <span>MEDI-KIOSK PHYSICAL TOUCH INTENT HARDWARE DISPLAY PLATFORM</span>
              </div>
            </div>
          </FadeIn>

          {/* Section 01: Problem & Solution (2-Column Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* The Problem */}
            <div className="lg:col-span-6 bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#6E6E6E]">DOSSIER ITEM: 01</span>
                  <span className="text-[#18B978]">CHALLENGE CONTEXT</span>
                </div>
                <h3 className="font-syne text-3xl font-bold text-[#F5F5F5]">THE PROBLEM</h3>
                <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                  Patients often struggle to articulate their full symptom timeline under pressure, while attending doctors have sharply limited consultation windows to gather, organize, and cross-reference complete clinical histories.
                </p>
              </div>

              <div className="p-4 bg-[#131313] border border-[#262626] rounded-lg space-y-1 font-mono text-xs">
                <span className="text-[#18B978] block">⚠️ INEFFICIENCY IN CLINICAL TRIAGE</span>
                <p className="text-[#A5A5A5] leading-relaxed text-[11px]">
                  Traditional intake relying solely on manual paper forms leads to miscommunication, omitted contextual cues, and valuable clinical time spent on repetitive data tagging.
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="lg:col-span-6 bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6 flex flex-col justify-between hover:border-[#18B978]/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#6E6E6E]">DOSSIER ITEM: 02</span>
                  <span className="text-[#18B978]">ARCHITECTURAL RESPONSE</span>
                </div>
                <h3 className="font-syne text-3xl font-bold text-[#F5F5F5]">THE SOLUTION</h3>
                <p className="text-sm text-[#A5A5A5] leading-relaxed font-light">
                  MediKiosk unifies voice, touch, text, and OCR document parsing, adaptive AI-guided questioning, and instant clinical summarization into a kiosk-form factor to construct a normalized case summary before the patient ever enters the examination room.
                </p>
              </div>

              <div className="p-4 bg-[#131313] border border-[#262626] rounded-lg space-y-1 font-mono text-xs">
                <span className="text-[#18B978] block">✓ PRE-CONSULTATION CLINICAL SYNERGY</span>
                <p className="text-[#A5A5A5] leading-relaxed text-[11px]">
                  Engineered not to replace medical intuition, but to bridge patient intake and doctor workflow for peak efficiency—without replacing human clinical judgment.
                </p>
              </div>
            </div>

          </div>

          {/* Section 03: User Journey & Interaction Flow (8 Steps) */}
          <div className="space-y-6 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2A2A2A] pb-3 gap-2">
              <div>
                <span className="font-mono text-xs text-[#18B978] uppercase block">// SEQUENCE MAP</span>
                <h3 className="font-syne text-3xl font-bold text-[#F5F5F5]">03 // USER JOURNEY &amp; INTERACTION FLOW</h3>
              </div>
              <p className="text-xs font-mono text-[#6E6E6E]">&quot;An end-to-end patient experience design built for zero-friction in clinical synthesis.&quot;</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { id: "01", name: "QR / Kiosk Entry", desc: "Patient scans appointment card or initiates walk-in touch session." },
                { id: "02", name: "Patient ID", desc: "Basic demographic confirmation and baseline medical record retrieval." },
                { id: "03", name: "Symptom Description", desc: "Voice or touch input for primary complaint and symptom onset." },
                { id: "04", name: "Adaptive Questions", desc: "Context-aware dynamic follow-up prompts tailored to initial tags." },
                { id: "05", name: "Document OCR", desc: "Extraction of previous prescriptions, lab test reports, and lab sheets." },
                { id: "06", name: "AI Case Summary", desc: "Structuring unstructured input into standardized clinical intake notes." },
                { id: "07", name: "Red-Flag Check", desc: "Algorithmic scan for urgent triggers demanding immediate triage priority." },
                { id: "08", name: "Doctor Review", desc: "Physician receives structured electronic intake ahead of consultation." },
              ].map((step) => (
                <div key={step.id} className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-5 space-y-2 hover:border-[#18B978]/50 transition-colors">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#18B978] font-bold">{step.id}</span>
                    <span className="text-[#6E6E6E]">STAGE</span>
                  </div>
                  <h4 className="font-syne font-bold text-base text-[#F5F5F5]">{step.name}</h4>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 04: Technical Specification */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">04 // TECHNICAL SPECIFICATION</h3>
              <span className="font-mono text-xs text-[#6E6E6E]">// ENGINEERING STACK</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-3">
                <span className="font-mono text-xs text-[#18B978]">MODULE 01</span>
                <h4 className="font-syne font-bold text-lg text-[#F5F5F5]">Frontend</h4>
                <ul className="text-xs text-[#A5A5A5] space-y-1 font-mono">
                  <li>• Next.js / React</li>
                  <li>• Tailwind CSS</li>
                  <li>• Kiosk Touch UI</li>
                  <li>• Voice Recording API</li>
                </ul>
              </div>

              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-3">
                <span className="font-mono text-xs text-[#18B978]">MODULE 02</span>
                <h4 className="font-syne font-bold text-lg text-[#F5F5F5]">Backend &amp; Data</h4>
                <ul className="text-xs text-[#A5A5A5] space-y-1 font-mono">
                  <li>• Database: PostgreSQL</li>
                  <li>• Node REST APIs</li>
                  <li>• Real-Time Telemetry</li>
                  <li>• Fast Image Buffer Parsing</li>
                </ul>
              </div>

              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-3">
                <span className="font-mono text-xs text-[#18B978]">MODULE 03</span>
                <h4 className="font-syne font-bold text-lg text-[#F5F5F5]">AI Subsystems</h4>
                <ul className="text-xs text-[#A5A5A5] space-y-1 font-mono">
                  <li>• Adaptive Question Engine</li>
                  <li>• Speech-to-Text Transcription</li>
                  <li>• Document OCR Engine</li>
                  <li>• Clinical Summary Generator</li>
                </ul>
              </div>

              <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-3">
                <span className="font-mono text-xs text-[#18B978]">MODULE 04</span>
                <h4 className="font-syne font-bold text-lg text-[#F5F5F5]">DevOps &amp; Tooling</h4>
                <ul className="text-xs text-[#A5A5A5] space-y-1 font-mono">
                  <li>• Git Version Control</li>
                  <li>• GitHub Repositories</li>
                  <li>• Express Edge Service</li>
                  <li>• Docker Deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 05: System Architecture */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">05 // SYSTEM ARCHITECTURE</h3>
              <span className="font-mono text-xs text-[#6E6E6E]">// END-TO-END SIGNAL PIPELINE</span>
            </div>

            <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { step: "01", title: "PATIENT", desc: "Self-Report Intake" },
                  { step: "02", title: "KIOSK INTERFACE", desc: "Touch / Voice / Sensors" },
                  { step: "03", title: "INPUT LAYER", desc: "Audio / Touch / Text / OCR" },
                  { step: "04", title: "AI PROCESSING", desc: "Summary & Red-Flag Engine", highlight: true },
                  { step: "05", title: "DATABASE / DATA", desc: "Postgres Real-Time Storage" },
                  { step: "06", title: "DOCTOR UI", desc: "Pre-Consultation Summary View" },
                ].map((node) => (
                  <div
                    key={node.step}
                    className={`p-4 rounded-lg border text-center space-y-1 ${
                      node.highlight
                        ? "bg-[#18B978]/15 border-[#18B978]"
                        : "bg-[#131313] border-[#262626]"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[#18B978] block">{node.step} // NODE</span>
                    <h4 className="font-syne font-bold text-xs text-[#F5F5F5] uppercase">{node.title}</h4>
                    <p className="font-mono text-[9px] text-[#A5A5A5]">{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 06: Capability Matrix */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <h3 className="font-syne text-2xl font-bold text-[#F5F5F5]">06 // CAPABILITY MATRIX</h3>
              <span className="font-mono text-xs text-[#6E6E6E]">// SYSTEM FEATURES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: "01", title: "PATIENT CASE TAKING", desc: "Structured onboarding framework for capturing primary current symptoms and history timeline." },
                { id: "02", title: "MULTIMODAL INPUT", desc: "Dual interaction supporting touch screening, UI-guided keyboards, and high-precision speech interfaces." },
                { id: "03", title: "MULTILINGUAL CONVERSATION", desc: "Accessible language translation allowing patients to articulate symptoms in their preferred native vernacular." },
                { id: "04", title: "SPEECH-TO-TEXT", desc: "Real-time audio transcription converting spoken conversation into medical domain text tokens." },
                { id: "05", title: "OCR DOCUMENT INGEST", desc: "Optical character recognition parsing physical prescriptions, discharge summaries, and medication records." },
                { id: "06", title: "AI CLINICAL SUMMARY", desc: "Generative clinical synthesis organizing raw patient inputs into concise SOAP-style intake notes for doctor review." },
                { id: "07", title: "RED-FLAG DETECTION", desc: "Heuristic-driven flag detection scanning for critical symptoms to trigger immediate emergency priority queueing." },
                { id: "08", title: "PATIENT TIMELINE", desc: "Chronological mapping of past records, progression markers, and symptom changes over time." },
                { id: "09", title: "DOCTOR DASHBOARD", desc: "A dedicated consultation dashboard presenting structured intake summaries before the patient enters the consultation room." },
                { id: "10", title: "QUEUE / TOKEN SYSTEM", desc: "Real-time queue management integrated with triage status for waiting room coordination." },
                { id: "11", title: "QR-BASED CONTACTLESS ACCESS", desc: "Allows patients to transfer intake session to their personal smartphone for private symptom entry away from the kiosk display." },
              ].map((cap) => (
                <div key={cap.id} className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6 space-y-3 hover:border-[#18B978]/50 transition-colors">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#18B978] font-bold">{cap.id}</span>
                    <CheckCircle2 size={14} className="text-[#18B978]" />
                  </div>
                  <h4 className="font-syne font-bold text-sm text-[#F5F5F5] uppercase">{cap.title}</h4>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed font-light">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 07 & 08: What I Learned & My Role */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            
            {/* What I Learned */}
            <div className="lg:col-span-7 bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#18B978]">// RETROSPECTIVE &amp; REFLECTION</span>
                <h3 className="font-syne text-3xl font-bold text-[#F5F5F5]">07 // WHAT I LEARNED</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">✓ Designing for high-stress real-world environments</h4>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Recognized that medical software must prioritize clarity over visual clutter to reduce cognitive fatigue for both patients and doctors.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-[#262626]">
                  <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">✓ Structuring unstructured information</h4>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Synthesizing narrative descriptions into clean clinical data formats.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-[#262626]">
                  <h4 className="font-syne font-bold text-sm text-[#F5F5F5]">✓ Balancing AI automation with clinical judgment</h4>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    Positioning AI as an intake assistant rather than an autonomous decision-maker.
                  </p>
                </div>
              </div>
            </div>

            {/* My Role */}
            <div className="lg:col-span-5 bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#18B978]">// CAPACITY &amp; LEADERSHIP</span>
                  <h3 className="font-syne text-3xl font-bold text-[#F5F5F5]">08 // MY ROLE</h3>
                </div>

                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  Ideation, system architecture design, and front-end interface implementation across the entire stack.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-[#18B978]">
                    {["LEAD DEVELOPER", "SYSTEM ARCHITECT", "FEATURE DESIGNER", "DATABASE ARCHITECT"].map((r) => (
                      <span key={r} className="px-2.5 py-1 bg-[#131313] border border-[#262626] rounded uppercase">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#131313] border border-[#262626] rounded-lg font-mono text-xs text-[#A5A5A5] leading-relaxed">
                MediKiosk serves as an exploration into how technology can make healthcare intake more human, efficient, and structured.
              </div>
            </div>

          </div>

          {/* Bottom Banner Quote */}
          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-10 text-center space-y-4">
            <span className="font-mono text-xs text-[#18B978] uppercase tracking-widest block">// PHILOSOPHICAL THESIS</span>
            <h3 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5] max-w-4xl mx-auto uppercase">
              &quot;BUILDING TECHNOLOGY AROUND REAL PROBLEMS.&quot;
            </h3>

            <div className="pt-6 flex items-center justify-between font-mono text-xs border-t border-[#262626]">
              <Link href="/projects" className="text-[#A5A5A5] hover:text-[#F5F5F5] flex items-center gap-2">
                <ArrowLeft size={14} />
                <span>ALL PROJECTS</span>
              </Link>
              <span className="text-[#18B978]">NEXT: TOYOTA COROLLA DATA ANALYSIS &rarr;</span>
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
