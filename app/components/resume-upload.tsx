"use client";

import { Upload, FileText, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="p-8 gradient-border bg-card">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold gradient-text">Upload Your Resume</h3>
            <p className="text-muted-foreground">
              Upload your resume and we'll analyze it against the job description
            </p>
            <div
              className={`upload-zone relative rounded-lg border-2 border-dashed transition-all ${
                isDragging ? "border-primary bg-primary/5" : "border-muted"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label
                htmlFor="resume-upload"
                className="flex flex-col items-center justify-center h-64 cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  {file ? (
                    <>
                      <FileText className="w-12 h-12 text-primary" />
                      <p className="text-sm font-medium">{file.name}</p>
                    </>
                  ) : (
                    <>
                      <Upload className="w-12 h-12 text-muted-foreground" />
                      <div className="text-center space-y-2">
                        <p className="text-sm font-medium">
                          Drop your resume here or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Supports PDF, DOCX (Max 5MB)
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <Input
                  id="resume-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold gradient-text">Job Description</h3>
            <p className="text-muted-foreground">
              Paste the job description to match your resume against
            </p>
            <Textarea
              className="min-h-[200px] resize-none"
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-lg"
            disabled={!file || !jobDescription || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Resume"
            )}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}