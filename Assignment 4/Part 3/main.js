/* 
Name: Shivani Patel
File: assignment4_part1
File: assignment4_part3
Date: 30th July, 2024
Description: In this little balls will bounce around on the screen, and change color when they touch each other.
*/


// Constants for the canvas.
const canavs = document.querySelector('canvas');// Accessing the canvas element.
const ctx = canvas.getContext('2d');// Getting the 2D drawing context.
const width = canvas.width = window.innerWidth;// Setting canvas width to the window width.
const height = canvas.height = window.innerHeight;// Setting canvas height to the window height.

// Defining the Ball class.
class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
        this.x = x;// Setting the x position of the ball.
        this.y = y;// Setting the y position of the ball.
        this.velX = velX;// Setting the x velocity of the ball.
        this.velY = velY;// Setting the y velocity of the ball.
        this.color = color;// Setting the color of the ball.
        this.size = size;// Setting the size of the ball.
    }
}

// Drawing the ball on the canvas.
draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();// Starting a new drawing path.
    ctx.fillStyle = this.color;// Setting the fill color for the ball.
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);// Drawing the ball as a circle.
    ctx.fill();// Filling the circle with the specified color.
}

// Updating the ball’s position and handling collisions with canvas edges.
update() {
    this.x += this.velX;
    this.y += this.velY;
    this.x += this.velX;// Updating the x position based on velocity.
    this.y += this.velY;// Updating the y position based on velocity.

    // Checking if the ball is hitting the right edge of the canvas.
    if (this.x + this.size > width) {
        this.velX = -this.velX;
        this.velX = -this.velX;// Reversing the x velocity.
      }
       // Checking if the ball is hitting the left edge of the canvas.
      if (this.x - this.size < 0) {
        this.velX = -this.velX;
        this.velX = -this.velX;// Reversing the x velocity.
      }
      // Checking if the ball is hitting the bottom edge of the canvas.
      if (this.y + this.size > height) {
        this.velY = -this.velY;
        this.velY = -this.velY;// Reversing the y velocity.
      }
    // Checking if the ball is hitting the left edge of the canvas.
    if (this.x - this.size < 0) {
      this.velX = -this.velX;// Reversing the x velocity.
    }
    // Checking if the ball is hitting the bottom edge of the canvas.
    if (this.y + this.size > height) {
      this.velY = -this.velY;// Reversing the y velocity.
    }
    // Checking if the ball is hitting the top edge of the canvas.
    if (this.y - this.size < 0) {
      this.velY = -this.velY;// Reversing the y velocity.
    }
}
// Creating an array to hold all the balls.
const balls = [];

// Generating 25 random balls.
while (balls.length < 25) {
  const size = Math.random() * 20 + 10;// Generating a random size between 10 and 30.
  const x = Math.random() * (width - size * 2) + size;// Generating a random x position.
  const y = Math.random() * (height - size * 2) + size;// Generating a random y position.
  const velX = Math.random() * 4 - 2;// Generating a random x velocity between -2 and 2.
  const velY = Math.random() * 4 - 2;// Generating a random y velocity between -2 and 2.
  const color = 'rgb(' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ')';// Generating a random color.

  balls.push(new Ball(x, y, velX, velY, color, size));// Creating a new Ball object and adding it to the array.
}
// Detecting collisions between balls.
function collisionDetect() {
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      const dx = balls[i].x - balls[j].x;// Calculating the difference in x positions.
      const dy = balls[i].y - balls[j].y;// Calculating the difference in y positions.
      const distance = Math.sqrt(dx * dx + dy * dy);// Calculating the distance between the balls.

      // Checking if the distance between balls is less than their combined sizes.
      if (distance < balls[i].size + balls[j].size) {
        balls[i].velX = -balls[i].velX;// Reversing the x velocity of the first ball.
        balls[i].velY = -balls[i].velY;// Reversing the y velocity of the first ball.
        balls[j].velX = -balls[j].velX;// Reversing the x velocity of the second ball.
        balls[j].velY = -balls[j].velY;// Reversing the y velocity of the second ball.
      }
    }
  }
}

// Running the animation loop.
function loop() {
  ctx.clearRect(0, 0, width, height);// Clearing the canvas.

  // Updating and drawing each ball.
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();// Updating the ball’s position.
    balls[i].draw();// Drawing the ball on the canvas.
  }

  collisionDetect();// Detecting collisions between balls.

  requestAnimationFrame(loop);// Requesting the next frame for continuous animation.
}
// This will run the animation loop continuously.
loop();