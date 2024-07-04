class ThrowableObject extends MovableObject {
    width = 30;
    height = 30;

    constructor(x,y) {
        super().loadImage('img/throw-objects/bubble.png');
        this.x = x + 150;
        this.y = y + 140;
        this.throw();
    }

    throw() {
    setInterval(() => {
         this.x += 10; 
    }, 40);
    }
}