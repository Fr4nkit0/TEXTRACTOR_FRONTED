import React from 'react';

interface LoadingSpinnerProps {
    message?: string;
    progress?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    message = "Procesando...",
    progress
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 animate-fade-in">
            <div className="relative">
                <div className="h-16 w-16 rounded-full border-4 border-blue-200 animate-spin-slow"></div>
                <div
                    className="h-16 w-16 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent absolute top-0 animate-spin-slow"
                    style={{ animationDirection: 'reverse' }}
                ></div>
            </div>
            <p className="mt-4 text-blue-600 font-medium">{message}</p>
            {progress !== undefined && (
                <div className="w-64 h-2 bg-blue-100 rounded-full mt-4">
                    <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default LoadingSpinner;