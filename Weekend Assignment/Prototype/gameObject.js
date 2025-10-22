class GameObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.hitsRequired = 1;
    this.hits = 0;
    this.destroyed = false;
  }

  setHitsRequired(n) {
    this.hitsRequired = n;
    this.hits = 0;
    this.destroyed = false;
  }

  show() {
    if (!this.destroyed) {
      fill("blue");
      rect(this.x, this.y, this.size, this.size);
    }
  }

  hit() {
    if (!this.destroyed) {
      this.hits++;
      if (this.hits >= this.hitsRequired) {
        this.destroyed = true;
      }
    }
  }
}