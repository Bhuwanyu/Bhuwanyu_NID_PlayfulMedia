// 1.Creating Grid of Circles using Nested For Loops
let size;
function setup() {
  createCanvas(innerWidth, innerHeight);
  // size of each circle.
  size = 10;
}

function draw() {
  background(220);

  fill(255, 0, 0);
  //control the stroke weight with mouseX
  strokeWeight(mouseX / 130);
  //Creates a grid of circles.
  for (let j = 0; j < height; j = j + size) {
    for (let i = 0; i < width; i = i + size) {
      //draw circle at (i+size/2,j+size/2) with diameter size
      ellipse(i + size / 2, j + size / 2, size);
    }
  }

}

  // 2. Creates a row of circles using a single for loop.
  // for(let i=0;i<height;i=i+size ){
  //   ellipse(size/2,i+size/2,size);
  // }

