
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, XCircle, TrendingUp } from 'lucide-react';

interface AnalysisData {
  overallScore: number;
  sections: {
    name: string;
    score: number;
    status: 'good' | 'warning' | 'poor';
    feedback: string;
  }[];
  keywords: {
    found: string[];
    missing: string[];
  };
  recommendations: string[];
}

interface AnalysisResultsProps {
  data: AnalysisData;
}

const AnalysisResults = ({ data }: AnalysisResultsProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'poor':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span>Overall Resume Score</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className={`text-4xl font-bold ${getScoreColor(data.overallScore)}`}>
              {data.overallScore}/100
            </div>
            <p className="text-muted-foreground">Resume Quality Score</p>
          </div>
          <Progress value={data.overallScore} className="h-3" />
        </CardContent>
      </Card>

      {/* Section Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Section Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.sections.map((section, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(section.status)}
                  <span className="font-medium">{section.name}</span>
                </div>
                <span className={`font-bold ${getScoreColor(section.score)}`}>
                  {section.score}/100
                </span>
              </div>
              <Progress value={section.score} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">{section.feedback}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Keywords Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Keywords Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-green-600 mb-2">Found Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {data.keywords.found.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-red-600 mb-2">Missing Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {data.keywords.missing.map((keyword, index) => (
                  <Badge key={index} variant="outline" className="border-red-200 text-red-600">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {data.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisResults;
