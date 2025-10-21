class Player {
  constructor(x, y, w, h, sprites) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 3;
    this.sprintSpeed = 6;
    this.isDead = false;

    this.sprites = sprites;
    this.row = 0;
    this.currentFrame = 0;
    this.frameDelay = 5;
    this.frameCount = 0;
    this.totalFrames = sprites[0].length;

    this.deathAnimationPlayed = false;
    this.facingLeft = false;
    this.isAttacking = false;

    this.attackMaxFrame = 5; // 👈 max frame for attack animation (column 5)
  }

  show(isMoving = false, isSprinting = false, movingLeft = false) {
    if (movingLeft) this.facingLeft = true;
    else if (isMoving) this.facingLeft = false;

    if (this.isDead) {
      this.row = 9;
      if (!this.deathAnimationPlayed) this.animateDead();
      else this.currentFrame = this.totalFrames - 1;
    } 
    else if (this.isAttacking) {
      this.row = 3; // 👈 your attack row
      this.animateAttack();
    }
    else if (isSprinting) {
      this.row = 2;
      this.animate();
    } 
    else if (isMoving) {
      this.row = 1;
      this.animate();
    } 
    else {
      this.row = 0;
      this.animate();
    }

    push();
    translate(this.x + this.w / 2, this.y + this.h / 2);
    scale(this.facingLeft ? -1 : 1, 1);
    imageMode(CENTER);
    image(this.sprites[this.row][this.currentFrame], 0, 0, this.w, this.h);
    pop();
  }

  // 🟦 New function: animateAttack
  animateAttack() {
    this.frameCount++;
    if (this.frameCount % this.frameDelay === 0) {
      if (this.currentFrame < this.attackMaxFrame) {
        this.currentFrame++;
      } else {
        // reset attack animation
        this.currentFrame = 0;
        this.isAttacking = false;
      }
    }
  }

  moveRight(isSprinting = false) {
    if (!this.isDead) {
      this.x += isSprinting ? this.sprintSpeed : this.speed;
    }
  }

  moveLeft(isSprinting = false) {
    if (!this.isDead) {
      this.x -= isSprinting ? this.sprintSpeed : this.speed;
    }
  }

  attack() {
    if (!this.isDead && !this.isAttacking) {
      this.isAttacking = true;
      this.currentFrame = 0;
    }
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
      if (this.currentFrame < this.totalFrames - 1) this.currentFrame++;
      else this.deathAnimationPlayed = true;
    }
  }

  die() {
    this.isDead = true;
    this.currentFrame = 0;
    this.deathAnimationPlayed = false;
  }
}
