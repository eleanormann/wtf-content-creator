import React from "react";
import PdfGenerator from "./components/PdfGenerator";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-4 sm:px-6 py-4 shadow-md bg-white">
        <div className="text-lg font-bold">Logo</div>
        <button
          className="flex flex-col justify-center space-y-1 sm:space-y-1.5"
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-col flex-grow p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Intro text */}
        <div className="text-center mx-auto space-y-3 sm:space-y-4 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Where to Find Generator
          </h1>
          <p className="max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Click the button below to create the latest "Where to Find" for the
            Derbyshire Integroup
          </p>
        </div>

        {/* PDF Generator Section */}
        <div className="flex justify-center w-full">
          <div className="w-full px-2 sm:px-0">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <PdfGenerator />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;


