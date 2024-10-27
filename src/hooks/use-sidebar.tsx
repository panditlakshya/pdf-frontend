import { APPLICATIONS } from "@/const";
import { useState } from "react";

const useSidebar = () => {
  const [app, setApp] = useState(APPLICATIONS[0].id);

  return {
    app,
    setApp,
  };
};

export default useSidebar;
