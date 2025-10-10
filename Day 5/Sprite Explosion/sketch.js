let spriteImg;
let sRows=4, sClos=8;
let sprites=[];
let count=0;
function preload() {
  // Load assets here if needed
  spriteImg = loadImage("Images/explosionFull.png");
}
function setup() {
  createCanvas(innerWidth, innerHeight);

  let sWidth=spriteImg.width/sClos;
  let sHeight=spriteImg.height/sRows;

  //loop the sprite image and store it in a 1D array sprites.
  for(let i=0;i<sRows;i++){
    for(let j=0;j<sClos;j++){
    //get that slice of the the sprite
    sprites[sprites.length] =
    spriteImg.get(j*sWidth,i*sHeight,sWidth,sHeight);
}
  }
 
}
function draw() {
  background(0);
  //let totalFrames = sRows*sClos;
  if(keyIsPressed){
    count++;
  }
  image(sprites[count%sprites.length],0,0);
}

//                    