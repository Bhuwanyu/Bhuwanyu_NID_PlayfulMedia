let player, enemy, bullet;
let bgImage;
let playerImage, enemyImage;
let playerSprites = [], enemySprites = [];
let playerCols = 16, playerRows = 12;
let enemyCols = 16, enemyRows = 12;
  let a=0;
  let snowX = [];
let snowY = [];
let snowSpeed = [];
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
  playerImage = loadImage("Images/Player1.png");
  enemyImage = loadImage("Images/Enemy.png");
}

function setup() {
  createCanvas(1920, 1080);
  textFont("Georgia");

  playerSprites = splitSpriteSheet(playerImage, playerCols, playerRows);
  enemySprites = splitSpriteSheet(enemyImage, enemyCols, enemyRows);

  player = new Player(200, height - 400, 250, 250, playerSprites);
  enemy = new Enemy(width - 400, height - 400, 250, 250, enemySprites);
    for (let i = 0; i < 200; i++) {
    snowX[i] = random(width);
    snowY[i] = random(-height, height);
    snowSpeed[i] = random(1, 3);
  }
}

function draw() {
  background(0);

  if (gameState === 0) {
    drawTitleScreen();
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
  }
}

// ------------------------- FRAME FUNCTIONS -------------------------

function drawTitleScreen() {
  background(10);
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
    [50, 50, 80],
    [70, 50, 100],
    [100, 40, 80],
    [120, 60, 60],
    [150, 70, 50],
    [180, 80, 40]
  ];

  let index = constrain(gameState - 1, 0, colors.length - 1);
  background(colors[index][0], colors[index][1], colors[index][2]);

  let isMoving = false;
  let isSprinting = false;

  if (keyIsDown(RIGHT_ARROW)) {
    isMoving = true;
    if (keyIsDown(SHIFT)) isSprinting = true;
    player.moveRight(isSprinting);
  }

  player.show(isMoving, isSprinting);

  // when player reaches right edge -> next frame
  if (player.x + player.w >= width - 50) {
    player.x = 200;
    gameState++;
  }
}

function drawFinalScene() {

  background(225-a, 0, 0);
  fill(255,255-a/5);
  ellipse(1600-a/3,300+a/3,200,200);
  a=a+1;
  fill(255);
  noStroke();
  for (let i = 0; i < snowX.length; i++) {
    ellipse(snowX[i], snowY[i], 5, 5);
    snowY[i] += snowSpeed[i];
    if (snowY[i] > height) {
      snowY[i] = 0;
      snowX[i] = random(width);
    }
  }
  let isMoving = false;
  let isSprinting = false;

  if (!player.isDead && keyIsDown(RIGHT_ARROW)) {
    isMoving = true;
    if (keyIsDown(SHIFT)) isSprinting = true;
    player.moveRight(isSprinting);
  }

  enemy.show();
  player.show(isMoving, isSprinting);

  // spawn bullet only once
  if (!bullet && !player.isDead) {
    bullet = enemy.shoot();
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
    fill(255);
    textAlign(CENTER);
    textSize(50);
    text("Who uses a sword in the modern world, you fool!", width / 2, height / 2 + 300);
  }
}

// ------------------------- Dialogue UI -------------------------
function drawDialogueBox(dialogue) {
  if (!dialogue) return;
  fill(0, 150);
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
