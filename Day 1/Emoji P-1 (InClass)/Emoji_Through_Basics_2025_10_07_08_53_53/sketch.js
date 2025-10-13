function setup() {
  createCanvas(500, 500);//(Width, Height)
}

function draw() {
  background("#EA9B9B");  //(R G B)
  fill("rgb(198,198,231)");
  stroke("rgb(239,93,93)");
  strokeWeight(12);
  ellipse(250,250,500,500);  //(X,Y,Width,Height)
  /*rect(250,250,150,200);
  line(0,0,250,250);
  arc(0,0,200,200,30,0);*/
  fill("rgb(255,0,0)");
  rect(100,100,100,30);
  rect(300,100,100,30);
   line(120,250,380,250);
}