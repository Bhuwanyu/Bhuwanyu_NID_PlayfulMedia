let noOfPetal=12;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);

  drawFlowers(12,200,200);
//   push();
//   //move origin
//   translate(width/2,height/2);
//   ellipse(0,0,50,50);
//   rotate(0);
//   ellipse(80,0,100,50);
//   rotate(60);
//   ellipse(80,0,100,50);
//   rotate(60);
//   ellipse(80,0,100,50);
//   rotate(60);
//   ellipse(80,0,100,50);
//   rotate(60);
//   ellipse(80,0,100,50);
//   rotate(60);
//   ellipse(80,0,100,50);
//   pop();


}

function drawFlowers(noOfPetal,x,y){
  push();
noStroke();
translate(x,y);
rotate(frameCount);
fill(230,0,100,30);
ellipse(0,0,60,60);
fill(200,0,70,80);
for(let i=0;i<noOfPetal;i=i+1){
  
  ellipse(80,0,100,50);
  rotate(360/noOfPetal);
}
pop();

}
