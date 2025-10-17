class Player {
  constructor() {
    this.x = 50;
    this.y = height - 100;
    this.width = spriteImage.width / spriteX;
    this.height = spriteImage.height / spriteY;
  }

  show() {
    image(sprites[currentRow][currentCol], this.x, this.y, this.width, this.height);

    frameCountAnim++;
    if (frameCountAnim % animationSpeed === 0) {
      currentCol = (currentCol + 1) % spriteX;
    }
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= playerSpeed;
      currentRow = 1; // walking left
    }
    else if (keyIsDown(RIGHT_ARROW) && this.x + this.width < width) {
      this.x += playerSpeed;
      currentRow = 2; // walking right
    }
    else {
      currentRow = 0; // idle
      currentCol = 0;
    }
  }
}