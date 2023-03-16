import React from "react";
import "./style.css";

function Container(props) {
  return <div className="container" style={{ backgroundImage: `url(${props.backgroundImage})` }}>{props.children}</div>;
}

export default Container;
