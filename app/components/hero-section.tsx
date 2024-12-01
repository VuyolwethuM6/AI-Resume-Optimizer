"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="relative inline-block">
        <Sparkles className="absolute -top-8 -right-8 w-6 h-6 text-purple-500" />
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl mb-6">
          <span className="gradient-text">AI-Powered</span>
          <br />
          Resume Optimizer
        </h1>
      </div>
      <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
        Transform your resume with AI precision. Get instant feedback, ATS optimization,
        and tailored suggestions to land your dream job.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          <span>ATS Optimized</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          <span>AI-Powered Analysis</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Instant Results</span>
        </div>
      </div>
    </motion.div>
  );
}