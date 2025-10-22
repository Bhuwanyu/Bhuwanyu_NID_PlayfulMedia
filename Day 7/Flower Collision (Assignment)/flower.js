class Flower {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.baseSize = random(20, 60);
    this.size = this.baseSize;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.selected = false;
    this.hovered = false;
    this.color = color(255);
  }

  drawFlower() {
    push();
    translate(this.x, this.y);
    scale(this.size / 50);
    fill(this.color);
    noStroke();

    // Draw 6 petals evenly spaced around the center
    for (let i = 0; i < 6; i++) {
      push();
      rotate(i * 60); // 360 / 6 = 60 degrees per petal
      ellipse(0, 25, 20, 50);
      pop();
    }

    // Center of the flower
    fill(255, 200, 0);
    ellipse(0, 0, 25);
    pop();
  }

  collision(otherFlower) {
    let distance = dist(otherFlower.x, otherFlower.y, this.x, this.y);
    if (distance <= (otherFlower.size + this.size) / 2) {
      this.xSpeed *= -1;
      this.ySpeed *= -1;
    }
  }

  moveFlower() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.y > height || this.y < 0) this.ySpeed *= -1;
    if (this.x > width || this.x < 0) this.xSpeed *= -1;
  }

  grow() {
    if (this.hovered && this.size < 200) {
      this.size += 2;
    } else if (!this.hovered && this.size > this.baseSize) {
      this.size -= 1;
    }
  }

  changeColor(mX, mY) {
    let distance = dist(mX, mY, this.x, this.y);
    this.hovered = distance < this.baseSize / 2;

    if (this.hovered && !this.selected) {
      this.selected = true;
      this.color = color(random(255), random(255), random(255));
    }
  }
}
