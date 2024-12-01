"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, Target } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { AnalysisResult } from "../types";

export function AnalysisResults({ result }: { result: AnalysisResult }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Resume Analysis Results</CardTitle>
          <CardDescription>
            Overall score and key improvement areas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">ATS Compatibility Score</span>
                <span className="text-sm font-medium">{result.score}%</span>
              </div>
              <Progress value={result.score} className="h-2" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">Key Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {result.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <CardTitle className="text-lg">Improvement Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.suggestions
                      .filter((s) => s.priority === "high")
                      .map((suggestion, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-sm"
                        >
                          <span className="text-yellow-500">•</span>
                          <span>{suggestion.content}</span>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}