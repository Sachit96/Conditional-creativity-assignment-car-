// carColor is a global variable that represents the color of the car
let carColor;
// carPositionX is a global variable that has the x-axis of the car
let carPositionX;
// carPositionY is a global variable that has the y-axis of the car
let carPositionY;
// carSpeedX is a global variable that has the speed of the car in the x-axis
let carSpeedX;
// carSpeedY is a global variable that has the speed of the car in the y-axis
let carSpeedY;

// Set carColor to red, green, blue, carPositionX to 100, carPositionY to height / 2, carSpeedX to 5, and carSpeedY to 5
function setup() {
  createCanvas(800, 600);
  carColor = color(255, 0, 0);
  carPositionX = width / 2;
  carPositionY = height / 2;
  carSpeedX = 0;
  carSpeedY = 5;
}

function draw() {
  background(220);

  // Update car position
  carPositionX += carSpeedX;
  carPositionY += carSpeedY;

  // holds the mouse clicks when the car changes color and the direction
  if (carPositionX > width || carPositionX < 0) {
    carSpeedX *= -1; // moves the car backward in the x-axis
    changeCarColor(); // changes the car color when it goes out of the canvas
  }

  if (carPositionY > height || carPositionY < 0) {
    carSpeedY *= -1; // moves the car backward in the y-axis
    changeCarColor(); // changes the car color when it goes out of the canvas
  }

  // drawCar draws the car at the x-axis by using carPositionX, y-axis height of the canvas divided by 2, carColor fills the car with the color
  drawCar(carPositionX, carPositionY, carColor);
}

// the x, y stands for the coordinates of the car
function drawCar(x, y, color) {
  // Body
  fill(color);
  rect(x, y - 30, 200, 50);

  // Roof
  fill(100);
  rect(x + 20, y - 60, 160, 30);

  // Windows
  fill(200, 220);
  rect(x + 30, y - 55, 50, 25);
  rect(x + 120, y - 55, 50, 25);

  // Wheels
  fill(0);
  ellipse(x + 50, y + 15, 40, 40);
  ellipse(x + 150, y + 15, 40, 40);
}

// Makes a random color and makes it to the carColor variable, which changes the color of the car
function changeCarColor() {
  carColor = color(random(255), random(255), random(255));
}

function keyPressed() {
  // Handle keyboard events
  // reset the car's position
  if (keyCode === ENTER) {
    carPositionX = width / 2;
    carPositionY = height / 2;
  }

  // Check arrow key inputs to change car direction
  if (keyCode === RIGHT_ARROW) {
    carSpeedX = 5;
    carSpeedY = 0;
  } else if (keyCode === LEFT_ARROW) {
    carSpeedX = -5;
    carSpeedY = 0;
  } else if (keyCode === UP_ARROW) {
    carSpeedY = -5;
    carSpeedX = 0;
  } else if (keyCode === DOWN_ARROW) {
    carSpeedY = 5;
    carSpeedX = 0;
  }
}

// Triggered every time the mouse is clicked, changes the car's color
function mouseClicked() {
  changeCarColor();
}
