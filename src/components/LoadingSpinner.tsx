import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center p-6 animate-fade-in">
            <div className="relative">
                <div className="h-16 w-16 rounded-full border-4 border-blue-200 animate-spin-slow"></div>
                <div
                    className="h-16 w-16 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent absolute top-0 animate-spin-slow"
                    style={{ animationDirection: 'reverse' }}
                ></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;