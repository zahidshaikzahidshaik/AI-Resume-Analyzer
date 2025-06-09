
import React from 'react';
import { Brain, FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Resume Analyzer</h1>
            <p className="text-sm text-muted-foreground">
              Get instant AI-powered insights to improve your resume
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
