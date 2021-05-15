import React from "react";
import CSSModules from "react-css-modules";
import style from "../styles/left-panel.module.scss";

const LeftPanel = () => {
  return (
    <div styleName="wrapper">
      <div styleName="type">Địa chỉ</div>
      <ul>
        <li>
          <input id="hanoi" type="checkbox" />
          <label styleName="label" for="hanoi">
            Hà Nội
          </label>
        </li>

        <li>
          <input id="hcm" type="checkbox" />
          <label styleName="label" for="hcm">
            Tp. HCM
          </label>
        </li>

        <li>
          <input id="thanh-hoa" type="checkbox" />
          <label styleName="label" for="thanh-hoa">
            Thanh Hóa
          </label>
        </li>
      </ul>

      <div styleName="type">Giá</div>

      <ul>
        <li>
          <input id="0-200" type="checkbox" />
          <label styleName="label" for="0-200">
            0 - 200k
          </label>
        </li>

        <li>
          <input id="200-300" type="checkbox" />
          <label styleName="label" for="200-300">
            200k - 300k
          </label>
        </li>

        <li>
          <input id="300~" type="checkbox" />
          <label styleName="label" for="300~">
            300k ~
          </label>
        </li>
      </ul>
    </div>
  );
};

export default CSSModules(LeftPanel, style);
