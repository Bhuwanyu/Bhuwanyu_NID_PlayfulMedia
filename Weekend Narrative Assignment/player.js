class Player {
  constructor(x, y, w, h, sprites) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 3;       // walk speed
    this.sprintSpeed = 6; // sprint speed
    this.isDead = false;

    this.sprites = sprites;
    this.row = 0;        // current animation row
    this.currentFrame = 0;
    this.frameDelay = 5;
    this.frameCount = 0;
    this.totalFrames = sprites[0].length; // number of columns

    this.deathAnimationPlayed = false; // new flag
  }

  show(isMoving = false, isSprinting = false) {
    if (this.isDead) {
      this.row = 9; // dead animation row
      if (!this.deathAnimationPlayed) {
        this.animateDead(); // animate once
      } else {
        // stay on last frame of death
        this.currentFrame = this.totalFrames - 1;
      }
    } else if (isSprinting) {
      this.row = 2; // sprint row
      this.animate();
    } else if (isMoving) {
      this.row = 1; // walk row
      this.animate();
    } else {
      this.row = 0; // idle row
      this.animate();
    }

    image(this.sprites[this.row][this.currentFrame], this.x, this.y, this.w, this.h);
  }

  animate() {
    this.frameCount++;
    if (this.frameCount % this.frameDelay === 0) {
      this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
    }
  }

  animateDead() {
    this.frameCount++;
    if (this.frameCount % this.frameDelay === 0) {
      if (this.currentFrame < this.totalFrames - 1) {
        this.currentFrame++;
      } else {
        this.deathAnimationPlayed = true; // stop animation
      }
    }
  }

  moveRight(isSprinting = false) {
    if (!this.isDead) {
      this.x += isSprinting ? this.sprintSpeed : this.speed;
    }
  }

  die() {
    this.isDead = true;
    this.currentFrame = 0; // start dead animation from beginning
    this.deathAnimationPlayed = false;
  }
}
