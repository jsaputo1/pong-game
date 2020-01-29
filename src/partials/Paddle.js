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

  up() {
    this.y = Math.max(0, this.y - this.speed);
  }

  down() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }

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
    rect.setAttributeNS(null, "fill", "white");
    svg.appendChild(rect);
  }
}

//   const hitLeft = this.x - this.radius <= 0;
//   const hitRight = this.x + this.radius >= this.boardWidth;
//   const hitTop = this.y - this.radius <= 0;
//   const hitBottom = this.y + this.radius >= this.boardHeight;

//   if (hitLeft || hitRight) {
//     this.vx = -this.vx;
//   }

//   if (hitTop || hitBottom) {
//     this.vy = -this.vy;
//   }
// }

// !-- left paddle -->
// <!-- <rect height="56" width="8" fill="white" x="10" y="100" /> -->
// <!-- right paddle -->

// const boardHeight = "";
