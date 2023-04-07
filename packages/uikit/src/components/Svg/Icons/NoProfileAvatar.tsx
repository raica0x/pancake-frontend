import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <img src="https://i.ibb.co/jyK3BH1/logo.png" alt="logo"/>
    </Svg>
  );
};

export default Icon;
