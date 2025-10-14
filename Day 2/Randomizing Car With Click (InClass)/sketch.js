
let x, y;// Declare variables for car position
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);// Set rectangle mode to center
  background(220);
}

function draw() {
}
function carModel() {
  // Draw a simple car model
  rect(x, y, 100, 50);
  ellipse(x - 40, y + 40, 30, 30);
  ellipse(x + 40, y + 40, 30, 30);
  
}

function mouseClicked() {
  // Update car position to mouse coordinates and draw the car
  x = mouseX;
  y = mouseY;
  carModel();// Call the function to draw the car
}