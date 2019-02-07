import React from "react";
import "./Button.scss";

const Button = (props: {
  text: String;
  width?: number;
  height?: number;
  activated?: boolean;
  onClick?: () => void;
}) => {
  let className = "Button";
  if (props.activated) {
    className += " Active";
  }
  return (
    <a
      className={className}
      style={{
        width: props.width,
        height: props.height
      }}
      onClick={props.onClick}
    >
      <div className="Button-Inner">
        <p className="Text">{props.text}</p>
      </div>
    </a>
  );
};

export default Button;
