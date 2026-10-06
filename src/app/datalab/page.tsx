"use client";

import React, { useState } from "react";
import { HeaderNav } from "@/components/common/HeaderNav";
import { Footer } from "@/components/common/Footer";
import { DossierBadge } from "@/components/common/DossierBadge";
import { FadeIn } from "@/components/animations/FadeIn";
import { Sliders } from "lucide-react";

export default function DataLabPage() {
  const [dataPoints, setDataPoints] = useState(20);
  const [noiseLevel, setNoiseLevel] = useState(15);

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#F5F5F5]">
      <HeaderNav />
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FadeIn direction="up">
            <DossierBadge label="DOSSIER 09 // INTERACTIVE DATA LAB" />
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight">
              Parametric Data Regression
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
            <div className="bg-[#171717] border border-[#2A2A2A] p-6 space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-[#18B978]">
                <Sliders size={16} />
                <span>PARAMETRIC CONTROLS</span>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-mono text-[#A5A5A5] block">Sample Size: {dataPoints}</label>
                <input type="range" min="10" max="50" value={dataPoints} onChange={(e) => setDataPoints(Number(e.target.value))} className="w-full accent-[#18B978]" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-mono text-[#A5A5A5] block">Noise Multiplier: {noiseLevel}%</label>
                <input type="range" min="0" max="40" value={noiseLevel} onChange={(e) => setNoiseLevel(Number(e.target.value))} className="w-full accent-[#18B978]" />
              </div>
            </div>

            <div className="lg:col-span-2 bg-[#171717] border border-[#2A2A2A] p-8 space-y-4 flex flex-col justify-center">
              <span className="font-mono text-xs text-[#18B978]">LIVE SVG REGRESSION CHART</span>
              <div className="h-64 border border-[#2A2A2A] bg-transparent relative p-4 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <line x1="20" y1="180" x2="380" y2="20" stroke="#18B978" strokeWidth="2" strokeDasharray="4 4" />
                  {Array.from({ length: dataPoints }).map((_, i) => {
                    const x = 30 + (i * 340) / dataPoints;
                    const baseY = 170 - (i * 140) / dataPoints;
                    const y = baseY + (Math.sin(i * 1.5) * noiseLevel);
                    return <circle key={i} cx={x} cy={y} r="4" fill="#18B978" opacity="0.8" />;
                  })}
                </svg>
              </div>
              <p className="text-xs text-[#A5A5A5] font-mono">
                Formula: Y = &beta;<sub>0</sub> + &beta;<sub>1</sub>X + &epsilon; &bull; Dynamic SVG Rendering
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
