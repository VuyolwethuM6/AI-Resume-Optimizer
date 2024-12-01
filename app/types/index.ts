export interface Resume {
  id: string;
  content: string;
  score: number;
  suggestions: Suggestion[];
  keywords: string[];
  timestamp: string;
}

export interface Suggestion {
  section: string;
  content: string;
  type: 'improvement' | 'missing' | 'format';
  priority: 'high' | 'medium' | 'low';
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  description: string;
  buttonText: string;
}

export interface AnalysisResult {
  score: number;
  suggestions: Suggestion[];
  keywords: string[];
}