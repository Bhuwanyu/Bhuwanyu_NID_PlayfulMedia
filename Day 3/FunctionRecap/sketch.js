function setup() {
  // createCanvas(800, 800);
  createCanvas(innerWidth,innerHeight);
  background(220);
  //Calling Function only Once

}

function draw() {


}
function mousePressed() {
  //Defining Parameters
  let eyeSize;
  eyeSize = random(0, 200);
  drawEye(mouseX, mouseY, eyeSize);
}
function drawEye(x, y, z) { //Naming Parameters(x,y,z)

  //Calling Parameters
  noStroke();
  fill(random(0, 0), random(0, 222), 136);
  ellipse(x, y, z + 300, z);
  fill(random(0, 0), random(0, 222), 136);
  ellipse(x, y, 100 + z, 100 + z);
  fill(random(0, 0), random(0, 222), 136);
  ellipse(x, y, z + 10);

  //will change colours.
}
