
import React, { useState } from 'react';
import Header from '@/components/Header';
import FileUpload from '@/components/FileUpload';
import LoadingSpinner from '@/components/LoadingSpinner';
import AnalysisResults from '@/components/AnalysisResults';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Mock data for demonstration
const mockAnalysisData = {
  overallScore: 78,
  sections: [
    {
      name: 'Contact Information',
      score: 95,
      status: 'good' as const,
      feedback: 'Complete contact information with professional email and phone number.'
    },
    {
      name: 'Professional Summary',
      score: 72,
      status: 'warning' as const,
      feedback: 'Good summary but could be more tailored to specific job roles.'
    },
    {
      name: 'Work Experience',
      score: 85,
      status: 'good' as const,
      feedback: 'Strong work experience with quantifiable achievements.'
    },
    {
      name: 'Skills Section',
      score: 65,
      status: 'warning' as const,
      feedback: 'Missing some relevant technical skills for your target role.'
    },
    {
      name: 'Education',
      score: 80,
      status: 'good' as const,
      feedback: 'Relevant education background clearly presented.'
    }
  ],
  keywords: {
    found: ['JavaScript', 'React', 'Node.js', 'Project Management', 'Team Leadership'],
    missing: ['TypeScript', 'AWS', 'Docker', 'Agile', 'API Development']
  },
  recommendations: [
    'Add more specific technical skills relevant to your target role',
    'Include quantifiable achievements in your work experience',
    'Optimize your professional summary for ATS systems',
    'Add relevant certifications or courses',
    'Include links to your portfolio or GitHub profile',
    'Use more action verbs to describe your accomplishments'
  ]
};

const Index = () => {
  const [step, setStep] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [analysisData, setAnalysisData] = useState(mockAnalysisData);

  const handleFileSelect = (file: File) => {
    console.log('File selected:', file.name);
    setStep('analyzing');
    
    // Simulate API call to Flask backend
    setTimeout(() => {
      setStep('results');
    }, 3000);
  };

  const resetAnalysis = () => {
    setStep('upload');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {step === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Improve Your Resume with AI
              </h2>
              <p className="text-lg text-muted-foreground">
                Upload your resume and get instant, actionable feedback to stand out to employers
              </p>
            </div>
            <FileUpload onFileSelect={handleFileSelect} isAnalyzing={false} />
          </div>
        )}

        {step === 'analyzing' && (
          <div className="max-w-2xl mx-auto">
            <LoadingSpinner />
          </div>
        )}

        {step === 'results' && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="outline" onClick={resetAnalysis} className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Analyze Another Resume
              </Button>
              <h2 className="text-3xl font-bold text-foreground">
                Resume Analysis Complete
              </h2>
              <p className="text-muted-foreground">
                Here's your personalized AI-powered resume analysis
              </p>
            </div>
            <AnalysisResults data={analysisData} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
