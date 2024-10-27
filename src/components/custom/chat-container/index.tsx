import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PDFUploader from "../pdf-uploader";

const ChatContainer = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <div className="flex w-full h-full p-4 justify-center items-center">
            <PDFUploader />
          </div>
        </div>
        <div className="md:pt-0 md:border-transparent w-full mb-4">
          <div className="m-auto text-base px-3 w-full md:px-5 lg:px-4 xl:px-5">
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
