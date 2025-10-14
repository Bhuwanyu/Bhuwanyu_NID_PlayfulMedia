let flowers = [];
function setup() {
  createCanvas(400, 400);

  // myFlower=new Flower(200,200);
}

function draw() {
  background(220);
  for (let i = 0; i < flowers.length; i++) {
    //check if the current mouseX and mouseY is on the flower
    flowers[i].changeColor(mouseX, mouseY);
    //moves and draws each flower in the array
    flowers[i].moveFlower();
    flowers[i].drawFlower();
  }
  // myFlower.drawFlower();
}
function mousePressed() {

  let tempFlower = new Flower(random(height),random(width), random(-5, 5), random(-5, 5));
  flowers.push(tempFlower);

}
