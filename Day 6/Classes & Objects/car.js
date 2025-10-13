// this is only a blueprint

class Car{
    constructor(x,y,size,speed){
        this.x = x;
        this.y = y;
        this.size =size; 
        this.speed = speed;  
    }

    show(){
        fill(redColour,0,0);
        rect(this.x, this.y, this.size, 20);
        ellipse(this.x+5, this.y+20, 15, 15);
        ellipse(this.x+this.size-5, this.y+20, 15, 15);
    }

    move(){ 
        this.x = this.x + this.speed;
        if(this.x > width){
            this.x = 0;
        }

}
}