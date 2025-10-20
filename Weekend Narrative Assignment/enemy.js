class Enemy {
  constructor(x, y, w, h, sprites) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.sprites = sprites;
    this.row = 4;         // idle/normal animation row
    this.currentFrame = 0;
    this.frameDelay = 5;
    this.frameCount = 0;
    this.totalFrames = sprites[0].length;

    this.isShooting = false; // new flag
  }

  show() {
    if (this.isShooting) {
      this.row = 3; // shooting animation row (adjust if needed)
      this.animate();
      // reset shooting after finishing row
      if (this.currentFrame === this.totalFrames - 1) {
        this.isShooting = false;
        this.row = 3; // back to idle
        this.currentFrame = 0;
      }
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

  shoot() {
    this.isShooting = true;
    this.currentFrame = 0; // start shooting animation
    return new Bullet(this.x, this.y + this.h / 2, -5);
  }
}
