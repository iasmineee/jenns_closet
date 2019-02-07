import React, { Component } from "react";
import "./SelectorDisplay.scss";
import { getStyles } from "./api/getStyles";
import ImageDisplayArea from "./ImageDisplayArea";

let styles = getStyles();

class SelectorDisplay extends Component {
  render() {
    return (
      <div className="SelectorDisplay">
        <ImageDisplayArea styles={styles.tops} />
        <ImageDisplayArea styles={styles.bottoms} />
      </div>
    );
  }
}

export default SelectorDisplay;
