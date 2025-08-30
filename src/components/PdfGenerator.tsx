import { useState } from "react";
import { Button } from "./ui/Button";

export default function PdfGenerator() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const createPdf = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/pdf", {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      console.error(err);
      alert("Error creating PDF");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Button onClick={createPdf} className="sm:w-auto sm:max-w-xs">
        Create PDF
      </Button>

      {pdfUrl && (
        <div className="w-full flex justify-center">
          <div
            className="relative w-full mx-auto"
            style={{
              maxWidth: "min(90vw, calcl(100vh * 0.707))", // A4 width/height ratio
              maxHeight: "calc(100vh - 250px)", // leave room for header + button + padding
              aspectRatio: "1 / 1.414", // A4 aspect ratio
            }}
          >
            <iframe
              src={pdfUrl}
              title="Generated PDF"
              className="absolute top-0 left-0 w-full h-full border rounded shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
