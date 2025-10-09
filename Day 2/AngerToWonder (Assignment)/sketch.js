// let angerTri = [];//stores all your red triangle pieces (their coordinates).
// let angerShadow = [];//stores all your shadow triangles (their coordinates).
// let fade = 255;//controls how visible (opaque) they are.
// let fadeDelay=120;
// let state = "anger";// tells the program which emotion to draw: "anger" or "wonder".
// let mainTriangleSize=50; //size of the main triangle in wonder state.
// let expand = 1; //controls how much the main triangle will grow later
// let expandSpeed = 1.5;

// function setup() {
//   createCanvas(500, 600);
//   frameRate(30);
//   angerShadow = [
//     { x1: 440, y1: 560, x2: 320, y2: 315, x3: 260, y3: 335, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 475, y1: 420, x2: 400, y2: 220, x3: 350, y3: 250, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 150, y1: 38, x2: 400, y2: 225, x3: 350,  y3: 260, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 75, y1: 575, x2: 450, y2: 220, x3: 420,  y3: 180, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 149, y1: 70, x2: 450, y2: 230, x3: 450,  y3: 275, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 455, y1: 490, x2: 340, y2: 370, x3: 325, y3: 330, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 230, y1: 584, x2: 365, y2: 280, x3: 365, y3: 320, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 320, y1: 560, x2: 332, y2: 370, x3: 300, y3: 390, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 390, y1: 470, x2: 350, y2: 80, x3: 345,  y3: 150, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 480, y1: 470, x2: 340, y2: 170, x3: 333, y3: 80,  vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 330, y1: 10, x2: 327, y2: 175, x3: 170,  y3: 420, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 480, y1: 550, x2: 160, y2: 415, x3: 110, y3: 440, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 20, y1: 350, x2: 120, y2: 459, x3: 240,  y3: 380, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 10, y1: 548, x2: 240, y2: 398, x3: 220,  y3: 460, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 100, y1: 70, x2: 240, y2: 446, x3: 360,  y3: 375, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 60, y1: 50, x2: 255, y2: 476, x3: 220,   y3: 485, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//     { x1: 50, y1: 90, x2: 175, y2: 536, x3: 190,   y3: 495, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
//   ];
//   // Each red triangle from design
//   angerTri = [
//     //like recipe card for triangles.
//     { x1: 217, y1: 490, x2: 175, y2: 536, x3: 190, y3: 495, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 231, y1: 450, x2: 255, y2: 476, x3: 220, y3: 485, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 250, y1: 420, x2: 240, y2: 446, x3: 360, y3: 375, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 160, y1: 480, x2: 240, y2: 398, x3: 220, y3: 460, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 20 , y1: 590, x2: 120, y2: 459, x3: 240, y3: 380, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 180, y1: 350, x2: 160, y2: 415, x3: 110, y3: 440, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 320, y1: 110, x2: 327, y2: 175, x3: 170, y3: 420, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 400, y1: 40 , x2: 340, y2: 170, x3: 333, y3: 80 , vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 380, y1: 70 , x2: 350, y2: 80 , x3: 345, y3: 150, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 320, y1: 340, x2: 332, y2: 370, x3: 300, y3: 390, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 352, y1: 294, x2: 365, y2: 280, x3: 365, y3: 320, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 335, y1: 290, x2: 340, y2: 370, x3: 325, y3: 330, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 419, y1: 190, x2: 450, y2: 230, x3: 450, y3: 275, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 455, y1: 5  , x2: 450, y2: 220, x3: 420, y3: 180, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 350, y1: 290, x2: 400, y2: 225, x3: 350, y3: 260, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 440, y1: 10 , x2: 400, y2: 220, x3: 350, y3: 250, vx: random(-1, 1), vy: random(-1, 1) },
//     { x1: 400, y1: 100, x2: 320, y2: 315, x3: 260, y3: 335, vx: random(-1, 1), vy: random(-1, 1) },
//   ];
// }
// function draw() {
//  let bg = map(fade, 255, 0, 30, 220);
//   background(bg, bg, bg - 20);
//   if (state === "anger") {
//     drawAnger();
//     drawShadow();
//   } else if (state === "wonder") {
//     drawWonder();
//   }
// }
// function drawShadow() {
//   //draw all the shadow triangles
//   for (let triangle of angerShadow) {
    
//     stroke(0, 0, 0, fade / 4);
//     fill(0, 0, 0, fade / 4);//fade is divided by 4 so shadows are lighter.
//     beginShape();
//     vertex(triangle.x1, triangle.y1);
//     vertex(triangle.x2, triangle.y2);
//     vertex(triangle.x3, triangle.y3);
//     endShape(CLOSE);
    
//     // Move outward from center   
//     triangle.x1 += triangle.vx;
//     triangle.y1 += triangle.vy;
//     triangle.x2 += triangle.vx;
//     triangle.y2 += triangle.vy;
//     triangle.x3 += triangle.vx;
//     triangle.y3 += triangle.vy;
//   }
//   fade -= 2;
//   if (fade <= 0) {
//     fade = 0;
//   }
// }
// function drawAnger() {
//   //draw all the red triangles
//   for (let triangle of angerTri) {
//     frameRate(30);
//     stroke(239, 7, 7, fade);
//     fill(239, 7, 7, fade);// calling fade here makes them fade out later.
//     beginShape();
//     vertex(triangle.x1, triangle.y1);
//     vertex(triangle.x2, triangle.y2);
//     vertex(triangle.x3, triangle.y3);
//     endShape(CLOSE);

//     // Move outward from center
//     triangle.x1 += triangle.vx;
//     triangle.y1 += triangle.vy;
//     triangle.x2 += triangle.vx;
//     triangle.y2 += triangle.vy;
//     triangle.x3 += triangle.vx;
//     triangle.y3 += triangle.vy;
//   }
//   }
//    if (fadeDelay > 0) {
//     fadeDelay--; // countdown 2 seconds
// } else {
//     fade -= 2;
//     if (fade <= 0) {
//         fade = 0;
//         state = "wonder";
//     }
// }
// function drawWonder() {
//   push();
//   translate(width/2, height/2);

//   // expand main triangle
//   fill(255, 200, 0, 200); // bright yellow
//   let s = mainTriangleSize;
//   triangle(-s, s, 0, -s, s, s);

//   // concentric triangles
//   stroke(255, 100, 0, 150);
//   strokeWeight(2);
//   for (let i = 1; i <= 3; i++) {
//     let size = s + i * 20;
//     triangle(-size, size, 0, -size, size, size);
//   }

//   pop();

//   mainTriangleSize += expandSpeed; // expand
// }
let angerTri = [];
let angerShadow = [];
let fade = 255;
let fadeDelay = 120; // ~2 seconds
let state = "anger";
let mainTriangleSize = 50;
let maxTriangleSize = 250;
let expandSpeed = 1.5;
let mainColor = [0, 0, 0]; // start black
let emittedTriangles = [];
let colorChangeStarted = false;

function setup() {
  createCanvas(500, 600);
  frameRate(30);

  // Shadows
  angerShadow = [
   { x1: 440, y1: 560, x2: 320, y2: 315, x3: 260, y3: 335, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 475, y1: 420, x2: 400, y2: 220, x3: 350, y3: 250, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 150, y1: 38, x2: 400, y2: 225, x3: 350,  y3: 260, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 75, y1: 575, x2: 450, y2: 220, x3: 420,  y3: 180, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 149, y1: 70, x2: 450, y2: 230, x3: 450,  y3: 275, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 455, y1: 490, x2: 340, y2: 370, x3: 325, y3: 330, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 230, y1: 584, x2: 365, y2: 280, x3: 365, y3: 320, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 320, y1: 560, x2: 332, y2: 370, x3: 300, y3: 390, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 390, y1: 470, x2: 350, y2: 80, x3: 345,  y3: 150, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 480, y1: 470, x2: 340, y2: 170, x3: 333, y3: 80,  vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 330, y1: 10, x2: 327, y2: 175, x3: 170,  y3: 420, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 480, y1: 550, x2: 160, y2: 415, x3: 110, y3: 440, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 20, y1: 350, x2: 120, y2: 459, x3: 240,  y3: 380, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 10, y1: 548, x2: 240, y2: 398, x3: 220,  y3: 460, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 100, y1: 70, x2: 240, y2: 446, x3: 360,  y3: 375, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 60, y1: 50, x2: 255, y2: 476, x3: 220,   y3: 485, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
    { x1: 50, y1: 90, x2: 175, y2: 536, x3: 190,   y3: 495, vx: random(-1.5, 1.5), vy: random(-1.5, 1.5) },
  ];

  // Red anger triangles
  angerTri = [
{ x1: 217, y1: 490, x2: 175, y2: 536, x3: 190, y3: 495, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 231, y1: 450, x2: 255, y2: 476, x3: 220, y3: 485, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 250, y1: 420, x2: 240, y2: 446, x3: 360, y3: 375, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 160, y1: 480, x2: 240, y2: 398, x3: 220, y3: 460, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 20 , y1: 590, x2: 120, y2: 459, x3: 240, y3: 380, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 180, y1: 350, x2: 160, y2: 415, x3: 110, y3: 440, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 320, y1: 110, x2: 327, y2: 175, x3: 170, y3: 420, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 400, y1: 40 , x2: 340, y2: 170, x3: 333, y3: 80 , vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 380, y1: 70 , x2: 350, y2: 80 , x3: 345, y3: 150, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 320, y1: 340, x2: 332, y2: 370, x3: 300, y3: 390, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 352, y1: 294, x2: 365, y2: 280, x3: 365, y3: 320, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 335, y1: 290, x2: 340, y2: 370, x3: 325, y3: 330, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 419, y1: 190, x2: 450, y2: 230, x3: 450, y3: 275, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 455, y1: 5  , x2: 450, y2: 220, x3: 420, y3: 180, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 350, y1: 290, x2: 400, y2: 225, x3: 350, y3: 260, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 440, y1: 10 , x2: 400, y2: 220, x3: 350, y3: 250, vx: random(-1, 1), vy: random(-1, 1) },
    { x1: 400, y1: 100, x2: 320, y2: 315, x3: 260, y3: 335, vx: random(-1, 1), vy: random(-1, 1) },
  ];
}

function draw() {
  let bg = map(fade, 255, 0, 30, 220);
  background(bg, bg, bg - 20);

  // Draw main triangle first behind anger triangles
  drawMainTriangle();

  if (state === "anger") {
    drawAnger();
    drawShadow();
  } else if (state === "wonder") {
    drawWonder();
  }
}

function drawShadow() {
  for (let triangle of angerShadow) {
    stroke(0, 0, 0, fade / 4);
    fill(0, 0, 0, fade / 4);
    beginShape();
    vertex(triangle.x1, triangle.y1);
    vertex(triangle.x2, triangle.y2);
    vertex(triangle.x3, triangle.y3);
    endShape(CLOSE);

    triangle.x1 += triangle.vx;
    triangle.y1 += triangle.vy;
    triangle.x2 += triangle.vx;
    triangle.y2 += triangle.vy;
    triangle.x3 += triangle.vx;
    triangle.y3 += triangle.vy;
  }
}

function drawAnger() {
  for (let triangle of angerTri) {
    stroke(239, 7, 7, fade);
    fill(239, 7, 7, fade);
    beginShape();
    vertex(triangle.x1, triangle.y1);
    vertex(triangle.x2, triangle.y2);
    vertex(triangle.x3, triangle.y3);
    endShape(CLOSE);

    triangle.x1 += triangle.vx;
    triangle.y1 += triangle.vy;
    triangle.x2 += triangle.vx;
    triangle.y2 += triangle.vy;
    triangle.x3 += triangle.vx;
    triangle.y3 += triangle.vy;
  }

  if (fadeDelay > 0) {
    fadeDelay--;
  } else {
    fade -= 2;
    if (fade <= 0) {
      fade = 0;
      state = "wonder";
      colorChangeStarted = true; // start bright color transition
    }
  }
}

function drawMainTriangle() {
  push();
  translate(width / 2, height / 2);

  // gradually change color to bright random
  if (colorChangeStarted && mainTriangleSize < maxTriangleSize) {
    mainColor = [random(200, 255), random(50, 255), random(50, 255)];
  }

  fill(mainColor[0], mainColor[1], mainColor[2], 200);
  stroke(0);
  strokeWeight(2);

  triangle(-mainTriangleSize, mainTriangleSize, 0, -mainTriangleSize, mainTriangleSize, mainTriangleSize);

  // emit small triangles after reaching max size
  if (mainTriangleSize >= maxTriangleSize) {
    for (let i = 0; i < 3; i++) {
      let t = {
        x: 0,
        y: 0,
        size: random(100, 125),
        vx: random(-2, 2),
        vy: random(-2, 2),
        alpha: 100
      };
      emittedTriangles.push(t);
    }
  }

  // draw emitted triangles
  for (let t of emittedTriangles) {
    fill(255, 200, 0, t.alpha/2);
    noStroke();
    triangle(t.x, t.y, t.x + t.size, t.y, t.x + t.size / 2, t.y - t.size);
    t.x += t.vx;
    t.y += t.vy;
    t.alpha -= -2;
  }

  emittedTriangles = emittedTriangles.filter(tri => tri.alpha > 0);

  pop();

  // expand main triangle if not maxed
  if (mainTriangleSize < maxTriangleSize) mainTriangleSize += expandSpeed;
}

function drawWonder() {
  // optional: you can add extra effects here while main triangle is fully expanded
}