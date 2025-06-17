import React, { useRef, useState } from 'react';
import OCRProcessor from './OCRProcess';
interface ImageUploaderProps {
    onTextExtracted: (text: string) => void;
    onProcessingChange: (isProcessing: boolean) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onTextExtracted, onProcessingChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            const file = e.target.files[0];
            setImageFile(file);
            onProcessingChange(true); // Indica que comenzó el procesamiento

            // Crear preview de la imagen
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files?.length) {
            const file = e.dataTransfer.files[0];
            setImageFile(file);
            onProcessingChange(true); // Indica que comenzó el procesamiento

            // Crear preview de la imagen
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleTextExtracted = (text: string) => {
        onTextExtracted(text);
        onProcessingChange(false);
    };

    const resetImage = () => {
        setImageFile(null);
        setImagePreview(null);
        onTextExtracted('');
        onProcessingChange(false);
    };

    return (
        <>
            <div
                className="w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-md bg-white border border-gray-300
          hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={!imageFile ? handleClick : undefined}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {!imageFile ? (
                    <div className="flex flex-col items-center justify-center space-y-4 text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 animate-bounce-slow"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="text-xl font-semibold text-center text-gray-800">
                            Arrastra una imagen o haz clic para seleccionar
                        </p>
                        <p className="text-sm text-center text-gray-500">
                            Formatos soportados: JPEG, PNG y WEBP
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {imagePreview && (
                            <div className="flex justify-center">
                                <img
                                    src={imagePreview}
                                    alt="Vista previa"
                                    className="max-w-full max-h-96 rounded-lg shadow-md"
                                />
                            </div>
                        )}
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-2">
                                Imagen seleccionada: <strong>{imageFile.name}</strong>
                            </p>
                            <button
                                onClick={resetImage}
                                className="text-sm text-red-600 hover:text-red-800 underline"
                            >
                                Cambiar imagen
                            </button>
                        </div>
                    </div>
                )}

                <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>

            {imageFile && (
                <OCRProcessor
                    imageFile={imageFile}
                    onTextExtracted={handleTextExtracted}

                />
            )}
        </>
    );
};

export default ImageUploader;