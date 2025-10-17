// function setup() {
//   createCanvas(innerWidth, innerHeight);
// }

// function draw() {
//   let outputValue=0;
//   outputValue=map(mouseX, 0, width,255,0);
//   background(outputValue);
// }


let r=0;
let b=255;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noCursor();
}

function draw() {
  r=map(mouseX, 0, width,255,0);
  b=map(mouseX,0,width,0,255);
  background(r,0,b);

  fill(255,0,100);
  ellipse(mouseX,height/2,50);
}
