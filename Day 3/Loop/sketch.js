let size;
function setup() {
  createCanvas(innerWidth, innerHeight);

  size=10;
}

function draw() {
    background(220);
  strokeWeight(mouseX);
  for(let j=0;j<height;j=j+size){
    for(let i=0;i<width;i=i+size){
    ellipse(i+size/2,j+size/2,size);
  }
  }
  //Creates a row of circles.
  
  // for(let i=0;i<height;i=i+size ){
  //   ellipse(size/2,i+size/2,size);
  // }

}
