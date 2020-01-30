console.log("working Paddles.js");

import { SVG_NS } from "../settings.js";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    this.fill = "white";
    //max score
    this.maxScore = 12;

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });
  }

  //stretch goal
  up() {
    this.y = Math.max(0, this.y - this.speed);
    if (this.y === 0) {
      this.y = 256;
    }
  }
  down() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
    if (this.y === 200) {
      this.y = -56;
    }
  }
  //

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");

    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "fill", this.fill);

    svg.appendChild(rect);
  }
}
