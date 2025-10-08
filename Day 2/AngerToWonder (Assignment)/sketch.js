 function setup() {
  createCanvas(500, 600);
  noCursor();
}

function draw() {
  background("rgb(30,26,26)");

   //SHADOWS
  fill(mouseX/2,0,0,mouseY+10);//(colour,alpha)
  
  //    
  triangle(440, 560, 320, 315, 260, 335); //17
  triangle(475, 420, 400, 220, 350, 250); //16
  triangle(150, 38, 400, 225, 350, 260); //15
  triangle(75, 575, 450, 220, 420, 180); //14
  triangle(149, 70, 450, 230, 450, 275); //13
  triangle(455, 490, 340, 370, 325, 330); //12
  triangle(230, 584, 365, 280, 365, 320); //11
  triangle(320, 560, 332, 370, 300, 390); //10
  triangle(390, 470, 350, 80, 345, 150); //9
  triangle(480, 470, 340, 170, 333, 80); //8
  triangle(330, 10, 327, 175, 170, 420); //7
  triangle(480, 550, 160, 415, 110, 440); //6
  triangle(20, 350, 120, 459, 240, 380); //5
  triangle(10, 548, 240, 398, 220, 460); //4
  triangle(100, 70, 240, 446, 360, 375); //3
  triangle(60, 50, 255, 476, 220, 485); //2
  triangle(50, 90, 175, 536, 190, 495); //1

   // MAIN TRIANGLES
  stroke("#000000");
  strokeWeight(1.7);
  fill(mouseY+30,mouseY+31,mouseX/2,mouseX+43);//(colour,alpha)
  triangle(217, 490, 175, 536, 190, 495); //1
  triangle(231, 450, 255, 476, 220, 485); //2
  triangle(250, 420, 240, 446, 360, 375); //3
  triangle(160, 480, 240, 398, 220, 460); //4
  triangle(20, 590, 120, 459, 240, 380); //5
  triangle(180, 350, 160, 415, 110, 440); //6
  triangle(320, 110, 327, 175, 170, 420); //7
  triangle(400, 40, 340, 170, 333, 80); //8
  triangle(380, 70, 350, 80, 345, 150); //9
  triangle(320, 340, 332, 370, 300, 390); //10
  triangle(352, 294, 365, 280, 365, 320); //11
  triangle(335, 290, 340, 370, 325, 330); //12
  triangle(419, 190, 450, 230, 450, 275); //13
  triangle(455, 5, 450, 220, 420, 180); //14
  triangle(350, 290, 400, 225, 350, 260); //15
  triangle(440, 10, 400, 220, 350, 250); //16
  triangle(400, 100, 320, 315, 260, 335); //17

  // let angle=frameCount* 0.01;
  // rotate(angle);
  fill("#e98181ff");
  triangle(mouseX, mouseY - 10, mouseX + 10, mouseY + 10, mouseX - 10, mouseY + 10); //18 Main
}
// function setup() {
//   createCanvas(500, 600);
//   noCursor(); // optional, hides default cursor
// }

// function draw() {
//   background("rgb(30,26,26)");

//   // Movement based on mouse position
//   let moveX = map(mouseX, 0, width, -30, 30);
//   let moveY = map(mouseY, 0, height, -30, 30);

//   push();
//   translate(moveX, moveY);

//   // DRAW TRIANGLES (SHADOW + MAIN) WITH RANDOM COLORS
  
//   for (let i = 0; i < 17; i++) {
//     fill(random(10, 255), random(80, 20), random(100, 255), random(150, 255)); // random RGBA
//     drawTriangle(i);
//   }

//   pop();

//   // Draw small main triangle following cursor (on top)
//   fill("#e98181ff");
  
//   triangle(mouseX, mouseY - 10, mouseX + 10, mouseY + 10, mouseX - 10, mouseY + 10);
// }

// function drawTriangle(n) {
//   switch (n) {
//     case 0: triangle(440, 560, 320, 315, 260, 335); break;
//     case 1: triangle(475, 420, 400, 220, 350, 250); break;
//     case 2: triangle(150, 38, 400, 225, 350, 260); break;
//     case 3: triangle(75, 575, 450, 220, 420, 180); break;
//     case 4: triangle(149, 70, 450, 230, 450, 275); break;
//     case 5: triangle(455, 490, 340, 370, 325, 330); break;
//     case 6: triangle(230, 584, 365, 280, 365, 320); break;
//     case 7: triangle(320, 560, 332, 370, 300, 390); break;
//     case 8: triangle(390, 470, 350, 80, 345, 150); break;
//     case 9: triangle(480, 470, 340, 170, 333, 80); break;
//     case 10: triangle(330, 10, 327, 175, 170, 420); break;
//     case 11: triangle(480, 550, 160, 415, 110, 440); break;
//     case 12: triangle(20, 350, 120, 459, 240, 380); break;
//     case 13: triangle(10, 548, 240, 398, 220, 460); break;
//     case 14: triangle(100, 70, 240, 446, 360, 375); break;
//     case 15: triangle(60, 50, 255, 476, 220, 485); break;
//     case 16: triangle(50, 90, 175, 536, 190, 495); break;
//   }
// }
// let triangles = [];

// function setup() {
//   createCanvas(500, 600);
//   noCursor();

//   // Create a set of triangles with different depth layers
//   let coords = [
//     [440, 560, 320, 315, 260, 335],
//     [475, 420, 400, 220, 350, 250],
//     [150, 38, 400, 225, 350, 260],
//     [75, 575, 450, 220, 420, 180],
//     [149, 70, 450, 230, 450, 275],
//     [455, 490, 340, 370, 325, 330],
//     [230, 584, 365, 280, 365, 320],
//     [320, 560, 332, 370, 300, 390],
//     [390, 470, 350, 80, 345, 150],
//     [480, 470, 340, 170, 333, 80],
//     [330, 10, 327, 175, 170, 420],
//     [480, 550, 160, 415, 110, 440],
//     [20, 350, 120, 459, 240, 380],
//     [10, 548, 240, 398, 220, 460],
//     [100, 70, 240, 446, 360, 375],
//     [60, 50, 255, 476, 220, 485],
//     [50, 90, 175, 536, 190, 495]
//   ];

//   for (let i = 0; i < coords.length; i++) {
//     triangles.push({
//       c: coords[i],
//       depth: random(3, 1.5), // smaller = farther away, larger = closer
//       col: color(random(100, 255), random(100, 255), random(255), random(180, 255))
//     });
//   }
// }

// function draw() {
//   background("rgb(30,26,26)");

//   for (let t of triangles) {
//     // Parallax movement
//     let moveX = map(mouseX, 0, width, -30, 30) * t.depth;
//     let moveY = map(mouseY, 0, height, -30, 30) * t.depth;

//     // Randomize color slightly over time
//     if (frameCount % 10 === 0) {
//       t.col = color(
//         random(100, 255),
//         random(100, 255),
//         random(255),
//         random(150, 255)
//       );
//     }

//     push();
//     translate(moveX, moveY);
//     noStroke();
//     fill(t.col);
//     triangle(t.c[0], t.c[1], t.c[2], t.c[3], t.c[4], t.c[5]);
//     pop();
//   }

//   // Cursor-following triangle (main focus)
//   fill("#e98181ff");
//   triangle(mouseX, mouseY - 10, mouseX + 10, mouseY + 10, mouseX - 10, mouseY + 10);
// }