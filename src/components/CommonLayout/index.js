import Headers from "components/Headers";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Headers />
      <div className="container">{children}</div>
    </div>
  );
};

export default CommonLayout;
