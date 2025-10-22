// Game logic
let gameState = 1;
let player;
let object;
let hitsRequired;
let playerSpeed = 5;

// Sprite animation
let spriteImage, sprites = [];
let spriteX = 16, spriteY = 12;
let currentRow = 0;
let currentCol = 0;
let animationSpeed = 5;
let frameCountAnim = 0;

function preload() {
  spriteImage = loadImage("Images/01.png"); // replace with your sprite sheet path
}


function setup() {
  createCanvas(innerWidth, innerHeight);

  // Break sprite sheet into 2D array
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
  background(220);

  if (gameState === 1) {
    // Title Screen
    textAlign(CENTER);
    textSize(32);
    fill(0);
    text("The Last Samurai", width / 2, height / 2 - 20);
    textSize(16);
    text("Press Enter To Play", width / 2, height / 2 + 20);
  } 
  else if (gameState >= 2 && gameState <= 5) {
    // Frame-specific backgrounds
    if (gameState === 3) background(180, 220, 255);
    if (gameState === 4) background(200, 180, 220);
    if (gameState === 5) background(255, 220, 200);

    // Show and move player
    player.show();
    player.move();

    // Show object
    object.show();

    // Check collision
    if (player.x + player.width > object.x && player.x < object.x + object.size &&
        player.y + player.height > object.y && player.y < object.y + object.size) {
      object.hit();
    }

    // Frame 5: NPC shoots
    if (gameState === 5) {
      if (player.x >= width / 2) {
        textSize(20);
        fill(0);
        text("Who uses a sword in modern world? Fool!!", object.x, object.y - 20);
        noLoop(); // stop game
        setTimeout(() => { // go back to title after 2 seconds
          gameState = 1;
          loop();
        }, 2000);
      }
    }

    // Move to next frame if object destroyed
    if (object.destroyed && gameState < 5) {
      gameState++;
      setupFrame();
    }
  }
}

function keyPressed() {
  if (gameState === 1 && keyCode === ENTER) {
    gameState = 2;
    setupFrame();
  }
}

function setupFrame() {
  player.x = 50;
  player.y = height - 100;
  object = new GameObject(width - 150, height - 100);
  hitsRequired = gameState - 1; // Frame 2->1 hit, Frame 3->2 hits, etc.
  object.setHitsRequired(hitsRequired);
}