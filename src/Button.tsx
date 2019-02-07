import React from "react";
import "./Button.scss";

const Button = (props: {
  text: String;
  width?: number;
  height?: number;
  activated?: boolean;
}) => {
  let className = "Button";
  if (props.activated) {
    className += " Active";
  }
  return (
    <div
      className={className}
      style={{
        width: props.width || 100,
        height: props.height || 75
      }}
    >
      <div className="Button-Inner">
        <p className="Text">{props.text}</p>
      </div>
    </div>
  );
};

export default Button;
