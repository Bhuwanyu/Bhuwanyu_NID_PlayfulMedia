function setup(){
  createCanvas(400,400);
  frameRate(35);
}
function draw(){
background(0, 0, 0,110);
noStroke();

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
  ellipse(mouseX,mouseY,50);
}


// // function draw() {
// //   rect(200,200,50,50);
// // }
// function mouseClicked(){
//   // if(mouseY<height/2){
//   //   fill("aqua");
//   //   ellipse(mouseX,mouseY,20);
//   // } else{
//   //   fill("red");
//   //   rect(mouseX,mouseY,20);
//   // }
//   if(mouseX<250&&mouse>200)
// // function draw() {
// //   //Making Button
// //   rect(250,250,100,100);
// // }
// // function mouseClicked(){
// //   //Changing Background
// //   //if((mouseX>250)&&(mouseX<350)&&(mouseY>250)&&(mouseY<350))

// //   if((250<mouseX<350)&&(250<mouseY<350))
// //   {
// //     background(random(0,255),random(0,255),random(0,255),random(0,255));
// //   }
// // }
// // function mouseClicked(){
// //   if(mouseX<=width/2&&mouseY<=height/2){
// //     fill("aqua");
// //     // ellipse(mouseX,mouseY,20);
// //   } else if(mouseX>=width/2 && mouseY<=height/2){
// //     fill("red");
// //     // rect(mouseX,mouseY,20);
// //   }else if(mouseX<=width/2 && mouseY>=height/2){
// //     fill("yellow");
// //     // rect(mouseX,mouseY,20);
// //   }else{
// //     fill("purple");
// //     // ellipse(mouseX,mouseY,20);
    
// //   }
// //   ellipse(mouseX,mouseY,20);
// // function mouseClicked(){
// //   if(mouseY<=height/2){
// //    ellipse(mouseX,mouseY,20);
// //    fill(random(0,255));
// //   } else{
// //     rect(mouseX,mouseY,20);
// //   }
// // }
// function setup() {
//   createCanvas(400, 400);
//   frameRate(52);
//   noCursor();
//   // background(220);
// }
// function draw(){
// background(0, 0, 0,110);
// noStroke();

//   if(mouseX<=width/2&&mouseY<=height/2){
//     fill("aqua");
//     // ellipse(mouseX,mouseY,20);
//   } else if(mouseX>=width/2 && mouseY<=height/2){
//     fill("red");
//     // rect(mouseX,mouseY,20);
//   }else if(mouseX<=width/2 && mouseY>=height/2){
//     fill("yellow");
//     // rect(mouseX,mouseY,20);
//   }else{
//     fill("purple");
//     // ellipse(mouseX,mouseY,20);
    
//   }
//   ellipse(mouseX,mouseY,50);
// }
// }
