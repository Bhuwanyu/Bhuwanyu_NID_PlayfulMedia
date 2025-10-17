class Player {

  //-----------------------------------------------Initialize Core Attributes//------------------------------------------------//
  constructor() {
    //--------Player Position (Initial Cordinates) ---------//
    this.x = 50;
    this.y = height - 150;
    //--------Difines Width & Height Of Player-----------//
    this.width = spriteImage.width / spriteX;
    this.height = spriteImage.height / spriteY;
    //---------Initialize Direction------------//
    this.xdir = 0;
    this.ydir = 0;
  }
  //----------------------------------------------------Drawing Sprite On Canvas------------------------------------------------//
  show() {
    //----------Showing Specific Sprite Frame---------//
    image(sprites[row][currentCol], this.x, this.y - 50, this.width, this.height);
    frameCountAnim++;
    if (frameCountAnim % animationSpeed === 0) {
      currentCol = (currentCol + 1) % spriteX;
    }
  }

  move() {
    this.x += this.xdir;
    this.y += this.ydir;
  }

  checkCollision(obj) {
    if (!obj || !obj.active) return;

    if (this.x + this.width > obj.x) {
      this.x = obj.x - this.width - 2; // stop player at object
      obj.hitCount++;

      if (obj.hitCount >= obj.hitsRequired) {
        obj.active = false;
      }
    }
  }
}
