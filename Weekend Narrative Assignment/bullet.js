class Bullet {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.r = 10;
  }

  update() {
    this.x += this.speed;
  }

  show() {
    fill("orange");
    ellipse(this.x, this.y, this.r);
  }

  hits(player) {
    return (
      this.x > player.x &&
      this.x < player.x + player.w &&
      this.y > player.y &&
      this.y < player.y + player.h
    );
  }
}
