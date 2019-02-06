import React from 'react';
import "./Button.css";

const Button = (props: { 
    text: String,
    width?: number,
    height?: number,
}) => {
    return (
        <div className="Button" style={{
            width: props.width || 100,
            height: props.height || 75,
        }}>
            <div className="Button-Inner">
              <p className="Text">{props.text}</p>
            </div>
        </div>
    );
};



export default Button;