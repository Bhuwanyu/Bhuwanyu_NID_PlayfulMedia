let myCar;
let yourCar;
let cars=[];
let noCars = 20;

function setup() {
  createCanvas(400, 400);
  
  // myCar = new Car(20,300,50,10);
  // yourCar = new Car(320,300,65,2);
 for(let i=0; i<noCars; i++){
  let tempCar=new Car(random(0,width), random(0,height),50, 3);
  cars.push(tempCar);
}
}

function draw() {
   background(220);
   for(let i=0;i<cars.length; i++){
    cars[i].move();
    cars[i].show();
   }
//  myCar.move();
//  yourCar.move();
//   fill(255,0,0);
//   myCar.show();
//   fill(0,0,255);
//   yourCar.show();
}
