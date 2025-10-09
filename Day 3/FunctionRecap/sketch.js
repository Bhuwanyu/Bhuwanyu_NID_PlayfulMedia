function setup() {
  createCanvas(800, 800);
  background(220);
  
}

function draw() {
  
 
}
function mousePressed(){
  let eyeSize;

  drawEye(mouseX,mouseY);
}
 function drawEye(x,y){
  noStroke();
  fill(random(0,0),random(0,222),136);
  ellipse(x,y,100,200);
  fill(random(0,0),random(0,222),136);
  ellipse(x,y ,100,100);
  fill("RED");
  ellipse(x,y,50,50);
  }
