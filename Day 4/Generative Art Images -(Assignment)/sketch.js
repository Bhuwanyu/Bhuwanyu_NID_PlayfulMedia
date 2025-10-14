let size = 50, genImage = [], noImages = 4;
//let g0,g1,g2,g3;

function preload() {
  for (let i = 0; i < noImages; i++) {
    let name = "Images/" + i + ".jpg";
    genImage[i] = loadImage(name);
  }
  // g0 = loadImage('Images/0.jpg');
  // g1 = loadImage('Images/1.jpg');
  // g2 = loadImage('Images/2.jpg');
  // g3 = loadImage('Images/3.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  frameRate(1);
  noLoop();
}

function draw() {


  // nested for loop
  for (let i = 0; i < width; i = i + size) {
    for (let j = 0; j < height; j = j + size) {
      // fill(random(255),random(255),random(255));
      // rect(i,j,size,size);
      let choice = floor(random(0, 4));
      image(genImage[choice], i, j, size, size);
      // if(choice==0){
      //   image(g0,i,j,size,size);
      // }else if(choice==1){
      //   image(g1,i,j,size,size);
      // }else if(choice==2){
      //   image(g2,i,j,size,size);
      // }else{
      //   image(g3,i,j,size,size);
      //   noLoop(); // Stop the draw loop after filling the canvas once
      // }
      // }




    }
  }
}
