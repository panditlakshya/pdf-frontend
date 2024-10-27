import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PDFUploader from "../pdf-uploader";
import usePDFUploader from "@/hooks/usePDFfile";

const ChatContainer = () => {
  const { pdfFile, handleFileUpload } = usePDFUploader();
  const showPdfUploader = pdfFile.length === 0;
  return (
    <div className="h-full w-full">
      <div className="flex flex-col h-full">
        {showPdfUploader ? (
          <div className="flex-1">
            <div className="flex w-full h-full p-3 md:p-5 lg:p-4 xl:px-5 justify-center items-center">
              <PDFUploader handleFileUpload={handleFileUpload} />
            </div>
          </div>
        ) : (
          <>
            <div className=" flex-1"></div>
          </>
        )}

        <div
          className={
            showPdfUploader
              ? "md:pt-0 md:border-transparent w-full mb-4"
              : "h-full flex justify-center items-center"
          }
        >
          <div className="m-auto text-base px-3 w-full md:px-6 lg:px-12 xl:px-16">
            <div className="flex w-full items-center space-x-2">
              <Input type="text" placeholder="Ask a question..." />
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
