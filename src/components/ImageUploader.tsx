const ImageUploader = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-md bg-white border border-gray-300
      hover:shadow-lg transition-shadow duration-300 cursor-pointer">

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
                    Formatos soportados: JPEG, PNG, BMP, ETC...
                </p>
            </div>
        </div>
    )
}


export default ImageUploader;