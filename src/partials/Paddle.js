console.log("working Paddles.js");
import { SVG_NS } from "../settings.js";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    (this.y = Math.min(0, 256)), Math.max(0, 256), y;
    this.speed = 10;
    this.score = 0;

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case up:
          this.y = this.y - this.speed;
          break;
        case down:
          this.y = this.y + this.speed;
          break;
      }
    });
  }

  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");

    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "fill", "white");
    svg.appendChild(rect);
  }
}

// !-- left paddle -->
// <!-- <rect height="56" width="8" fill="white" x="10" y="100" /> -->
// <!-- right paddle -->

// const boardHeight = "";
