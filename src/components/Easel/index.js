/*
 * Easel Component
 * V.2.
 */

import React from 'react';


class Easel extends React.Component {
  constructor (){
    super ();

    this.setup = this.setup.bind (this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return false;
  }

  setup (canvas){
    // Set the width and height of the canvas to the screen size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let drawFunction = this.props.setup (canvas);

    // If the setup has a reacurring draw function
    if (drawFunction) {
      this.draw = this.draw.bind (this, drawFunction)
      this.draw ();
    }
  }

  draw (drawFunction){
    window.requestAnimationFrame (() => { this.draw (drawFunction) });
    drawFunction ();
  }
  

  render (){
    return (
      <canvas id={this.props.id} 
        className={this.props.className} 
        style={this.props.style}
        ref={ this.setup }  />
      );
  }
}

export default Easel;