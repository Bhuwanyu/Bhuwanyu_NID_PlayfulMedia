//**1st: Colourful ellipses following mouse,colour changing based on 4 quadrants.
function setup(){
  createCanvas(400,400);
  frameRate(35);
 }
function draw(){
background(0, 0, 0,110);
noStroke();

//if else if statements to check which quadrant the mouse is in
  if(mouseX<=width/2&&mouseY<=height/2){
    fill("aqua");
    // ellipse(mouseX,mouseY,20);
  } else if(mouseX>=width/2 && mouseY<=height/2){
    fill("red");
    // rect(mouseX,mouseY,20);
  }else if(mouseX<=width/2 && mouseY>=height/2){
    fill("yellow");
    // rect(mouseX,mouseY,20);
  }else{
    fill("purple");
    // ellipse(mouseX,mouseY,20);
    
  }
  //draws ellipse at mouse position
  ellipse(mouseX,mouseY,50);
}



// //**2nd: Draws shapes based on mouse position**
// function setup(){
//   createCanvas(400,400);
//   background(0, 0, 0,110);
//  }
// function draw() {
   
// //   rect(200,200,50,50);
// }
// function mouseClicked(){
//   if(mouseY<height/2){
//     fill("aqua");
//     ellipse(mouseX,mouseY,20);
//   } else{
//     fill("red");
//     rect(mouseX,mouseY,20);
//   }
// }


//**3rd: Button changing background colour randomly**
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   rect(250, 250, 100, 100);
// }

// function mouseClicked() {
//   if (mouseX > 250 && mouseX < 350 && mouseY > 250 && mouseY < 350) {
//     background(random(255), random(255), random(255));
//   } else {
//     background(255);
//   }
// }
