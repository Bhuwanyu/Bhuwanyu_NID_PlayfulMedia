//Flow/Variable
let circleX=100;//Declare Variable & Initialize
let circleG=100;
function setup() {
  createCanvas(400, 400);
  //circleX=0;//Initialize Variable
 
}
function mousePressed(){
  circleX=0;
  circleG=0;
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  ellipse(circleX,200,circleG,circleG);
  
  circleX++;
  circleG=circleX;

}

// function mousePressed(){
//    background(0);
// }
