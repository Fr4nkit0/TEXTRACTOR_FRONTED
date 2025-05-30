// import React, { useState, useEffect } from 'react';
// import { createWorker } from 'tesseract.js';
// import LoadingSpinner from './LoadingSpinner.tsx';

// interface OCRProcessorProps {
//     imageFile: File | null;
//     onTextExtracted: (text: string) => void;
// }

// const OCRProcessor: React.FC<OCRProcessorProps> = ({ imageFile, onTextExtracted }) => {
//     const [progress, setProgress] = useState(0);
//     const [status, setStatus] = useState('');
//     const [isProcessing, setIsProcessing] = useState(false);

//     useEffect(() => {
//         if (!imageFile) return;

//         const processImage = async () => {
//             setIsProcessing(true);
//             setProgress(0);
//             setStatus('Inicializando...');

//             try {
//                 const worker = await createWorker();

//                 // Add progress monitoring
//                 worker.setProgressHandler((p) => {
//                     if (p.status === 'recognizing text') {
//                         setProgress(p.progress * 100);
//                     }
//                     setStatus(p.status);
//                 });

//                 await worker.load();
//                 await worker.loadLanguage('spa+eng');
//                 await worker.initialize('spa+eng');

//                 setStatus('Reconociendo texto...');
//                 const { data } = await worker.recognize(imageFile);

//                 await worker.terminate();
//                 onTextExtracted(data.text);
//                 setIsProcessing(false);
//             } catch (error) {
//                 console.error('Error en el procesamiento OCR:', error);
//                 setStatus('Error en el procesamiento');
//                 setTimeout(() => setIsProcessing(false), 1000);
//             }
//         };

//         processImage();
//     }, [imageFile, onTextExtracted]);

//     if (!isProcessing) return null;

//     return (
//         <div className="my-8 animate-fade-in">
//             <LoadingSpinner message={`${status}`} progress={progress} />
//         </div>
//     );
// };

// export default OCRProcessor;