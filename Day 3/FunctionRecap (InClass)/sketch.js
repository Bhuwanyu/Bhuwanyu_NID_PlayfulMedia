function setup() {
  createCanvas(800, 800);
  background(220);

}

function draw() {


}
function mousePressed() {
  let eyeSize;

  drawEye(mouseX, mouseY);
}
function drawEye(x, y) {
  noStroke();
  fill(random(0, 0), random(0, 222), 136);
  ellipse(x, y, random(0, 200),random(0-50));
  fill(random(0, 0), random(0, 222), 136);
  ellipse(x, y, random(75, 100));
  fill(random(0, 0), random(0, 222), 136);
  ellipse(x, y, random(10, 50));
}
