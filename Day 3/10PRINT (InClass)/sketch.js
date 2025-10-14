// let x,y,size,choice;
// function setup() {
//   createCanvas(400, 400);
//   background(220);
//   x=0;
//   y=0;
//   size=25;
// }

// function draw() {

//   choice=random(0,1);
//   if(choice<0.5){
//     stroke(random(0,255),random(0,255),random(0,255));
//     strokeWeight(random( 3,5));
//     line(x,y,x+size,y+size);
//   }else{
//     line(x+size,y,x,y+size);
//   }
//   x=x+size;//incriment 
//   //if it walks off the screen, x=0, y=y+size
//   if(x>width){
//     x=0
//     y=y+size;
//   }
// }
// let x,y, size, choice;

// function setup() {
//   createCanvas(400, 400);
//   x=0;
//   y=0;
//   size = 15;
//   background(220);
// }

// function draw() {


//   //pick a random number between 0 and 1
//   choice = random(0,1);
//   // if less than 0.5, draw "/", else draw "\"
//   if(choice<0.5) {
//     line(x+size,y,x,y+size);
//   } else {
//     line(x,y,x+size, y+size);
//   }

//   //move the point to the right
//   x=x+size;

//   
//   if(x>width) {
//     x=0;
//     y=y+size;
//   }


// }
// function setup(){
//   createCanvas(400,400);
//   background(200);
//   frameRate(40);
// }
// function draw(){
//   stroke(random(0,255),random(0,255),random(0,255));
//   if(random(0,1)<0.5){//Like a toss
//     line(mouseX,mouseY,mouseX+random(1,20),mouseY+random(90,1));
//   }else{
//     fill(random(0,255),random(0,255),random(0,255));
//     rect(mouseX,mouseY,random(10,40));
//   }
// }
let x, y, spacing;
function setup() {
  createCanvas(innerWidth,innerHeight);
  background(0);

  x = 0;
  y = 0;
  spacing = 10;
}
function draw() {
  // stroke(random(0,255),random(0,255),random(0,255));
  stroke(138, random(0, 255), 255);
  strokeWeight(random(0, 2));
  if (random(0, 1) < 0.5) {//Like a toss
    // line(x,y,x+spacing,y+spacing);
    // noFill();
    fill(frameCount/20, 0, 0);
    strokeWeight(1);
    rect(x, y, spacing);
  } else if (random(0, 1) > 0.5) {
    line(x, y + spacing, x + spacing, y);//thinking of cordinates as spacing.
    // ellipse(x+3,y+3,spacing);
  } else if (random(0, 1) > 0.5) {
    line(x, y, x + spacing, y + spacing);
  }
  else {
    noFill();
    //rect(x,y,spacing);
    //noStroke();
    ellipse(x + 5, y + 5, spacing);
  }
  x = x + spacing; //Incrementing the value of variable constantly.

  if (x > width) {
    x = 0;
    y = y + spacing;
  }
  if (random(0, 1) < 0.5) {
    fill(138, random(0, 255), 255);
  } else {

  }
  
}

