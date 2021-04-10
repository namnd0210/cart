import React from "react";
import LeftPanel from "../LeftPanel/index";
import RightPanel from "./RightPanel";
import CSSModules from "react-css-modules";
import style from "./style.module.scss";

const index = () => {
  return (
    <div styleName="container">
      <LeftPanel />

      <RightPanel />
    </div>
  );
};

export default CSSModules(index, style);
