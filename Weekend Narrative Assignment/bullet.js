class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 10;
    this.speed = -8;
  }

  update() {
    this.x += this.speed;
  }

  show() {
    push();
    fill("#FFD700");
    rect(this.x, this.y, this.w, this.h, 5);
    pop();
  }

  hits(player) {
    return (
      this.x < player.x + player.w &&
      this.x + this.w > player.x &&
      this.y < player.y + player.h &&
      this.y + this.h > player.y
    );
  }
}
