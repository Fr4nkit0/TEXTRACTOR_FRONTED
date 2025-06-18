import React, { useState } from 'react';
import ImageUploader from "../components/ImageUploader";

const Index: React.FC = () => {
  const [extractedText, setExtractedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const steps: [string, string, string] = [
    "Sube una imagen con texto",
    "Espera mientras procesamos la imagen",
    "Obtén el texto extraído listo para copiar",
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(extractedText);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            OCR - Reconocimiento de Texto
          </h1>
          <p className="text-lg text-blue-600 max-w-xl mx-auto">
            Extrae texto de imágenes de forma rápida y sencilla utilizando tecnología de reconocimiento óptico de caracteres.
          </p>
        </header>

        <main>
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <ImageUploader
                onTextExtracted={setExtractedText}
                onProcessingChange={setIsProcessing}
              />
            </div>

            {extractedText && !isProcessing && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Texto extraído:</h3>
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    Copiar texto
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800">{extractedText}</pre>
                </div>
              </div>
            )}

            {!isProcessing && !extractedText && (
              <div className="mt-12 bg-white p-6 rounded-lg shadow-md animate-fade-in">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  ¿Cómo funciona?
                </h2>
                <ol className="space-y-3">
                  {steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 bg-gray-50 p-2.5 rounded-md shadow-sm"
                    >
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-800 text-sm leading-snug">{step}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm text-blue-700">
                  <p><strong>Nota:</strong> Para obtener mejores resultados, utiliza imágenes con texto claro y buena iluminación.</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;