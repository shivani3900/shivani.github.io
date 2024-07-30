const canavs = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
}

draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

update() {
    this.x += this.velX;
    this.y += this.velY;

    if (this.x + this.size > width) {
        this.velX = -this.velX;
      }
      if (this.x - this.size < 0) {
        this.velX = -this.velX;
      }
      if (this.y + this.size > height) {
        this.velY = -this.velY;
      }
      if (this.y - this.size < 0) {
        this.velY = -this.velY;
      }
}