import React, { Component } from "react";
import "./ImageDisplayArea.scss";
import Button from "./Button";
import { getStyles } from "./api/getStyles";
import { map } from "lodash";
import { Md5 } from "md5-typescript";

interface ImageDisplayAreaProps {
  styles: Array<string>;
}

class ImageDisplayArea extends Component<ImageDisplayAreaProps, any> {
  constructor(props: ImageDisplayAreaProps) {
    super(props);

    this.state = {
      index: 0
    };
    this.handleFastForward = this.handleFastForward.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRewind = this.handleRewind.bind(this);
  }

  renderImages() {
    let length = this.props.styles.length;
    return map(this.props.styles, (style: string) => {
      const hash = Md5.init(style).slice(0, 2);
      const src = `https://pc-ap.rtrcdn.com/productimages/nomodel/270x/${hash}/${style}.jpg`;
      return (
        <div className="ImageDisplayArea-Carousel-Image" key={style}>
          <img src={src} />
        </div>
      );
    });
  }

  handleFastForward() {
    if (this.state.index < this.props.styles.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  }

  handleRewind() {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: this.props.styles.length - 1 });
    }
  }

  handlePlay() {}

  render() {
    const carouselWidth = this.props.styles.length * 48;
    const offset = 48 * this.state.index;
    return (
      <div className="ImageDisplayArea">
        <div
          className="ImageDisplayArea-Carousel"
          style={{
            width: carouselWidth + "vw",
            marginLeft: `-${offset}vw`
          }}
        >
          {this.renderImages()}
        </div>
        <div className="ImageDisplayArea-Buttons">
          <Button text="<<" onClick={this.handleRewind} />
          <Button text=">" onClick={this.handlePlay} />
          <Button text=">>" onClick={this.handleFastForward} />
        </div>
      </div>
    );
  }
}

export default ImageDisplayArea;
