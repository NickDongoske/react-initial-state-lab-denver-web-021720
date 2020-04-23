import React, { Component } from "react";

// your ImageSlider code here!


class ImageSlider extends Component {
  state = {
    currentSlideIndex: 0
  }
render() {
  return (
    <div className='ImageSlider'>
     I am on slide {this.state.currentSlideIndex}
    </div>
  )
}
}


export default ImageSlider;