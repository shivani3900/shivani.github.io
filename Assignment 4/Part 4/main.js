/* 
Name: Shivani Patel
File: assignment4_part4
Date: 30th July, 2024
Description: In this, little balls will bounce around on the screen and change color when they touch each other.
*/

// Constants for the canvas.
const canvas = document.querySelector('canvas'); // Accessing the canvas element.
const ctx = canvas.getContext('2d'); // Getting the 2D drawing context.
const width = canvas.width = window.innerWidth; // Setting canvas width to the window width.
const height = canvas.height = window.innerHeight; // Setting canvas height to the window height.

// Defining the Shape class as a parent class.
class Shape {
    constructor(x, y, velX, velY) {
        this.x = x; // Setting the x position of the shape.
        this.y = y; // Setting the y position of the shape.
        this.velX = velX; // Setting the x velocity of the shape.
        this.velY = velY; // Setting the y velocity of the shape.
    }

    // Method to check if the shape is out of bounds.
    checkBounds() {
        if (this.x + this.size > width || this.x - this.size < 0) {
            this.velX = -this.velX; // Reversing the x velocity if out of bounds horizontally.
        }
        if (this.y + this.size > height || this.y - this.size < 0) {
            this.velY = -this.velY; // Reversing the y velocity if out of bounds vertically.
        }
    }

    // Method to detect collision between shapes.
    collisionDetect(shapes) {
        for (let i = 0; i < shapes.length; i++) {
            if (!(this === shapes[i])) {
                const dx = this.x - shapes[i].x; // Calculating the difference in x positions.
                const dy = this.y - shapes[i].y; // Calculating the difference in y positions.
                const distance = Math.sqrt(dx * dx + dy * dy); // Calculating the distance between the shapes.

                // Checking if the distance between shapes is less than their combined sizes.
                if (distance < this.size + shapes[i].size) {
                    this.color = shapes[i].color = 'rgb(' +
                        Math.floor(Math.random() * 256) + ',' +
                        Math.floor(Math.random() * 256) + ',' +
                        Math.floor(Math.random() * 256) + ')'; // Changing the color of the shapes on collision.
                }
            }
        }
    }
}

// Modifying the Ball class to inherit from Shape.
class Ball extends Shape {
    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY); // Calling the parent class constructor.
        this.color = color; // Setting the color of the ball.
        this.size = size; // Setting the size of the ball.
    }

    // Drawing the ball on the canvas.
    draw() {
        ctx.beginPath(); // Starting a new drawing path.
        ctx.fillStyle = this.color; // Setting the fill color for the ball.
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // Drawing the ball as a circle.
        ctx.fill(); // Filling the circle with the specified color.
    }

    // Updating the ball’s position and handling collisions with canvas edges.
    update() {
        this.x += this.velX; // Updating the x position based on velocity.
        this.y += this.velY; // Updating the y position based on velocity.

        this.checkBounds(); // Using the checkBounds method from Shape class.
    }
}

// Creating the EvilCircle class as a child of Shape.
class EvilCircle extends Shape {
    constructor(x, y, velX, velY, size) {
        super(x, y, velX, velY); // Calling the parent class constructor.
        this.size = size; // Setting the size of the evil circle.
        this.color = 'white'; // Setting a default color for the evil circle.
        this.controls = { // Object to track active controls
            up: false,
            down: false,
            left: false,
            right: false
        };
    }

    // Drawing the evil circle on the canvas.
    draw() {
        ctx.beginPath(); // Starting a new drawing path.
        ctx.lineWidth = 3; // Setting the line width for the evil circle.
        ctx.strokeStyle = this.color; // Setting the stroke color for the evil circle.
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // Drawing the evil circle as a circle.
        ctx.stroke(); // Stroking the circle with the specified color.
    }

    // Updating the evil circle’s position and handling collisions with canvas edges.
    update() {
        if (this.controls.up) {
            this.y -= this.velY; // Moving up if 'up' control is active.
        }
        if (this.controls.down) {
            this.y += this.velY; // Moving down if 'down' control is active.
        }
        if (this.controls.left) {
            this.x -= this.velX; // Moving left if 'left' control is active.
        }
        if (this.controls.right) {
            this.x += this.velX; // Moving right if 'right' control is active.
        }

        this.checkBounds(); // Using the checkBounds method from Shape class.
    }

    // Detecting collisions between the evil circle and other shapes.
    collisionDetect(shapes) {
        for (let i = 0; i < shapes.length; i++) {
            if (!(this === shapes[i])) {
                const dx = this.x - shapes[i].x; // Calculating the difference in x positions.
                const dy = this.y - shapes[i].y; // Calculating the difference in y positions.
                const distance = Math.sqrt(dx * dx + dy * dy); // Calculating the distance between the evil circle and other shapes.

                // Checking if the distance between the evil circle and another shape is less than their combined sizes.
                if (distance < this.size + shapes[i].size) {
                    shapes[i].color = this.color = 'rgb(' +
                        Math.floor(Math.random() * 256) + ',' +
                        Math.floor(Math.random() * 256) + ',' +
                        Math.floor(Math.random() * 256) + ')'; // Changing the color of the shapes on collision.
                }
            }
        }
    }
}

// Creating an array to hold all the balls and evil circles.
const shapes = [];

// Generating 25 random balls.
while (shapes.length < 25) {
    const size = Math.random() * 20 + 10; // Generating a random size between 10 and 30.
    const x = Math.random() * (width - size * 2) + size; // Generating a random x position.
    const y = Math.random() * (height - size * 2) + size; // Generating a random y position.
    const velX = Math.random() * 4 - 2; // Generating a random x velocity between -2 and 2.
    const velY = Math.random() * 4 - 2; // Generating a random y velocity between -2 and 2.
    const color = 'rgb(' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ')'; // Generating a random color.

    shapes.push(new Ball(x, y, velX, velY, color, size)); // Creating a new Ball object and adding it to the array.
}

// Adding one EvilCircle object to the shapes array.
const evilCircle = new EvilCircle(width / 2, height / 2, 2, 2, 30); // Creating a new EvilCircle object.
shapes.push(evilCircle); // Adding it to the array.

// Handling keyboard controls.
window.addEventListener('keydown', (e) => { // Adding an event listener to the window for keydown events.
    switch (e.key) {
        case 'w': // If the 'w' key was pressed.
            evilCircle.controls.up = true;
            break; // Exit switch statement.
        case 'a': // If 'a' key is pressed.
            evilCircle.controls.left = true;
            break; // Exit switch statement.
        case 's': // If 's' key is pressed.
            evilCircle.controls.down = true;
            break; // Exit switch statement.
        case 'd': // If 'd' key is pressed.
            evilCircle.controls.right = true;
            break; // Exit switch statement.
    }
});

// Handling keyboard controls.
window.addEventListener('keyup', (e) => { // Adding an event listener to the window for keyup events.
    switch (e.key) {
        case 'w': // If the 'w' key was released.
            evilCircle.controls.up = false;
            break; // Exit switch statement.
        case 'a': // If 'a' key is released.
            evilCircle.controls.left = false;
            break; // Exit switch statement.
        case 's': // If 's' key is released.
            evilCircle.controls.down = false;
            break; // Exit switch statement.
        case 'd': // If 'd' key is released.
            evilCircle.controls.right = false;
            break; // Exit switch statement.
    }
});

// Running the animation loop.
function loop() {
    ctx.clearRect(0, 0, width, height); // Clearing the canvas.

    // Updating and drawing each shape.
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].update(); // Updating the shape’s position.
        shapes[i].draw(); // Drawing the shape on the canvas.
        shapes[i].collisionDetect(shapes); // Detecting collisions between shapes.
    }

    requestAnimationFrame(loop); // Requesting the next frame for continuous animation.
}

// This will run the animation loop continuously.
loop();
