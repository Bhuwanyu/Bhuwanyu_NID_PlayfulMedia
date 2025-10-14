let xPos, yPos; //Defining the position of the car
function setup() {
  createCanvas(400, 400);
  xPos = 0;// Start off-screen to the left
  yPos = height / 2;//// Set a fixed vertical position for the car
}

function draw() {
  background(220,);
  drawCar(xPos, yPos);
  xPos++;// Move the car to the right

  // Reset position if the car moves off-screen
  if (xPos > width) {
    xPos = 40; // Start off-screen to the left
  }
}

function mouseDragged() {
  //To use this function background will be in setup function & comment draw function.
  drawCar(mouseX, mouseY);
}

function drawCar(x, y) {
  fill(random(255), random(255), random(255));

  // Draw a simple car shape
  rect(x, y, 40, 30);
  ellipse(x + 5, y + 35, 10, 10);
  ellipse(x + 35, y + 35, 10, 10);

}