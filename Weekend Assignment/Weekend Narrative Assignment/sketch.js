let player, enemy, bullet;
let bg1,bg2,bg3,bg4,bg5,bg6;
let playerImage, enemyImage;
let playerSprites = [], enemySprites = [];
let playerCols = 16, playerRows = 12;
let enemyCols = 16, enemyRows = 12;
let bgMusic, gunShot, walking;
let a=0;
let gameState = 0; // 0 = title, 1–6 = running frames, 7 = final fight
let dialogues = [
  "",
  "My journey begins… the world shall kneel before my blade.",
  "Every step I take echoes through history.",
  "No weapon forged by man can stand against me.",
  "I am destiny itself. The conqueror of this age.",
  "Even the gods shall tremble before my name.",
  "This city will be the first to fall before me...",
];

function preload() {
  playerImage = loadImage("Images/Player.png");
  enemyImage = loadImage("Images/Enemy.png");
  bgMusic = loadSound("Music/BGM.mp3");
  gunShot = loadSound("Music/GunShot.mp3");
  walking = loadSound("Music/Walking.mp3");
  bgMusic = loadSound("Music/BGM.mp3");
  bgMusic = loadSound("Music/BGM.mp3");
  bg1 = loadImage("Images/BG1.png");
  bg2 = loadImage("Images/BG2.png");
  bg3 = loadImage("Images/BG3.png");
  bg4 = loadImage("Images/BG4.png");
  bg5 = loadImage("Images/BG5.png");
  bg6 = loadImage("Images/BG6.png");
  bg7 = loadImage("Images/BG7.png");
}

function setup() {
  createCanvas(1920, 1080);
  textFont("Georgia");

  playerSprites = splitSpriteSheet(playerImage, playerCols, playerRows);
  enemySprites = splitSpriteSheet(enemyImage, enemyCols, enemyRows);

  player = new Player(200, height - 400, 250, 250, playerSprites);
  enemy = new Enemy(width - 400, height - 400, 250, 250, enemySprites);
}

function draw() {
  background(0);

  if (gameState === 0) {
    drawTitleScreen();
    player.show();
  } else if (gameState >= 1 && gameState <= 6) {
    drawRunningScene();
  } else if (gameState === 7) {
    drawFinalScene();
  }

  drawDialogueBox(dialogues[gameState]);
}

function keyPressed() {
  if (gameState === 0 && keyCode === ENTER) {
    gameState = 1;
    player.x = 200;
    bgMusic.loop();
  }

  // Attack trigger
  if ((key === 'g' || key === 'G') && !player.isDead) {
    player.attack();
  }
}

function mousePressed() {
  if (!player.isDead) {
    player.attack();
  }
}

// ------------------------- FRAME FUNCTIONS -------------------------

function drawTitleScreen() {
  image(bg7,0,0);
  background(10,150);
  fill(0, 240);
  rect(0, height - 150, width, 150);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text("MY JOURNEY BEGINS.... ", width / 2, height / 2 - 100);
  textSize(40);
  text("Press ENTER to Start", width / 2, height / 2 + 100);
}

function drawRunningScene() {
  // different background tones for each stage
  let colors = [
    [bg7],
    [bg5],
    [bg3],
    [bg4],
    [bg1],
    [bg2]
  ];

  let index = constrain(gameState - 1, 0, colors.length - 1);
  background(colors[index][0], colors[index][1], colors[index][2]);

  let isMoving = false;
  let isSprinting = false;
  let movingLeft = false;

  // Right movement
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    isMoving = true;
    if (keyIsDown(SHIFT)) isSprinting = true;
    player.moveRight(isSprinting);
  }

  // Left movement
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    isMoving = true;
    movingLeft = true;
    if (keyIsDown(SHIFT)) isSprinting = true;
    player.moveLeft(isSprinting);
  }

  player.show(isMoving, isSprinting, movingLeft);

  // When player reaches right edge -> next frame
  if (player.x >= width - 50) {
    player.x = 50;
    if (gameState < 7) gameState++;
  }

  // When player reaches left edge -> go back previous frame
  if (player.x <= 0 && gameState > 1) {
    gameState--;
    player.x = width - player.w - 50;
  }
}

function drawFinalScene() {
  background(bg6);
  fill(0, 240);
  rect(0, height - 150, width, 150);

  let isMoving = false;
  let isSprinting = false;
  let movingLeft = false;

  if (!player.isDead) {
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      isMoving = true;
      if (keyIsDown(SHIFT)) isSprinting = true;
      player.moveRight(isSprinting);
    }
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      isMoving = true;
      movingLeft = true;
      if (keyIsDown(SHIFT)) isSprinting = true;
      player.moveLeft(isSprinting);
    }
  }

  enemy.show();
  player.show(isMoving, isSprinting, movingLeft);

  if (!bullet && !player.isDead) {
    bullet = enemy.shoot();
    gunShot.play();
    bgMusic.stop();
  }

  if (bullet) {
    bullet.update();
    bullet.show();
    if (bullet.hits(player)) {
      player.die();
      bullet = null;
    }
  }

  if (player.isDead) {
  let msg = "Who uses a sword in the modern world, you fool!";
  textSize(36);
  let textW = textWidth(msg) + 40;
  let textH = 60;

  // Target position above the enemy
  let boxX = enemy.x + enemy.w / 2 - textW / 2;
  let boxY = enemy.y - 20 ;

  // Keep box inside canvas bounds
  boxX = constrain(boxX, 20, width - textW - 20);
  boxY = constrain(boxY, 20, height - textH+40);
  // Draw text
  fill(255);
  textAlign(CENTER, CENTER);
  text(msg, boxX + textW / 2, boxY + textH / 2);
  background(0,0+a/2);
  a=a+1;
}

}

// ------------------------- Dialogue UI -------------------------
function drawDialogueBox(dialogue) {
  if (!dialogue) return;
  fill(0, 240);
  rect(0, height - 150, width, 150);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(dialogue, width / 2, height - 75);
}

// ------------------------- Sprite Split Helper -------------------------
function splitSpriteSheet(sheet, cols, rows) {
  let sprites = [];
  let w = sheet.width / cols;
  let h = sheet.height / rows;

  for (let i = 0; i < rows; i++) {
    sprites[i] = [];
    for (let j = 0; j < cols; j++) {
      sprites[i][j] = sheet.get(j * w, i * h, w, h);
    }
  }
  return sprites;
}
