"use client";

import { useState } from "react";
import { HeroSection } from "./components/hero-section";
import { ResumeUpload } from "./components/resume-upload";
import { Pricing } from "./components/pricing";
import { AnalysisResults } from "./components/analysis-results";
import type { AnalysisResult } from "./types";

const mockResult: AnalysisResult = {
  score: 85,
  keywords: ["React", "TypeScript", "Node.js", "AWS", "Agile"],
  suggestions: [
    {
      section: "Skills",
      content: "Add more specific technical skills related to the job description",
      type: "improvement",
      priority: "high",
    },
    {
      section: "Experience",
      content: "Quantify your achievements with specific metrics",
      type: "improvement",
      priority: "high",
    },
  ],
};

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <div className="space-y-16">
          <ResumeUpload />
          {analysisResult && <AnalysisResults result={analysisResult} />}
          <Pricing />
        </div>
      </div>
    </main>
  );
}