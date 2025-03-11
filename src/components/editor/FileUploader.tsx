
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, FileType, File, FileCheck } from "lucide-react";
import { extractContentFromFile } from '@/lib/articleService';
import { toast } from 'sonner';
import { Progress } from "@/components/ui/progress";

interface FileUploaderProps {
  onContentExtracted: (data: {
    title: string;
    content: string[];
    category: string;
    author: string;
  }) => void;
}

const FileUploader = ({ onContentExtracted }: FileUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    // Validate file type
    if (!['pdf', 'doc', 'docx', 'txt', 'pages'].includes(fileExtension || '')) {
      toast.error('Unsupported file format. Please upload a PDF, Word, or Pages document.');
      return;
    }
    
    setUploadedFileName(file.name);
    setIsUploading(true);
    setUploadProgress(10);
    
    try {
      // Simulate progressive upload/processing
      const simulateProgress = () => {
        let progress = 10;
        const interval = setInterval(() => {
          progress += Math.floor(Math.random() * 15);
          if (progress > 90) {
            clearInterval(interval);
            progress = 90; // Cap at 90% until actual completion
          }
          setUploadProgress(progress);
        }, 500);
        return interval;
      };
      
      const progressInterval = simulateProgress();
      
      const extractedData = await extractContentFromFile(file);
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      // Small delay to show 100% completion before calling the callback
      setTimeout(() => {
        onContentExtracted(extractedData);
        toast.success('Document successfully processed in New York Times style');
      }, 500);
      
    } catch (error) {
      toast.error('Failed to process document. Please try again.');
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsUploading(false);
        setUploadProgress(0);
      }, 1000);
    }
  };

  const getFileIcon = () => {
    if (!uploadedFileName) return <FileType className="h-8 w-8 text-nyt-gray" />;
    
    // Show a different icon based on upload state
    if (isUploading) {
      return <File className="h-8 w-8 text-nyt-blue animate-pulse" />;
    }
    
    return <FileCheck className="h-8 w-8 text-nyt-green" />;
  };
  
  return (
    <div className="border-2 border-dashed border-nyt-gray-light rounded-md p-6 text-center bg-white transition-all hover:border-nyt-gray">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 bg-nyt-background rounded-full">
          {getFileIcon()}
        </div>
        
        <div className="text-center">
          <h3 className="font-serif text-lg font-semibold mb-1">
            {isUploading ? 'Processing document...' : 'Upload your document'}
          </h3>
          <p className="text-nyt-gray text-sm max-w-xs mx-auto">
            {uploadedFileName || 'Upload a PDF, Word, or Pages document to automatically format it in New York Times style'}
          </p>
        </div>
        
        {isUploading && (
          <div className="w-full max-w-xs">
            <Progress value={uploadProgress} className="h-2" />
            <p className="text-xs text-nyt-gray mt-1">
              {uploadProgress < 30 ? 'Uploading...' : 
               uploadProgress < 60 ? 'Extracting content...' : 
               uploadProgress < 90 ? 'Formatting to NYT style...' : 
               'Finalizing...'}
            </p>
          </div>
        )}
        
        <div className="relative w-full max-w-xs">
          <Input
            type="file"
            accept=".pdf,.doc,.docx,.txt,.pages"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          <Button 
            variant="outline" 
            className={`w-full relative ${isUploading ? 'bg-gray-50' : 'hover:bg-nyt-background'}`}
            disabled={isUploading}
          >
            <Upload className="h-4 w-4 mr-2" />
            {isUploading ? 'Processing...' : 'Select file'}
          </Button>
        </div>
        
        {uploadedFileName && !isUploading && (
          <div className="text-xs text-nyt-gray flex items-center">
            <FileCheck className="h-3 w-3 mr-1 text-nyt-green" />
            Current file: {uploadedFileName}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
