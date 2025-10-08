function setup() {
  createCanvas(700, 700);
 background("aqua");
}

function draw() {
   

//Mouse Click Fill
/*if (mouseIsPressed===true){
  fill(0);
} else {
  fill(255);
}
circle(200,200,30);//(x,y,diameter)
ellipse(mouseX,mouseY,100,100);//(x,y,width,height)
triangle(mouseX,mouseY,300,300,100,100);//(x1,y1,x2,y2,x3,y3)*/

//ClassWork
  /*noStroke();
  fill(mouseX/2,mouseY/2,mouseX/4+mouseY/4);

  //follows the mouse
  ellipse(mouseX,mouseY,50);

  //mirror the mouse along the x axis
  ellipse(width-mouseX,mouseY,50);

  //mirror the mouse along the Y axis
  ellipse(mouseX, height- mouseY, 50); 
  triangle(mouseX,mouseY,60,60);
  rect(mouseIsPressed,mouseY,mouseX,mouseX);*/

  if (mouseIsPressed===true){
  fill(mouseX,mouseY,mouseX/3);
} else {
  fill(255);
}
  
  noStroke();
  ellipse(mouseX,mouseY,20,20);
  ellipse(width-mouseX,mouseY,20,20);
  ellipse(mouseX,height-mouseY,20,20);
  ellipse(width-mouseX,height-mouseY,20,20);//Diagonal Corner
}