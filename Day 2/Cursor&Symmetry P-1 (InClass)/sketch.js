function setup() {
  createCanvas(700, 700);
  background("aqua"); //sets background color
}

function draw() {
  //**Making mouse like a paintbrush**
  if (mouseIsPressed === true) {
    //fill(r,g,b);
    fill(mouseX, mouseY, mouseX / 3);
  } else {
    noFill();
  }
  //Draws no outline
  noStroke();
  //Draws 4 circles that mirror the mouse position
  ellipse(mouseX, mouseY, 20, 20);
  ellipse(width - mouseX, mouseY, 20, 20);
  ellipse(mouseX, height - mouseY, 20, 20);
  ellipse(width - mouseX, height - mouseY, 20, 20);

  //**Shapes Following Mouse**
  // if (mouseIsPressed===true){
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // //fixed Circle(x,y,diameter).
  // circle(200,200,30); 
  // //Ellipse(x,y,width,height), follows mouse.
  // ellipse(mouseX,mouseY,100,100);
  // //Triangle(x1,y1,x2,y2,x3,y3), follows mouse.
  // triangle(mouseX, mouseY-30, mouseX-26, mouseY+15, mouseX+26, mouseY+15);
}