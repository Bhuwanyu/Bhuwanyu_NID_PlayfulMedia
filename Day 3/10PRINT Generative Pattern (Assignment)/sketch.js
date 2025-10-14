let spacing = 25;

function setup() {
  createCanvas(innerWidth, innerHeight);
  //background(0);
  frameRate(2); //stops continuous drawing 
}

function draw() {
  background(0);
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {

      stroke(138, random(0, 255), 255);
      strokeWeight(random(0, 2));

      let choice = random();

      if (choice < 0.25) {
        fill(random(0, 30), 0, random(0, 255));
        strokeWeight(1);
        rect(x, y, spacing);
      } else if (choice < 0.5) {
        line(x, y + spacing, x + spacing, y);
      } else if (choice < 0.75) {
        line(x, y, x + spacing, y + spacing);
      } else {
        noFill();
        ellipse(x + 5, y + 5, random(0, 16));
      }
    }
  }
}