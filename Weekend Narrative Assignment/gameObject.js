class GameObject {
  constructor(x, y, frameNumber) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.hitsRequired = frameNumber - 1; // frame 2: 1 hit, frame 3:2 hits...
    this.hitCount = 0;
    this.active = true;
  }

  show() {
    if (this.active) {
      fill("red");
      rect(this.x, this.y, this.size, this.size);
    }
  }
}









class Bullet {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.active = true;
    this.size = 20;
  }

  update() {
    this.x -= this.speed;
    if (this.x + this.size < 0) this.active = false;
  }

  show() {
    if (this.active) {
      fill("black");
      ellipse(this.x, this.y + this.size / 2, this.size);
    }
  }

  hitsPlayer(player) {
   sssthis.active &&
      this.x < player.x + player.width &&
      this.x + this.size > player.x &&
      this.y + this.size > player.y - (player.height - 60) &&
      this.y < player.y;
  }
}
