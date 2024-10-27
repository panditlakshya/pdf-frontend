// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col h-full">
          <div className="border border-red-500 flex-1">1</div>
          <div className="md:pt-0 md:border-transparent w-full">
            <div className="m-auto text-base px-3 w-full md:px-5 lg:px-4 xl:px-5">
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
