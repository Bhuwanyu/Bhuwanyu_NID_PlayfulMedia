let spriteImage, sprites =[];
let spriteX = 16, spriteY = 12; //number of images in x and y direction
let count = 0;
let row = 0;
let x = 0, y = 0;
let xdir = 0, ydir = 0;
let a=0;

function preload() {
  //load the full sprite image
  spriteImage = loadImage("Images/01.png");
}

function setup() {
  createCanvas(innerWidth, 116);
  //break the sprite image into individual images and store it into a 2D array (Note - 2D array is basically where each element fo the arrat is another array)
  // w -> width of each individual image
  // h -> height of each individual image
  let w = spriteImage.width/spriteX;
  let h = spriteImage.height/spriteY;
  
  //loop through the 4 rows
  for(let i = 0; i<spriteY;i++) {
    //create an empty array for each row
    sprites[i] = [];
    
    //within each row, loop through the columns
     for(let j = 0;j<spriteX;j++) {
      // store the images in the 2D array
      sprites[i][j] = spriteImage.get(j*w, i*h, w, h ); 
    }
  }
  
}

function draw() {
  background(255-a*2,0,0,100);
  a=a+0.07;
  noStroke();
  fill(255-a);
  ellipse(innerWidth-140-a,90+a,160);
  noFill();
  strokeWeight(4);
  stroke(1)
  line(innerWidth*0,116,innerWidth,116); 
  //draw the appropriate image from the array based on the row selected (check keyPressed) and the x and y position
  image(sprites[row][count],x,y);
  if(frameCount%5==0 && keyPressed) {
    count = (count+1)%spriteX;
    x = x+ xdir;
    y = y+ ydir;
   }//else{
  //   keyReleased();
  // }
 
}

function keyPressed() {
 
  //read the appropriate row based on the key direction
  if(keyIsDown(71)) {//g key to attack
    row = 3; 
    xdir = 0; 
    ydir = 0;

} else if(keyIsDown(16) && (keyIsDown(37) || keyIsDown(65))) {//left arrow or 'a' key + shift key to sprint
    row = 11; 
    xdir = -15; 
    ydir = 0; 
  }
  else if(keyIsDown(37)||keyIsDown(65)) {//left arrow or 'a' key to walk left
    row = 10;
    ydir = 0; //make sure the sprite doesnt move along y axis
    xdir = -7;
} else if(keyCode ==   32 ) {//space key to jump
    row = 7;
    xdir = 0; 
    ydir = 0; 
  } else if(keyIsDown(16) && (keyIsDown(68) || keyIsDown(39))) {//shift key + right arrow or 'd' key to sprint 
    row = 2;
    ydir = 0; //make sure the sprite doesnt move along y axis
    xdir = 15;
     //make sprite move left
} else if(keyIsDown(39) || keyIsDown (68)) {//right arrow or 'd' key
    row = 8;
    ydir = 0;
    row = 1;
    ydir = 0; //make sure the sprite doesnt move along y axis
    xdir = 7; //make sprite move left
  } 
}
function mousePressed() {
  if (mouseButton === LEFT) {
row = 3; 
    xdir = 0; 
    ydir = 0;
}
}
function mouseReleased() {
  if (mouseButton === LEFT) {
row = 0; 
    xdir = 0; 
    ydir = 0;
}
}
function keyReleased() {
  xdir = 0;
  ydir = 0;
  row = 0; 
  count=2;
  //count=frameCount%16;//reset to first image of the row
}