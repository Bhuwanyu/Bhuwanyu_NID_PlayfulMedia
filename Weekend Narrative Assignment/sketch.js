let gameState = 1;                                                                             //--Changing Of Game Frames--//
let player,object;                                                                   //--Current Status Of Player & Object--//
let bullets = [];
let npcShooted = false;                                                                      //--Shoots Only In Last Frame--// 
//---------------------------------------------Sprite sheet variables-------------------------------------------------------//
let spriteImage;                                                                          //--Whole Sprite Sheet Is Stored--//
let sprites = [];                                     //--Individual Frames Are Stored After Getting Cute In Setup Funtion--//
let spriteX = 16, spriteY = 12;
let currentCol = 0;
let animationSpeed = 5;
let frameCountAnim = 0;
let row = 0;                                                                                     //--Selects Type Of Action--//
//------------------------------------------Load Before Program Starts-------------------------------------------------------//
function preload() {
  spriteImage = loadImage("Images/01.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //----------------------------------------Split sprite sheet into 2D array-------------------------------------------------//
  let w = spriteImage.width / spriteX;
  let h = spriteImage.height / spriteY;
  for (let i = 0; i < spriteY; i++) {
    sprites[i] = [];
    for (let j = 0; j < spriteX; j++) {
      sprites[i][j] = spriteImage.get(j * w, i * h, w, h);
    }
  }

  player = new Player();
}

function draw() {
  //--------------------------------------------------- Title screen---------------------------------------------------------//
  if (gameState === 1) {
    background(220);
    textAlign(CENTER);
    textSize(48);
    fill(0);
    text("The Last Samurai", width / 2, height / 2 - 20);
    textSize(24);
    text("Press Enter To Play", width / 2, height / 2 + 40);
    return;
  }

  //------------------------------------------------------Backgrounds-------------------------------------------------------//
  if (gameState === 2){
     background(200,0,0);
    }
  if (gameState === 3) background(180, 220, 255);
  if (gameState === 4) background(200, 180, 220);
  if (gameState === 5) background(255, 220, 200);

  // Show player and object
  player.show();
  player.move();
  player.checkCollision(object);
  object.show();

  // Frame 5 NPC bullet logic
  if (gameState === 5) {
    if (!npcShooted && player.x + player.width >= width / 2) {
      bullets.push(new Bullet(object.x, object.y + object.size / 2, 15));
      npcShooted = true;
    }

    for (let b of bullets) {
      b.update();
      b.show();

      if (b.hitsPlayer(player)) {
        row = spriteY - 3; // death animation
        player.xdir = 0;
        player.ydir = 0;
        noLoop();
        setTimeout(() => {
          gameState = 1;
          bullets = [];
          npcShooted = false;
          object = null;
          loop();
        }, 2000);
      }
    }
  }

  // Frame progression after object destroyed
  if (object && !object.active && gameState < 5) {
    if (player.x + player.width >= width) {
      gameState++;
      setupFrame();
    }
  } else if (object && !object.active && gameState === 5) {
    if (player.x + player.width >= width) {
      textSize(24);
      fill(0);
      text("Who uses a sword in modern world? Fool!!", object.x, object.y - 40);
      noLoop();

    }
  }
}
//---------------------------------------------------Players Position In Each State-------------------------------------------//
function setupFrame() {
  player.x = 50;
  player.y = height - 150;
  object = new GameObject(width - 150, height - 150, gameState); // hitsRequired = frame number -1
  bullets = [];
  npcShooted = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//----------------------------------------------------------Input Handling-----------------------------------------------------//
function keyPressed() {
  if (gameState === 1 && keyCode === ENTER) {
    gameState = 2;
    setupFrame();
  }

  // Attack
  if (key === 'G' || key === 'g') {
    row = 3;
  }

  // Jump
  if (keyCode === 32) { 
    row = 7;
  }

  // Move left
  if (keyIsDown(37) || keyIsDown(65)) {
    if (keyIsDown(16)) row = 11;
    else row = 10;
    player.xdir = (row === 11 ? -15 : -7);
    player.ydir = 0;
  }

  // Move right
  if (keyIsDown(39) || keyIsDown(68)) {
    if (keyIsDown(16)) row = 2;
    else row = 1;
    player.xdir = (row === 2 ? 15 : 7);
    player.ydir = 0;
  }
}

function keyReleased() {
  player.xdir = 0;
  player.ydir = 0;
  row = 0;
  currentCol = 0;
}

function mousePressed() {
  if (mouseButton === LEFT) {
    row = 3;
  }
}

function mouseReleased() {
  row = 0;
  player.xdir = 0;
  player.ydir = 0;
  currentCol = 0;
}
