let img0,img1,img2,img3;
let size=50;
function preload(){

  img0=loadImage("Images/aa.jpg");
  img1=loadImage("Images/bb.jpg");
  img2=loadImage("Images/cc.jpg");
  img3=loadImage("Images/dd.jpg");
}
function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  
  
for(let i=0;i<width;i=i+size){
  for(let j=0;j<height;j=j+size){
    
  //  rect(i,j,size,size);
    let choice=floor(random(0,4));
   
    if(choice == 1){
  //     rect(i,j,size,size);
      image(img0,i,j);
    }
   else if(choice==2){
       image(img1,i,j);
    }
    else if(choice==3){
       image(img2,i,j);
    }
    else{
       image(img3,i,j);
    }

  }
}

}
