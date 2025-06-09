
import React from 'react';
import { Loader2, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LoadingSpinner = () => {
  return (
    <Card className="p-12">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Brain className="h-12 w-12 text-primary" />
            <Loader2 className="h-6 w-6 text-primary animate-spin absolute -top-1 -right-1" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Analyzing Your Resume
        </h3>
        <p className="text-muted-foreground mb-4">
          Our AI is carefully reviewing your resume...
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Scanning for relevant keywords</p>
          <p>• Analyzing section structure</p>
          <p>• Evaluating content quality</p>
          <p>• Generating personalized recommendations</p>
        </div>
      </div>
    </Card>
  );
};

export default LoadingSpinner;
