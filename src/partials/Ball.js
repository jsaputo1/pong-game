console.log("working Ball.js");
import { SVG_NS } from "../settings.js";

export default class ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    //resets the ball in the middle of the board
    this.reset();
  }

  reset() {
    //code to centre ball for movement
  }

  render(svg) {
    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "cx", this.boardWidth / 2);
    circle.setAttributeNS(null, "cy", this.boardHeight / 2);
    circle.setAttributeNS(null, "fill", "white");

    svg.appendChild(circle);
  }
}
