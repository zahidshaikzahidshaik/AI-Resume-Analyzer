
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  isAnalyzing: boolean;
}

const FileUpload = ({ onFileSelect, isAnalyzing }: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <Card className="p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Upload Your Resume</h2>
        <p className="text-muted-foreground">
          Upload your resume in PDF, DOC, or DOCX format for AI-powered analysis
        </p>
      </div>

      {!selectedFile ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
            ${isDragActive 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary/50'
            }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-lg font-medium text-foreground mb-2">
            {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume here'}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            or click to browse files
          </p>
          <Button variant="outline">Choose File</Button>
        </div>
      ) : (
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium text-foreground">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            {!isAnalyzing && (
              <Button variant="ghost" size="sm" onClick={removeFile}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default FileUpload;
