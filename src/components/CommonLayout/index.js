import Headers from "components/Headers";
import React from "react";
import { Toaster } from "react-hot-toast";

const CommonLayout = ({ children }) => {
  return (
    <div className="container">
      <Headers />
      <Toaster />
      {children}
    </div>
  );
};

export default CommonLayout;
