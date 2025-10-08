let x,y,size;
function setup() {
  createCanvas(400, 400);
  background(220);
  x=0;
  y=0;
  size=25;
}

function draw() {
  
  choice=random(0,1);
  if(choice<0.5){
    rect(x+size,y,25);
  }else{
    line(x,y,x+size,y+size);
  }
  x=x+size;//inciment 
  if(x>width){
    x=0
    y=y+size;
  }
}
