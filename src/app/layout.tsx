import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ParticleNetwork } from "@/components/animations/ParticleNetwork";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuberan P | Artificial Intelligence & Data Science Student | Aspiring Data Analyst",
  description: "Kinetic Editorial Portfolio for Kuberan P - AI & Data Science Student & Aspiring Data Analyst.",
  keywords: ["Kuberan P", "Data Analyst", "AI", "Data Science", "Portfolio", "Machine Learning", "MediKiosk"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent text-[#F5F5F5] selection:bg-[#18B978] selection:text-[#111111] relative">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
          <ParticleNetwork />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
