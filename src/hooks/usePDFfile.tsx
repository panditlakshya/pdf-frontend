import React, { useState, createContext, useContext } from "react";

interface IPDFFILE {
  id: number;
  name: string;
  value: File;
}

const usePdfFileProvider = () => {
  const [pdfFile, setPdfFile] = useState<IPDFFILE[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<IPDFFILE>();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files?.[0];
      setPdfFile([
        ...pdfFile,
        { id: Date.now(), name: file.name, value: file },
      ]);
    }
  };

  const handlePdfSelect = ({ id }: { id: number }) => {
    if (id) {
      setSelectedPdf(pdfFile.find((file) => file.id === id));
    }
  };

  return { pdfFile, selectedPdf, handleFileUpload, handlePdfSelect };
};

const PdfUploaderContext = createContext<ReturnType<
  typeof usePdfFileProvider
> | null>(null);

export const PDFUploadProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = usePdfFileProvider();

  return (
    <PdfUploaderContext.Provider value={value}>
      {children}
    </PdfUploaderContext.Provider>
  );
};

const usePDFUploader = () => {
  const context = useContext(PdfUploaderContext);
  if (!context) throw "useTHemeMode must be used inside provider.";
  return context;
};

export default usePDFUploader;
