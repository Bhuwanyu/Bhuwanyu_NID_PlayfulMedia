class Flower {
    constructor(x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size = 50;
        this.selected = false;
    }
    drawFlower() {
        if (this.selected==true) {
            fill(255, 0, 0);
        } else {
            fill(0,0,255);
        }

        // ellipse(this.x, this.y, 20, 50);
        // ellipse(this.x, this.y, 50, 20);
        ellipse(this.x, this.y, 20, 40);

    }
    moveFlower() {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
        if (this.y > height || this.y < 0) {
            this.ySpeed = -this.ySpeed;
        }

        if (this.x > width || this.x < 0) {
            this.xSpeed = -this.xSpeed;
        }
    }
    changeColor(mX, mY) {
        // if the mouseX and mouseY is close
        let distance = dist(mX, mY, this.x, this.y);
        if (distance < this.size / 2) {
            this.selected = true;
        } else {
            // this.selected = false;

        }
    }
}