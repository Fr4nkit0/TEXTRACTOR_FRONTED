import React, { useEffect, useState, useCallback } from 'react';
import LoadingSpinner from './LoadingSpinner';
import Tesseract from 'tesseract.js';

interface OCRProcessorProps {
  imageFile: File | null;
  onTextExtracted: (text: string) => void;
  onProcessingChange?: (isProcessing: boolean) => void;
}

const OCRProcessor: React.FC<OCRProcessorProps> = ({
  imageFile,
  onTextExtracted,
  onProcessingChange
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processImage = useCallback(async (file: File) => {
    setIsProcessing(true);
    onProcessingChange?.(true);

    try {
      const { data } = await Tesseract.recognize(file, 'spa');
      onTextExtracted(data.text);
    } catch (error) {
      console.error('Error en el procesamiento OCR:', error);
    } finally {
      setTimeout(() => {
        setIsProcessing(false);
        onProcessingChange?.(false);
      }, 1500);
    }
  }, [onTextExtracted, onProcessingChange]);

  useEffect(() => {
    if (imageFile) {
      processImage(imageFile);
    }
  }, [imageFile, processImage]);

  if (!isProcessing) return null;

  return (
    <div className="my-8 animate-fade-in">
      <LoadingSpinner />
    </div>
  );
};

export default OCRProcessor;

