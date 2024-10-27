import "./App.css";
import ChatContainer from "./components/custom/chat-container";
import { PDFUploadProvider } from "./hooks/usePDFfile";

import Layout from "./layouts";

function App() {
  return (
    <>
      <PDFUploadProvider>
        <Layout>
          <ChatContainer />
        </Layout>
      </PDFUploadProvider>
    </>
  );
}

export default App;
