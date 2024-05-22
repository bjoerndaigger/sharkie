class Endboss extends MovableObject {
    y = 100;
    
    IMAGES_SWIMMING = [
        './img/enemies/final-enemy/floating/1.png',
        './img/enemies/final-enemy/floating/2.png',
        './img/enemies/final-enemy/floating/3.png', 
        './img/enemies/final-enemy/floating/4.png', 
        './img/enemies/final-enemy/floating/5.png', 
        './img/enemies/final-enemy/floating/6.png', 
        './img/enemies/final-enemy/floating/7.png', 
        './img/enemies/final-enemy/floating/8.png', 
        './img/enemies/final-enemy/floating/9.png', 
        './img/enemies/final-enemy/floating/10.png', 
        './img/enemies/final-enemy/floating/11.png', 
        './img/enemies/final-enemy/floating/12.png', 
        './img/enemies/final-enemy/floating/13.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_SWIMMING[0]); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 700;
        this.animate();
    }
    
    animate() {
        this.moveLeft();

        setInterval(() => {
           this.playAnimation(this.IMAGES_SWIMMING);
        }, 200)
    }
}